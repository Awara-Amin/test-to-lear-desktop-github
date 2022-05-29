import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
// import { useNavigate } from "react-router-dom";

export default function SearchBox(props) {
  // const navigate = useNavigate();
  const [name, setName] = useState("");
  // const [query, setQuery] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // we redirect user to here (this URL).
    // KAKA HERE, we dont search, we only redirect user to the search page
    props.history.push(name ? `/search/name/${name}` : `/search/name/${name}`);
    // props.history.push(`/search/?query=${query}`);

    // navigate(name ? `/search/?query=${name}` : "/search");
  };

  return (
    <Form className="d-flex me-auto" onSubmit={submitHandler}>
      <InputGroup>
        <FormControl
          type="text"
          name="q"
          id="q"
          onChange={(e) => setName(e.target.value)}
          placeholder="search products..."
          aria-label="Search Products"
          aria-describedby="button-search"
        ></FormControl>
        <Button variant="outline-primary" type="submit" id="button-search">
          <i className="fa fa-search"></i>
        </Button>

        {/* <div className="row"> */}
        {/* <input
          type="text"
          name="q"
          id="q"
          onChange={(e) => setName(e.target.value)}
        ></input> */}
        {/* <button className="primary" type="submit">
          <i className="fa fa-search"></i>
        </button> */}
        {/* </div> */}
      </InputGroup>
    </Form>
  );
}
