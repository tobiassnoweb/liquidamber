import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import products from "@/data/products";
import Header from "@/components/Header";
import YouTubeEmbed from "@/components/YoutubeEmbed";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-padding container-wide">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            LiquidAmber Solutions
          </h1>
          <p className="text-lg text-muted-foreground">
            A unified platform for research, visualization, verification, and
            audience engagement.
          </p>
        </motion.header>

        <div
          className="max-w-4xl mx-auto p-6 rounded-2xl bg-secondary/40"
          style={{ marginBottom: "4rem" }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-semibold">
                How Our Products Work Together
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                LiquidAmber's products form a unified ecosystem. Research begins
                in Discover, insights are transformed into visual stories
                through Describe, quality is ensured with Verify, and audiences
                interact with archived information through Engage.
              </p>
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-center gap-3">
                <span className="px-3 py-2 rounded-md bg-card text-md">
                  Discover
                </span>
                <svg
                  width="48"
                  height="24"
                  viewBox="0 0 48 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M0 12H40"
                    stroke="#94A3B8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M36 8L40 12L36 16"
                    stroke="#94A3B8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="px-3 py-2 rounded-md bg-card text-md">
                  Describe
                </span>
                <svg
                  width="48"
                  height="24"
                  viewBox="0 0 48 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M0 12H40"
                    stroke="#94A3B8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M36 8L40 12L36 16"
                    stroke="#94A3B8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="px-3 py-2 rounded-md bg-card text-md">
                  Verify
                </span>
                <svg
                  width="48"
                  height="24"
                  viewBox="0 0 48 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    d="M0 12H40"
                    stroke="#94A3B8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M36 8L40 12L36 16"
                    stroke="#94A3B8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="px-3 py-2 rounded-md bg-card text-md">
                  Engage
                </span>
              </div>
            </div>
          </div>
        </div>
        <section className="space-y-16">
          {products.map((p) => (
            <article
              key={p.id}
              className="grid gap-6 md:grid-cols-2 items-center max-w-5xl mx-auto bg-card shadow-elevation-3 overflow-hidden hover:shadow-elevation-4 transition-shadow p-8 md:p-10 rounded-3xl"
            >
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <h2 className="text-2xl font-semibold">{p.title}</h2>
                <p className="text-sm text-muted-foreground mt-2">
                  {p.tagline}
                </p>
                <p className="mt-4 text-base text-muted-foreground">
                  {p.description}
                </p>

                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {p.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span
                        className="w-3 h-3 mt-1 rounded-full bg-primary"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* <div className="mt-6">
                  <Link
                    to="#"
                    className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-background"
                  >
                    Explore {p.title}
                  </Link>
                </div> */}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <div className="w-full rounded-2xl overflow-hidden bg-card flex items-center justify-center p-6">
                  <button
                    type="button"
                    onClick={() => openImage(p.image, p.title)}
                    className="w-full"
                    aria-label={`Open ${p.title} image`}
                  >
                    <img
                      src={p.image}
                      alt={`${p.title} visual`}
                      className="max-w-full h-auto w-full object-contain transition-transform hover:scale-105"
                    />
                  </button>
                </div>
              </motion.div>
            </article>
          ))}
        </section>
        <section className="space-y-16 mt-24">
          <div className="max-w-5xl mx-auto bg-card p-8 md:p-10 rounded-3xl shadow-elevation-3">
            <YouTubeEmbed />
          </div>
        </section>
        {/** Image lightbox modal */}
        <ImageLightbox />
      </main>
    </div>
  );
};

const ImageLightbox = () => {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const [alt, setAlt] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // expose opener via window to be called from page scope
  (window as any).openSolutionImage = (imageSrc: string, title: string) => {
    setSrc(imageSrc);
    setAlt(title);
    setOpen(true);
  };

  return open ? (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
      onClick={() => setOpen(false)}
    >
      <div
        className="max-w-[90%] max-h-[90%]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="text-background mb-4 float-right"
          onClick={() => setOpen(false)}
          aria-label="Close image"
        >
          ✕
        </button>
        {src && (
          <img
            src={src}
            alt={alt ?? "Solution image"}
            className="w-full h-auto rounded-lg shadow-lg object-contain"
          />
        )}
      </div>
    </div>
  ) : null;
};

// helper to open from inline handler
function openImage(imageSrc: string, title: string) {
  (window as any).openSolutionImage?.(imageSrc, title);
}

export default Solutions;
