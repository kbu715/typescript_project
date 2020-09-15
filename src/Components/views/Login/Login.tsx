import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="login-body">
            <form className="form-container">
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
              <div className="btn-group">
                <button type="submit" className="login-btn">
                  Sumbit
                </button>
                <button type="submit" className="forgot-btn">
                  Forgot?
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
