import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "../data/portfolio";

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">// Experience</span>
        <h2>
          Where I've <span className="gradient-text">Worked</span>
        </h2>
      </motion.div>

      <div className="timeline">
        <div className="timeline-line" />

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            {/* Center dot with company logo */}
            <div className="timeline-dot">
              <img
                src={exp.logo}
                alt={exp.company}
                className="timeline-dot-logo"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (
                    (e.target as HTMLImageElement)
                      .nextElementSibling as HTMLElement
                  )?.classList.add("visible");
                }}
              />
              <span className="timeline-dot-fallback">
                {exp.company.charAt(0)}
              </span>
            </div>

            {/* Card */}
            <div className="timeline-card">
              <div className="timeline-card-header">
                <div>
                  <h3>{exp.role}</h3>
                  <span className="timeline-company">{exp.company}</span>
                </div>
                <span className="timeline-duration">{exp.duration}</span>
              </div>

              <p className="timeline-description">{exp.description}</p>

              <ul className="timeline-highlights">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
