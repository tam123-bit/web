import React, { useContext, useState, useEffect } from "react";
import { Apicontext, Apidata } from "../Contextapi/Apidata";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { AiOutlineReload } from "react-icons/ai";
import { useLocation } from "react-router-dom";
const Searchterm = () => {
  const { API, Categories, phonelist, loading, setloading, option } =
    useContext(Apicontext);


  return (
    <div className="searchterm">
     
     
    </div>
  );
};

export default Searchterm;
