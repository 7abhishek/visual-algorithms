import React, {useState, useEffect} from 'react'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import { Button } from '@material-ui/core';



export const BubbleSortComponent = (props) => {
    const {inputData, delayInMs} = props
    const [data, setData] = useState(inputData)

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
        <React.Fragment> 
           <BarChart width={500} height={300} data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="number" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="number" fill="#8884d8" />
      </BarChart>
      <Button color="primary" onClick={bubbleSort(Array.from(data), 0,1)}> bubble Sort! </Button>           
        </React.Fragment>
    )
}