import React, { useState } from "react";
import "../css/community.css";
// import BellIcon from "../assets/bell.png";
// import SettingIcon from "../assets/setting.png";
// import ShareIcon from "../assets/share.png";
// import ProfileIcon from "../assets/profile.png";
// import SearchIcon from "../assets/search.png";
import SupportIcon from "../assets/support.png";
import DepressionIcon from "../assets/fear.png";
import AnxietyIcon from "../assets/anxiety.png";
import PrideIcon from "../assets/love.png";
import CareIcon from "../assets/old.png";
import InsomniaIcon from "../assets/insomnia.png";
import Share1Icon from "../assets/share1.png";
import PlantIcon from "../assets/plant.png";
import BackButton from "../components/back_btn";
const categoryIcons = {
  "Addiction Support": SupportIcon,
  "Living with Depression": DepressionIcon,
  "Coping with Anxiety": AnxietyIcon,
  "Having Insomnia": InsomniaIcon,
  "Together with Pride": PrideIcon,
  "Life as Caregiver": CareIcon,
};

const dummyChats = {
  "Addiction Support": [
    {
      id: 1,
      user: "Anonymous",
      message: "I need help with addiction.",
      replies: [],
    },
    {
      id: 2,
      user: "Anonymous",
      message: "Can anyone share their experience?",
      replies: [],
    },
  ],
  "Living with Depression": [
    {
      id: 3,
      user: "Anonymous",
      message: "Feeling really down lately.",
      replies: [],
    },
    {
      id: 4,
      user: "Anonymous",
      message: "What helps you feel better?",
      replies: [],
    },
  ],
  // Add more chat entries for other categories
};

function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isChatsVisible, setChatsVisible] = useState(false);
  const [replyData, setReplyData] = useState({
    show: false,
    message: "",
    chatId: null,
  });
  const [newMessage, setNewMessage] = useState("");
  const [sendAnonymously, setSendAnonymously] = useState(false);
  const [sensitiveContentVisible, setSensitiveContentVisible] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setChatsVisible(false); // Hide chats when selecting a new category
    setSensitiveContentVisible(false); // Reset sensitive content visibility
  };

//   const toggleChatsVisibility = () => {
//     setChatsVisible(!isChatsVisible);
//   };

  const handleReplyClick = (chatId, message) => {
    setReplyData({ show: true, message, chatId });
  };

  const handleSendReply = () => {
    // Handle sending reply logic
    setReplyData({ show: false, message: "", chatId: null });
  };

  const handleSendMessage = () => {
    // Handle sending new message logic
    setNewMessage("");
  };

  const handleAnonymousToggle = () => {
    setSendAnonymously(!sendAnonymously);
  };

  const handleViewSensitiveContent = () => {
    setSensitiveContentVisible(true);
  };

  const chats = selectedCategory ? dummyChats[selectedCategory] : [];

  return (
    <>
      <div className="community_body">
        <BackButton target={"/dashboard"} />
        {/* <div className="navbar-com">
          <ul>
            <li className="site-name-com">MindHaven.</li>
            <li className="search-container-com">
              <div className="search-bar-com">
                <input type="text" placeholder="Search..." />
                <img src={SearchIcon} alt="Search Icon" />
              </div>
            </li>
            <li className="icon-container-com">
              <img src={BellIcon} alt="Bell Icon" className="icon-com" />
            </li>
            <li className="icon-container-com">
              <img src={SettingIcon} alt="Setting Icon" className="icon-com" />
            </li>
            <li className="icon-container-com">
              <img src={ShareIcon} alt="Share Icon" className="icon-com" />
            </li>
            <li className="icon-container-com">
              <img src={ProfileIcon} alt="Profile Icon" className="icon-com" />
            </li>
          </ul>
        </div> */}
        <div className="community-dashboard">
          <div className="commcol1">
            <div className="commGroup-com">
              <h3>GROUPS</h3>
            </div>
            <div className="commCat">
              {Object.keys(categoryIcons).map((category) => (
                <div
                  key={category}
                  className={`cat1 ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  <img
                    src={categoryIcons[category]}
                    alt=""
                    className="CommIcon-com"
                  />
                  <h4 className="CommText-com">{category}</h4>
                </div>
              ))}
            </div>
            <div className="share-community-com">
              <img src={PlantIcon} alt="Plant Icon" className="planticon-com" />
              <h5 className="share-heading-com">
                Share this community <br /> with <br /> someone who needs
                support
              </h5>
              <img
                src={Share1Icon}
                alt="Share Icon"
                className="shareicon-com"
              />
            </div>
          </div>
          <div className="commcol2">
            <div className="cat-heading">
              {selectedCategory && (
                <>
                  <img
                    src={categoryIcons[selectedCategory]}
                    alt={selectedCategory}
                    className="CatHeadingIcon"
                  />
                  <h2 className="CatHeadingText-com">{selectedCategory}</h2>
                </>
              )}
            </div>
            <div
              className={`chat-container-com ${
                sensitiveContentVisible ? "" : "blurred"
              }`}
            >
              {!sensitiveContentVisible && (
                <div className="sensitive-content-overlay">
                  <p>Sensitive Content</p>
                  <button onClick={handleViewSensitiveContent}>View</button>
                </div>
              )}
              {sensitiveContentVisible && isChatsVisible && (
                <div className="chat-list">
                  {chats.map((chat) => (
                    <div key={chat.id} className="chat-item">
                      <p>
                        <strong>{chat.user}:</strong> {chat.message}
                      </p>
                      <button
                        onClick={() => handleReplyClick(chat.id, chat.message)}
                      >
                        Reply
                      </button>
                      {/* Display replies if any */}
                      {chat.replies.map((reply) => (
                        <div key={reply.id} className="chat-reply">
                          <p>
                            <strong>{reply.user}:</strong> {reply.message}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {replyData.show && (
              <div className="reply-popup">
                <p>
                  <strong>Reply to:</strong> {replyData.message}
                </p>
                <textarea placeholder="Type your reply here..."></textarea>
                <button onClick={handleSendReply}>Send Reply</button>
              </div>
            )}
            <div className="typing-bar">
              <div className="anonymous-container">
                <input
                  type="checkbox"
                  checked={sendAnonymously}
                  onChange={handleAnonymousToggle}
                />
                <label>Send Anonymously</label>
              </div>
              <div className="textarea-container-com">
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message here..."
                ></textarea>
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommunityPage;
