import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import Sorting from '../components/Sorting'
import {Grid, makeStyles} from '@material-ui/core'

export const ApplicationRouter = (props) => {
    
    return (
        <Router basename={process.env.PUBLIC_URL}>
            {props.children}
            <Route path="/" render={() => (<Redirect to="/sorting" />)}/>
            <Route path="/sorting" exact component={Sorting} />
            <Route path="/trees" exact component={NotImplemented} />
            <Route path="/fun" exact component={NotImplemented} />
        </Router>
    )
}

const useStyles = makeStyles(theme => ({
    center: {
        textAlign: '-webkit-center',
        alignContent: '-webkit-center',
    },
    container:{
        padding: '25px'
    }
}))

const NotImplemented = () => {
    const classes = useStyles()

    return (
        <React.Fragment>
            <Grid container className={classes.container}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.center}>
                    <img alt="cat feeling shy" src={`${process.env.PUBLIC_URL}/static/images/Not_Implemented.jpg`} /> 
                </Grid>
            </Grid>
                 
        </React.Fragment>
    )
}