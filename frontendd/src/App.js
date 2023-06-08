import React, { useEffect, useState } from "react";
import Axios from "axios";
import Login from './login';
const App=()=>{
  const[data,setData]=useState("");

  const getData =async()=>{
    const response = await Axios.get("http://localhost:3000/getData");
    setData(response.data);
  }

  useEffect(()=>{
    getData()
  },[]);
  
  return(
    <><div>{data}</div><Login /></>
  )
}
export default App