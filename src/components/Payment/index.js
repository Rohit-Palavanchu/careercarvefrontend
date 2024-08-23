import React from 'react';
import Header from '../Header';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css'; 

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  const { student_name, area_of_interest, duration, premium_service } = formData || {};

  const ratePerMinute = 30;
  const gstRate = 0.18; // 18% GST
  const totalCost = duration ? duration * ratePerMinute : 0;
  const gstAmount = totalCost * gstRate;
  const finalAmount = totalCost + gstAmount;

  const handleHomeClick =async () => {
    try {
        const response = await fetch('http://localhost:3000/api/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (data.error) {
            navigate('/fail');
        } else {
          navigate('/success', { state: { bookingId: data.booking_id } });
        }
      } catch (error) {
        navigate('/fail');
      }
  };

  return (
    <>
      <Header />
      <div className="container text-center my-5">
        <h1 className="display-4 mb-4 text-primary">Payment Information</h1>
        <p className="lead text-primary">Here is your billing information:</p>
        <div className="card bg-light border-primary mb-4 mx-auto" style={{ maxWidth: '600px' }}>
          <div className="card-body">
            <h5 className="card-title text-primary">Billing Details</h5>
            <p className="card-text"><strong>Student Name:</strong> {student_name}</p>
            <p className="card-text"><strong>Area of Interest:</strong> {area_of_interest}</p>
            <p className="card-text"><strong>Duration:</strong> {duration} minutes</p>
            <p className="card-text"><strong>Premium Service:</strong> {premium_service ? 'Yes' : 'No'}</p>
            <hr />
            <p className="card-text"><strong>Cost for {duration} minutes:</strong> ₹{totalCost}</p>
            <p className="card-text"><strong>GST (18%):</strong> ₹{gstAmount.toFixed(2)}</p>
            <h5 className="card-text text-primary"><strong>Total Amount:</strong> ₹{finalAmount.toFixed(2)}</h5>
          </div>
        </div>
        <button className="btn btn-primary" onClick={handleHomeClick}>
          Proceed to Payment
        </button>
      </div>
    </>
  );
};

export default Payment;
