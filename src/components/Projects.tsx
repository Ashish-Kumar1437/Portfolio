import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../data/portfolio";
import { FaExternalLinkAlt, FaRocket } from "react-icons/fa";

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">// Projects</span>
        <h2>
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            whileHover={{ y: -6 }}
          >
            <div className="project-card-header">
              <FaRocket className="project-icon" />
              <div className="project-links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="Live site"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>

            <h3>{project.title}</h3>
            <span className="project-duration">{project.duration}</span>

            <ul className="project-highlights">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
