import React from 'react'
// import HandpickedHeader from '../../common/Header/HandpickedHeader'
// import { SubTabItemsContainer } from './NewsPopupContainer'
import CancelIcon from '@mui/icons-material/Cancel';
import image1 from "../assets/image.png"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useParams } from 'react-router-dom';
import axios from '../axios/axios';
import { useState } from 'react';
import { useEffect } from 'react';

// import parcer from "parser"
function NewsPopup() {

    const {id}= useParams();
    // const url=URLSearchParams()
    console.log(id,"id")
const [newsData,setNewsdata]=useState()

const getNewsData=()=>{
    axios.get("/api/handpicked",{
        headers:{
          token:"koinpratodayqproductrsstoken"
        }
      }).then((res)=>{
        // console.log(res)
        if(res?.status===200){
            const length=res.data?.handpickedData.length
            if(id==="newsOne"){

                setNewsdata(res.data?.handpickedData[length-1].news[0].link)
            }
            else if(id==="newsTwo"){

                setNewsdata(res.data?.handpickedData[length-1].news[1].link)
            }
            else if(id==="newsThree"){

                setNewsdata(res.data?.handpickedData[length-1].news[2].link)
            }
            else if(id==="newsFour"){

                setNewsdata(res.data?.handpickedData[length-1].news[3].link)
            }
            else if(id==="newsFive"){

                setNewsdata(res.data?.handpickedData[length-1].news[4].link)
            }
        }
    })
}

useEffect(()=>{
    getNewsData()
},[id])


// async function fetchRssFeed(feedUrl) {
//     // console.log(el)
//     // rssLink.push(el.link))
//     let feed = await parcer.parseURL(feedUrl);
//     return feed.items.map((item) => {
//       // console.log(item)
//       // if(item?.categories.includes(categoryParam)){
//       //   return
//       // }
//       return {
//         title: item.title,
//         link: item.link,
//         date: item.pubDate,
//         content:item.content,
//         category:item.categories,
//         creator:item.creator,
//         summary:item.summary,
//         contentSnippet:item.contentSnippet,
//         enclosure:item?.enclosure,
//         id:item?.guid
  
//         //websitename
//         //
//       };
//     });
//   }

console.log(newsData,"newsData")
    return (
        <div>

            {/* <HandpickedHeader/> */}

            <div style={{ backgroundColor: "#F5F5F5", paddingTop: "2em" }}>
                <div style={{ backgroundColor: "black", width: "80%", margin: "auto", borderRadius: "5px", color: "white", display: "flex", justifyContent: "space-between" }}>
                    <div style={{ marginLeft: "20px" }}>
                        <img src={image1} alt="image1" style={{ color: "white", marginTop: "10px" }} />
                    </div>
                    <div >
                        <span style={{ display: "flex", justifyContent: "space-between", width: "250px", fontSize: "8px" }}>

                            <h1 style={{ display: "flex" }} >
                                <span><ArrowBackIcon /></span>
                                <span  >

                                    Back
                                </span>
                            </h1>
                            <h1 style={{ display: "flex" }}>
                                <span >

                                    Next
                                </span>
                                <ArrowForwardIcon />
                            </h1>
                        </span>
                    </div>
                    <div style={{ marginRight: "20px", marginTop: "10px" }}>
                        <CancelIcon />
                    </div>
                </div>
                <div style={{ width: "80%", margin: "auto", height: "90vh", background: "white" }}>
                {/* {newsData} */}
                <iframe src={newsData} frameborder="0" width="100%" height="100%" ></iframe>
                </div>
            </div>
        </div>
    )
}

export default NewsPopup