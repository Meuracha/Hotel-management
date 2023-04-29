import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error from '../components/Error';
import Success from "../components/Success";

function Registercreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setsuccess] = useState(false);

  const [isValidated, setIsValidated] = useState(false);


  const nameRegex = /^[A-Za-z0-9]{4,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  function validateInputs() {
    if (nameRegex.test(name) && emailRegex.test(email) && passwordRegex.test(password) && password === cpassword) {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }
  }

  async function register() {
    const user = {
      name,
      email,
      password,
      cpassword,
    };

    try {
      setLoading(true);
      const result = await axios.post("/api/users/register", user);
      setLoading(false);
      setsuccess(true);
      console.log(result);

      setname('')
      setemail('')
      setpassword('')
      setcpassword('')
      // window.location.href='/login' 
    
      // Redirect to login page
      // window.location.href = "/login";
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  }

  function handleRegisterClick(e) {
    e.preventDefault();
    if (isValidated) {
      register();
    } else {
      alert("Please fill out all fields correctly.");
    }
  }

  function Showpassword() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <div>

      {loading && (<Loader/>)}
      {error && (<Error/>)}
     

      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
        {success && (<Success message= 'Registration success' />)}
          <div className="bs">
            <h2>Register</h2>

            <div class="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="name"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                  validateInputs();
                }}
              />
              <span class="input-group-text">Ex. Dechawat </span>
            </div>

            <div class="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                  validateInputs();
                }}
              />
              <span class="input-group-text">@example.com</span>
            </div>

            <input
              type="password"
              className="form-control"
              placeholder="password"
              id="myInput"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
                validateInputs();
              }}
            />

            <input
              type="password"
              className="form-control"
              placeholder="confirm password"
              id="myInput"
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
                validateInputs();
              }}
            />

            <div className="text-start">
              <label>
                <input type="checkbox" onClick={Showpassword} /> Show Password
              </label>
            </div>

            <div className="text-center">
              {/* <a href="/login"> */}
                <button className="btn btn-primary mt-3" onClick={handleRegisterClick} >
                  Register
                </button>
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registercreen;
