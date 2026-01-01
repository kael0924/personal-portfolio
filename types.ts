import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface ExperienceRole {
  id: string;
  title: string;
  company: string;
  period: string;
  techStack: string[];
  achievements: string[];
}

export type ProjectCategory = 'no-ai' | 'ai-assisted' | 'n8n';

export interface Project {
  id: string;
  title: string;
  role: string;
  category: ProjectCategory;
  summary: string;
  techStack: string[];
  outcomes: string;
  links: {
    demo?: string;
    github?: string;
    caseStudy?: string;
  };
  imageUrl: string;
}

export interface CaseStudyStep {
  title: string;
  description: string;
  iconName: 'workflow' | 'server' | 'ai' | 'database';
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: 'github' | 'linkedin' | 'twitter' | 'mail';
}