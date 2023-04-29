import React, { useState } from "react";
import axios from "axios";

const ChangePasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setNewPassword] = useState("");

  const handleChangePassword = async () => {
    try {
      const res = await axios.post("/api/users/changepassword", {
        email,
        password,
      });
      console.log(res.data); // log success message or handle it however you like
    } catch (error) {
      console.log(error.response.data); // log error message or handle it however you like
    }
  };

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
          <div className="bs">
            <h2>Change Password</h2>

            <label>Email:</label>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>New Password:</label>
            <input
              type="password"
              className="form-control"
              id="myInput"
              value={password}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <div className="text-start">
              <label>
                <input type="checkbox" onClick={Showpassword} /> Show Password
              </label>
            </div>

            <div className="text-center">
              <button
                className="btn btn-primary mt-3"
                onClick={handleChangePassword}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordScreen;
