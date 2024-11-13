// BookAppointment.js
import React, { useState } from 'react';
import './styles3.css'; // Import the new CSS file

function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    department: '',
    doctor: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked successfully for ${formData.name} with Dr. ${formData.doctor}!`);
  };

  return (
    <div className="appointment-page">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="appointment-form">
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </label>
        <label>
          Department:
          <select name="department" value={formData.department} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Neurology">Neurology</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Dermatology">Dermatology</option>
          </select>
        </label>
        <label>
          Doctor's Name:
          <input type="text" name="doctor" value={formData.doctor} onChange={handleChange} required />
        </label>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default BookAppointment;
