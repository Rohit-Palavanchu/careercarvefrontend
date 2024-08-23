import React from 'react';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';

const BookingFail = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <>
      <Header />
      <div className="container text-center my-5">
        <h1 className="display-4 mb-4">Booking Failed</h1>
        <p className="lead text-danger">Oops, can't book now.</p>
        <img
          src="https://via.placeholder.com/400x300?text=Oops%21"
          alt="Oops, can't book now"
          className="img-fluid mb-4"
        />
        <button className="btn btn-primary" onClick={handleHomeClick}>
          Back To Home
        </button>
      </div>
    </>
  );
};

export default BookingFail;
