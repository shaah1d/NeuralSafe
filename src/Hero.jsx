import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarforHero from './NavbarforHero';

function Hero() {
    const [userInput, setUserInput] = useState("");
    const [passInput, setPassInput] = useState("");
    const [wrong, setWrong] = useState(false);
    const navigate = useNavigate();
  
  
    const username = 'admin';
    const pass = '123';
  
    const handleSubmit = (evt) => {
      evt.preventDefault();
      if (userInput === username && passInput === pass) {
        navigate('/map');
      } else {
         setWrong(true);
      }
    }
  
    return (
      <>
     <NavbarforHero />
       <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between lg:w-full">
      <div className="text-center lg:text-left lg:flex-1 lg:mr-4 sm:ml-16">
        <h1 className="text-5xl font-bold">NeuralSafe</h1>
        <p className="py-6">
          Ensuring safety and justice in the digital realm. This platform is dedicated to monitoring, managing, and addressing cybercrimes targeting women. Our focus is on swift action, accurate reporting, and comprehensive support.
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:flex-1 lg:ml-4 sm:ml-12">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control" >
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input type="text" placeholder="username" className="input input-bordered"   value={userInput}
                    onChange={(e) => setUserInput(e.target.value)} required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered"   value={passInput}
                    onChange={(e) => setPassInput(e.target.value)} required />
            <label className="label">
              <a href="/forgot" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
            {wrong && 
            <p className='text-red-500 text-xs'>Incorrect username or password</p>}
          </div>
          <div className="form-control mt-6">
       
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </>
    )
}

export default Hero