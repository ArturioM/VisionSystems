import React, { useState, useMemo } from 'react';
import smile from '../images/smile.png';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
  position: 'relative',
  width: '409px',
  height: '203px',
  margin: '0 0 30px 1px',
  borderColor: '#D0D0D0',
  background: '#e5e5e5',
  border: '2px dashed #D0D0D0',
  boxSizing: 'border-box',
  borderRadius: '18px',
};

const acceptStyle = {
  borderColor: '#FF5524',
};

const activeStyle = {
  borderColor: '#D0D0D0',
};

const rejectStyle = {
  borderColor: '#D0D0D0',
};

function DragAndDrop(props) {
  const { files, setFiles } = props;

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragActive,
    isDragReject,
    open,
  } = useDropzone({
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
          style={{ borderRadius: '20px', height: '203px' }}
          alt="preview"
        />
      </div>
    </div>
  ));

  return (
    <div className="main-check">
      {files.length === 0 ? (
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <img className="main-check__smile" src={smile} alt="smile" />
          <p className="main-check__text">Drag and drop an photo, or</p>
          <p className="main-check__click" onClick={open}>
            Browse
          </p>
          <p className="main-check__size">jpeg, png maximum size: 5Mb</p>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '409px',
            marginBottom: '26px',
          }}
        >
          {images}
        </div>
      )}
    </div>
  );
}
{
  /* <div {...getRootProps({ className: 'main-check' })}>
<img
  {...getInputProps()}
  className="main-check__smile"
  src={smile}
  alt="smile"
/>
<p>Drag and drop an photo, or Browse </p>
<h6>jpeg, png maximum size: 5Mb</h6>
</div> */
}

export default DragAndDrop;
// const mainCheck = {
//   position: 'relative',
//   width: '409px',
//   height: '203px',
//   margin: '0 0 30px 2px',
//   background: '#e5e5e5',
//   border: '2px dashed #d0d0d0',
//   borderColor: '#d0d0d0',
//   padding: '20px',
//   borderWidth: 2,
//   borderRadius: 20,
//   borderColor: '#eeeeee',
//   borderStyle: 'dashed',
//   backgroundColor: '#fafafa',
//   color: '#bdbdbd',
//   transition: 'border .24s ease-in-out',
// };

// const files = acceptedFiles.map(
//   (file) => (
//     (
//       <li key={file.path}>
//         {file.path} - {file.size} bytes
//       </li>
//     ),
//     (<img src={file.path} alt="file" />)
//   ),
// );
