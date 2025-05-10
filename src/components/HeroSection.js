import React from 'react';
import profilePic from '../assets/Shruti_photo.jpg'; // Adjust the image path

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Shruti Jha</h1>
        <p>A passionate Biomedical and Robotics Engineering student focused on Frontend Development</p>
        <img src={profilePic} alt="Shruti Jha" className="profile-img" />
      </div>
    </section>
  );
};

export default HeroSection;
