import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { DateRange } from "react-date-range";
import { enGB } from "date-fns/locale"; // Import locale
import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css"; // Theme CSS
import image1 from "../assets/image1.jpg";
import image15 from "../assets/image15.jpg";
import image16 from "../assets/image16.jpg";
import image17 from "../assets/image17.jpg";
import image18 from "../assets/image18.jpg";



import "./AmboseliTourPage.css";

const AmboseliTourPage = () => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  return (
    <div className="amboseli-container">
      {/* Back Button */}
      <button className="back-button">
        <FaArrowLeft className="icon" /> Back
      </button>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Section - Image and Gallery */}
        <div className="image-section">
          <img
            src={image15}
            alt="Amboseli National Park"
            className="main-image"
          />
          <div className="thumbnail-gallery">
            <img src={image16} alt="Gallery 1" className="thumbnail" />
            <img src={image17} alt="Gallery 2" className="thumbnail" />
            <img src={image18} alt="Gallery 3" className="thumbnail" />
          </div>
        </div>

        {/* Right Section - Tour Details */}
        <div className="tour-details">
          <h1 className="title">Amboseli National Park</h1>
          <p className="price">
            from <span>KSH 8,500</span>
          </p>
          <p className="description">
            Set against the majestic backdrop of Mount Kilimanjaro, Amboseli is famous for its large herds of elephants, some of the biggest in Africa. The park’s open plains, swamps, and woodlands provide a perfect setting for spotting diverse wildlife, including buffaloes, giraffes, zebras, and numerous bird species. Photographers and nature lovers are drawn to Amboseli for its dramatic landscapes and iconic elephant shots with Kilimanjaro in the background.

          </p>

          {/* Booking Section */}
          <div className="booking-section">
            <h3>Select a date</h3>
            <DateRange
              locale={enGB} // Ensure locale is correctly passed
              onChange={(ranges) => setDateRange(ranges.selection)}
              ranges={[dateRange]}
              className="calendar"
            />

            <h3>Time</h3>
            <div className="time-selector">
              <input type="text" placeholder="Select the time" />
              <MdAccessTime className="time-icon" />
            </div>

            {/* Buy Now Button */}
            <button className="buy-button">Book Now</button>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <h2 className="details-title">Details</h2>
    </div>
  );
};

export default AmboseliTourPage;
