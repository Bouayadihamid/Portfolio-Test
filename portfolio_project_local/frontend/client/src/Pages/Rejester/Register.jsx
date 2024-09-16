import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import './Register.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
    <Navbar/>
    <div className="register">
      <div className="register-form">
        <h1 className="text-uppercase">Register</h1>
        <form action="form" className="form">
          <label htmlFor="username" className="text-black-50">Full Name*</label>
          <input type="text" className="username"/>
          <label htmlFor="email" className="text-black-50">Email*</label>
          <input type="email" className="email" />
          <label htmlFor="password" className="text-black-50">Password*</label>
          <input type="password" className="password" />
          <button className="register-btn m-3">Register</button>
          <p>Already have an account ! <Link to="/login">Login here</Link>.</p>
        </form>
      </div>
    </div>
    </>
  );
};

export default Register;
