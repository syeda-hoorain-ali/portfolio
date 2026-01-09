import { NextRequest, NextResponse } from "next/server"
import portfolioData from '@/data/portfolio.json';
import { isSameOrigin } from '@/utils/sameOriginCheck';

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

export async function GET(request: NextRequest) {
  // Check if the request is from the same origin
  const isFromSameOrigin = isSameOrigin(request);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';

  try {
    const githubStats = await fetchGitHubStats();

    // Update project image URLs to use the base URL
    const updatedProjects = portfolioData.projects.map(project => {
      if (isFromSameOrigin) return project
      return {
        ...project,
        image: baseUrl + project.image,
      }
    });

    const resumeUrl = portfolioData.personal.resumeUrl;
    const updatedResumeUrl = isFromSameOrigin ? resumeUrl : baseUrl + resumeUrl;

    // Merge the static portfolio data with dynamic GitHub stats and updated URLs
    const dynamicPortfolioData = {
      ...portfolioData,
      projects: updatedProjects,
      personal: {
        ...portfolioData.personal,
        resumeUrl: updatedResumeUrl,
      },
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
    // Also update URLs in error case
    const errorProjects = portfolioData.projects.map(project => {
      if (isFromSameOrigin) return project
      return {
        ...project,
        image: baseUrl + project.image,
      }
    });

    const resumeUrl = portfolioData.personal.resumeUrl;
    const errorResumeUrl = isFromSameOrigin ? resumeUrl : baseUrl + resumeUrl;

    const errorPortfolioData = {
      ...portfolioData,
      projects: errorProjects,
      personal: {
        ...portfolioData.personal,
        resumeUrl: errorResumeUrl,
      },
    };

    return NextResponse.json(errorPortfolioData, {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }
}
