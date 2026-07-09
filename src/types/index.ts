import type { LucideIcon } from "lucide-react";

export interface SkillCategory {
  label: string;
  icon: LucideIcon;
  skills: string[];
}

export interface WorkflowStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  summary: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface HireReason {
  title: string;
  description: string;
  icon: LucideIcon;
}