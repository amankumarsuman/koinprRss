import React, { useEffect, useState } from "react";
// import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

import { styled } from "@mui/material/styles";

import Slide from "@mui/material/Slide";
import "./Header.scss";



import {
  Avatar,
  Box,
  Divider,
  Menu,
  MenuItem,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";

import { memo } from "react";
import { Link } from "react-router-dom";
// import { snackbarNotification } from "../../redux/snackbar.action";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const HandpickedHeader = () => {
  
const location=window.location.href
// console.log("params",location)

  















 





  return (
    <>
      <div className="hidden md:block lg:block">
        <Paper elevation={3} className="Header" style={{backgroundColor:"white",color:"black"}} >
          <Link style={{textDecoration:"none",color:"black"}} to="/">
          
          <div className="left">
            <span className="heading">Koinpr</span>
            <span className="subHeading">
              A <b>Todayq</b> Product
            </span>
          </div>
          </Link>
        
      <div className="right">
      <span className="myAccount">Download App</span>
      <span className="myAccount">Submit PR</span>

</div>
        </Paper>
      </div>
      <div >
        
          
       
      </div>

      {/* <div className="md:hidden lg:hidden sm:block"> */}
        {/* <MobileHeader handleTelegram={handleTelegram} /> */}
      {/* </div> */}
    </>
  );
};

export default memo(HandpickedHeader);
