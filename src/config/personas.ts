// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT

export interface Persona {
  title: string;
  description: string;
  benefits: string[];
  icon: string;
}

export const personas: Persona[] = [
  {
    title: "For Developers",
    description:
      "Track your contributions, grow your profile, and find opportunities across the open source ecosystem.",
    benefits: [
      "Build a unified open source profile across projects",
      "Discover mentorship opportunities to level up your skills",
      "Track your contributions and impact over time",
      "Get recognized for your open source work",
    ],
    icon: "code-bracket",
  },
  {
    title: "For Projects",
    description:
      "Monitor project health, manage compliance, and understand your community with data-driven insights.",
    benefits: [
      "Monitor project health with real-time analytics",
      "Automate CLA management for contributors",
      "Analyze contributor activity and community growth",
      "Fund critical project initiatives through crowdfunding",
    ],
    icon: "rocket-launch",
  },
  {
    title: "For Organizations",
    description:
      "Get an organization-wide view of open source engagement, compliance, and strategic contribution tracking.",
    benefits: [
      "Organization-wide view of open source engagement",
      "Track compliance across all projects and contributors",
      "Measure and report on open source contribution impact",
      "Manage contributor license agreements at scale",
    ],
    icon: "building-library",
  },
];
