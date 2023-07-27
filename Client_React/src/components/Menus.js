import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
const Menus = () => {
  return (
    <ListGroup>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/"
        action
      >
        Home
      </Link>

      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/Chart"
        action
      >
        Chart
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/about"
        action
      >
        About
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/contact-us"
        action
      >
        Contact us
      </Link>
    </ListGroup>
  );
};
export default Menus;
