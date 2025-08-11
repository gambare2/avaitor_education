import { Link } from "react-router";
import Contact from "./Contact";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';



const About = () => {
    return (
        <div>

        
        <section id="about" className="bg-white py-16 px-6 md:px-12 lg:px-20">
            {/* Title */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold font6 text-black leading-snug">
                    Commercial Pilot Course in Gift City | Gujarat | Pilot Training
                </h1>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left: Image */}
                <div className="w-full h-72 md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                    <img
                        src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107"
                        alt="Aviation Training"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right: Text */}
                <div className="text-gray-700 text-base leading-relaxed font2">
            <p className="mb-4">
                At <strong>Fellettwings Academy</strong>, we don’t just teach flying — we inspire aviators. 
                As a premier aviation training center, we are dedicated to shaping confident, skilled, and 
                safety-conscious pilots ready to soar in the ever-expanding skies of global aviation. 
                Our state-of-the-art facilities, advanced simulators, and expert instructors ensure that every 
                student receives world-class training, whether they aspire to fly for leisure or pursue a 
                professional pilot career.
            </p>
            <p className="mb-4">
                From ground school fundamentals to hands-on flight training, Fellettwings Academy offers a 
                comprehensive learning journey that blends technical expertise with real-world flying experience. 
                Here, passion meets precision, and every takeoff is the beginning of a new adventure.
            </p>
            <p className="font-semibold " >
                Your wings await — let's make your aviation dream a reality.
            </p>
            <Link to="/service"
                                className="max-w-max boxShadow md:my-3 bg-blue-500 text-white px-4 py-4 rounded-md flex items-center gap-2">
                                Start Your Journey
                                <ArrowRightAltIcon />
                            </Link>
        </div>
            </div>
        </section>
        <Contact/>
        </div>
    );
};

export default About;


