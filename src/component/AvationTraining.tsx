
import { FaPlane, FaChalkboardTeacher, FaRocket, FaBriefcase } from 'react-icons/fa';
import instructor from "../assets/instructure.jpg"
import simulator from "../../public/female-airliner.jpg"
import aircraft from "../assets/aviation.jpg"
import carrier from "../assets/carrier.jpg"
import { Link } from 'react-router-dom';

const AviationTraining = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      {/* Background Image Section */}
      <div className="w-full h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
        <div className="absolute inset-0"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-center leading-tight px-4 md:px-0">
            Aviation Training at Fleetwings Academy
          </h1>
          <p className="mt-4 text-lg md:text-xl text-center px-6 md:px-12">
            Comprehensive pilot and cabin crew training with modern simulators, advanced aircraft, and world-class instructors.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-6 sm:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why Choose Our Aviation Training Program?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* State-of-the-Art Simulators */}
            <div className="flex flex-col justify-center items-center text-center p-4">
              <FaPlane className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">State-of-the-Art Simulators</h3>
              <p className="text-gray-600">
                Our training program includes access to modern simulators, providing realistic flight experiences and improving your skills in any situation.
              </p>
              <img src={simulator} alt="State-of-the-Art Simulators" className="w-full h-64 object-cover rounded-lg mt-4" />
            </div>

            {/* Experienced Instructors */}
            <div className="flex flex-col justify-center items-center text-center px-4">
              <FaChalkboardTeacher className="text-4xl text-green-500 " />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Experienced Instructors</h3>
              <p className="text-gray-600">
                Our instructors are highly experienced pilots and aviation experts. They will guide you through every aspect of flight training with personalized support.
              </p>
              <img src={instructor} alt="Experienced Instructors" className="w-full h-64 object-cover rounded-lg mt-4" />
            </div>

            {/* Advanced Aircraft */}
            <div className="flex flex-col justify-center items-center text-center p-4">
              <FaRocket className="text-4xl text-red-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Advanced Aircraft</h3>
              <p className="text-gray-600">
                Gain hands-on experience with a range of modern, well-maintained aircraft. Our fleet includes top-of-the-line planes to enhance your training.
              </p>
              <img src={aircraft} alt="Advanced Aircraft" className="w-full h-64 object-cover rounded-lg mt-4" />
            </div>

            {/* Career Development */}
            <div className="flex flex-col justify-center items-center text-center p-4">
              <FaBriefcase className="text-4xl text-yellow-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Career Development</h3>
              <p className="text-gray-600">
                We provide career support, including job placement assistance with major airlines and aviation companies after successful completion of your training.
              </p>
              <img src={carrier} alt="Career Development" className="w-full h-64 object-cover rounded-lg mt-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      {/* <div className="bg-blue-500 text-white py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Off?</h2>
          <p className="text-lg mb-6">Start your journey with Fleetwings Academy and receive world-class aviation training.</p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-lg py-3 px-6 rounded-full transition"
          >
            Contact Us
          </Link>
        </div>
      </div> */}

<div className="bg-blue-500 text-white py-8" data-aos="fade-up">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Take Off?</h2>
                    <p className="text-lg mb-6">Start your journey with Fleetwings Academy and receive world-class aviation training.</p>
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

export default AviationTraining;

