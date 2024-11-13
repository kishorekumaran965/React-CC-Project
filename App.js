// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './HomePage';
import Auth from './Auth';
import Services from './Services';
import AdditionalServices from './AdditionalServices';
import BookAppointment from './BookAppointment';
import './styles.css';
import { UserProvider } from './UserContext';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/services" element={<Services />} />
          <Route path="/additional-services" element={<AdditionalServices />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
