import React, { useState, useEffect } from "react";
import "../css/community.css";
import CommVideo from '../assets/community.mp4';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ReactComponent as SupportIcon } from '../assets/support.svg';
// import { ReactComponent as ShareIcon } from '../assets/share.svg';
// import { ReactComponent as HealIcon } from '../assets/heal.svg';
// import { ReactComponent as InspireIcon } from '../assets/inspire.svg';
// import { ReactComponent as ConnectIcon } from '../assets/connect.svg';
// import { ReactComponent as CommunityIcon } from '../assets/commSec.svg';
// import { ReactComponent as ProbIcon } from '../assets/submitProb.svg';
import Person1 from "../community/boy.png";
import Person2 from "../community/man1.png";
import Person3 from "../community/pro1.webp";
import Person4 from "../community/pro2.webp";
import Person5 from "../community/man.png";
import Person6 from "../community/user.png";
import Person7 from "../community/woman.png";
import Person8 from "../community/woman1.png";
import Person9 from "../community/pro3.webp";
import Person10 from "../community/pro4.webp";


function CommunityPage() {
    const [section, setSection] = useState("CommIntro");
    const [poemVisible, setPoemVisible] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isSecFormVisible, setIsSecFormVisible] = useState(false); 
    const [name, setName] = useState("");
    const [problem, setProblem] = useState("");
    const [solution, setSolution] = useState(""); 
    const [currentProblem, setCurrentProblem] = useState(""); 
    const [isSaved, setIsSaved] = useState(false); 
    const [submittedProblems, setSubmittedProblems] = useState([]);

    const handleOpenForm = () => {
        setIsFormVisible(true);
    };

    const handleOpenSecForm = (problem) => {
        setCurrentProblem(problem);
        setIsSecFormVisible(true);
    };

    const handleSave = () => {
        if (name && problem) {
            const newProblem = { name: name, problem: problem };
            const updatedProblems = [...submittedProblems, newProblem];
            setSubmittedProblems(updatedProblems);
            localStorage.setItem("submittedProblems", JSON.stringify(updatedProblems));
            setIsSaved(true);
            setTimeout(() => {
                setIsSaved(false);
                setName("");
                setProblem("");
                setIsFormVisible(false);
            }, 3000);
        } else {
            alert("Please fill out both fields before saving.");
        }
    };

    const handleSecSave = () => {
        if (name && solution) {
            setIsSaved(true);
            setTimeout(() => {
                setIsSaved(false); 
                setName(""); 
                setSolution(""); 
                setIsSecFormVisible(false); 
            }, 3000);
        } else {
            alert("Please fill out both fields before saving.");
        }
    };

    const handlePopupClose = () => {
        setIsSaved(false); // Hide the popup
        setIsFormVisible(false); // Hide the form
        setIsSecFormVisible(false); // Hide the secondary form
    };

    const handleViewMore = () => {
        setSection("ProbsMore"); 
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const cards = [
        // { image: <SupportIcon />, title: "Support", content: "Find support from others who understand your journey." },
        // { image: <ShareIcon />, title: "Share", content: "Share your experiences and help others along the way." },
        // { image: <HealIcon />, title: "Heal", content: "Take steps towards healing in a caring community." },
        // { image: <InspireIcon />, title: "Inspire", content: "Inspire others with your story and be inspired in return." },
        // { image: <ConnectIcon />, title: "Connect", content: "Build meaningful connections that foster well-being." },
    ];

    const Probcards = [
        { image: Person1, name: "John Doe", problem: "I'm feeling anxious about work." },
        { image: Person2, name: "Jane Smith", problem: "Having trouble managing stress." },
        { image: Person3, name: "Sam Wilson", problem: "Dealing with loss and grief." },
        { image: Person4, name: "Emily Davis", problem: "I feel isolated and lonely." },
        { image: Person5, name: "Michael Brown", problem: "Facing challenges in my relationship." },
    ];

    const Probcards2 = [
        { image: Person6, name: "Olivia White", problem: "Struggling with self-confidence and self-worth." },
        { image: Person7, name: "Liam Johnson", problem: "Experiencing burnout and fatigue at work." },
        { image: Person8, name: "Sophia Martinez", problem: "Finding it hard to cope with anxiety in social situations." },
        { image: Person9, name: "Noah Clark", problem: "Battling depression and trying to find motivation." },
        { image: Person10, name: "Ava Thompson", problem: "Dealing with a recent breakup and feeling overwhelmed." },
    ];    

    useEffect(() => {
        setTimeout(() => {
            setPoemVisible(true);
        }, 500);
    }, []);

    useEffect(() => {
        const storedProblems = localStorage.getItem("submittedProblems");
        if (storedProblems) {
            setSubmittedProblems(JSON.parse(storedProblems));
        }
    }, []);

    return (
        <div className="Community">
            {section === "CommIntro" && (
                <>
                    <div className="Commban">
                        <video autoPlay muted loop className="video-bg">
                            <source src={CommVideo} type="video/mp4" />
                        </video>

                        <h2 className="heading animated-text">
                            <span>Connect, Share </span>
                            <span>and Heal: </span>
                            <span>A community for your Mental well-being.</span>
                        </h2>

                        <button className="join-btn" onClick={() => setSection("CommSecond")}>
                            Join the Community
                        </button>
                    </div>
                    <section>
                        <h3 className={`CommunityPoem ${poemVisible ? 'show' : ''}`}>
                            " दिल के बोझ को हल्का करो, <br />
                            बातें अपनी कह दो, <br />
                            यहाँ कोई न तुम्हें ताने देगा, <br />
                            बस हौसला बढ़ा देगा। <br />
                            जिन राहों पर तुम अकेले थे चले, <br />
                            अब साथ मिलकर सब सफ़र करेंगे ढले। "
                        </h3>
                    </section>
                    <section className='card-slider'>
                        <Slider {...sliderSettings}>
                            {cards.map((card, index) => (
                                <div key={index} className="card">
                                    <div className="card-content">
                                        <div className="card-image">{card.image}</div>
                                        <div className="card-text">
                                            <h3>{card.title}</h3>
                                            <p>{card.content}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </section>
                    <br /><br />
                </>
            )}

            {section === "CommSecond" && (
                <>
                    <div className="CommbanSecond">
                        <div className="mental-bg">
                            {/* <CommunityIcon className="community-svg" /> */}
                            <h2 className="heal-heading">
                                <span>Together We Heal: <br /> </span>
                                <span>Share Your <br /> Journey or Offer a <br />Helping Hand</span>
                            </h2>
                        </div>
                        <div className="submitProb">
                            <div className="submitProb-content">
                                {/* <ProbIcon className="submitProb-img" /> */}
                                <div className="submitProb-text">
                                    <h2>Share your story, Find support</h2>
                                    <p>"You're not alone. Open up to those who understand and find comfort in the community."</p>
                                    <button className="share-btn" onClick={handleOpenForm}>Open Up, Share Your Problem</button>
                                </div>
                            </div>
                        </div>

                        {isFormVisible && (
                            <div className="problem-form">
                                <h3>Share Your Problem</h3>
                                <label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter your name"
                                    />
                                </label>
                                <br />
                                <label>
                                    <textarea
                                        value={problem}
                                        onChange={(e) => setProblem(e.target.value)}
                                        placeholder="Describe the Mental health issue you're facing"
                                    />
                                </label>
                                <br />
                                <button className="save-btn" onClick={handleSave}>Save</button>
                            </div>
                        )}

                        {isSecFormVisible && (
                            <div className="problem-form">
                                <h3>Offer Your Solution</h3>
                                <label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter your name"
                                    />
                                </label>
                                <br />
                                <label>
                                    <textarea
                                        value={solution}
                                        onChange={(e) => setSolution(e.target.value)}
                                        placeholder={`Suggest solutions for: ${currentProblem}`}
                                    />
                                </label>
                                <br />
                                <button className="save-btn" onClick={handleSecSave}>Save</button>
                            </div>
                        )}

                        {isSaved && (
                            <div className="popup-message">
                                <span>Your response is saved!</span>
                                <button onClick={handlePopupClose} className="popup-close-btn">OK</button>
                            </div>
                        )}
                    </div>
                    <div className="prob-cards">
                        {Probcards.slice(0, 5).map((person, index) => (
                            <div key={index} className="prob-card">
                                <div className="prob-card-image">
                                    <img src={person.image} alt={`${person.name}`} />
                                </div>
                                <div className="prob-card-content">
                                    <h3>{person.name}</h3>
                                    <p>{person.problem}</p>
                                    <button className="prob-button" onClick={() => handleOpenSecForm(person.problem)}>Help Me</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="prob-button" onClick={handleViewMore}>View More</button>
                </>
            )}

{section === "ProbsMore" && (
    <>
        <h2 className="your-heading">Your Voice, Your Story</h2>
        <div className="prob-cardsMore">
            {submittedProblems.map((person, index) => (
                <div key={index} className="prob-card">
                    <div className="prob-card-image">
                        <img src={Person1} alt={`${person.name}`} />
                    </div>
                    <div className="prob-card-content">
                        <h3>{person.name}</h3>
                        <p>{person.problem}</p>
                        <button className="prob-button" onClick={() => handleOpenSecForm(person.problem)}>Help Me</button>
                    </div>
                </div>
            ))}
        </div>

        <h2 className="your-heading">Stories from our Community</h2>
        <div className="prob-cardsMore">
            {[...Probcards, ...Probcards2].map((person, index) => (
                <div key={index} className="prob-card">
                    <div className="prob-card-image">
                        <img src={person.image} alt={`${person.name}`} />
                    </div>
                    <div className="prob-card-content">
                        <h3>{person.name}</h3>
                        <p>{person.problem}</p>
                        <button className="prob-button" onClick={() => handleOpenSecForm(person.problem)}>Help Me</button>
                    </div>
                </div>
            ))}
        </div>
    </>
)}

        </div>
    );
}

export default CommunityPage;
