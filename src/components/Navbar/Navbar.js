import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";


export default function Navbar() {
  let location = useLocation();

  const search = async()=>{
    const  inputValue = document.getElementById("inputValue").value; 

    const results  = await fetch("https://unsplash.com/photos/Yu0e-xuWoFI/"+inputValue)
  }


  return (
    <>
      {location.pathname === "/search" ? (  
        <div className={`d-flex row col-12 mx-0 px-5  ${styles.navbar}`}>
          <div className="col-5 px-0 mx-0  ">
            <Form  className="d-flex mx-0 ">
              <input
              id="inputValue"
              onChange={(e)=>search()}
                type="search"
                placeholder="What do you want to listen to ?"
                className="me-2  rounded-pill px-5 py-2"
                aria-label="Search"
              />
            </Form>
          </div>
          <div className="col-5  d-flex h-100 justify-content-between align-items-center ">
            <ul className="list d-flex w-100 h-100 mt-3 justify-content-end  align-items-center pr-5 text-light  fw-bold ">
              <li className="list-group-item  me-5    ">Premium</li>
              <li className="list-group-item me-5   ">Support</li> 
              <li className="list-group-item  me-5    ">Download</li>
            </ul>
           
          </div>
             
          <div className="col-2 px-0 d-flex justify-content-between align-items-center mx-0 text-light  fw-bold "> 
          |
            <button className="bg-transparent border-0 text-light  fw-bold" >Sign Up</button>
            <Button variant="light rounded-pill fw-bold py-2 px-4 ">Log in</Button>
          </div>  
        </div>
      ) : (

        <div className={`d-flex px-5 justify-content-end  ${styles.navbar}`}>
          <div className="col-5  d-flex h-100 justify-content-between align-items-center ">
            <ul className="list d-flex w-100 h-100 mt-3 justify-content-end  align-items-center pr-5 text-light  fw-bold ">   
              <li className="list-group-item  me-5    ">Premium</li>
              <li className="list-group-item me-5   ">Support</li> 
              <li className="list-group-item  me-5    ">Download</li>
            </ul>
           
          </div>
             
          <div className="col-3 px-0 d-flex justify-content-between align-items-center mx-0 text-light  fw-bold "> 
          |
            <button className="bg-transparent border-0 text-light  fw-bold" >Sign Up</button>
            <Button variant="light rounded-pill fw-bold py-2 px-4 ">Log in</Button>
          </div>  
        </div>
   

      )}
    </>
  );
}
