import React, { useState } from "react";
import { Collapse, Button, CardBody, Card, Alert } from "reactstrap";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Tree1 from "../../../../../components/Tree/Tree1";
import { primaryButtonColor } from "../../../../../config";

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const toggleOpen = () => {
    setIsOpen(true);
    setHide(true);
  };
  const toggleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setHide(false);
    }, 400);
  };

  return (
    <React.StrictMode>
      {!hide ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: isOpen ? null : "80vh",
          }}
        >
          <Button
            color="primary"
            onClick={toggleOpen}
            style={{
              marginBottom: "1rem",
              padding: "0.3rem",
              fontSize: "0.6rem",
              height: "5rem",
              borderRadius: "0 0.5rem 0.5rem 0",
            }}
          >
            <KeyboardDoubleArrowRightIcon style={{ fontSize: "1rem" }} />
          </Button>
        </div>
      ) : null}

      <Collapse horizontal isOpen={isOpen} {...args}>
       
      <Alert
        style={{
          width: '300px',
          boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
          backgroundColor: primaryButtonColor,
          display: 'flex',
          alignItems: 'center',
      
        }}
      >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
        <Tree1 />
        <Button
        color="primary"
        onClick={toggleClose}
        style={{
            marginBottom: "1rem",
            padding: "0.3rem",
            fontSize: "0.6rem",
            height: "5rem",
            borderRadius: "0.5rem 0 0 0.5rem",
          }}
      >
             <KeyboardDoubleArrowLeftIcon style={{ fontSize: "1rem" }} />
      </Button>
    </div>
      </Alert>
      
      </Collapse>
    </React.StrictMode>
  );
}

export default Example;
