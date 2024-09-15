// src/components/MyDiary.jsx

import React, { useState, useEffect } from 'react';
import '../css/myDiary.css';
import Diary4 from '../assets/diary4.jpg';
import Calendar from './calendar';
import HeartLine from '../assets/image.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

function MyDiary() {
  const [section, setSection] = useState('diaryIntro');
  const [images, setImages] = useState([]);
  const [showUploadButton, setShowUploadButton] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && user) {
      navigate('/dashboard'); // Redirect to dashboard if logged in
    }
  }, [isAuthenticated, user, navigate]);

  const handleLoginClick = () => {
    loginWithRedirect();
  };

  const handleLogoutClick = () => {
    logout({ returnTo: window.location.origin });
  };

  const handleNewEntryClick = () => {
    setSection('diaryIntro2');
    setShowUploadButton(true);
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleSaveClick = () => {
    setShowPopup(true);
    setSelectedDate(new Date().toISOString().split('T')[0]);
  };

  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className="diary">
      {section === 'diaryIntro' && (
        <>
          <div className="diaryIntro">
            <img src={Diary4} alt="Diary Page 1" className="diary4" />
            <p>
              "Guard your heart's secrets—where your feelings are safe, secure,
              and cherished."
            </p>
          </div>
          <div className="diarySec">
            {isAuthenticated ? (
              <button className="loginButton" onClick={handleLogoutClick}>
                Logout
              </button>
            ) : (
              <button className="loginButton" onClick={handleLoginClick}>
                Login
              </button>
            )}
          </div>
        </>
      )}
      {section === 'diaryIntro1' && (
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
      {section === 'diaryIntro2' && (
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
                style={{ display: 'none' }}
                multiple
                onChange={handleImageUpload}
              />
              <div className="buttonContainer">
                <button
                  className="uploadButton"
                  onClick={() => document.getElementById('uploadPicture').click()}
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
