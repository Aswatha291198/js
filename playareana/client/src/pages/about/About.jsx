import React from "react";
import "./about.css";
import Footer from '../footer/Footer'

const AboutUs = () => {
  return (
    <>
    
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Playearena</strong> – India’s one-stop platform for booking sports turfs 
        and connecting players, turf owners, and sports enthusiasts.
      </p>

      <h2>Our Mission</h2>
      <p>
        We believe sports should be accessible to everyone. Our mission is to make
        it simple, fast, and reliable for players to book grounds and turfs,
        while helping turf owners grow their business.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>For Players:</strong> Easily find and book turfs in your city at your preferred time.</li>
        <li><strong>For Turf Owners:</strong> List your turf, manage bookings, and reach thousands of players.</li>
        <li><strong>For Everyone:</strong> Stay updated with tournaments, trainers, and events in your area.</li>
      </ul>

      <h2>Why Choose Playearena?</h2>
      <p>
        ✅ Hassle-free bookings <br />
        ✅ Verified turf partners <br />
        ✅ Transparent pricing <br />
        ✅ Growing sports community across India
      </p>

      <h2>Join the Movement</h2>
      <p>
        Whether you’re a passionate player, a turf owner, or someone who loves
        sports – Playearena is here to make the game more fun and connected.
        Together, let’s build India’s biggest sports community. 💪
      </p>
    </div>

<Footer/>    
    </>
    
  );
};

export default AboutUs;
