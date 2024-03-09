import { useState } from "react";
import Bgvideo from "../media/VN.mp4";
import "bootstrap/dist/css/bootstrap.min.css";
import "../login/logins.css";

function Login() {
  const [isContainerActive, setContainerActive] = useState(false);

  const toggleContainer = () => {
    setContainerActive(!isContainerActive);
  };

  return (
    <div>
      <body className="body-login">
        <video autoPlay loop muted className="back-video-login">
          <source src={Bgvideo} type="video/mp4" />
        </video>

        <div
          className={`container-login ${isContainerActive ? "active" : ""}`}
          id="container"
        >
          <div className="form-container-login sign-up-login">
            <form>
              <h1>Create Account</h1>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>

          <div className="form-container-login sign-in-login">
            <form>
              <h1>Sign In</h1>
              <span>or use your email password</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="/forgot_password">Forget Your Password?</a>
              <button>Sign In</button>
              <div>
                <button>Google</button>
              </div>
            </form>
          </div>

          <div className="toggle-container-login">
            <div className="toggle-login">
              <div className="toggle-panel-login toggle-left-login">
                <h1>Welcome!</h1>
                <p>Enter your personal details to use all</p>
                <button className="hidden" id="login" onClick={toggleContainer}>
                  Sign In
                </button>
              </div>

              <div className="toggle-panel-login toggle-right-login">
                <h1>Hello, Friend!</h1>
                <p>Register and joy me!</p>
                <button
                  className="hidden"
                  id="register"
                  onClick={toggleContainer}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Login;
