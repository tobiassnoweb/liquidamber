import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/30 rounded-full blur-[80px]" />
      </div>

      <div className="container-wide relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-10"
          >
            <img
              src={logo}
              alt="LiquidAmber"
              className="h-24 md:h-28 w-auto mx-auto animate-float"
            />
          </motion.div>

          {/* Chip / Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-secondary-foreground">
              AI-Powered Research Assistant
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight"
          >
            An AI Force Multiplier
            <br />
            <span className="text-gradient-amber">for Research</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            Turn Knowledge Into Insight—Faster
          </motion.p>

          {/* Supporting text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-1 mb-10"
          >
            <p className="text-base text-muted-foreground">
              Smarter tools for deeper understanding.
            </p>
            <p className="text-base text-muted-foreground">
              Unlock institutional knowledge.
            </p>
            <p className="text-base text-muted-foreground">
              Go from question to insight in minutes, not days.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/contact" className="inline-flex items-center">
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
