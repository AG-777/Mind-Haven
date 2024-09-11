import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import "../css/login.css";
import Dashboard from "../components/dashboard";
import { useNavigate } from "react-router-dom";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwrQ6CSsrNJWOgP7-IbLRme0xbSjymLbE",
  authDomain: "mind-haven.firebaseapp.com",
  projectId: "mind-haven",
  storageBucket: "mind-haven.appspot.com",
  messagingSenderId: "137669779444",
  appId: "1:137669779444:web:c6937ae711ef146524e3a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function LoginPage() {
  console.log("Loaded Login");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Loaded Login");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const handleGoogleLogin = async (event) => {
    event.preventDefault();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);

      setTimeout(() => {
        // Close loading screen
        Swal.close();

        // Show success message
        Swal.fire({
          title: "Logged In",
          text: "Successfully!",
          icon: "success",
          showCancelButton: false,
          showConfirmButton: false,
          allowOutsideClick: false,
        }).then(() => {
          navigate("/dashboard");
        });
      }, 1000);
      setTimeout(() => {
        Swal.close();
      }, 1800);
    } catch (error) {
      const errorMessage = error.message;

      Swal.fire({
        title: "Error!",
        text: errorMessage,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleEmailLogin = async (event) => {
    event.preventDefault();
    try {
      Swal.fire({
        title: "Logging In...",
        html: "Please wait while we process your request.",
        allowOutsideClick: false,
        showCancelButton: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });

      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);

      Swal.close();
      Swal.fire({
        title: "Logged In",
        text: "Successfully!",
        icon: "success",
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        timer: 1000,
      }).then(() => {
        setEmail("");
        setPassword("");
        navigate("/dashboard");
      });
    } catch (error) {
      Swal.close();
      Swal.fire({
        title: "Error!",
        text: error.message || "An error occurred.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleEmailSignUp = async (event) => {
    event.preventDefault();
    try {
      Swal.fire({
        title: "Creating Account...",
        html: "Please wait while we process your request.",
        allowOutsideClick: false,
        showCancelButton: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });

      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(result.user);

      Swal.close();
      Swal.fire({
        title: "Account Created",
        text: "Successfully!",
        icon: "success",
        showCancelButton: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        timer: 1800,
      }).then(() => {
        setEmail("");
        setPassword("");
        navigate("/dashboard");
      });
    } catch (error) {
      Swal.close();
      Swal.fire({
        title: "Error!",
        text: error.message || "An error occurred.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  if (user != null)
    return (
      <div className="background">
        <div className={`container ${isSignUp ? "sign-up-mode" : ""}`}>
          <button className="back-btn" onClick={() => navigate("../")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </button>

          <div className="forms-container">
            {isSignUp ? (
              <form className="sign-up-form" onSubmit={handleEmailSignUp}>
                <h2 className="title">Sign up</h2>
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <input type="submit" className="btn3" value="Sign up" />
                <p className="social-text">Or</p>
                <div className="social-media">
                  <button
                    type="button"
                    className="solid btn2"
                    onClick={handleGoogleLogin}
                  >
                    Sign Up with Google
                  </button>
                </div>
              </form>
            ) : (
              <form className="sign-in-form" onSubmit={handleEmailLogin}>
                <h2 className="title">Sign in</h2>
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <input type="submit" value="Login" className="btn3" />
                <p className="social-text">Or</p>
                <div className="social-media">
                  <button
                    type="button"
                    className="solid btn2"
                    onClick={handleGoogleLogin}
                  >
                    Sign in with Google
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>Howdy, Stranger!</h3>
                <p>Sign up for an account and start your journey now!</p>
                <button className="btn transparent" onClick={handleSignUpClick}>
                  Sign up
                </button>
                <div className="image1"></div>
              </div>

              {/* <LoginIcon2 className="image" alt="Login Icon 2" height="48%" /> */}
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>Welcome Back!</h3>
                <p>To keep connected with us please login with your info</p>
                <button className="btn transparent" onClick={handleSignInClick}>
                  Sign in
                </button>
                <div className="image2"></div>
              </div>

              {/* <LoginIcon className="image" alt="Login Icon" height="48%" /> */}
            </div>
          </div>
        </div>
      </div>
    );
  else {
    return <Dashboard />;
  }
}

export default LoginPage;
