import React from "react";
import "./Signup.css";
function Signup() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="signup-body">
            <form className="form-container">
              <div className="signup-title">
                <h2>Sign Up</h2>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email..."
                className="form-group"
              />
              <input
                type="password"
                name="password"
                placeholder="Password..."
                className="form-group"
              />
              <input
                type="password"
                name="password-confirm"
                placeholder="Password Confirm"
                className="form-group"
              />
              <div className="btn-group">
                <button type="submit" className="signup-btn">
                  Sumbit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
