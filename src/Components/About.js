// Updated About.js with icons for links and resume download button
import React from 'react';
import '../CSS/About.css';
import Lottie from 'react-lottie';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import animationData1 from '../Assets/Animation1.json';
import animationData2 from '../Assets/Animation2.json';
import animationData3 from '../Assets/Animation -2.json';
import animationData4 from '../Assets/Animation2.json';
import myImage from '../Assets/image.jpg';

const lottieOptions = [
  { animationData: animationData1 },
  { animationData: animationData2 },
  { animationData: animationData3 },
  { animationData: animationData4 },
];

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { animationIndex: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        animationIndex: (prevState.animationIndex + 1) % lottieOptions.length,
      }));
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { animationIndex } = this.state;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: lottieOptions[animationIndex].animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <section id="about" className="about">
        <div className="about-container">
          <div className="about-column">
            <div className="about-visual">
              <div className="animated-circle">
                <img
                  src={myImage}
                  alt="Developer Illustration"
                  className="about-image"
                />
              </div>
            </div>
            <div className="about-text">
              <h2 className="about-title">Ali Qaish</h2>
              <div className="social-links">
                <a href="https://github.com/AliQas-7" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/ali-qaish-410969210/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="social-icon" />
                </a>
                <a href="https://web.facebook.com/ali.qas.733" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="social-icon" />
                </a>
                <a href="https://www.instagram.com/ali_qas_07/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="social-icon" />
                </a>
                <a href="https://www.upwork.com/freelancers/~014db12247874ce631" target="_blank" rel="noopener noreferrer">
                  {/* <FaUpwork className="social-icon" /> */}
                </a>
              </div>
              <p className="about-description">
                "BS Software Engineering Student at Comsats University, Lahore, Pakistan. I am a Full Stack Developer with a passion for building user-friendly applications. I am a quick learner and a team player who is always eager to learn new technologies and frameworks. I have experience in developing web applications using React, Node.js, Express.js, and MongoDB. I am also familiar with Python, Django, and Flask. I am looking for opportunities to work on challenging projects and grow as a developer."
              </p>
              <p className="about-quote">
                "Passion, innovation, and problem-solving are the core of my journey."
              </p>
              <div className="resume-button-container">
                <a href="https://drive.google.com/file/d/1i9jcLGc6tWCwdIo2bfKh5mu7-4f59al-/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="resume-button">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          <div className="lottie-container">
            <Lottie options={defaultOptions} height={300} width={300} />
          </div>
        </div>
      </section>
    );
  }
}

export default About;
