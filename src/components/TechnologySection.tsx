import { motion } from "framer-motion";
import { Cloud, Cpu, Database, Settings } from "lucide-react";

const TechnologySection = () => {
  const techFeatures = [
    {
      icon: Cloud,
      title: "Cloud-Native AI as a Service",
      description: "Scalable, secure infrastructure that grows with your needs.",
    },
    {
      icon: Cpu,
      title: "Model-Independent",
      description: "Choose your preferred LLMs. No vendor lock-in.",
    },
    {
      icon: Database,
      title: "Platform-Agnostic",
      description: "Integrates with CMS, DAM, databases, and document stores.",
    },
    {
      icon: Settings,
      title: "Secure & Explainable",
      description: "Transparent, auditable, and built for enterprise compliance.",
    },
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Technology That{" "}
            <span className="text-gradient-amber">Fits Your Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Designed to integrate—not replace—your existing tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
