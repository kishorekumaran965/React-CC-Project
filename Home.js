import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import './styles1.css';

function HomePage() {
  const navigate = useNavigate(); 

  const handleNavigateToBooking = () => {
    navigate('/book-appointment');
  };

  const handleNavigateToServices = () => {
    navigate('/additional-services'); 
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-links">
          <li><Link to="#home">Home</Link></li>
          <li>
            <button onClick={handleNavigateToServices} className="services-button">
              Services
            </button>
          </li>
          <li><Link to="#about">About Us</Link></li>
          <li><Link to="#contact">Contact</Link></li>
          <li>
            <button onClick={handleNavigateToBooking} className="booking-button">
              Book Appointment
            </button>
          </li>
        </ul>
      </nav>

      <img src="your-image-url.jpg" alt="HealthSync" className="homepage-image" /> {/* Replace with your image URL */}

      <div className="container">
        <section id="home">
          <h1>Welcome to HealthSync Medical Center</h1>
          <p>Your health, our priority. Our expert team provides compassionate and advanced care for a wide range of health needs.</p>
        </section>

        <section id="services">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Neurology</h3>
              <p>World-class care for neurological conditions and disorders including epilepsy, migraines, and stroke recovery.</p>
            </div>
            <div className="service-card">
              <h3>Cardiology</h3>
              <p>State-of-the-art cardiac care, from diagnostics to life-saving heart surgeries and rehabilitation.</p>
            </div>
            <div className="service-card">
              <h3>Pediatrics</h3>
              <p>Comprehensive care for infants, children, and adolescents, ensuring healthy development and growth.</p>
            </div>
            <div className="service-card">
              <h3>Orthopedics</h3>
              <p>Advanced treatment for bone, joint, and muscle injuries, offering surgeries and non-invasive therapies.</p>
            </div>
            <div className="service-card">
              <h3>Dermatology</h3>
              <p>Personalized skin care, from managing chronic conditions to aesthetic treatments.</p>
            </div>
          </div>
        </section>

        <section id="why-choose-us">
          <h2>Why Choose Us?</h2>
          <p>At HealthSync, we combine cutting-edge medical technology with a compassionate approach, ensuring the highest quality of care for all our patients.</p>
        </section>

        <section id="about">
          <h2>About HealthSync</h2>
          <p>Established in the heart of the city, HealthSync Medical Center is a multi-disciplinary healthcare provider offering personalized care for every patient. Our world-class facilities and expert medical professionals are committed to providing the best possible outcomes for a wide range of health conditions.</p>
        </section>

        <section id="contact">
          <h2>Contact Us</h2>
          <p>We are here to help. Reach us at <a href="mailto:contact@HealthSyncmedical.com">contact@HealthSyncmedical.com</a> or call +91 1234567890.</p>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
