import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { brand } from "@/data/site";
import { MagneticButton } from "./magnetic-button";

const links = [
  ["Products", "#products"],
  ["Technology", "#technology"],
  ["Resources", "#resources"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled || open ? "is-solid" : ""}`}>
      <div className="container-wide nav-inner">
        <a href="#top" className="wordmark" aria-label={`${brand.name} home`}>
          <span>dp</span>
          <div>
            <b>{brand.shortName}</b>
            <small>DENTAL TECHNOLOGIES</small>
          </div>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <div className="desktop-cta">
          <MagneticButton href="#contact" variant="outline">Request a Demo</MagneticButton>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href], index) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{label}
            </a>
          ))}
          <MagneticButton href="#contact" variant="solid">Request a Demo</MagneticButton>
        </nav>
      </div>
    </header>
  );
}
