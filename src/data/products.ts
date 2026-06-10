import discover from "@/assets/solutions/discover.png";
import enagage from "@/assets/solutions/engage.png";
import verify from "@/assets/solutions/verify.png";
import describe from "@/assets/solutions/describe.png";

export const products = [
  {
    id: "discover",
    title: "Discover",
    tagline: "Research Intelligence for Knowledge Professionals",
    description:
      "Discover is LiquidAmber's flagship research platform for newsrooms, research institutions, and investigative teams — search, analyze, and synthesize information across large archives.",
    benefits: [
      "Accelerates research workflows",
      "Surfaces relevant historical context",
      "Connects information across sources",
      "Supports evidence-based reporting",
    ],
    image: discover,
  },
  {
    id: "describe",
    title: "Describe",
    tagline: "Turn Complex Data into Visual Stories",
    description:
      "Describe transforms structured data into charts, timelines, and infographic-style content to explain trends, comparisons, and historical context.",
    benefits: [
      "Rapid infographic generation",
      "Consistent visual storytelling",
      "Improved audience comprehension",
      "Shareable, publication-ready outputs",
    ],
    image: describe,
  },
  {
    id: "verify",
    title: "Verify",
    tagline: "Quality Assurance Before Publication",
    description:
      "Verify evaluates accuracy, ethics, style, and SEO to ensure content is publication-ready and trustworthy.",
    benefits: [
      "Fact-checking assistance",
      "Bias and ethics review",
      "Style-guide compliance",
      "SEO optimization recommendations",
    ],
    image: verify,
  },
  {
    id: "engage",
    title: "Engage",
    tagline: "Conversational Access to Trusted Knowledge",
    description:
      "Engage delivers a fast, consumer-focused conversational experience built on the same trusted archives that power Discover.",
    benefits: [
      "Natural language interaction",
      "Fast answers from trusted archives",
      "Increased audience engagement",
      "Simplified access to complex information",
    ],
    image: enagage,
  },
];

export default products;
