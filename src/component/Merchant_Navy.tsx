import { FaShip, FaTools, FaFireAlt, FaGlobeAmericas } from 'react-icons/fa'; // Icons for the sections
import marinetime from "../assets/marinetime.jpg";
import navigation from "../assets/navigation.jpg";
import enginnering from "../assets/marine.jpg";
import safety from "../assets/safety.jpg"
import { Link } from 'react-router-dom';

const MerchantNavy = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      {/* Background Image Section */}
      <div className="w-full h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
        <div className="absolute inset-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-center leading-tight px-4 md:px-0">
            Merchant Navy Training at Fleetwings Academy
          </h1>
          <p className="mt-4 text-lg md:text-xl text-center px-6 md:px-12">
            Specialized courses for maritime careers, from navigation to engineering, preparing you for a life at sea.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-6 sm:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why Choose Our Merchant Navy Program?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Navigation Training Section */}
            <div className="flex flex-col justify-center items-center text-center p-4">
              <FaShip className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Navigation Training</h3>
              <p className="text-gray-600">
                Learn the essential skills needed for navigation, including chart reading, weather forecasting, and operating marine equipment.
              </p>
              <img src={navigation} alt="Navigation Training" className="w-full h-64 object-cover rounded-lg mt-4" />
            </div>

            {/* Marine Engineering Section */}
            <div className="flex flex-col justify-center items-center text-center p-4">
              <FaTools className="text-4xl text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Marine Engineering</h3>
              <p className="text-gray-600">
                Gain hands-on experience in maintaining and repairing the technical equipment aboard ships, from engines to electrical systems.
              </p>
              <img src={enginnering} alt="Marine Engineering" className="w-full h-64 object-cover rounded-lg mt-4" />
            </div>

            {/* Safety & Survival Skills Section */}
            <div className="flex flex-col justify-center items-center text-center p-4">
              <FaFireAlt className="text-4xl text-red-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Safety & Survival Skills</h3>
              <p className="text-gray-600">
                Master life-saving techniques, including firefighting, survival training, and emergency response procedures for life at sea.
              </p>
              <img src={safety} alt="Safety & Survival" className="w-full h-64 object-cover rounded-lg mt-4" />
            </div>

            {/* Global Maritime Standards Section */}
            <div className="flex flex-col justify-center items-center text-center p-4">
              <FaGlobeAmericas className="text-4xl text-yellow-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Global Maritime Standards</h3>
              <p className="text-gray-600">
                Our curriculum is aligned with international maritime standards, ensuring that our graduates are prepared for global opportunities.
              </p>
              <img src={marinetime} alt="Global Standards" className="w-full h-64 object-cover rounded-lg mt-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
<div className="bg-blue-500 text-white py-8" data-aos="fade-up">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Set Sail on Your Career Journey</h2>
                    <p className="text-lg mb-6">Join Fleetwings Academy and start your journey to a successful career at sea with world-class maritime training.</p>
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

export default MerchantNavy;


