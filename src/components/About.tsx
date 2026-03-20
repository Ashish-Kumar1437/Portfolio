import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo, education } from "../data/portfolio";
import { FaGraduationCap } from "react-icons/fa";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">// About Me</span>
        <h2>
          Get to know <span className="gradient-text">me</span>
        </h2>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p>{personalInfo.about}</p>

          <div className="education-card">
            <div className="edu-icon">
              <FaGraduationCap size={24} />
            </div>
            <div className="edu-info">
              <h3>{education.institution}</h3>
              <p>{education.degree}</p>
              <div className="edu-meta">
                <span className="edu-cgpa">CGPA: {education.cgpa}</span>
                <span className="edu-duration">{education.duration}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-highlights"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="highlight-card">
            <div className="highlight-number">2+</div>
            <div className="highlight-label">Years of Experience</div>
          </div>
          <div className="highlight-card">
            <div className="highlight-number">7+</div>
            <div className="highlight-label">Production Modules</div>
          </div>
          <div className="highlight-card">
            <div className="highlight-number">500K+</div>
            <div className="highlight-label">Users Served Daily</div>
          </div>
          <div className="highlight-card">
            <div className="highlight-number">15+</div>
            <div className="highlight-label">Legacy Migrations</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
