import React from "react";
import { motion } from "framer-motion";
import NationalParksScroller from "../components/NationalParksScroller";
import "./LandingPage.css";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";
import image11 from "../assets/image11.jpg";
import image12 from "../assets/image12.jpg";
import image13 from "../assets/image13.jpg";
import image14 from "../assets/image14.jpg";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const LandingPage = () => {
  const scrollToNextSection = () => {
    document
      .getElementById("about-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <motion.section
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="hero-content-wrapper"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="hero-heading">WHERE CAN WE TAKE YOU?</h1>
          <NationalParksScroller />
          <div className="hero-input-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search for a park"
            />
            <motion.button
              className="search-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GO
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          className="scroll-arrow-icon"
          onClick={scrollToNextSection}
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ⬇
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about-section"
        className="about-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="about-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          We believe in safaris that touch the soul!
        </motion.h1>
        <motion.p
          className="about-description1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          The Nalazuri Travels <em>Experience</em>; Your Pathways To{" "}
          <em>Limitless Adventures</em>
        </motion.p>
        <motion.p
          className="about-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          Your itinerary is thoughtfully designed to match your dreams, crafted
          by our local Kenyan team with extensive field expertise, logistical
          skill, and an intimate understanding of the destinations we recommend.
          Unlike office-based sales agents, we bring hands-on experience to
          every detail. We own vehicles, not camps, allowing us to focus
          entirely on curating your perfect safari, free from any bias toward
          specific accommodations. Our goal is simple: to take you to the best
          locations for an unforgettable experience.
        </motion.p>
        <motion.p
          className="about-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          Our goal is simple: to take you to the best locations for an
          unforgettable experience.
        </motion.p>
        <div className="center-container">
          <motion.a
            href="https://mackayafrica.com/inquire/"
            className="dream-list-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SEND US YOUR DREAM LIST
          </motion.a>
        </div>
      </motion.section>

      <motion.section
        className="image-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.div
          className="grid-item"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <img src={image1} alt="Exquisite Views" />
          <div className="overlay">
            <p>Exquisite Views</p>
          </div>
        </motion.div>
        <motion.div
          className="grid-item"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <img src={image2} alt="Tribal Expeditions" />
          <div className="overlay">
            <p>Tribal Expeditions</p>
          </div>
        </motion.div>
        <motion.div
          className="grid-item"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <img src={image3} alt="Wildlife Photography" />
          <div className="overlay">
            <p>Wildlife Photography</p>
          </div>
        </motion.div>
        <motion.div
          className="grid-item"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <img src={image4} alt="Best Vehicles" />
          <div className="overlay">
            <p>Best Vehicles</p>
          </div>
        </motion.div>
        <motion.div
          className="grid-item"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <img src={image5} alt="Ethical Advisors" />
          <div className="overlay">
            <p>Ethical Advisors</p>
          </div>
        </motion.div>
        <motion.div
          className="grid-item"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <img src={image6} alt="Luxury" />
          <div className="overlay">
            <p>Luxury</p>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="testimonials-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Our Guest Testimonials</h2>
        <Testimonials />
      </motion.section>

      <section className="landing-continuation">
        <motion.div
          className="image-section"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-content">
            <blockquote>
              <span className="highlight">
                TANZANIA - The jewel of African safaris
              </span>
              "The only man I envy is the man who has not yet been to Africa –
              for he has so much to look forward to."
              <footer>- Richard Mullin</footer>
            </blockquote>
            <motion.button
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              START YOUR JOURNEY
            </motion.button>
          </div>
          <img src={image7} alt="African Wildlife" />
        </motion.div>

        <motion.div
          className="grid-gallery"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            className="grid-item"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <img src={image8} alt="Wildlife"></img>
          </motion.div>
          <motion.div
            className="grid-item"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <img src={image9} alt="Safari Jeep"></img>
          </motion.div>
          <motion.div
            className="grid-item"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <img src={image10} alt="Silhouette"></img>
          </motion.div>
          <motion.div
            className="grid-item"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <img src={image11} alt="Nature Road"></img>
          </motion.div>
          <motion.div
            className="grid-item"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <img src={image12} alt="Rhino"></img>
          </motion.div>
          <motion.div
            className="grid-item"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <img src={image13} alt="Safari"></img>
          </motion.div>
        </motion.div>

        <motion.div
          className="image-container"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img src={image14} alt="Safari Jeep"></img>
        </motion.div>

        <motion.div
          className="quote-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <blockquote>
            "The only man I envy is the man who has not yet been to Africa – for
            he has so much to look forward to." "Travel isn’t always about the
            destination; it’s about the journey and the memories made along the
            way."
          </blockquote>
        </motion.div>
      </section>
    </div>
  );
};

export default LandingPage;
