export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Damani Corbin",
    role: "Boeing, Open Source Program Office Strategy Lead",
    quote:
      "When talking about success in open source, as a trailblazer you get a chance to chart your success. What's important is to be able to quantify and show the business value of open source across the board.\n\nHaving LFX come with our LF membership made it easy for us to walk stakeholders through a demo of the product to show that we had insight as to what was going on across our organization, so we were able to get company buy-in, and it made it a lot easier than piecing the information together ourselves.",
  },
  {
    name: "Eddie Knight",
    role: "Sonatype, Developer Advocate Software & Cloud Engineer",
    quote:
      "The OSPO was a way for us to open doors to create the streamlining that was needed for our developers, who were previously restricted to their environments that they were working in and given tasks in. We needed to open that up but there was no Insights or LFX that was in place. Without that, we were left wondering who is already doing these things, who's already trying to do these things.",
  },
  {
    name: "Rob Moffat",
    role: "FINOS, Senior Technical Architect",
    quote:
      "As a developer if you're working on a project that you want to keep for a long time what you don't want to do is adopt a dependency or a library that within 6 months, 3 months, a year has been abandoned by the maintainers. And there's no way to determine this, it's like we're just making a bet. Whatever information we can use to make that bet more insightful is useful.",
  },
  {
    name: "Ralf Gommers",
    role: "NumPy, Maintainer",
    quote:
      "These LFX dashboards are high quality and provide more relevant data than the Insights tab on GitHub repos.\n\nThere have been lots of previous attempts at such data/dashboards per project; this seems to be the best attempt to date.",
  },
  {
    name: "Navendu Pottekkat",
    role: "API7.ai, Open Source Developer & Former LFX Mentee",
    quote:
      "Making me realize that contributing to open source projects can be a career option was the most significant impact the LFX Mentorship Program had on me.\n\nThe effect programs like LFX have on the open source ecosystem is monumental.",
  },
  {
    name: "Jad Chahed",
    role: "Vitess/Arewefastyet, LFX Mentee",
    quote:
      "Participating in the LFX Mentorship program has been one of the most rewarding experiences of my career so far. The mentorship, learning opportunities, and sense of community are truly unparalleled.",
  },
  {
    name: "Mehmet Enes Onus",
    role: "Crossplane, LFX Mentee",
    quote:
      "Being a mentee in the LFX Mentorship Program, backed by the Linux Foundation, has been one of the most enriching experiences of my career.",
  },
];
