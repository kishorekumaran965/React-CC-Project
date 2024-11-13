
// AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <h1>About HealthSync Medical Center</h1>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At HealthSync, our mission is to provide personalized and compassionate healthcare using
          the latest advancements in medical science. We strive to make world-class healthcare
          accessible and affordable to all, ensuring a healthier and happier community.
        </p>
      </section>

      <section className="history-section">
        <h2>Our History</h2>
        <p>
          Established in 2000, HealthSync Medical Center has been at the forefront of patient-centered
          care for over two decades. With our roots in general healthcare, we have expanded into various
          specialties, providing comprehensive care for all stages of life.
        </p>
        <p>
          From humble beginnings, HealthSync has grown into a state-of-the-art facility with a dedicated
          team of over 300 healthcare professionals.
        </p>
      </section>

      <section className="team-section">
        <h2>Meet Our Leadership Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <h3>Dr. Ananya Sharma</h3>
            <p>Chief Medical Officer</p>
            <p>
              A renowned cardiologist with over 20 years of experience, Dr. Sharma leads our medical team,
              ensuring the highest standards of patient care.
            </p>
          </div>
          <div className="team-member">
            <h3>Mr. Rajesh Kumar</h3>
            <p>Chief Executive Officer</p>
            <p>
              With a background in healthcare administration, Mr. Kumar has been instrumental in
              HealthSync's growth and innovation since 2015.
            </p>
          </div>
          <div className="team-member">
            <h3>Dr. Priya Mehta</h3>
            <p>Director of Research and Development</p>
            <p>
              Dr. Mehta heads our R&D department, focusing on bringing cutting-edge medical
              technology to our practice and improving patient outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Information</h2>
        <p>
          For inquiries, please reach out to us at <a href="mailto:contact@healthsyncmedical.com">contact@healthsyncmedical.com</a> or call us at +91 1234567890.
        </p>
        <p>
          Address: HealthSync Medical Center, 123 HealthSync Road, New Delhi, India.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
