import { Grid } from '@mui/material'
import React from 'react'
import RightCard from './RightCard'
import image4 from "../assets/Right4.png";

function CategoryWiseNews({data}) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);
  
    const handleChangePage = (event, newPage) => {
      setPage(page+1);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  return (
    <>
     <Grid container>
          {data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((item)=>(
            <Grid item xs={12} md={6}>
            
          
              <RightCard
                heading={
                  item?.title
                }
                alt={"fsb"}
                subheader={item?.creator}
                // date={"23 Nov, 2022"}
            date={`${item?.date.split(" ")[2]} ${item?.date.split(" ")[1]}, ${item?.date.split(" ")[3]}`}

                time={item?.date.split(" ")[4]}
                image={image4}
              />

          </Grid>
          ))}
          </Grid>
          <div style={{display:"flex",justifyContent:"space-between",paddingBottom:"10px"}}>
            <span>

            </span>
            <span style={{marginRight:"20px",fontSize:"12px",fontWeight:500,cursor:"pointer"}} onClick={handleChangePage}>
               {"Load More News ->"}
            </span>
          </div>
    </>
  )
}

export default CategoryWiseNews