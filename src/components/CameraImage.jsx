import React from 'react';
import faceDetected from '../images/faceDetected.png';
import congratulations from '../images/congratulations.png';
import fail from '../images/fail.png';
import Webcam from 'react-webcam';

function CameraImage(props) {
  const { files, step } = props;
  const verificationResult = () => {
    if (step === 4) {
      return <img className="camera__fail" src={fail} alt="fail" />;
    } else if (step === 2 || step === 3) {
      return (
        <img
          className="camera__success"
          src={congratulations}
          alt="congratulations"
        />
      );
    }
  };

  return (
    <div className="main-right">
      <div className="camera">
        <Webcam style={{ borderRadius: '7em/14em' }} width={646} height={372} />
        <div className="camera__container">
          {files.length === 1 ? (
            <img src={faceDetected} alt="faceDetected" />
          ) : (
            ''
          )}
          {verificationResult()}
        </div>
      </div>
    </div>
  );
}

export default CameraImage;
