import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import './Login.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function login() {
  return (
    <>
    <Navbar/>
    <div className="login">
      <div className="form-login">
        <h1 className="text-uppercase">Login</h1>
        <form action="form" className="form">
          <label htmlFor="email" className="text-black-50">Email*</label>
          <input type="email" />
          <label htmlFor="password" className="text-black-50">Password*</label>
          <input type="password" />
          <button className="login-btn m-3" type="submit">Login</button>
          <p>Do not have an account ! <Link to="/register">Create here</Link>.</p>
        </form>
      </div>
    </div>
    </>
  );
}

export default login;
