

import { useEffect } from 'react';
import { FaConciergeBell, FaHotel, FaGlobe, FaBriefcase } from 'react-icons/fa'; // Icons for sections
import AOS from 'aos';
import 'aos/dist/aos.css';
import hotel from "../assets/management.jpg";
import global from "../assets/marinetime.jpg";
import career from "../assets/carrier.jpg";
import service from "../assets/customer.jpg"
import { Link } from 'react-router-dom';

const Hospitality = () => {
    useEffect(() => {

        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <div className="relative text-white">
            {/* Background Image Section */}
            <div
                className="w-full h-[60vh] bg-cover bg-center"
                style={{ backgroundImage: "url('/cockpit_image.jpg')" }}
                data-aos="fade-in"
            >
                <div className="absolute inset-0 bg-black"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <h1 className="text-4xl md:text-5xl font-bold text-center leading-tight px-4 md:px-0">
                        Hospitality Management at Fleetwings Academy
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-center px-6 md:px-12">
                        Professional hospitality training with a focus on customer service, hotel management, and global industry standards.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-8 px-6 sm:px-12 bg-white" data-aos="fade-up">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                        Why Choose Our Hospitality Management Program?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2"> {/* Adjusted gap to 6 */}
                        {/* Customer Service Excellence */}
                        <div className="flex flex-col justify-center items-center text-center p-4" data-aos="fade-right">
                            <FaConciergeBell className="text-4xl text-blue-500 mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Customer Service Excellence</h3>
                            <p className="text-gray-600">
                                Learn the art of providing exceptional service to guests, handling complaints, and creating memorable experiences.
                            </p>
                            <img src={service} alt="Customer Service" className="w-full h-48 object-cover rounded-lg mt-4" /> {/* Adjusted height */}
                        </div>

                        {/* Hotel Management */}
                        <div className="flex flex-col justify-center items-center text-center p-4" data-aos="fade-left">
                            <FaHotel className="text-4xl text-green-500 mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Hotel Management</h3>
                            <p className="text-gray-600">
                                Gain insights into managing hotel operations, including reservations, front desk management, housekeeping, and event planning.
                            </p>
                            <img src={hotel} alt="Hotel Management" className="w-full h-48 object-cover rounded-lg mt-4" /> {/* Adjusted height */}
                        </div>

                        {/* Global Industry Standards */}
                        <div className="flex flex-col justify-center items-center text-center p-4 space-y-4" data-aos="fade-right">
                            <FaGlobe className="text-4xl text-yellow-500 mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Global Industry Standards</h3>
                            <p className="text-gray-600">
                                Our program aligns with international standards, preparing you for career opportunities with top global hospitality brands.
                            </p>
                            <img src={global} alt="Global Standards" className="w-full h-48 object-cover rounded-lg mt-4" /> {/* Adjusted height */}
                        </div>

                        {/* Career Opportunities */}
                        <div className="flex flex-col justify-center items-center text-center p-4 space-y-4" data-aos="fade-left">
                            <FaBriefcase className="text-4xl text-red-500 mb-4" />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Career Opportunities</h3>
                            <p className="text-gray-600">
                                We provide career support, including internships and job placement assistance with leading hotels, resorts, and event management companies.
                            </p>
                            <img src={career} alt="Career Opportunities" className="w-full h-48 object-cover rounded-lg mt-4" /> {/* Adjusted height */}
                        </div>
                    </div>

                </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-blue-500 text-white py-8" data-aos="fade-up">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Kickstart Your Hospitality Career Today</h2>
                    <p className="text-lg mb-6">Join Fleetwings Academy for world-class hospitality management training and begin your journey in the global hospitality industry.</p>
                    <Link
            to="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-lg py-3 px-6 rounded-full transition"
          >
            Contact Us
          </Link>
                </div>
            </div>
        </div>
    );
};

export default Hospitality;
