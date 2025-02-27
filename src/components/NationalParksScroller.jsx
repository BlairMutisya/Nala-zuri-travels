import React, { useEffect, useRef } from "react";
import "./NationalParksScroller.css";

const nationalParksData = [
  { name: "Maasai Mara National Park", link: "/parks/maasai-mara" },
  { name: "Amboseli National Park", link: "/AmboseliNationalPark" },
  { name: "Lake Nakuru National Park", link: "/LakeNakuru" },
  { name: "Tsavo East National Park", link: "/TsavoEastNationalParkPage" },
  { name: "Tsavo West National Park", link: "/TsavoWestNationalParkPage" },
  { name: "Nairobi National Park", link: "/parks/nairobi" },
  { name: "Aberdare National Park", link: "/parks/aberdares" },
  { name: "Samburu National Reserve", link: "/parks/samburu" },
  { name: "Mount Kenya National Park", link: "/parks/mount-kenya" },
  { name: "Hell's Gate National Park", link: "/parks/hells-gate" },
];

const NationalParksScroller = () => {
  const scrollRef = useRef(null);
  const offset = useRef(0);
  const scrollSpeed = 0.5; // Slow and smooth
  const itemHeight = 50;
  const totalHeight = nationalParksData.length * itemHeight;

  useEffect(() => {
    const scrollList = () => {
      if (scrollRef.current) {
        offset.current += scrollSpeed; // Move downward

        if (offset.current >= totalHeight / 2) {
          offset.current = 0; // Reset for seamless scrolling
        }

        scrollRef.current.style.transform = `translateY(-${offset.current}px)`;
      }
      requestAnimationFrame(scrollList);
    };

    requestAnimationFrame(scrollList);
  }, []);

  return (
    <div className="hero-ticker hero-ticker--enabled">
      <ul ref={scrollRef} className="hero-ticker__list">
        {/* Original List + Duplicate for Smooth Infinite Loop */}
        {[...nationalParksData, ...nationalParksData].map((park, index) => (
          <li key={index} className="hero-ticker__list-item">
            <a href={park.link}>{park.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NationalParksScroller;
