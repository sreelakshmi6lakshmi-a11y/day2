import { Button } from '@mui/material'
import React, { useState } from 'react'

const Name = ()=> {
    var[Name,setname]=useState("anu")


    const SubHandler=()=>{
        setname("react")

    }
    const inputHandler=()=>{
        setname("angular")
    
    }
    const sectionHandler=()=>{
        setname("nest")
    }

    
    
        
  return (
    <div>
        <h1>welcome {Name}</h1>
       
        
        <Button variant='contained' color='secondary' onClick={SubHandler}>React</Button> &nbsp; &nbsp;
        <Button variant='contained' color='success' onClick={inputHandler}>Angular</Button> &nbsp; &nbsp;
        <Button variant='contained' color='error'onClick={sectionHandler}>Nest</Button> &nbsp; &nbsp;

     </div>
  )
}

export default Name