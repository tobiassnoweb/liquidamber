import { motion } from "framer-motion";
import { Shield, Eye, Lock, FileCheck } from "lucide-react";

const TrustSection = () => {
  const trustFeatures = [
    {
      icon: Eye,
      title: "Source-Grounded Answers",
      description: "Full transparency with every response. See exactly where information comes from.",
    },
    {
      icon: Lock,
      title: "No Black-Box Training",
      description: "Your content is never used to train models. Your data stays yours.",
    },
    {
      icon: Shield,
      title: "Clear Data Disclosure",
      description: "Know exactly how your data is used, stored, and protected at all times.",
    },
    {
      icon: FileCheck,
      title: "Audit-Ready Outputs",
      description: "Suitable for professional and regulated environments with full traceability.",
    },
  ];

  return (
    <section className="section-padding bg-surface-container">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-secondary-foreground">Trust & Control</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Built for Trust,
              <br />
              <span className="text-gradient-amber">Control, and Accuracy</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Research demands confidence—not hallucinations. LiquidAmber is designed to work 
              only with the information you approve.
            </p>
            <p className="text-xl font-medium text-foreground">
              You stay in control of your knowledge—how it's accessed, used, and shared.
            </p>
          </motion.div>

          {/* Right cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="material-card"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
