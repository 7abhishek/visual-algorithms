import React, {useState} from 'react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import { Button, makeStyles, Grid } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    chart :{
        marginTop: 5, 
        marginRight: 30, 
        marginLeft: 20, 
        marginBottom: 5,
    }
}))

export const SelectionSortComponent = (props) => {
    const {inputData, delayInMs} = props
    const [data, setData] = useState(inputData)
    const classes = useStyles()

    const updateStateWithDelay = async (snapShot) => {
        await new Promise(resolve => {
            setTimeout(() => {                
                resolve(setData(snapShot))
        }, delayInMs)
        })
    }

    const selectionSort = (mutableData, i,j, min, minIndex) => async event => {
        if(i === j === mutableData.length) {
            return
        }
        if(i < j && i < mutableData.length - 1 && j === mutableData.length) {
            const temp = mutableData[i]
            mutableData[i] = mutableData[minIndex]
            mutableData[minIndex] = temp
            const snapShot = Array.from(mutableData)
            await updateStateWithDelay(snapShot)
            selectionSort(mutableData, i+1, i+2, mutableData[i+1].number, i+1)(undefined)
        }
        if(i < j  && j < mutableData.length) {
           if(mutableData[j].number < min) {
                minIndex = j
                min = mutableData[j].number
            }
            selectionSort(mutableData, i, j+1, min, minIndex)(undefined)
        }
    }

    return (
        <Grid container className={classes.chart}> 
        <Grid item>        
           <BarChart width={500} height={300} data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="number" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="number" fill="#616161" />
      </BarChart>
        <Button color="primary" variant="outlined" onClick={selectionSort(Array.from(data),0,1, data[0].number, 0)}> Selection Sort </Button> 
        </Grid>                 
        </Grid>
    )
}