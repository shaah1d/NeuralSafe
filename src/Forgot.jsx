import React from 'react';
import NavbarforHero from './NavbarforHero';
import { useNavigate } from 'react-router-dom';

function Forgot() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    // Navigate to the desired route when the button is clicked
    navigate('/');
  };

  return (
    <>
      <NavbarforHero />
      <div className="flex justify-center">
        <div className="card bg-primary text-primary-content w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Forgot Password?</h2>
            <p>Please contact the developer to get the password access for the website</p>
            <div className="card-actions justify-end">
              <button className="btn" onClick={handleContactClick}>
                Click to contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgot;
