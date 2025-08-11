import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo_aviation.jpg";

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-[#0f1e30] text-white px-6 py-10 md:px-20">
      
      {/* Title */}
      <motion.div
        className="font-bold text-center text-3xl font2 md:my-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.div>

      {/* Main Grid */}
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Logo & About */}
        <motion.div
          className="flex-1 max-w-md"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="flex justify-start my-4 flex-col items-center mb-4">
            <img src={logo} alt="logo" className="size-24 rounded-full" />
            <h1 className="text-[#66a2ea] text-2xl font-bold flex flex-col font1">
              FLEETWINGS
              <span className="text-white text-center text-sm">ACADEMY</span>
            </h1>
          </span>
          <p className="text-sm leading-relaxed text-gray-300 font6 text-left md:text-left">
            Introducing The Aviator Training School (TATS), a dynamic venture
            under the umbrella of Aerokrat Global Pvt Ltd. We embrace the
            philosophy that pilots are made, not born.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="flex-1 font2 text-left md:text-left"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-xl  font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            {["About Us", "Training", "Courses", "Careers", "Contact Us"].map(
              (link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="flex-1 font2 text-left md:text-left"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-xl font-bold mb-4">Get In Touch</h2>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex  md:justify-start gap-2">
            <FaMapMarkerAlt className="text-blue-400" />
              <span> T1, 703, Gift City, Gujarat, 382050</span>
            </li>
            <li className="flex  md:justify-start gap-2">
              <FaPhone className="text-blue-400" />
              <a href="tel:+916305403007" className="hover:text-blue-400">
                +91 63054 03007
              </a>
            </li>
            <li className="flex md:justify-start gap-2">
              <FaEnvelope className="text-blue-400" />
              <a
                href="mailto:Zeeyasindia@gmail.com"
                className="hover:text-blue-400"
              >
                Zeeyasindia@gmail.com
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-600" />

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-evenly items-center text-sm text-gray-400 gap-4">
        <p>© Copyright 2025 By The Fleetwings Academy.</p>
        <span className="hover:text-blue-300">Best Web designer in Delhi @Adosource It Solution</span>
        <button
          onClick={scrollToTop}
          className="text-2xl flex items-center justify-center text-white bg-blue-400 hover:bg-blue-500 transition-colors duration-300 rounded-lg size-10"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}
