import React from 'react'
import {Grid, Paper} from '@material-ui/core'
import {SelectionSortComponent} from './SelectionSortComponent'
import {BubbleSortComponent} from './BubbleSortComponent'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      width:"100%"
    },
}));
  
const gridContainerSizeXS = 12
const gridContainerSizeSM = 12
const gridContainerSize = 6

const Sorting = (props) => {
    const classes = useStyles()
    const array = [4,5,64,3,2,14,45,67,32,1,22,49,63,23,8,7,34,23,21,9,45]
    const data = array.map(num => { 
        return {number: num}
    })
    const delay = 215
    return (
        <Grid container spacing={3}>
        <Grid item xs={gridContainerSizeXS} sm={gridContainerSizeSM} md={gridContainerSize} lg={gridContainerSize}>
          <Paper className={classes.paper}>
            <SelectionSortComponent inputData={data} delayInMs={delay}/>
          </Paper>
        </Grid>
        <Grid item xs={gridContainerSizeSM} sm={gridContainerSizeSM} md={gridContainerSize} lg={gridContainerSize}>
          <Paper className={classes.paper}>
            <BubbleSortComponent inputData={data} delayInMs={delay}/>
          </Paper>
        </Grid>
      </Grid>
    )
}

export default Sorting