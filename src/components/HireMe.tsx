import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "../data/portfolio";
import {
  FaRocket,
  FaLaptopCode,
  FaServer,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

const offerings = [
  {
    icon: <FaLaptopCode />,
    title: "Frontend Engineering",
    description:
      "React, Angular, Next.js — pixel-perfect UIs with responsive design, micro frontends, and 60% faster load times.",
    color: "#8b5cf6",
  },
  {
    icon: <FaServer />,
    title: "Backend & APIs",
    description:
      "Spring Boot, Node.js, RESTful APIs, WebSockets, PostgreSQL — scalable services handling 500K+ daily users.",
    color: "#06b6d4",
  },
  {
    icon: <FaUsers />,
    title: "Architecture & Leadership",
    description:
      "System design, AWS infrastructure, CI/CD pipelines, technical docs, and mentoring engineering teams.",
    color: "#10b981",
  },
];

export default function HireMe() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="hire-me" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">// Hire Me</span>
        <h2>
          Why work with <span className="gradient-text">me?</span>
        </h2>
        <p className="section-description">
          I bring production-grade engineering, ownership mentality, and a passion
          for building things that matter.
        </p>
      </motion.div>

      <div className="hire-grid">
        {offerings.map((item, idx) => (
          <motion.div
            key={item.title}
            className="hire-card"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div
              className="hire-card-icon"
              style={{ background: `${item.color}18`, color: item.color }}
            >
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="hire-card-glow" style={{ background: item.color }} />
          </motion.div>
        ))}
      </div>

      {/* CTA banner */}
      <motion.div
        className="hire-cta-banner"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="hire-cta-content">
          <div className="hire-cta-icon">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <FaRocket size={28} />
            </motion.div>
          </div>
          <div className="hire-cta-text">
            <h3>Ready to build something amazing together?</h3>
            <p>
              Let's discuss how I can contribute to your team and bring your ideas
              to life.
            </p>
          </div>
          <div className="hire-cta-actions">
            <motion.a
              href={`mailto:${personalInfo.email}?subject=Hiring Inquiry – ${personalInfo.name}`}
              className="btn-primary cta-glow"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 15px rgba(139, 92, 246, 0.3)",
                  "0 0 30px rgba(139, 92, 246, 0.5)",
                  "0 0 15px rgba(139, 92, 246, 0.3)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Let's Talk <FaArrowRight />
            </motion.a>
            <a
              href="/Ashish_Kumar_CV.pdf"
              target="_blank"
              className="btn-outline"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="hire-cta-orb hire-orb-1" />
        <div className="hire-cta-orb hire-orb-2" />
      </motion.div>
    </section>
  );
}
