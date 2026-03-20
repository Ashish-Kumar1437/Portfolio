import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personalInfo, stats } from "../data/portfolio";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

const roles = [
  "Full Stack Engineer",
  "Frontend Architect",
  "Backend Builder",
  "System Designer",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        80
      );
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <section id="hero">
      {/* Background effects */}
      <div className="hero-mesh" />
      <div className="hero-noise" />
      <div className="hero-glow glow-1" />
      <div className="hero-glow glow-2" />
      <div className="hero-glow glow-3" />

      <div className="hero-content">
        {/* Status badge */}
        <motion.div
          className="hero-status"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span>👋</span>
          <span>Hi I'm</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="hero-name-first">Ashish</span>{" "}
          <span className="hero-name-last">Kumar</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          className="hero-role-bar"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span className="role-chevron">&gt;</span>
          <span className="role-typed">{text}</span>
          <span className="role-cursor" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          {personalInfo.subtitle}
        </motion.p>

        {/* Actions */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          <motion.a
            href="#hire-me"
            className="hero-btn-primary"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="hero-btn-shimmer" />
            Hire Me <FaArrowRight size={13} />
          </motion.a>
          <a href="#experience" className="hero-btn-secondary">
            View Work
          </a>
          <a
            href="/Ashish_Kumar_CV.pdf"
            target="_blank"
            className="hero-btn-ghost"
          >
            <FaDownload size={13} /> Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hero-social"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="hero-stats-strip"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {stats.map((s, i) => (
            <div key={s.label} className="hero-stat">
              <span className="hero-stat-val">{s.value}</span>
              <span className="hero-stat-lbl">{s.label}</span>
              {i < stats.length - 1 && <span className="hero-stat-div" />}
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <HiArrowDown size={16} />
      </motion.div>
    </section>
  );
}
