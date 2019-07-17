import React from 'react'
import { Link } from 'react-router-dom'
import {Grid, Paper, makeStyles, Avatar, Button} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root:{
        flexGrow: 1
    },
    avatar:{
        margin: 10,
        width: 60,
        height: 60,
    },
    block:{
        alignContent:'-webkit-center',
        textAlign: '-webkit-center',
        backgroundColor:'#8ac6d1',
    },
    link:{
        color:'#252525',
    },
    linkstyle:{
        textDecoration:"none"
    }
}))

const GridItemSizeSM = 6
const GridItemSize = 4

export const Algorithms = (props) => {
    const classes = useStyles()
    console.log("Algorithms props ", props);

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={GridItemSizeSM} sm={GridItemSizeSM} md={GridItemSize}lg={GridItemSize} xl={GridItemSize}>
                <Paper className={classes.block}>
                    <Grid container>
                        <Grid item xs={12} md={12} lg={12}>
                         <Avatar alt="Sorting" src={`${process.env.PUBLIC_URL}/static/images/sorting2.png`} className={classes.avatar} />
                        </Grid>
                        <Grid item className={classes.block} xs={12} md={12} lg={12}>
                          <Link to="/sorting" className={classes.linkstyle}> <Button className={classes.link}> Sorting </Button></Link>
                        </Grid>                                        
                    </Grid>
                </Paper>
            </Grid>

            <Grid item xs={GridItemSizeSM} sm={GridItemSizeSM} md={GridItemSize}lg={GridItemSize} xl={GridItemSize}>
                <Paper className={classes.block}>
                    <Grid container>
                        <Grid item xs={12} md={12} lg={12}>
                         <Avatar alt="Sorting" src={`${process.env.PUBLIC_URL}/static/images/trees.png`} className={classes.avatar} />
                        </Grid>
                        <Grid item className={classes.block} xs={12} md={12} lg={12}>
                          <Link to={`/trees`} className={classes.linkstyle}><Button className={classes.link}>Trees</Button></Link>
                        </Grid>                                        
                    </Grid>
                </Paper>
            </Grid>

            <Grid item xs={GridItemSizeSM} sm={GridItemSizeSM} md={GridItemSize}lg={GridItemSize} xl={GridItemSize}>
                <Paper className={classes.block}>
                    <Grid container>
                        <Grid item xs={12} md={12} lg={12}>
                         <Avatar alt="Sorting" src={`${process.env.PUBLIC_URL}/static/images/fun.png`} className={classes.avatar} />
                        </Grid>
                        <Grid item className={classes.block} xs={12} md={12} lg={12}>
                        <Link to="/fun" className={classes.linkstyle}><Button className={classes.link}>fun</Button></Link>
                        </Grid>                                        
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}