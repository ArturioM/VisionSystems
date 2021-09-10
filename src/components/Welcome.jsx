import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import photo from '../images/photo.png';
import frame from '../images/frame.png';
import group from '../images/group.png';
import rectangle1 from '../images/rectangle1.png';
import rectangle2 from '../images/rectangle2.png';
import rectangle3 from '../images/rectangle3.png';
import rectangle4 from '../images/rectangle4.png';

function Welcome() {
  return (
    <div className="container">
      <div className="container-verification">
        <div className="container-verification__heading">Face Verification</div>
        <div className="container-verification__text">
          Face verification is the task of comparing a candidate face to
          another, and verifying whether it is a match. It is a one-to-one
          mapping: you have to check if this person is the correct one
        </div>
        <Link to="/main">
          <Button className="container-verification__button" />
        </Link>
      </div>
      <div className="container-img">
        <img className="container-img__photo" src={photo} alt="photo" />
        <img className="container-img__frame" src={frame} alt="frame" />
        <img className="container-img__group" src={group} alt="group" />
        <img
          className="container-img__rectangle1"
          src={rectangle1}
          alt="rectangle1"
        />
        <img
          className="container-img__rectangle2"
          src={rectangle2}
          alt="rectangle2"
        />
        <img
          className="container-img__rectangle3"
          src={rectangle3}
          alt="rectangle3"
        />
        <img
          className="container-img__rectangle4"
          src={rectangle4}
          alt="rectangle4"
        />
      </div>
    </div>
  );
}

export default Welcome;
