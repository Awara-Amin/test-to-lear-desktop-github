import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

export default function Category(props) {
  const { category } = props;
  console.log("first props in Product.js");
  console.log(category._id);

  return (
    <Card className="card-2 exampleOurWrk">
      <img
        className="medium workImage"
        src={category.image}
        alt={category.name}
      />

      <Card.Body className="contentOurWork">
        <i class="fa fa-expand sizeOfIt"></i>
        <Card.Text className="textName">{category.name}</Card.Text>
        <Link to={`/search/category/${category.name}`}>View Category</Link>
      </Card.Body>
    </Card>
  );
}
