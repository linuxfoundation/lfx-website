// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT

export interface LfxTool {
  name: string;
  description: string;
  link: string;
}

export const lfxTools: LfxTool[] = [
  {
    name: "Organization Dashboard",
    description: "Measure your impact",
    link: "https://myorg.lfx.dev",
  },
  {
    name: "Individual Dashboard",
    description: "Track and share your achievements",
    link: "https://openprofile.dev",
  },
  {
    name: "Project Control Center",
    description: "Manage your project",
    link: "https://projectadmin.lfx.linuxfoundation.org",
  },
  {
    name: "Security",
    description: "Secure your project",
    // security.lfx.linuxfoundation.org now redirects here; link directly.
    link: "https://insights.linuxfoundation.org",
  },
  {
    name: "EasyCLA",
    description: "Make contributing easy",
    link: "https://easycla.lfx.linuxfoundation.org",
  },
  {
    name: "Mentorship",
    description: "Develop diverse talent",
    link: "https://mentorship.lfx.linuxfoundation.org",
  },
  {
    name: "Crowdfunding",
    description: "Support open technologies",
    link: "https://crowdfunding.lfx.linuxfoundation.org/",
  },
  {
    name: "Community Data Platform",
    description: "Collect and manage community data",
    link: "https://cm.lfx.dev",
  },
];
