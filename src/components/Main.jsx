import React, { useState, useEffect, useRef } from 'react';
import { CameraImage } from '../components';
import Verification from './Verification';

function Main() {
  const [files, setFiles] = useState([]);
  const [randomNumber, setRandomNumber] = useState(2);
  const [step, setStep] = useState(0);
  const timer = useRef(false);

  let getRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 2));
  };

  const onClickButton = () => {
    if (files.length !== 0) {
      setStep(1);
      timer.current = setTimeout(function () {
        setRandomNumber(2);
      }, 1000);
      timer.current = setTimeout(function () {
        getRandomNumber();
      }, 3000);
    }
  };

  const onClickCancel = () => {
    setRandomNumber(2);
    setStep(4);
  };

  const onClickTryAgain = () => {
    setStep(3);
  };

  useEffect(() => {
    if (step === 4) {
      clearTimeout(timer.current);
    }
  }, [step]);

  useEffect(() => {
    if (randomNumber === 1) {
      setStep(2);
    } else if (randomNumber === 0) {
      setStep(4);
    }
  }, [randomNumber]);

  return (
    <div className="main">
      <Verification
        files={files}
        setFiles={setFiles}
        onClickButton={onClickButton}
        onClickCancel={onClickCancel}
        step={step}
        setStep={setStep}
        onClickTryAgain={onClickTryAgain}
      />
      <CameraImage files={files} step={step} />
    </div>
  );
}

export default Main;
