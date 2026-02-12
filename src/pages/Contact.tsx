import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const endpoint =
    (import.meta as any).env?.VITE_CONTACT_ENDPOINT ||
    "https://formspree.io/f/xzdadqlp";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, subject, message }),
        });

        if (res.ok) {
          setStatus("sent");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        } else {
          let text = "";
          try {
            text = await res.text();
          } catch (err) {
            /* ignore */
          }
          console.error(
            "Contact endpoint returned non-OK status",
            res.status,
            text,
          );
          setStatus("error");
        }
      } catch (err) {
        console.error("Contact submit failed", err);
        setStatus("error");
      }
      return;
    }

    // Fallback to mail client
    const to = "tobias@snoweb.info";
    const body = encodeURIComponent(
      `${message}\n\n---\nFrom: ${name} <${email}>`,
    );
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailto;
    setStatus("sent");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="section-padding">
          <div className="container-narrow">
            <div className="max-w-2xl mx-auto bg-card p-8 rounded-2xl shadow-elevation-2">
              <h1 className="text-3xl font-bold mb-4">Request a Demo</h1>
              <p className="text-muted-foreground mb-6">
                Tell us a bit about your needs and we'll reach out to schedule a
                demo.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label className="flex flex-col">
                  <span className="text-sm font-medium mb-1">Your email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-3 py-2 rounded-md border border-border bg-input text-foreground"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium mb-1">Your message</span>
                  <textarea
                    name="message"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="px-3 py-2 rounded-md border border-border bg-input text-foreground"
                  />
                </label>

                <div className="flex items-center gap-3 pt-2">
                  <Button type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "Sending..." : "Send"}
                  </Button>
                  <Link to="/">
                    <Button variant="outline">Cancel</Button>
                  </Link>
                  {status === "sent" && (
                    <span className="text-green-500">Message sent</span>
                  )}
                  {status === "error" && (
                    <span className="text-destructive">Send failed</span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
