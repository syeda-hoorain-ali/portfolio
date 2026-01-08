import { NextResponse } from "next/server"
import portfolioData from '@/data/portfolio.json';

async function fetchGitHubStats() {
  try {
    // GitHub GraphQL API endpoint
    const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';
    const githubToken = process.env.GITHUB_TOKEN;

    if (!githubToken) {
      throw new Error('GITHUB_TOKEN environment variable is not set');
    }

    // GraphQL query to fetch user stats and repositories
    const query = `
      query($username: String!) {
        user(login: $username) {
          name
          bio
          followers {
            totalCount
          }
          following {
            totalCount
          }
          repositories(privacy: PUBLIC, ownerAffiliations: OWNER) {
            totalCount
          }
          contributionsCollection {
            totalCommitContributions
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch(GITHUB_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${githubToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { username: 'syeda-hoorain-ali' } // Your GitHub username
      }),
    });

    if (!response.ok) {
      throw new Error(`GitHub GraphQL API error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
    }


    const user = data.data.user;
    const weeks = user.contributionsCollection.contributionCalendar.weeks;
    // Count days with at least 1 contribution
    const totalContributionDays = weeks.reduce((total: number, week: any) => {
      return total + week.contributionDays.filter((day: any) => day.contributionCount > 0).length;
    }, 0);

    // Calculate stats based on GraphQL data
    const stats = {
      projects: user.repositories.totalCount,
      hackathons: portfolioData.stats.hackathons, // Keep static for now as this might not be on GitHub
      daysCoded: totalContributionDays,
      contributions: user.contributionsCollection.contributionCalendar.totalContributions,
      followers: user.followers.totalCount,
      following: user.following.totalCount,
    };

    return stats;
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    // Return default stats in case of error
    return {
      projects: portfolioData.stats.projects,
      hackathons: portfolioData.stats.hackathons,
      daysCoded: portfolioData.stats.daysCoded,
      contributions: portfolioData.stats.contributions,
      followers: 0,
      following: 0,
    };
  }
}

export async function GET() {
  try {
    const githubStats = await fetchGitHubStats();

    // Merge the static portfolio data with dynamic GitHub stats
    const dynamicPortfolioData = {
      ...portfolioData,
      stats: {
        ...portfolioData.stats,
        ...githubStats
      }
    };

    return NextResponse.json(dynamicPortfolioData, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });

  } catch (error) {
    console.error('Error in /api/me route:', error);
    return NextResponse.json(portfolioData, {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }
}
