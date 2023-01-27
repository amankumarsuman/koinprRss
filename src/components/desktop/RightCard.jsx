import { style } from "@mui/system";
import React from "react";
import styles from "./desktopstyle.module.css";

function RightCard({ image, heading, subheader, date, time, alt }) {

  const handleClick=(link)=>{
    
  }
  return (
    <div
      // style={{
      //   marginTop: "38px",
      //   marginLeft: "38px",
      //   marginBottom: "35px",
      //   marginRight: "21px",

      // }}
      onClick={()=>handleClick(heading)}
      className={styles.rightCardContainer}
    >
      <div style={{ display: "flex" }}>
        <img src={image} alt={alt} className={styles.image} />
        <span>
          <h1
          
            className={styles.heading}
          >
            {heading}
          </h1>
          <span
          
            className={styles.subHead}
          >
            {subheader}|{date}-{time}
          </span>
        </span>
      </div>
    </div>
  );
}

export default RightCard;
