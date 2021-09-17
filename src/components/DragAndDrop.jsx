import React, { useMemo } from 'react';
import smile from '../images/smile.png';
import { useDropzone } from 'react-dropzone';
import deleteImage from '../images/deleteImage.png';
import background from '../images/background.png';

const baseStyle = {
  position: 'relative',
  width: '409px',
  height: '203px',
  margin: '0 0 30px 1px',
  borderColor: '#D0D0D0',
  background: 'rgba(229, 229, 229, 0.01)',
  border: '2px dashed #d0d0d0',
  boxSizing: 'border-box',
  borderRadius: '18px',
};

const acceptStyle = {
  borderColor: '#FF5524',
};

const rejectStyle = {
  borderColor: '#D0D0D0',
};

function DragAndDrop(props) {
  const { files, setFiles, onClickDeleteImage, step } = props;

  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragActive,
    isDragReject,
    open,
  } = useDropzone({
    maxFiles: 1,
    maxSize: 5000000,
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
    noClick: true,
    noKeyboard: true,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragActive ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragAccept, isDragReject, isDragActive],
  );

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img
          src={file.preview}
          style={{ borderRadius: '20px', height: '200px', width: '100%' }}
          alt="preview"
        />
      </div>
    </div>
  ));

  return (
    <div className="main-check">
      {files.length === 0 && (
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <img className="main-check__smile" src={smile} alt="smile" />
          <p className="main-check__text">Drag and drop an photo, or</p>
          <p className="main-check__browse" onClick={open}>
            Browse
          </p>
          <p className="main-check__size">jpeg, png maximum size: 5Mb</p>
        </div>
      )}
      {files.length === 1 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '409px',
            marginBottom: '28px',
          }}
        >
          <div style={{ position: 'relative' }}>
            {images}
            {step === 3 && (
              <div
                className="main-check__trashcan"
                onClick={onClickDeleteImage}
              >
                <img
                  className="main-check__background"
                  src={background}
                  alt="background"
                />
                <img
                  className="main-check__deleteImage"
                  src={deleteImage}
                  alt="deleteImage"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DragAndDrop;
