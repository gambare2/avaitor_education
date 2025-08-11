import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Divider, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/logo_aviation.jpg";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import whatsapp from '../assets/whatsapp.svg';
import backgroundHome1 from "../../public/cockpit_image.jpg";
import backgroundHome2 from "../../public/fighter-jet.webp";
import backgroundAbout from "../../public/pilot-mechanic-full-flight-gear-checks-propeller-his-retro-military-aircraft-before-flight.jpg";
import backgroundService from "../../public/female-airliner.jpg";
import backgroundContact from "../../public/front-view-male.png";
import image3 from "../../public/cockpit_image.jpg";

const homeBackgrounds = [backgroundHome1, backgroundHome2, image3];

function Navbar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activePage, setActivePage] = useState("home");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);



  // Init AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Window resize tracker
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slider effect
  useEffect(() => {
    if (activePage !== "home") return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === homeBackgrounds.length - 1 ? 0 : prev + 1
      );
    }, 8000);
    return () => clearInterval(interval);
  }, [activePage]);

  const getBackground = () => {
    if (activePage === "home") return homeBackgrounds[currentIndex];
    if (activePage === "about") return backgroundAbout;
    if (activePage === "service") return backgroundService;
    if (activePage === "contact") return backgroundContact;
  };

  const getHeight = () => {
    const isMobile = windowWidth < 768;
    switch (activePage) {
      case "home":
      case "about":
        return isMobile ? "30vh" : "70vh";
      case "service":
      case "contact":
        return isMobile ? "30vh" : "60vh";
      default:
        return "60vh";
    }
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Service", path: "/service" },
    { label: "Contact Us", path: "/contact" }
  ];

  let closeTimer: ReturnType<typeof setTimeout>;

  const handleMenuEnter = (event: React.MouseEvent<HTMLElement>) => {
    clearTimeout(closeTimer);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuLeave = () => {
    closeTimer = setTimeout(() => {
      setAnchorEl(null);
    }, 150);
  };

  const handleMenuClose = () => {
    setAnchorEl(null); 
  };



  return (
    <div>
      <div
        className="relative w-screen text-white"
        style={{
          backgroundImage: `url(${getBackground()})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: getHeight(),
          transition: "background-image 1s ease-in-out, height 0.5s ease",
        }}
      >
        {/* Navbar */}
        <nav
          className="fixed top-0 w-full  z-20 p-4"
          data-aos="fade-down"
        >
          <div className="bg-black bg-opacity-50 mx-4 md:mx-8 flex justify-between items-center rounded-lg px-4 md:px-8 py-2">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => setActivePage("home")}
              className="flex items-center gap-3"
            >
              <img
                src={logo}
                alt="logo"
                className="size-16 md:size-24 rounded-full"
              />
              <h1 className="text-[#66a2ea] text-xl md:text-2xl font-bold flex flex-col text-center font1">
                FLEETWINGS{" "}
                <span className="text-white text-xs md:text-sm">ACADEMY</span>
              </h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10 font2">
              {menuItems.map((item) =>
                item.label === "Service" ? (
                  <div key={item.label} className="relative">
                    {/* Wrap button and menu in one mouse area */}
                    <div
                      onMouseEnter={handleMenuEnter}
                      onMouseLeave={handleMenuLeave}
                    >
                      <button
                        className={`py-2 border-b-2 border-transparent hover:border-blue-700 transition-all ${activePage === "service" ? "border-blue-700" : ""
                          }`}
                      >
                        Service
                      </button>

                      <Menu
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleMenuClose}
                        MenuListProps={{
                          onMouseEnter: () => clearTimeout(closeTimer), // prevent close while hovering menu
                          onMouseLeave: handleMenuLeave,
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleMenuClose}>
                          <Link to="/aviation">Aviation Training</Link>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                          <Link to="/navy">Merchant Navy</Link>
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                          <Link to="/hospitality">Hospitality Management</Link>
                        </MenuItem>
                      </Menu>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setActivePage(item.label.toLowerCase())}
                    className={`py-2 border-b-2 border-transparent hover:border-blue-700 transition-all ${activePage === item.label.toLowerCase()
                        ? "border-blue-700"
                        : ""
                      }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>


            {/* Contact Info (Desktop only) */}
            <div className="hidden md:flex flex-col justify-center items-center gap-2">
              <span>Reach US at:</span>
              <span className="flex gap-4">
                <a
                  href="https://wa.me/916305403007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <WhatsAppIcon
                    className="text-green-500 rounded-full"
                    sx={{ fontSize: 32 }}
                  />
                </a>

                <a
                  href="tel:+916305403007"
                  className="cursor-pointer"
                >
                  <LocalPhoneIcon sx={{ fontSize: 32 }} />
                </a>
              </span>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon className="text-white" />
              </IconButton>
            </div>
          </div>
        </nav>

        {/* Mobile Drawer Menu */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <div className="w-64 bg-gray-900 h-full text-white flex flex-col">
            <div className="flex justify-end p-4">
              <IconButton onClick={() => setDrawerOpen(false)}>
                <CloseIcon className="text-white" />
              </IconButton>
            </div>
            <List>
              {menuItems.map((item) => (
                item.label === 'Service' ? (
                  <ListItem key={item.label} disablePadding>
                    <ListItemButton onClick={handleMenuClose}>
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                    {/* Dropdown Menu for Services */}
                    <Menu
                      anchorEl={anchorEl}
                      open={openMenu}
                      onClose={handleMenuClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={handleMenuClose} component={Link} to="/aviation-training">
                        Aviation Training
                      </MenuItem>
                      <MenuItem onClick={handleMenuClose} component={Link} to="/merchant-navy">
                        Merchant Navy
                      </MenuItem>
                      <MenuItem onClick={handleMenuClose} component={Link} to="/hospitality-management">
                        Hospitality Management
                      </MenuItem>
                    </Menu>
                  </ListItem>
                ) : (
                  <ListItem key={item.label} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setDrawerOpen(false);
                      }}
                      component={Link}
                      to={item.path}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                )
              ))}
            </List>
            <Divider className="bg-gray-700" />
            <div className="flex flex-col items-center gap-2 p-4">
              <span>Reach Us at:</span>
              <span className="flex gap-4">
                <a
                  href="https://wa.me/916305403007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <WhatsAppIcon
                    className="text-green-500 rounded-full"
                    sx={{ fontSize: 32 }}
                  />
                </a>

                <a
                  href="tel:+916305403007"
                  className="cursor-pointer"
                >
                  <LocalPhoneIcon sx={{ fontSize: 32 }} />
                </a>
              </span>
            </div>

          </div>
        </Drawer>

        {/* Scroll Down Icon */}
        <div
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10"
          data-aos="fade-up"
        >
          <div onClick={() => {
            document.getElementById("home_Page")?.scrollIntoView({
              behavior: "smooth",
            })
          }} className="flex justify-center items-center bg-[#bab7ff] size-12 rounded-lg">
            <ArrowDownwardIcon className="text-white text-4xl" />
          </div>
        </div>
      </div >

      {/* Floating WhatsApp */}
      < div >
        <span onClick={() => window.open('https://wa.me/916305403007', '_blank')} className="cursor-pointer">
          <img
            src={whatsapp}
            alt="contact"
            className="fixed z-50 bottom-0 right-0 px-4 py-5 cursor-pointer"
          />
        </span>
      </div >

      <Outlet />
    </div >
  );
}

export default Navbar;
