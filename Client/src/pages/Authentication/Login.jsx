import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { MdOutlineArrowDownward } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useState } from'react';

const BlinkingArrow = () => (
  <span className="ml-2">
    <MdOutlineArrowDownward className="animate-bounce h-6 w-6 text-blue-400 inline" />
  </span>
);

const Login = () => {

  const [loginData, setLoginData] = useState({
    email: "",
    username: "",
    password: ""
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  }



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-sm p-6 bg-gray-800 rounded shadow">
        <div className="mb-4 w-full">
          <div className="text-center text-xl font-bold text-white flex items-center justify-center">
            Login here !!
            <BlinkingArrow />
          </div>
        </div>
        <div className="mb-4 w-full">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <MdEmail />
            <input type="text" className="grow w-full" placeholder="Email" />
          </label>
        </div>
        <div className="mb-4 w-full">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <FaUser/>
            <input type="text" className="grow w-full" placeholder="Username"  onChange={handleInputChange}/>
          </label>
        </div>
        <div className="mb-4 w-full">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <FaKey />
            <input type="password" className="grow w-full" placeholder="Password" onChange={handleInputChange} />
          </label>
        </div>
        <button className="btn btn-primary w-full mb-2">Login</button>
        <p>
          Don't have an account? &nbsp;
          <Link to={'/signup'} className='text-blue-400 underline'>Sign Up</Link>{" "}
        </p>
      </div>
    </div>
  )
}

export default Login
