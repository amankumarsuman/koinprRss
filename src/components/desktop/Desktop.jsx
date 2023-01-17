import { Divider, Grid, Paper, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import DesktopLeftPaper from "./LeftCard";
import RightCard from "./RightCard";
import image1 from "../assets/Right1.png";
import image2 from "../assets/Right2.png";
import image3 from "../assets/Right3.png";
import image4 from "../assets/Right4.png";
import image5 from "../assets/Right5.png";
import image6 from "../assets/Right6.png";
import image7 from "../assets/Right7.png";
// import image8 from "../assets/Right8.png";
import { Box } from "@mui/system";
import styles from "./desktopstyle.module.css";
import { useEffect } from "react";
// import axios from "../axios";
import { useState } from "react";
import axios from "../axios/axios";
import CategoryWiseNews from "./CategoryWiseNews";
function Desktop() {
  const [tabValue, setValue] = React.useState(0);
  const [feedData, setFeedData] = useState([])
  const [handPickedData, setHandpickedData] = useState([])
  const [rssFeed, setRssFeed] = useState()
  const [activeName, setActiveName] = useState(null)
  const [count, setCount] = useState(0);
  const [metaVerseData, setMetaVerseData] = useState()
  const [ethereumData, setEthereunData] = useState()
  const [bitcoinData, setBitcoinData] = useState()
  const [nftData, setNftData] = useState()
  const [cbdcData, setCbdcData] = useState()
   const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);
  
    const handleChangePage = (event, newPage) => {
      setPage(page+1);
    };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  //   useEffect(()=>{
  // axios.get("/api/getFeed").then((res)=>{
  //   // console.log(res)
  //   if(res?.status===200){
  //     setFeedData(res.data)
  //   }
  // })
  //   },[])
  //   useEffect(()=>{
  // axios.get("/api/getFeed").then((res)=>{
  //   // console.log(res)
  //   if(res?.status===200){
  //     setFeedData(res.data)
  //   }
  // })
  //   },[])
  // useEffect(() => {
    const getHandpickedData=()=>{

      axios.get("/api/handpicked", {
        headers: {
          token: "koinpratodayqproductrsstoken"
        }
      }).then((res) => {
        console.log(res)
        if (res?.status === 200) {
          setHandpickedData(res.data?.handpickedData)
        }
      })
    }
  // }, [])
  // const time=handPickedData[0]?.lastUpdated.split(" ");
  // console.log(time[4],time[5])
  // console.log(handPickedData[0]?.lastUpdated.split(" "),"handPickedData")
  // useEffect(()=>{

  const getFeed = async () => {

    const res = await axios.get("https://user.koinpr.com/api/rssFeed/get-all", {
      headers: {
        token: "koinpratodayqproductrsstoken"
      }
    })
    // .then((res)=>setRssFeed(res.data.data))
    const data = await res.data.data;
    setRssFeed(data)
    setActiveName(data[count]);

  }
  // },[])
  const getMetaVerseData = async () => {
    const res = await axios.get("https://user.koinpr.com/api/rssFeed/getMetaverseFeed", {
      headers: {
        token: "koinpratodayqproductrsstoken"
      }
    })
    // .then((res)=>setRssFeed(res.data.data))
    const data = await res.data.data;
    // console.log(res?.data,"resss")
    setMetaVerseData(data)
    // setActiveName(data[count]);
  }
  const getEthereumData = async () => {
    const res = await axios.get("https://user.koinpr.com/api/rssFeed/getEthereumFeed", {
      headers: {
        token: "koinpratodayqproductrsstoken"
      }
    })
    // .then((res)=>setRssFeed(res.data.data))
    const data = await res.data.data;
    // console.log(res?.data,"resss")
    setEthereunData(data)
    // setActiveName(data[count]);
  }
  const getBitcoinData = async () => {
    const res = await axios.get("https://user.koinpr.com/api/rssFeed/getBitcoinFeed", {
      headers: {
        token: "koinpratodayqproductrsstoken"
      }
    })
    // .then((res)=>setRssFeed(res.data.data))
    const data = await res.data.data;
    // console.log(res?.data,"resss")
    setBitcoinData(data)
    // setActiveName(data[count]);
  }
  const getNftData = async () => {
    const res = await axios.get("https://user.koinpr.com/api/rssFeed/getNFTFeed", {
      headers: {
        token: "koinpratodayqproductrsstoken"
      }
    })
    // .then((res)=>setRssFeed(res.data.data))
    const data = await res.data.data;
    // console.log(res?.data,"resss")
    setNftData(data)
    // setActiveName(data[count]);
  }
  const getCbdcData = async () => {
    const res = await axios.get("https://user.koinpr.com/api/rssFeed/getCBDCFeed", {
      headers: {
        token: "koinpratodayqproductrsstoken"
      }
    })
    // .then((res)=>setRssFeed(res.data.data))
    const data = await res.data.data;
    // console.log(res?.data,"resss")
    setCbdcData(data)
    // setActiveName(data[count]);
  }

  useEffect(() => {
    getHandpickedData()
    setCount(0);
    getFeed();
    getMetaVerseData();
    getBitcoinData();
    getEthereumData();
    getNftData();
    getCbdcData();
    // eslint-disable-next-line
  }, []);

console.log(rssFeed,"rssFeed")
  const handleNextItem = () => {
    setActiveName(rssFeed[count + 1]);
    setCount(count + 1);
    // console.log(rssFeed[count]);
  };
  // console.log(rssFeed,"feeed")
  // console.log(activeName,"activeName")
  return (
    <div className={styles.mainDiv}>
      <DesktopLeftPaper


        data={handPickedData}

      />
      <Paper className={styles.leftPaper} elevation={0}>
        <Typography className={styles.handPickedTypo}>
          {/* Hands Picked | {handPickedData[0].date} */}
          Straight From The World
        </Typography>
        <Divider variant="middle" />
        <Grid container>

          {rssFeed?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((item)=>(

          <Grid item xs={12} md={6}>
            <RightCard
              // heading={
              //   title
              //   // "FSB official draws comparison between Crypto market and collapse of Bank of Amsterdam"
              // }
              // alt={"fsb"}
              // subheader={"Cointelegraph"}
              // date={"23 Nov, 2022"}
              // time={"4:29 PM"}
              heading={
                  item?.title
                }
                alt={"fsb"}
                subheader={item?.creator}
                // date={"23 Nov, 2022"}
            date={`${item?.date.split(" ")[2]} ${item?.date.split(" ")[1]}, ${item?.date.split(" ")[3]}`}

                time={item?.date.split(" ")[4]}

              image={image1}
            />
          </Grid>
          ))}
          {/* <Grid item xs={12} md={6}>
            <RightCard
              heading={
                "FSB official draws comparison between Crypto market and collapse of Bank of Amsterdam"
              }
              alt={"fsb"}
              subheader={"Cointelegraph"}
              date={"23 Nov, 2022"}
              time={"4:29 PM"}
              image={image2}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <RightCard
              heading={
                "FSB official draws comparison between Crypto market and collapse of Bank of Amsterdam"
              }
              alt={"fsb"}
              subheader={"Cointelegraph"}
              date={"23 Nov, 2022"}
              time={"4:29 PM"}
              image={image3}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <RightCard
              heading={
                "FSB official draws comparison between Crypto market and collapse of Bank of Amsterdam"
              }
              alt={"fsb"}
              subheader={"Cointelegraph"}
              date={"23 Nov, 2022"}
              time={"4:29 PM"}
              image={image4}
            />
          </Grid> */}
        </Grid>
     
          <div style={{display:"flex",justifyContent:"space-between",paddingBottom:"10px"}}>
            <span>

            </span>
            <span style={{marginRight:"20px",fontSize:"12px",fontWeight:500,cursor:"pointer"}}
             onClick={handleChangePage}
             >
               {"Load More News ->"}
            </span>
          </div>

          <Box sx={{ display: { xs: 'none', md: 'block'} }}>

        <Box
          sx={{
            width: "100%",
            bgcolor: "background.paper",
          }}
        >
          <Tabs value={tabValue} onChange={handleChange}>
            <Tab  sx={{ textTransform: "none", fontSize: "17px",fontWeight:600,color:"black"  }}
           
            label="Metaverse" />
            <Tab 
          sx={{ textTransform: "none", fontSize: "17px",fontWeight:600,color:"black"  }}
            
            label="Bitcoin" />
            <Tab
          sx={{ textTransform: "none", fontSize: "17px",fontWeight:600,color:"black"  }}
            
            label="Ethereum" />
            <Tab
          sx={{ textTransform: "none", fontSize: "17px",fontWeight:600,color:"black"  }}
            
            label="NFT" />
            <Tab 
          sx={{ textTransform: "none", fontSize: "17px",fontWeight:600,color:"black"  }}
            
            label="CBDC" />
          </Tabs>
        </Box>
        <Divider />
        {tabValue === 0 ? (

          <CategoryWiseNews data={metaVerseData} />

        ) : tabValue === 1 ? (

          <CategoryWiseNews data={bitcoinData} />

        ) : tabValue === 2 ? (
          <CategoryWiseNews data={ethereumData} />
        ) : tabValue === 3 ? (
          <CategoryWiseNews data={nftData} />
        ) : tabValue === 4 ? (
          <CategoryWiseNews data={cbdcData} />
        ) : null}
          </Box>
      </Paper>
    </div>
  );
}

export default Desktop;
