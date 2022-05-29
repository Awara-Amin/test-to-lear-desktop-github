import React from "react";
import Alert from "react-bootstrap/Alert";

export default function MessageBox(props) {
  console.log("in MessageBox.js");
  console.log(props);
  // children for the MessageBox props is the error >>>> MessageBox variant="danger">{error} MessageBox
  return <Alert variant={props.variant || "info"}>{props.children}</Alert>;
}
