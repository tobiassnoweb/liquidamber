import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-high border-t border-border">
      <div className="container-wide py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="LiquidAmber" className="h-8 w-auto" />
              <span className="font-logo text-xl font-semibold text-foreground">
                LiquidAmber
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Turn Knowledge Into Insight—Faster
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/who-we-are"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Who We Are
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © {currentYear} LiquidAmber. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
