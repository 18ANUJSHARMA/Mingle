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

const Signup = () => {
  const [signupdata, setSignupData] = useState({
    email: "",
    fullname: "",
    password: "",
    confirmpassword: "",
    });
  
    const handleInputChange = (e) => {
      e.preventDefault();
      setSignupData({
        ...signupdata,
        [e.target.name]: e.target.value
      });
    }

    console.log(signupdata);



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-sm p-6 bg-gray-800 rounded shadow">
        <div className="mb-4 w-full">
          <div className="text-center text-xl font-bold text-white flex items-center justify-center">
            Signup here !!
            <BlinkingArrow />
          </div>
        </div>
        <div className="mb-4 w-full">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <MdEmail />
            <input type="text" name='email' className="grow w-full" placeholder="Email" onChange={handleInputChange}/>
          </label>
        </div>
        <div className="mb-4 w-full">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <FaUser/>
            <input type="text" name='fullname' className="grow w-full" placeholder="Enter Full Name" onChange={handleInputChange}/>
          </label>
        </div>
        <div className="mb-4 w-full">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <FaKey />
            <input type="password"  name='password'  className="grow w-full" placeholder="Password" onChange={handleInputChange}/>
          </label>
        </div>
        <div className="mb-4 w-full">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <FaKey />
            <input type="password" name='confirmpassword' className="grow w-full" placeholder="Confirm Password" onChange={handleInputChange}/>
          </label>
        </div>
        <button className="btn btn-primary w-full mb-2">Signup</button>
        <p>
          Already have an account? &nbsp;
          <Link to={'/login'} className='text-blue-400 underline'>Login</Link>{" "}
        </p>
      </div>
    </div>
  )
}

export default Signup
