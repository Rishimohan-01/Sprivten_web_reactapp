import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMenu from "./components/NavbarMenu";
import "./components/NavbarMenu.css";
import Whyus from "./components/Whyus";
import "./components/Whyus.css";
import Services from "./components/Services";
import "./components/Services.css";
import Testimonials from "./components/Testimonials";
import "./components/Testimonials.css";
import OurTeam from "./components/OurTeam";
import "./components/OurTeam.css";
import ContactUs from "./components/ContactUs";
import "./components/ContactUs.css";
import ContactContent from "./components/ContactContent";
import "./components/ContactContent.css";
import Footer from "./components/Footer";
import "./components/Footer.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavbarMenu />
    <Whyus />
    <Services />
    <Testimonials />
    <OurTeam />
    <ContactUs />
    <ContactContent />
    <Footer />
  </React.StrictMode>
);
