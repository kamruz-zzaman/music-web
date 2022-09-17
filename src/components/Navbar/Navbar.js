import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

import { useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";


export default function Navbar({setGlobalSearchTerm,setGlobalLoading,setGlobalSelected}) {
  let location = useLocation();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
      setGlobalSelected(false)
      setGlobalLoading(true)
      const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/auto-complete',
        params: {term: data.term, locale: 'en-US'},
        headers: {
          'X-RapidAPI-Key': 'aa1221ee39msh79d9e0e4a9b8edap1fbbe8jsne685301197c6',
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        setGlobalSearchTerm(response.data.hints);
        setGlobalLoading(false)
      }).catch(function (error) {
        console.error(error);
        setGlobalLoading(false)
      });
    }
 
  return (
    <>
      {location.pathname === "/search" ? (
        <div className={` row col-lg-12 mx-0 px-0 px-md-5  ${styles.navbar}`}>
          <div className="col-6 col-md-5 px-0 mx-0  ">
            <form className="input-group rounded-pill" onChange={handleSubmit(onSubmit)}>
              <input
                className="form-control rounded-pill shadow-none"
                type="text"
                placeholder="What do you want to isten to?"
                {...register("term", { required: true, maxLength: 80 })} />
            </form>

          </div>
          <div className="d-none col-md-5  d-lg-flex h-100 justify-content-between align-items-center ">
            <ul className="list  d-lg-flex w-100 h-100 mt-3 justify-content-end  align-items-center pr-5 text-light  fw-bold ">
              <li className="list-group-item  me-5 ">Premium</li>
              <li className="list-group-item me-5 ">Support</li>
              <li className="list-group-item  me-5 ">Download</li>
            </ul>
          </div>
        </div>
      ) : (

        <div className={`d-flex px-5 justify-content-end  ${styles.navbar}`}>
          <div className="col-5  d-lg-flex h-100 justify-content-between align-items-center ">
            <ul className="list d-flex w-100 h-100 mt-3 justify-content-end  align-items-center pr-5 text-light  fw-bold ">
              <li className="list-group-item  me-5">Premium</li>
              <li className="list-group-item me-5">Support</li>
              <li className="list-group-item  me-5">Download</li>
            </ul>
          </div>

        </div>


      )}
    </>
  );
}

