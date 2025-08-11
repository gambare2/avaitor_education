import { motion } from "framer-motion";

// Example images (replace with your actual files or URLs)
import aviationImg from "../assets/aviation.jpg";
import navyImg from "../assets/merchant-navy.jpg";
import hospitalityImg from "../assets/hospitality.jpg";

export default function Services() {
    return (
        <div className="w-full bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    Our Professional Training Services
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl"
                >
                    Shaping your future with world-class training in Aviation, Merchant Navy, and Hospitality Management.
                </motion.p>
            </section>

            {/* Aviation Training */}
            <section className="py-16 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-10">
                <motion.img
                    src={aviationImg}
                    alt="Aviation Training"
                    className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                />
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold mb-4">Aviation Training</h2>
                    <p className="text-lg leading-relaxed">
                        Prepare for a soaring career in the skies. Our aviation training program offers hands-on
                        experience, industry-standard equipment, and expert guidance to help you become a confident and skilled professional.
                    </p>
                    <a
                        href="/aviation"
                        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-lg py-3 px-6 rounded-full transition"
                    >
                        Apply Here
                    </a>
                </motion.div>
            </section>

            {/* Merchant Navy */}
            <section className="py-16 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row-reverse items-center gap-10 bg-gray-100">
                <motion.img
                    src={navyImg}
                    alt="Merchant Navy"
                    className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                />
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold mb-4">Merchant Navy</h2>
                    <p className="text-lg leading-relaxed">
                        Embark on an adventurous and rewarding career at sea. Our Merchant Navy program equips
                        you with essential navigation, engineering, and safety skills for a life on the ocean.
                    </p>
                    <a
                        href="/navy"
                        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-lg py-3 px-6 rounded-full transition"
                    >
                        Apply Here
                    </a>
                </motion.div>
            </section>

            {/* Hospitality Management */}
            <section className="py-16 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-10">
                <motion.img
                    src={hospitalityImg}
                    alt="Hospitality Management"
                    className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                />
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold mb-4">Hospitality Management</h2>
                    <p className="text-lg leading-relaxed">
                        Become a leader in the service industry. Our hospitality management program focuses on
                        customer service excellence, event planning, and hotel operations to prepare you for top-tier opportunities worldwide.
                    </p>
                    <a
                        href="/hospitality"
                        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-lg py-3 px-6 rounded-full transition"
                    >
                        Apply Here
                    </a>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-16 text-center">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl font-bold mb-6"
                >
                    Ready to Start Your Journey?
                </motion.h3>
                <a href="tel:+911234567890">
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
                    >
                        Contact Us
                    </motion.button>
                </a>

            </section>
        </div>
    );
}
