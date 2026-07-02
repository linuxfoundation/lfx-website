// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT

export interface ToolDetail {
  name: string;
  tagline: string;
  description: string;
  url: string;
  features: string[];
  screenshot: string;
}

export const toolDetails: ToolDetail[] = [
  {
    name: "LFX",
    tagline: "Your open source command center",
    description:
      "The central hub for all your Linux Foundation and open source activities. Manage meetings, events, mailing lists, voting, and more — all in one place.",
    url: "https://app.lfx.dev/",
    features: [
      "Unified dashboard for all LF activities",
      "Meeting management and scheduling",
      "Mailing list administration",
      "Committee voting and governance",
      "Event management and registration",
      "Single sign-on across all LFX tools",
    ],
    screenshot: "/images/screenshots/lfx-screenshot.png",
  },
  {
    name: "Insights",
    tagline: "Open source project analytics",
    description:
      "The world's leading evaluation platform for open source projects. Understand contributor activity, organizational engagement, and project health with data from 20+ sources.",
    url: "https://insights.linuxfoundation.org/",
    features: [
      "11,000+ open source projects tracked",
      "Contributor and organization analytics",
      "Project health scoring and benchmarks",
      "Community growth and engagement trends",
      "Curated and community collections",
      "Open Source Index leaderboards",
    ],
    screenshot: "/images/screenshots/insights-screenshot.png",
  },
  {
    name: "EasyCLA",
    tagline: "Contributor License Agreement management",
    description:
      "Automate CLA signing for corporate and individual contributors. EasyCLA streamlines the entire process so contributions aren't blocked by legal paperwork.",
    url: "https://easycla.lfx.linuxfoundation.org/",
    features: [
      "Automated CLA signing workflow",
      "Corporate and individual contributor support",
      "GitHub and Gerrit integration",
      "Company-wide CLA approval management",
      "Real-time contribution status tracking",
      "Whitelisting for approved contributors",
    ],
    screenshot: "/images/screenshots/easycla-screenshot.png",
  },
  {
    name: "Mentorship",
    tagline: "Grow the next generation of contributors",
    description:
      "Structured mentorship programs that connect experienced open source maintainers with aspiring contributors. Develop diverse talent and grow your project's community.",
    url: "https://mentorship.lfx.linuxfoundation.org/",
    features: [
      "Structured mentorship programs",
      "Mentee application and matching",
      "Stipend management and payments",
      "Progress tracking and milestones",
      "Cross-project mentorship opportunities",
      "Graduate showcase and profiles",
    ],
    screenshot: "/images/screenshots/mentorship-screenshot.png",
  },
  {
    name: "Crowdfunding",
    tagline: "Fund critical open source work",
    description:
      "Enable community-driven financial support for open source projects. Fund bug bounties, travel, development initiatives, and more through transparent crowdfunding.",
    url: "https://crowdfunding.lfx.linuxfoundation.org/",
    features: [
      "Project and initiative fundraising",
      "Bug bounty and security funding",
      "Travel fund sponsorship",
      "Transparent fund allocation",
      "Donor recognition and tracking",
      "Tax-deductible donations via LF",
    ],
    screenshot: "/images/screenshots/crowdfunding-screenshot.png",
  },
];
