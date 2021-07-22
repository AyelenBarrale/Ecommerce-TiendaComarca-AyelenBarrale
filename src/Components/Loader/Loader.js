import React from "react";

import { Spinner } from "react-bootstrap";

import "../Loader/Loader.css";

const Loader = () => {
  return (
    <>
      <Spinner animation='border' variant="secondary" role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </>
  );
};

export default Loader;
