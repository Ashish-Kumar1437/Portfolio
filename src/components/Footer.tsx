import { personalInfo } from "../data/portfolio";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <a href="#" className="nav-logo">
            <span className="logo-a">A</span>
            <span className="logo-sep" />
            <span className="logo-k">K</span>
          </a>
          <p>Building the web, one component at a time.</p>
        </div>

        <div className="footer-socials">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        <div className="footer-line" />

        <p className="footer-copy">
          Made with <FaHeart className="heart-icon" /> by {personalInfo.name} ©{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
