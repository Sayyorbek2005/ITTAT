// Motivation.jsx

import React from "react";
import "./motivation.css";
import { FaQuoteLeft } from "react-icons/fa";

const Motivation = () => {
  return (
    <section className="motivation">
      <div className="motivation__left">
        <div className="quote">
          <FaQuoteLeft />
        </div>

        <h1>
          Ustoz bilan birga harakat qilganda, har bir to‘siqni
          yengib o‘tish osonroq bo‘ladi.
        </h1>

        <div className="author">
          <h2>Millon Zahino</h2>
          <p>Behavioral Science</p>
        </div>
      </div>

      <div className="motivation__right">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="team"
        />
      </div>
    </section>
  );
};

export default Motivation;