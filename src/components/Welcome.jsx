import React from 'react';
import { Link } from 'react-router-dom';
import face from '../images/face.png';
import frame from '../images/frame.png';
import group from '../images/group.png';
import rectangle1 from '../images/rectangle1.png';
import rectangle2 from '../images/rectangle2.png';
import rectangle3 from '../images/rectangle3.png';
import rectangle4 from '../images/rectangle4.png';

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome-left">
        <div className="welcome-left__heading">Face Verification</div>
        <div className="welcome-left__text">
          Face verification is the task of comparing a candidate face to
          another, and verifying whether it is a match. It is a one-to-one
          mapping: you have to check if this person is the correct one
        </div>
        <Link
          to="/main"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <button className="welcome-left__button">Try it out for free</button>
        </Link>
      </div>
      <div className="welcome-right">
        <img className="welcome-right__face" src={face} alt="face" />
        <img className="welcome-right__frame" src={frame} alt="frame" />
        <img className="welcome-right__group" src={group} alt="group" />
        <img
          className="welcome-right__rectangle1"
          src={rectangle1}
          alt="rectangle1"
        />
        <img
          className="welcome-right__rectangle2"
          src={rectangle2}
          alt="rectangle2"
        />
        <img
          className="welcome-right__rectangle3"
          src={rectangle3}
          alt="rectangle3"
        />
        <img
          className="welcome-right__rectangle4"
          src={rectangle4}
          alt="rectangle4"
        />
      </div>
    </div>
  );
}

export default Welcome;
