export interface PersonalData {
    name: string;
    title: string;
    tagline: string;
    email: string;
    location: string;
    bio: string;
    resumeUrl: string;
    avatar: string;
}

export interface SocialData {
    github: string;
    linkedin: string;
    twitter: string;
    instagram: string;
    facebook: string;
    medium: string;
    discord: string;
}

export interface SkillsData {
    frontend: string[];
    backend: string[];
    ai: string[];
    databases: string[];
    tools: string[];
}

export interface ProjectData {
    id: number;
    title: string;
    description: string;
    image: string;
    tech: string[];
    github: string;
    demo: string;
    featured: boolean;
}

export interface AchievementData {
    id: number;
    title: string;
    description: string;
    icon: string;
    link?: string;
    organizerPost?: string;
}

export interface StatesData {
    projects: number;
    hackathons: number;
    daysCoded: number;
    contributions: number;
    followers: number;
    following: number;
}


export interface PortfolioData {
    personal: PersonalData;
    social: SocialData;
    skills: SkillsData;
    projects: Array<ProjectData>;
    achievements: Array<AchievementData>;
    stats: StatesData;
};
