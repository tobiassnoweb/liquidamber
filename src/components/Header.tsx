import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && systemDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Who We Are", path: "/who-we-are" },
    { name: "Solutions", path: "/solutions" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface-container-low/95 backdrop-blur-md shadow-elevation-2"
          : "bg-transparent"
      }`}
    >
      <nav className="container-wide py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="LiquidAmber"
              className="h-9 w-auto transition-transform duration-200 group-hover:scale-105"
            />
            <span
              className="font-logo text-2xl font-semibold text-foreground"
              style={{ color: "#FFA201" }}
            >
              LiquidAmber
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  location.pathname === item.path
                    ? "bg-secondary text-secondary-foreground"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button asChild variant="hero">
              <Link to="/contact" className="inline-flex items-center">
                Request a Demo
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "bg-secondary text-secondary-foreground"
                      : "text-foreground/70 hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild variant="hero" className="mt-2">
                <Link to="/contact" className="inline-flex items-center">
                  Request a Demo
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
