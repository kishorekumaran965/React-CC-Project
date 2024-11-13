import React from 'react';
import './styles2.css';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <p className="services-description">
        At HealthSync Medical Center, we offer a comprehensive range of medical services designed to meet the diverse needs of our patients. Our dedicated team of healthcare professionals is committed to providing the highest quality care and support.
      </p>
      
      <h3 className="services-subtitle">Types of Scans Available</h3>
      <ul className="services-list">
        <li className="services-item"><strong>X-rays:</strong> Fast and effective imaging to diagnose fractures and other conditions.</li>
        <li className="services-item"><strong>Ultrasound:</strong> Non-invasive imaging using sound waves for examining organs and tissues.</li>
        <li className="services-item"><strong>CT Scans:</strong> Detailed cross-sectional images for comprehensive evaluation of various health issues.</li>
        <li className="services-item"><strong>MRIs:</strong> Advanced imaging technique for soft tissue evaluation, particularly for brain and spinal issues.</li>
        <li className="services-item"><strong>Mammography:</strong> Specialized X-ray for early detection of breast cancer.</li>
        <li className="services-item"><strong>Bone Density Scans:</strong> Assessment of bone health and risk of osteoporosis.</li>
      </ul>

      <h3 className="services-subtitle">Government Insurances Accepted</h3>
      <p className="services-description">
        We accept a variety of government health insurance plans to ensure that our services are accessible to all. Some of the government insurances accepted include:
      </p>
      <ul className="services-list">
        <li className="services-item">Medicare</li>
        <li className="services-item">Medicaid</li>
        <li className="services-item">CHIP (Children's Health Insurance Program)</li>
        <li className="services-item">TriCare</li>
        <li className="services-item">VA Health Care</li>
        <li className="services-item">State-specific programs</li>
      </ul>
      
      <h3 className="services-subtitle">Why Choose Our Services?</h3>
      <p className="services-description">
        Our state-of-the-art facilities are equipped with the latest technology, ensuring accurate and timely results. Our experienced medical staff is dedicated to providing personalized care, making your experience as comfortable as possible.
      </p>

      <Link to="/additional-services" className="services-link">View Additional Services</Link>
    </div>
  );
};

export default Services;
