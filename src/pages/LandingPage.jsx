import React from "react";
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
      <section className="hero-section">
        <div className="hero-content-wrapper">
          <h1 className="hero-heading">WHERE CAN WE TAKE YOU?</h1>
          <NationalParksScroller />
          <div className="hero-input-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search for a park"
            />
            <button className="search-btn">GO</button>
          </div>
        </div>
        <div className="scroll-arrow-icon" onClick={scrollToNextSection}>
          ⬇
        </div>
      </section>
      {/* About Section */}
      <section id="about-section" className="about-section">
        <h1 className="about-heading">
          We believe in safaris that touch the soul!
        </h1>
        <p className="about-description1">
          The Nalazuri Travels <em>Experience</em>; Your Pathways To{" "}
          <em>Limitless Adventures</em>
        </p>
        <p className="about-description">
          Your itinerary is thoughtfully designed to match your dreams, crafted
          by our local Kenyan team with extensive field expertise, logistical
          skill, and an intimate understanding of the destinations we recommend.
          Unlike office-based sales agents, we bring hands-on experience to
          every detail. We own vehicles, not camps, allowing us to focus
          entirely on curating your perfect safari, free from any bias toward
          specific accommodations. Our goal is simple: to take you to the best
          locations for an unforgettable experience.
        </p>
        <p className="about-description">
          Our goal is simple: to take you to the best locations for an
          unforgettable experience.
        </p>
        <div className="center-container">
          <a
            href="https://mackayafrica.com/inquire/"
            className="dream-list-btn"
          >
            DISCOVER
          </a>
        </div>
      </section>
      {/* Image Grid Section */}
      <section className="image-grid">
        <div className="grid-item">
          <img src={image1} alt="Exquisite Views" />
          <div className="overlay">
            <p>Exquisite Views</p>
          </div>
        </div>
        <div className="grid-item">
          <img src={image2} alt="Tribal Expeditions" />
          <div className="overlay">
            <p>Tribal Expeditions</p>
          </div>
        </div>
        <div className="grid-item">
          <img src={image3} alt="Wildlife Photography" />
          <div className="overlay">
            <p>Wildlife Photography</p>
          </div>
        </div>
        <div className="grid-item">
          <img src={image4} alt="Best Vehicles" />
          <div className="overlay">
            <p>Best Vehicles</p>
          </div>
        </div>
        <div className="grid-item">
          <img src={image5} alt="Ethical Advisors" />
          <div className="overlay">
            <p>Ethical Advisors</p>
          </div>
        </div>
        <div className="grid-item">
          <img src={image6} alt="Luxury" />
          <div className="overlay">
            <p>Luxury</p>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="section-title">Our Guest Testimonials</h2>
        <Testimonials />
      </section>
      {/* Continuation Section */}
      <section className="landing-continuation">
        <div className="container">
          <div className="text-content">
            <blockquote>

              <span className="highlight">
                NALAZURI - The jewel of African safaris
              </span>
              "The only man I envy is the man who has not yet been to Africa –
              for he has so much to look forward to."
              <footer>- Richard Mullin</footer>
            </blockquote>
            <button className="cta-button">WHEN AND WHERE</button>
          </div>
          <div className="image-section">
            <img src={image7} alt="African Wildlife" />
          </div>
        </div>

        <div className="grid-gallery">
          <div className="grid-item">
            <img src={image8} alt="Wildlife" />
          </div>
          <div className="grid-item">
            <img src={image9} alt="Safari Jeep" />
          </div>
          <div className="grid-item">
            <img src={image10} alt="Silhouette" />
          </div>
          <div className="grid-item">
            <img src={image11} alt="Nature Road" />
          </div>
          <div className="grid-item">
            <img src={image12} alt="Rhino" />
          </div>
          <div className="grid-item">
            <img src={image13} alt="Safari" />
          </div>
        </div>

        <div className="image-container">
          <blockquote>
            <span className="highlight">
              NALAZURI - The jewel of African safaris
            </span>
            "The only man I envy is the man who has not yet been to Africa – for
            he has so much to look forward to."
            <footer>- Richard Mullin</footer>
          </blockquote>
          <img src={image14} alt="Safari Jeep" />
        </div>

        <div className="quote-section">
          <blockquote>
            "The only man I envy is the man who has not yet been to Africa – for
            he has so much to look forward to." "Travel isn’t always about the
            destination; it’s about the journey and the memories made along the
            way."
          </blockquote>
        </div>
      </section>{" "}
      {/* Move the closing tag here */}
    </div>
  );
};

export default LandingPage

 
