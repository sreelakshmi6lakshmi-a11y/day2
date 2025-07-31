import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <h1>sign up page</h1>
        <TextField label="name" variant="outlined" /><br /><br />
        <TextField label="age" variant="outlined"/><br /><br />
        <TextField label="phone" variant="outlined"/><br /><br />
        <TextField label="password" variant="outlined"/><br /><br />
        <Button variant="contained">add</Button>
        </div>
         )
}

export default Signup

