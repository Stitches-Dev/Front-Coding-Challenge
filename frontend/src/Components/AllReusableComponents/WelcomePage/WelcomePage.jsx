import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css'
import Button from '../../Button/Button.js'
function WelcomePage() {
  const navigate = useNavigate();
  const text = "Start The Test"
  const color = "light blue"
  // const width = "30%"
  const handleClick = () => {
    navigate('/AboutYourselfOne')
  }
  const disabled = true;
  const textColor = "black"
  return (
    <div className="page-cotainer">
      <h1 className='page-title'>Welcome To Stitches Studios Free Career Test</h1>

      <div className='page-content'>
        <div className='test-specs'>
          <div className='test-spec'>
            <h2 className='spec-title'>+2,000</h2>
            <p className='spec-description'>Students Worldwide</p>
          </div>
          <div className='test-spec'>
            <h2 className='spec-title'>15 Min</h2>
            <p className='spec-description'>Is All You Need</p>
          </div>
          <div className='test-spec'>
            <h2 className='spec-title'>+60</h2>
            <p className='spec-description'>Majors</p>
          </div>
        </div>
      </div>

      <div className='start-button-div'>
        <h1>Are You Ready?</h1>
        <Button text={text} color={color}  onClick={handleClick} disable={disabled} textColor={textColor} />
      </div>
    </div>
  );
};

export default WelcomePage;
