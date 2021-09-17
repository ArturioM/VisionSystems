import React from 'react';
import { DragAndDrop } from '../components';
import Loader from './Loader/Loader';
import refresh from '../images/refresh.png';

function Verification(props) {
  const {
    files,
    setFiles,
    step,
    setStep,
    onClickButton,
    onClickCancel,
    onClickTryAgain,
  } = props;

  const onClickDeleteImage = () => {
    setFiles([]);
    setStep(0);
  };

  return (
    <div className="verification">
      <DragAndDrop
        files={files}
        setFiles={setFiles}
        onClickDeleteImage={onClickDeleteImage}
        step={step}
      />
      {(step === 0 || step === 4 || step === 3) && (
        <>
          <div className="verification-text">
            You can test the system. You have to pass the test for a quick
            verification of a person.
            <p className="verification-text__try">Try to fool the system!</p>
          </div>
          <div className="verification-bottom">
            <button
              className="verification-bottom__button"
              onClick={onClickButton}
            >
              Automatic check
            </button>
            <p className="verification-bottom__text">
              Without performing user actions
            </p>
          </div>
        </>
      )}
      {step === 1 && (
        <>
          <div className="verification-text__with-image">
            We will compare your photo and your image in real time. No action is
            required from you - the system will determine whether you are
            “alive” or not. Try to use the image on your phone to fool the
            system.
            <span className="verification-text_with-image-end">
              Most likely you will not be able to do it!
            </span>
          </div>
          <div className="verification-bottom__checking">
            <Loader />
            <p className="verification-bottom__checking-text">CHECKING...</p>
          </div>
          <p className="verification-bottom__cancel" onClick={onClickCancel}>
            Cancel
          </p>
        </>
      )}
      {step === 2 && (
        <>
          <div className="verification-text__with-image">
            We will compare your photo and your image in real time. No action is
            required from you - the system will determine whether you are
            “alive” or not. Try to use the image on your phone to fool the
            system.
            <span className="verification-text_with-image-end">
              Most likely you will not be able to do it!
            </span>
          </div>
          <div
            className="verification-bottom__try-again"
            onClick={onClickTryAgain}
          >
            <img
              className="verification-bottom__refresh"
              src={refresh}
              alt="refresh"
            />
            <p className="verification-bottom__try-again-text">TRY AGAIN</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Verification;
