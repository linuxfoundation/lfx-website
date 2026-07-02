export interface Tool {
  name: string;
  description: string;
  url: string;
  icon: string;
}

export const coreTool: Tool = {
  name: "LFX",
  description:
    "Manage all your LF and open source activites in one place. LFX offers tools for meeting management, events, mailing lists, voting, and more.",
  url: "https://app.lfx.dev/",
  icon: "user",
};

export const supportingTools: Tool[] = [
  {
    name: "Insights",
    description:
      "Analytics and health metrics for open source projects.",
    url: "https://insights.linuxfoundation.org/",
    icon: "chart-bar",
  },
  {
    name: "Crowdfunding",
    description:
      "Fund open source projects and initiatives.",
    url: "https://crowdfunding.lfx.linuxfoundation.org/",
    icon: "currency-dollar",
  },
  {
    name: "Mentorship",
    description:
      "Connect mentees with open source project mentors.",
    url: "https://mentorship.lfx.linuxfoundation.org/",
    icon: "academic-cap",
  },
  {
    name: "EasyCLA",
    description:
      "Streamlined Contributor License Agreement management.",
    url: "https://easycla.lfx.linuxfoundation.org/",
    icon: "document-check",
  },
];
