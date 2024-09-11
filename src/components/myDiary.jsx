import React, { useState, useEffect } from "react";
import "../css/myDiary.css";
import Diary4 from "../assets/diary4.jpg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginIcon from "../assets/login.png";
import Calendar from "./calendar";
import HeartLine from "../assets/image.png";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
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

function MyDiary() {
  const [section, setSection] = useState("diaryIntro");
  const [images, setImages] = useState([]);
  const [showUploadButton, setShowUploadButton] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); // Store the selected date
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const handleLoginClick = () => {
    setSection("diaryIntro1");
  };

  // Check if the user is already logged in
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        navigate("/dashboard"); // Redirect to dashboard if logged in
      }
    });
  }, [navigate]);

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
          setSection("diaryIntro1");
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
        setSection("diaryIntro1");
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

   const removeImage = (imageToRemove) => {
     setImages(images.filter((image) => image !== imageToRemove));
   };

//    const handleNewEntryClick = () => {
//      setSection("diaryIntro2");
//    };
   

  const handleNewEntryClick = () => {
    setSection("diaryIntro2");
    setShowUploadButton(true); // Show upload button when creating a new entry
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleSaveClick = () => {
    setShowPopup(true); // Show popup when saving
    // Mark the date in the calendar
    setSelectedDate(new Date().toISOString().split("T")[0]); // Set current date in YYYY-MM-DD format
  };

  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className="diary">
      {section === "diaryIntro" && (
        <>
          <div className="diaryIntro">
            <img src={Diary4} alt="Diary Page 1" className="diary4" />
            <p>
              "Guard your heart's secrets—where your feelings are safe, secure,
              and cherished."
            </p>
          </div>
          <div className="diarySec">
            <img src={LoginIcon} alt="Login Icon" className="loginIcon" />
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="floatingPassword"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FloatingLabel>
            <button className="loginButton" onClick={handleEmailLogin}>
              Login with Email
            </button>
            <button className="loginButton" onClick={handleGoogleLogin}>
              Login with Google
            </button>
          </div>
        </>
      )}
      {section === "diaryIntro1" && (
        <>
          <div className="diaryIntro">
            <Calendar selectedDate={selectedDate} />
            <button className="newEntry" onClick={handleNewEntryClick}>
              Create New Entry
            </button>
          </div>
          <div className="diarySec">
            <img src={HeartLine} alt="Diary Page 1" className="heart" />
            <h3 className="diaryPoem">
              कहना चाहता है दिल, पर लब ख़ामोश है, <br />
              जज़्बात जो हैं अंधेरों में, रौशनी से दूर है। <br />
              ये दुनिया ना समझे, ना देखे ये आँसू, <br />
              दिल के बोझ को हल्का करने का ये इकलौता रास्ता है। <br />
              सुनो, लिख दो अपनी कहानी, हर एहसास का किस्सा, <br />
              जो दर्द है, जो ख़ुशी है, सब कुछ लिखो यहाँ। <br />
              हर शब्द बनेगा तुम्हारी आवाज़, हर अक्षर एक दुआ, <br />
              डायरी के पन्नों पे, अपनी दुनिया बसा दो यहाँ।
            </h3>
            <img src={HeartLine} alt="Diary Page 1" className="heart" />
          </div>
        </>
      )}
      {section === "diaryIntro2" && (
        <div className="diaryContent">
          <textarea
            className="diaryTextarea newEntryTextarea"
            placeholder="Write your diary here..."
          ></textarea>
          {showUploadButton && (
            <>
              <input
                type="file"
                accept="image/*"
                id="uploadPicture"
                style={{ display: "none" }}
                multiple
                onChange={handleImageUpload}
              />
              <div className="buttonContainer">
                <button
                  className="uploadButton"
                  onClick={() =>
                    document.getElementById("uploadPicture").click()
                  }
                >
                  Upload Pictures
                </button>
                <button className="saveButton" onClick={handleSaveClick}>
                  Save
                </button>
              </div>
              <div className="imagePreviewContainer">
                {images.map((image, index) => (
                  <div key={index} className="imageWrapper">
                    <img
                      src={image}
                      alt={`Uploaded Preview ${index}`}
                      className="uploadedImage"
                    />
                    <button
                      className="removeImageButton"
                      onClick={() => removeImage(image)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Popup Modal */}
      <Modal show={showPopup} onHide={handleClosePopup}>
        <Modal.Header closeButton>
          <Modal.Title>Diary Saved</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your diary entry for {new Date().toLocaleDateString()} has been saved!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePopup}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MyDiary;
