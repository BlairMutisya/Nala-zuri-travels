import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { DateRange } from "react-date-range";
import addYears from "date-fns/addYears";
import { enGB } from "date-fns/locale"; // Import locale
import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css"; // Theme CSS
import "react-datepicker/dist/react-datepicker.css";
import image11 from "../assets/image11.jpg";
import image12 from "../assets/image12.jpg";
import image13 from "../assets/image13.jpg";
import image14 from "../assets/image14.jpg";
import image15 from "../assets/image15.jpg";
import image16 from "../assets/image16.jpg";
import image17 from "../assets/image17.jpg";
import image18 from "../assets/image18.jpg";
import "./AmboseliNationalPark.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faClock,
  faMapMarkerAlt,
  faUserTie,
  faLanguage,
  faMoneyBillWave,
  faBus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const AmboseliTourPage = () => {
  // Initialize Date Range
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: addYears(new Date(), 1), // Add 1 year
    key: "selection",
  });

  // Single date picker state
  const [startDate, setStartDate] = useState(new Date());
  // Navigation hook
  const navigate = useNavigate();
  return (
    <div className="park-container">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate("/")}>
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
            <img src={image17} alt="Gallery 1" className="thumbnail" />
            <img src={image17} alt="Gallery 2" className="thumbnail" />
            <img src={image18} alt="Gallery 3" className="thumbnail" />
          </div>
        </div>

        {/* Right Section - Tour Details */}
        <div className="tour-details">
          <h1 className="title">
            Lake Nakuru National Park – A Birdwatcher’s Paradise
          </h1>
          <p className="price">
            from <span>KSH 8,500</span>
          </p>
          <p className="description">
            Famous for its alkaline lake and spectacular flamingo populations,
            Lake Nakuru National Park is a must-visit for bird enthusiasts and
            nature lovers. The park is also a key rhino sanctuary, home to both
            black and white rhinos, as well as tree-climbing lions, leopards,
            and Rothschild’s giraffes. The picturesque landscape, with acacia
            woodlands and waterfalls, makes it one of the most scenic parks in
            Kenya.
          </p>

          {/* Booking Section */}
          <div className="booking-section">
            {/* <h3>Select a date</h3>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy-MM-dd"
            /> */}

            <h3>Select Date Range</h3>
            <DateRange
              locale={enGB} // Ensure locale is correctly passed
              onChange={(ranges) => setDateRange(ranges.selection)}
              ranges={[dateRange]}
              className="calendar"
            />

            <h3>Time</h3>
            <div className="time-selector">
              <input
                type="time"
                placeholder="Select the time"
                className="time-input"
              />
              {/* <MdAccessTime className="time-icon" /> */}
            </div>

            {/* Buy Now Button */}
            <button className="buy-button">Book Now</button>
          </div>
        </div>
      </div>

      {/* Tour Information Section */}
      <div className="tour-info-section">
        <h2 className="details-title">Tour Information</h2>
        <p className="details-description">
          Experience the breathtaking landscapes of Amboseli`` with guided
          tours, comfortable transport, and knowledgeable guides. Witness
          wildlife in their natural habitat while enjoying a relaxing and
          unforgettable journey.
        </p>

        <ul className="tour-info-list">
          <li>
            <FontAwesomeIcon icon={faUsers} className="icon" />
            <strong>Number of group:</strong> 15-30
          </li>
          <li>
            <FontAwesomeIcon icon={faClock} className="icon" />
            <strong>Duration:</strong> 15 hours and 45 minutes
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            <strong>Departing and arriving areas:</strong> Any location -
            Lake Nakuru National Park
          </li>
          <li>
            <FontAwesomeIcon icon={faUserTie} className="icon" />
            <strong>Guide service:</strong> Included
          </li>
          <li>
            <FontAwesomeIcon icon={faLanguage} className="icon" />
            <strong>Language:</strong> English, Swahili
          </li>
          <li>
            <FontAwesomeIcon icon={faMoneyBillWave} className="icon" />
            <strong>Entry Fees:</strong> Included
          </li>
          <li>
            <FontAwesomeIcon icon={faBus} className="icon" />
            <strong>Entry Transportation:</strong> Tour Vehicles/Plane
          </li>
        </ul>
      </div>
      {/* Gallery Section */}
      <div className="gallery-section">
        <h2 className="gallery-title">Photo Gallery</h2>
        <div className="gallery-grid">
          <img src={image11} alt="Amboseli View 1" className="gallery-image" />
          <img src={image12} alt="Amboseli View 2" className="gallery-image" />
          <img src={image13} alt="Amboseli View 3" className="gallery-image" />
          <img src={image14} alt="Amboseli View 4" className="gallery-image" />
          <img src={image15} alt="Amboseli View 5" className="gallery-image" />
          <img src={image16} alt="Amboseli View 6" className="gallery-image" />
          <img src={image17} alt="Amboseli View 7" className="gallery-image" />
          <img src={image18} alt="Amboseli View 8" className="gallery-image" />
        </div>
      </div>
    </div>
  );
};

export default AmboseliTourPage;
