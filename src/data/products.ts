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
      "Discover is LiquidAmber's flagship research platform for newsrooms, research institutions, and investigative teams — quickly search, analyze, and synthesize information across large data-sets and historical archives.",
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
      "Describe transforms structured data into charts, timelines, and infographic-style content to visually explain trends, comparisons, and historical context.",
    benefits: [
      "Rapid infographic generation",
      "Consistent visual storytelling",
      "Improved audience comprehension",
      "Vector-based, publication-ready outputs",
    ],
    image: describe,
  },
  {
    id: "verify",
    title: "Verify",
    tagline: "Quality Assurance Before Publication",
    description:
      "Verify evaluates accuracy, ethics, style, and SEO to ensure content is publication-ready and meets publication standards.",
    benefits: [
      "Fact-checking assistance",
      "Author bias and ethics screening",
      "AP Style Guide compliance",
      "SEO optimization recommendations",
    ],
    image: verify,
  },
  {
    id: "engage",
    title: "Engage",
    tagline: "Conversational Access to Trusted Knowledge",
    description:
      "Engage delivers a streamlined, consumer-facing conversational experience between readers and your archives, built on the same trusted platform that powers Discover.",
    benefits: [
      "Natural language interaction with archives",
      "Fast answers from published content",
      "Increased audience engagement",
      "Complies with paywall and access plans",
    ],
    image: enagage,
  },
];

export default products;
