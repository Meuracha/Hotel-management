import React, { useState, useEffect } from "react";
import axios from "axios";

import Loader from "../components/Loader";
import Error from '../components/Error';

function Logincreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  async function login() {
    const user = {
      email,
      password,
    };

    try {

      setLoading(true);
      const result = await axios.post("/api/users/login", user);
      setLoading(false);

      //get currentvalue from register
      localStorage.setItem('currentUser', JSON.stringify(result.data));
      window.location.href='/home' 
    
    
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.message);
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
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
        {loading && (<Loader/>)}
        {error &&(<Error message='Invalid Credentials'/>)}

          <div className="bs">
            <h2>Login</h2>

            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <span className="input-group-text">@example.com</span>
            </div>

            <input
              type="password"
              className="form-control"
              placeholder="password"
              id="myInput"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />

            <div>
              <input
                className="text-start"
                type="checkbox"
                onClick={Showpassword}
              />{" "}
              Show Password
              <div className="text-end">
                <a href="/changepassword">Forgot your password?</a>
              </div>
            </div>

            <div className="text-center">
              <button className="btn btn-primary mt-3" onClick={login}>
                login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logincreen;
