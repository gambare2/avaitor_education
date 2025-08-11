import { useState, useEffect } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import image1 from "../../public/combat-it-engineer-supervising-assisting-team-members-field.jpg";
import image2 from "../../public/african-american-serviceman-camouflage-uniform-sits-therapy.jpg";
import image3 from "../../public/female-airliner.jpg";
import backgroundContact from "../assets/contact-image-background.jpg";
import studentView from "../../public/front-view-male.png";
import { TextField, Button } from "@mui/material";
import Contact from "./Contact";
import { FaPlane, FaShip, FaConciergeBell } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const faqs = [
  {
    question: "What courses does FlettWings Academy offer?",
    answer:
      "We offer private pilot training, commercial pilot license programs, flight instructor courses, and advanced simulator training.",
  },
  {
    question: "Do I need prior flying experience to enroll?",
    answer:
      "No. Our beginner-friendly programs start from scratch and guide you to professional pilot certification.",
  },
  {
    question: "How long does pilot training take?",
    answer:
      "The duration varies depending on the course, but typically ranges from 6 months to 18 months.",
  },
  {
    question: "Is accommodation provided for students?",
    answer:
      "Yes, we provide safe and comfortable accommodation near our training facilities for both domestic and international students.",
  },
  {
    question: "What type of aircraft do you use for training?",
    answer:
      "We use modern, well-maintained training aircraft including Cessna 172s and Piper Archers.",
  },
  {
    question: "Do you help with airline job placement?",
    answer:
      "Absolutely. We have partnerships with multiple airlines and assist our graduates in securing career opportunities.",
  },
  {
    question: "Is financing or installment payment available?",
    answer:
      "Yes, we offer flexible payment plans to help students manage training costs.",
  },
];

