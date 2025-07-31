import { Button, TextField } from '@mui/material'
import React,{useState} from 'react'

const StateBasics = () => {
    //useState
    var[name,SetName]=useState("sree lakshmi!")
    var[a,Seta]=useState()

    const inputHandler=(e)=>{
        console.log(e.target.value)
        SetName(e.target.value)

    }
    const subhandler=()=>{
        Seta(name)
    }
  return (
    <div>
        <h1>welcome {a}</h1>
        <TextField variant='outlined' onChange={inputHandler}/><br />
        <Button variant='contained' onClick={subhandler}>submit</Button>
        </div>
  )
}

export default StateBasics