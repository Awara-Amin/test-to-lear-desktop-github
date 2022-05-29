import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function LoadingBox() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

// <div className='loading'>
//     <li className="fa fa-spinner fa-spin"></li> Loading ...
// </div>
