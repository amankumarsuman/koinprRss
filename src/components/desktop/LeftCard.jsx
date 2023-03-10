import * as React from "react";
import { styled } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import image from "../assets/handsPicked.png";
import styles from "./desktopstyle.module.css";
import { Divider, Paper } from "@mui/material";

export default function DesktopLeftPaper({data}) {
  const [expanded, setExpanded] = React.useState(false);
console.log(data,data.length)
const time=data[data?.length-1]?.lastUpdated?.split(" ");
  return (
    <Paper className={styles.mainPaper} elevation={0}>
      <Typography
     
        // className={styles.handpickedHeadings}
      >
        {/* Hands Picked | {time} */}
        <span
        className={styles.handpickedHeadings}
        
        >

        {data[data.length-1]?.title} | {time&&time[4]},{time&&time[5]}
        </span>
        
        <Divider  />
        <div style={{ marginTop: "35px" }}>
          <img 
          // src={`http://localhost:5000/${data[4]?.image}`}
          src={image}
          width="90%"
           />
        </div>
      </Typography>
      <Typography sx={{ fontSize: "15px", fontWeight: 600, marginTop: "27px" }}>
        {data[data.length-1]?.news[0].news}
        <Divider />
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          fontWeight: 500,
          marginTop: "13.99px",
        }}
      >
       {/* {data[4]?.desc2} */}
       {data[data.length-1]?.news[1].news}

      </Typography>
      <Divider className={styles.divider} />
      <Typography className={styles.typo}>
      {/* {data[4]?.desc3} */}
      {data[data.length-1]?.news[2].news}


      </Typography>
      <Divider className={styles.divider} />
      <Typography className={styles.typo}>
      {/* {data[4]?.desc4} */}
      {data[data.length-1]?.news[3].news}


      </Typography>
      <Divider className={styles.divider} />
      <Typography className={styles.typo}>
      {/* {data[4]?.desc5} */}
      {data[data.length-1]?.news[4].news}


      </Typography>
    </Paper>
  );
}
