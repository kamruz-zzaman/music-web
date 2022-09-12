import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./Navbar.module.css";
export default function Navbar() {
 const currentURL = window.location.href;
  return (
    <> 
      {currentURL == "http://localhost:3000/search" ? (
        <div className={`d-flex row col-12 bg-dark  ${styles.navbar}`}>
          <div className=" col-9 ">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="What do you want to listen to ?"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="light">Search</Button>
            </Form>
          </div>
          <div className="col-3 d-flex justify-content-center">
            <Button variant="dark">Sign Up</Button>
            <Button variant="light">Log in</Button>
          </div>
        </div>
      ) : (
        
          <div className={`bg-dark d-flex justify-content-end ${styles.navbar}`}>
            <div className="col-3 d-flex justify-content-center">
            <Button variant="dark">Sign Up</Button>
            <Button variant="light">Log in</Button>
          </div>
          </div>
        
      )}
    </>
  );
}
