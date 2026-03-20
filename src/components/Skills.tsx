import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../data/portfolio";
import {
  FaCode,
  FaDesktop,
  FaServer,
  FaTools,
  FaBrain,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Languages",
    icon: <FaCode />,
    items: skills.languages,
    color: "#8b5cf6",
  },
  {
    title: "Frontend",
    icon: <FaDesktop />,
    items: skills.frontend,
    color: "#06b6d4",
  },
  {
    title: "Backend & APIs",
    icon: <FaServer />,
    items: skills.backend,
    color: "#f59e0b",
  },
  {
    title: "Tools & DevOps",
    icon: <FaTools />,
    items: skills.tools,
    color: "#10b981",
  },
  {
    title: "Core Skills",
    icon: <FaBrain />,
    items: skills.coreSkills,
    color: "#f43f5e",
  },
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">// Skills</span>
        <h2>
          My <span className="gradient-text">Tech Stack</span>
        </h2>
      </motion.div>

      <div className="skills-grid">
        {skillCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.title}
            className="skill-category"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: catIdx * 0.1 }}
          >
            <div className="skill-cat-header" style={{ color: cat.color }}>
              <span className="skill-cat-icon">{cat.icon}</span>
              <h3>{cat.title}</h3>
            </div>

            <div className="skill-tags">
              {cat.items.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="skill-tag"
                  style={{
                    borderColor: `${cat.color}30`,
                    background: `${cat.color}10`,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: catIdx * 0.1 + i * 0.03,
                  }}
                  whileHover={{
                    scale: 1.08,
                    background: `${cat.color}25`,
                    borderColor: cat.color,
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
