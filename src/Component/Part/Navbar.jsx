import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../Auth/Auth";
import '../common/routing.css'
// import "../component.css";

function Navbar() {
  
  const {isUser,userName,logOutEvent} = useAuth();

  return (
    <div className="navbar px-5 bg-dark text-white">
      <div className="logo">
        <h2>BLOGS</h2>
      </div>
      <div className="loginBar d-flex align-items-center">
        <span className="mx-3">Hello {userName ? userName :'User'} !</span>
        {
      isUser 
      ? <img src="https://picsum.photos/200" className="rounded-circle me-3" style={{width: '35px'}}
        alt="Avatar" />
      : ''
    }
        {
          isUser
          ? <button className="btn btn-danger" onClick={logOutEvent}>Log Out</button> 
          : <div>
            <button className="btn btn-danger mx-2">
              <Link to='/login' className="text-white text-decoration-none">Log In</Link>
            </button>
            <button className="btn btn-danger">
              <Link to='/sign-up' className="text-white text-decoration-none">Register</Link>
            </button>
            </div>
        }
        
      </div>
    </div>
  );
}

export default Navbar;
