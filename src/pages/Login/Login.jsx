import React, { useState } from "react";  // Importing necessary modules from React
import "./Login.css";  // Importing styles for the Login component
import logo from "../../assets/logo.png";  // Importing Netflix logo image
import { login, signup } from "../../firebase";  // Importing login and signup functions from firebase
import netflix_spinner from "../../assets/netflix_spinner.gif";  // Importing Netflix spinner image

// Functional component for Login
const Login = () => {
  // State variables for login/signup form
  const [signState, setSignState] = useState("Sign In");  // State for sign in/up mode
  const [name, setName] = useState("");  // State for name input
  const [email, setEmail] = useState("");  // State for email input
  const [password, setPassword] = useState("");  // State for password input
  const [loading, setLoading] = useState(false);  // State for loading spinner

  // Function to handle user authentication
  const user_auth = async (event) => {
    event.preventDefault();  // Prevent default form submission behavior
    setLoading(true);  // Set loading state to true
    if (signState === "Sign In") {  // Check sign in/up mode
      await login(email, password);  // Call login function with email and password
    } else {
      await signup(name, email, password);  // Call signup function with name, email, and password
    }
    setLoading(false);  // Set loading state to false
  };

  // JSX structure representing the Login component
  return loading ? (  // If loading state is true, show loading spinner
    <div className="login-spinner">
      <img src={netflix_spinner} alt="" />  {/* Netflix spinner image */}
    </div>
  ) : (
    <div className="login">  {/* Login container */}
      <img src={logo} className="login-logo" alt="" />  {/* Netflix logo */}
      <div className="login-form">  {/* Login form */}
        <h1>{signState}</h1>  {/* Sign in/up title */}
        <form>
          {signState === "Sign Up" ? (  // If signState is "Sign Up", show name input
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Your name"
            />
          ) : (
            <></>
          )}

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />
          <button onClick={user_auth} type="submit">
            {signState}
          </button>
          <div className="form-help">  {/* Form help section */}
            <div className="remember">  {/* Remember me checkbox */}
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>  {/* Need help link */}
          </div>
        </form>
        <div className="form-switch">  {/* Form switch section */}
          {signState === "Sign In" ? (  // If signState is "Sign In", show sign up link
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign up
              </span>
            </p>
          ) : (
            <p>  {/* If signState is "Sign Up", show sign in link */}
              Already have an account?{" "}
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign in
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;  // Exporting the Login component for use in other parts of the application
