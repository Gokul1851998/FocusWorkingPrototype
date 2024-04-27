import React from 'react';
import { Backdrop } from '@mui/material';
import { imageIcon } from '../../../config';

export default function Loader({ open, handleClose }) {
  const rotatingImageStyle = {
    width: '54px',
    height: '60px',
    animation: 'rotation 1s infinite linear',
    WebkitAnimation: 'rotation 1s infinite linear', // For Safari and Chrome
    MozAnimation: 'rotation 1s infinite linear', // For Firefox
    OAnimation: 'rotation 1s infinite linear', // For Opera
    msAnimation: 'rotation 1s infinite linear', // For IE
  };

  return (
    <>
      <style>
        {`
          @keyframes rotation {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 2 }}
        open={open}
        onClick={handleClose}
      >
        <img src={imageIcon} alt="Sang Solution Logo" style={rotatingImageStyle} />
      </Backdrop>
    </>
  );
}