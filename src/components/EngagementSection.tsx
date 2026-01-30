import { motion } from "framer-motion";
import { Sparkles, Key } from "lucide-react";

const EngagementSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Engage Your Users,
            <br />
            <span className="text-gradient-amber">Not Just Your Data</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg text-muted-foreground">
            <span className="line-through">Traditional search returns fragments.</span>
            <span className="text-primary font-medium">LiquidAmber delivers understanding.</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Answer Engine Card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative p-8 rounded-3xl bg-card shadow-elevation-3 overflow-hidden hover:shadow-elevation-4 transition-shadow"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Answer Engine</h3>
              <p className="text-muted-foreground leading-relaxed">
                AI-generated answers built exclusively from your approved content, with direct 
                links back to original sources. Users explore complex topics using plain language 
                and receive structured, well-sourced answers that keyword search would never surface.
              </p>
            </div>
          </motion.div>

          {/* Access-Aware Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative p-8 rounded-3xl bg-card shadow-elevation-3 overflow-hidden hover:shadow-elevation-4 transition-shadow"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/40 rounded-full blur-2xl" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                <Key className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Access-Aware by Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Respects permissioning, subscriptions, entitlements, and content policies across 
                systems. This dramatically increases engagement, confidence, and downstream 
                usage—whether the audience is internal teams or external users.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;
