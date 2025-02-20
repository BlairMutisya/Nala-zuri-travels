import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./NoTickets.css"; // Import CSS styles

const NoTickets = () => {
  return (
    <div className="no-tickets-container">
      <DotLottieReact
        src="https://lottie.host/26ccef09-0e14-4af4-8666-2e418ae4e3bd/xkHX1oIiYB.lottie"
        loop
        autoplay
        className="animation"
      />
      <p className="no-tickets-text">
        You don't have any tickets yet. Start planning your next trip!
      </p>
    </div>
  );
};

export default NoTickets;
