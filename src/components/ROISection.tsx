import { motion } from "framer-motion";
import { Zap, Brain, Clock, TrendingUp, CheckCircle } from "lucide-react";

const ROISection = () => {
  const benefits = [
    {
      icon: Clock,
      text: "Researchers get up to speed in minutes, not days",
    },
    {
      icon: Brain,
      text: "Institutional knowledge becomes instantly accessible",
    },
    {
      icon: Zap,
      text: "Fewer hours lost to repetitive discovery and verification",
    },
    {
      icon: TrendingUp,
      text: "Higher-quality output without adding headcount",
    },
    {
      icon: CheckCircle,
      text: "Faster decisions backed by traceable evidence",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Real <span className="text-gradient-amber">Return on Investment</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-card shadow-elevation-1 hover:shadow-elevation-2 transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-lg font-medium">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
