import React from 'react';
import Header from '../Header';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingId } = location.state || {};

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <>
      <Header />
      <div className="container text-center my-5">
        <h1 className="display-4 mb-4">Booking Success</h1>
        <p className="lead text-success">Booking ID: {bookingId}</p>
        <button className="btn btn-primary" onClick={handleHomeClick}>
          Back To Home
        </button>
      </div>
    </>
  );
};

export default BookingSuccess;
