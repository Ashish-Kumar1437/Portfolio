import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "../data/portfolio";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="contact" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">// Contact</span>
        <h2>
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="section-description">
          Have a project in mind, or want to chat? Feel free to reach out!
        </p>
      </motion.div>

      <div className="contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <a href={`mailto:${personalInfo.email}`} className="contact-card">
            <div className="contact-card-icon">
              <FaEnvelope />
            </div>
            <div>
              <h4>Email</h4>
              <span>{personalInfo.email}</span>
            </div>
          </a>

          <a href={`tel:${personalInfo.phone}`} className="contact-card">
            <div className="contact-card-icon">
              <FaPhone />
            </div>
            <div>
              <h4>Phone</h4>
              <span>{personalInfo.phone}</span>
            </div>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-icon">
              <FaLinkedin />
            </div>
            <div>
              <h4>LinkedIn</h4>
              <span>Connect with me</span>
            </div>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-icon">
              <FaGithub />
            </div>
            <div>
              <h4>GitHub</h4>
              <span>Check out my repos</span>
            </div>
          </a>
        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const name = (form.elements.namedItem("name") as HTMLInputElement)
              .value;
            const email = (form.elements.namedItem("email") as HTMLInputElement)
              .value;
            const message = (
              form.elements.namedItem("message") as HTMLTextAreaElement
            ).value;
            window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name} (${email})`;
          }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <motion.button
            type="submit"
            className="btn-primary submit-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaPaperPlane />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
