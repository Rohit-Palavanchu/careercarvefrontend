import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import './index.css';

const Home = () => {
  const [name, setName] = useState('');
  const [interest, setInterest] = useState('');
  const [duration, setDuration] = useState(30);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeInterest = (e) => {
    setInterest(e.target.value);
  };

  const onChangeDuration = (e) => {
    setDuration(parseInt(e.target.value));
  };

  const onChangeIsChecked = (e) => {
    setIsChecked(e.target.checked); // Changed to .checked to handle checkbox state
  };

  const onSubmitForm = async (e) => {
    e.preventDefault(); // Prevent default form actions
    const formData = {
        student_name: name,
        area_of_interest: interest,
        duration: duration,
        premium_service: isChecked
    };
    if (!isChecked) {

      try {
        const response = await fetch('https://careercarvebackend-2.onrender.com/api/bookings', {
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
    }
    else{
        navigate('/payment', {state: {formData}})
    }
  };

  return (
    <>
      <Header />
      <center className="welcome-text">The Bright Future Awaits You</center>
      <div className="container mt-5 d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm form-card">
            <h2 className="text-center mb-4 request-form-heading">Mentorship Request Form</h2>
            <form onSubmit={onSubmitForm}>
              <div className="mb-3">
                <label htmlFor="studentName" className="form-label">Student Name</label>
                <input value={name} onChange={onChangeName} type="text" className="form-control" id="studentName" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="mentor" className="form-label">Area Of Interest</label>
                <select onChange={onChangeInterest} className="form-select" id="mentor" value={interest}>
                  <option value="" disabled hidden></option>
                  <option value="FMCG">FMCG</option>
                  <option value="Sales">Sales</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="E-commerce">E-commerce</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="duration" className="form-label">Duration</label>
                <select onChange={onChangeDuration} className="form-select" id="duration" required>
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                  <option value="60">60 minutes</option>
                </select>
              </div>
              <div className="mb-3 check-box-control">
                <input onChange={onChangeIsChecked} className="checkbox" type='checkbox' checked={isChecked} />
                <label className="ml-2 form-label">Opt For Premium Service</label>
              </div>
              <button type="submit" className="btn btn-primary w-100 submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
