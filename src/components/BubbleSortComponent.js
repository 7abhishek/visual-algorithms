import React, {useState} from 'react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
     ResponsiveContainer} from 'recharts';
import { Button , makeStyles, Grid} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    chart :{
        width:"100%"
    }
}))

export const BubbleSortComponent = (props) => {
    const {inputData, delayInMs} = props
    const [data, setData] = useState(inputData)
    const classes = useStyles()

    const updateStateWithDelay = async (snapShot) => {
        return new Promise(resolve => {
            setTimeout(() => {                
                resolve(setData(snapShot))
        }, delayInMs)
        })
    }

    const  bubbleSort = (mutableData, i, j) => async event => {
        if(i >= mutableData.length) {
            return
        }

        if(j >= mutableData.length-1-i) {
            bubbleSort(mutableData, i+1, 0)(undefined)
            return
        }

        if(mutableData[j].number > mutableData[j+1].number) {
            const temp = mutableData[j]
            mutableData[j] = mutableData[j+1]
            mutableData[j+1] = temp
            const snapShot = Array.from(mutableData)
            await updateStateWithDelay(snapShot)
        }

        bubbleSort(mutableData, i, j+1)(undefined)
    }

    return (
        <Grid container>
        <Grid item className={classes.chart}>
        <ResponsiveContainer width={"100%"} height={300}> 
        <BarChart data={data}
        margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="number" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="number" fill="#ad1d45" />
        </BarChart>
        </ResponsiveContainer>
      <Button color="primary" variant="outlined" onClick={bubbleSort(Array.from(data), 0,1)}> Bubble Sort </Button>
      </Grid>               
        </Grid>
    )
}