import React from 'react'
import './App.css'
import {Algorithms} from './components/Algorithms'
import {ApplicationRouter} from './router/ApplicationRouter'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  header:{
    backgroundColor: "#252525",
    color:"#dadada",
    padding:"1%",
  }
}))


const App = () => {
  const classes = useStyles()

  return (
    <div className="App">
      <div className={classes.header}>
      <h1>Visual Algorithms</h1>
      </div>
      <ApplicationRouter>
          <Algorithms/>
      </ApplicationRouter>      
    </div>
  );
}

export default App;
