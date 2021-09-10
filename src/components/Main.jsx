import React, { useState } from 'react';
import Webcam from 'react-webcam';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
import { DragAndDrop } from '../components';
import Loader from './Loader/Loader';
import faceDetected from '../images/faceDetected.png';
function Main() {
  const [files, setFiles] = useState([]);
  const [toogle, setToogle] = useState(false);

  const handleToogle = () => {
    setToogle(!toogle);
  };

  const checkTrue = () => {
    if (toogle === false && files.length === 0) {
      return false;
    }
    if (toogle === true && files.length === 1) {
      return true;
    }
  };

  // toogle === false && files.length === 0 ?
  return (
    <div className="main">
      <div className="main-left">
        <DragAndDrop files={files} setFiles={setFiles} />
        {(toogle === false && files.length === 0) ||
        (toogle === false && files.length === 1) ||
        (toogle === true && files.length === 0) ? (
          <>
            <div className="main-text">
              You can test the system. You have to pass the test for a quick
              verification of a person.
              <p className="main-text__try">Try to fool the system!</p>
            </div>
            <div className="main-bottom">
              <button className="main-bottom__button" onClick={handleToogle}>
                Automatic check
              </button>
              <p className="main-bottom__text">
                Without performing user actions
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="main-text__with-image">
              We will compare your photo and your image in real time. No action
              is required from you - the system will determine whether you are
              “alive” or not. Try to use the image on your phone to fool the
              system. Most likely you will not be able to do it!
            </div>
            <div className="main-bottom__checking">
              <Loader />
              <p className="main-bottom__checking-text">CHECKING...</p>
            </div>
            <p className="main-bottom__cancel">Cancel</p>
          </>
        )}
      </div>
      <div className="main-right">
        <div className="main-camera">
          <Webcam width={646} height={372} />
          {toogle === true && files.length === 1 ? (
            <img
              className="main-check__faceDetected"
              src={faceDetected}
              alt="smile"
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;

// function Main() {
//   return (
//     <div className="main">
//       <div className="main-left">
//         <DndProvider backend={HTML5Backend}>
//           <Dnd />
//         </DndProvider>
//         <div className="main-text">
//           You can test the system. You have to pass the test for a quick
//           verification of a person. Try to fool the system!
//         </div>
//         <div className="main-bottom">
//           <button className="main-bottom__button">Automatic check</button>
//           <span>Without performing user actions</span>
//         </div>
//       </div>
//       <div className="main-right">
//         <div className="main-camera">
//           <Webcam width={646} height={372} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Main;
