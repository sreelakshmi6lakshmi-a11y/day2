import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

 const NavBar = () => {
  return (
    <div>
      <AppBar color='secondary'>
        <Toolbar>
          <h4>MyApp</h4> &nbsp;nbsp;
          <Link to="/lgn">
          <Button variant='contained'>Login</Button> 
          </Link>&nbsp;&nbsp;

          <Link to="/">
          <Button Variant='contained'>Sign</Button>
          </Link>&nbsp;&nbsp;

          <Link to="/goto">
          <Button Variant='contained'>GoTo</Button>
          </Link>&nbsp;&nbsp;

           <Link to="/anu">
          <Button Variant='contained'>Name</Button>
          </Link>&nbsp;&nbsp;
         
         <Link to="/api">
          <Button Variant='contained'>api</Button>
          </Link>&nbsp;&nbsp;

         
          
          </Toolbar>
          </AppBar>
          <br /><br /><br />
    </div>
  )
}
export default NavBar
