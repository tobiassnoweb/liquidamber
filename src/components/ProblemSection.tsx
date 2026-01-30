import { motion } from "framer-motion";
import { AlertTriangle, Clock, Search, Users } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Time Lost to Searching",
      description: "Hours spent filtering through scattered documents instead of analyzing insights.",
    },
    {
      icon: Search,
      title: "Metadata Drift",
      description: "Links break, context disappears, and critical connections become invisible.",
    },
    {
      icon: Users,
      title: "Knowledge Walks Out",
      description: "Key people move on, taking institutional memory with them.",
    },
    {
      icon: AlertTriangle,
      title: "Starting from Zero",
      description: "New team members spend weeks rediscovering what already exists.",
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
            Research Is <span className="text-gradient-amber">Slowing You Down</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Important questions rarely start with clean data or perfect context. Months—or years—of documents, 
            reports, records, emails, publications, and institutional memory are scattered across systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-background border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground text-sm">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-xl font-medium text-foreground">
            The work becomes about <span className="text-primary">finding information</span> instead of{" "}
            <span className="text-primary">understanding it</span>.
          </p>
          <p className="text-2xl font-bold mt-4 text-gradient-amber">
            That's where LiquidAmber comes in.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
