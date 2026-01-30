import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WhoWeAre = () => {
  const team = [
    {
      name: "Eric Johnston",
      role: "Technology & Media Leader",
      bio: "A technology and media leader with 30+ years of experience building digital platforms that support high-impact knowledge work. Eric brings deep expertise in content systems, workflows, and long-term information stewardship.",
      gradient: "from-primary to-amber-deep",
    },
    {
      name: "Tobias Törnqvist",
      role: "Product & Frontend Architecture",
      bio: "Product and frontend architecture leader specializing in AI-driven systems that transform complex data into intuitive, decision-ready experiences. Proven track record delivering production LLM platforms with real-world impact.",
      gradient: "from-amber-glow to-primary",
    },
    {
      name: "Benoit Marsot",
      role: "Full-Stack Engineer & System Architect",
      bio: "Full-stack engineer and system architect focused on backend platforms, AI orchestration, and distributed systems. Creator of the core LiquidAmber platform architecture, including multi-provider LLM routing, RAG pipelines, and policy-enforced APIs.",
      gradient: "from-primary to-amber-glow",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-hero-gradient relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
          </div>
          
          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Who <span className="text-gradient-amber">We Are</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We build AI systems for serious research—not shortcuts.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group"
                >
                  <div className="relative p-8 rounded-3xl bg-card border border-border overflow-hidden card-hover h-full">
                    {/* Gradient accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.gradient}`} />
                    
                    {/* Avatar placeholder */}
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                      <span className="text-3xl font-bold text-primary">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>

                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-sm text-primary font-medium mb-4">{member.role}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding bg-card">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our <span className="text-gradient-amber">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                We believe that the most valuable knowledge lives in the collective memory of organizations—
                scattered across years of documents, decisions, and institutional wisdom. Our mission is 
                to make that knowledge instantly accessible, verifiable, and actionable.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhoWeAre;