const services = [
  {
    title: "Aviation Training",
    description:
      "Comprehensive pilot and cabin crew training with modern simulators, advanced aircraft, and world-class instructors.",
    icon: <FaPlane className="text-5xl text-blue-500" />,
    link: "/aviation"
  },
  {
    title: "Merchant Navy",
    description:
      "Specialized courses for maritime careers, from navigation to engineering, preparing you for a life at sea.",
    icon: <FaShip className="text-5xl text-indigo-500" />,
    link: "/navy"
  },
  {
    title: "Hospitality Management",
    description:
      "Professional hospitality training with a focus on customer service, hotel management, and global industry standards.",
    icon: <FaConciergeBell className="text-5xl text-yellow-500" />,
    link: "/hospitality"
  },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };




  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="w-full overflow-x-hidden" id="home_page">
      {/* Hero Section */}
      <div className="flex flex-col my-20 px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Images */}
          <div className="grid grid-cols-1 gap-4" data-aos="fade-right">
            <div className="relative w-full aspect-video overflow-hidden rounded-lg">
              <img
                src={image2}
                alt="Student"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img
                  src={image1}
                  alt="Training"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img
                  src={image3}
                  alt="Aircraft"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div data-aos="fade-left" className="flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Fleetwings Academy?
            </h1>
            <p className="text-sm text-justify sm:text-base text-gray-700 leading-relaxed mb-6">
              At Fleetwings Academy, aviation isn’t just a career path — it’s a way of life, and we’re dedicated to helping you live your dream of becoming a skilled aviator. As one of the leading aviation training centers,
              we combine decades of industry expertise with cutting-edge
              facilities to deliver a learning experience that is as inspiring
              as it is rigorous. Our mission is to produce confident, competent,
              and safety-conscious pilots who can thrive in the fast-paced world of aviation.

              We offer a world-class training environment featuring a modern fleet of aircraft,
              advanced simulators, and classrooms equipped with the latest aviation technology.
              Every lesson is guided by highly experienced instructors, many of whom are seasoned
              commercial pilots with real-world flying expertise. Their mentorship goes beyond the
              cockpit, focusing on discipline, decision-making, and professionalism — qualities
              that distinguish an exceptional pilot.

              Our curriculum is carefully designed to meet international aviation standards,
              blending comprehensive theoretical knowledge with extensive hands-on practice.
              You won’t just learn how to fly — you’ll gain a deep understanding of aerodynamics,
              navigation, meteorology, air traffic control, and the principles of flight safety.

              At Fleetwings Academy, we believe every student’s journey is unique.
              That’s why we provide personalized training programs, flexible scheduling,
              and dedicated career guidance to ensure you progress at a pace that suits
              your goals. We also maintain strong industry connections, giving our graduates
              an edge in securing placements with top airlines and aviation companies worldwide.

              Whether you aspire to command commercial jets, become a private pilot, or advance

              into specialized aviation roles, Fleetwings Academy is your trusted launchpad.
              With our unwavering commitment to quality, integrity, and innovation, we don’t
              just prepare you for a license — we prepare you for a lifetime of excellence
              in the skies.
            </p>
            <div className="flex flex-row sm:flex-row gap-4">
              <Link to='/service'
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 max-w-max rounded-md flex items-center gap-2 transition">
                Start Your Journey <ArrowRightAltIcon />
              </Link>
              <Link to="/about"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 max-w-max rounded-md flex items-center gap-2 transition">
                Know More <ArrowRightAltIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-col justify-center items-center px-4 py-12">
        <h2
          className="text-3xl font-bold text-center text-gray-800 mb-12"
          data-aos="fade-up"
        >
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              data-aos="zoom-in"
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300 block"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>

      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h2
          className="text-3xl font-bold text-center mb-8"
          data-aos="fade-up"
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="border rounded-lg shadow-sm bg-white overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between w-full p-4 text-left font-medium text-lg text-gray-800 focus:outline-none"
              >
                {faq.question}
                <span className="text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index
                    ? "max-h-40 opacity-100 p-4 pt-0"
                    : "max-h-0 opacity-0 p-0"
                  }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative w-full h-full">
        <img
          src={backgroundContact}
          alt=""
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20 text-white">
          {/* Form */}
          <div
            data-aos="fade-right"
            className="w-full lg:w-1/2 flex flex-col gap-4"
          >
            <h3 className="text-4xl font-bold flex justify-center items-center py-5 mb-4">Enquiry</h3>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "#90caf9" },
                  "&.Mui-focused fieldset": { borderColor: "#2196f3" },
                },
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiInputBase-input": { color: "white" },
              }}
            />
            <div className="flex flex-col sm:flex-row gap-2">
              <TextField
                fullWidth
                label="Phone no."
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "white" },
                    "&:hover fieldset": { borderColor: "#90caf9" },
                    "&.Mui-focused fieldset": { borderColor: "#2196f3" },
                  },
                  "& .MuiInputLabel-root": { color: "white" },
                  "& .MuiInputBase-input": { color: "white" },
                }}
              />
              <TextField
                fullWidth
                label="E-mail"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "white" },
                    "&:hover fieldset": { borderColor: "#90caf9" },
                    "&.Mui-focused fieldset": { borderColor: "#2196f3" },
                  },
                  "& .MuiInputLabel-root": { color: "white" },
                  "& .MuiInputBase-input": { color: "white" },
                }}
              />
            </div>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "#90caf9" },
                  "&.Mui-focused fieldset": { borderColor: "#2196f3" },
                },
                "& .MuiInputLabel-root": { color: "white" },
                "& .MuiInputBase-input": { color: "white" },
              }}
            />
            <Button variant="contained" color="primary">
              Send Us Enquiry
            </Button>
          </div>
          {/* Image */}
          <img
            src={studentView}
            alt="Enquiry"
            data-aos="fade-left"
            className="hidden lg:block w-[65%] overflow-hidden"
          />
        </div>
      </div>

      <Contact />
    </div>
  );
}
