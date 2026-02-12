import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Contact = () => {
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

              <form
                action="https://formspree.io/f/xzdadqlp"
                method="POST"
                className="flex flex-col gap-4"
              >
                <label className="flex flex-col">
                  <span className="text-sm font-medium mb-1">Your email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="px-3 py-2 rounded-md border border-border bg-input text-foreground"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium mb-1">Your message</span>
                  <textarea
                    name="message"
                    rows={6}
                    className="px-3 py-2 rounded-md border border-border bg-input text-foreground"
                  />
                </label>

                <div className="flex items-center gap-3 pt-2">
                  <Button type="submit">Send</Button>
                  <Link to="/">
                    <Button variant="outline">Cancel</Button>
                  </Link>
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
