import { motion } from "framer-motion";
import {
  MessageSquare,
  FileCheck,
  Link2,
  Layers,
  FileText,
  Users,
  FileEdit,
  Building,
} from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Conversational Search",
      description: "Ask questions across internal archives and knowledge bases in natural language.",
    },
    {
      icon: FileCheck,
      title: "Context-Aware Answers",
      description: "Get precise answers grounded only in approved sources.",
    },
    {
      icon: Link2,
      title: "Full Citations",
      description: "See links and original documents behind every answer.",
    },
    {
      icon: Layers,
      title: "Surface Related Material",
      description: "Discover connections across years, categories, and platforms.",
    },
    {
      icon: FileText,
      title: "Generate Summaries",
      description: "Create timelines, briefs, and follow-up questions automatically.",
    },
    {
      icon: Users,
      title: "Identify Connections",
      description: "Find key people, entities, and prior work connected to any topic.",
    },
    {
      icon: FileEdit,
      title: "Draft Documents",
      description: "Create research requests, inquiries, or documentation templates.",
    },
    {
      icon: Building,
      title: "Build on History",
      description: "Create new work on top of verified historical and current information.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-6">
            <span className="text-sm font-medium text-secondary-foreground">The Solution</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Research, <span className="text-gradient-amber">Accelerated with AI</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            LiquidAmber is an AI-powered research assistant designed to support any knowledge-intensive 
            workflow—policy analysis, investigations, academic research, compliance, strategy, intelligence, 
            or content development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="material-card group"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-4 transition-colors group-hover:bg-primary/10">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-8 py-5 rounded-3xl bg-secondary">
            <p className="text-2xl md:text-3xl font-bold">
              What used to take <span className="text-muted-foreground line-through">hours</span>{" "}
              <span className="text-gradient-amber">now takes minutes</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
