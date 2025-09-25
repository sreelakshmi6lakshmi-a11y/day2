//Create the Home UI for the BlogAPP(Cards are preferrred; You may choose your UI preference )


//Write your code here
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios';

const Home = () => {
    const[blogs,setBlogs]=useState([]);

    useEffect(()=>{
  axios.get("http://localhost:3001/get")
  .then((res)=>{
    console.log(res.data)
    setBlogs(res.data)
  })
  },[])
  
   const deleteblog=(id)=>{
    console.log(id)
    axios.delete("http://localhost:3001/delete/"+id)
    .then((res)=>{
      console.log(res.data.message)
      alert(res.data.message)
      window.location.reload()
    })
  }
  const updateblog=(inputs)=>{
    navigate("/add",{state:{inputs}})
  }
  

  return (
    <div>
       <Box sx={{ p: 4, maxWidth: "1200px", mx: "auto" }}>
     <Grid container spacing={2}>
          {blogs.map((inputs)=>{
            return(
             <Grid item xs={12} md={4} sm={6}>  
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={inputs.img_url}
        title="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {inputs.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {inputs.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="secondary"onClick={()=>{deleteblog(inputs._id)}}>delete</Button>
        <Button variant="contained" color="secondary"  onClick={()=>{updateblog(inputs._id)}}>update</Button>
      </CardActions>
    </Card>
     </Grid> 
            )
          })}
        </Grid> 
        </Box>
    </div>
  )
}

export default Home