import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import './Table.css'
var Data = []
export default function TableResult({Result,AreaResult,AreaCount,CycleTime}) {
   
    var h = window.innerHeight;
    
    useEffect(() => {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        Data.push({
            Result: Result, Area: AreaResult,
            Count: AreaCount, CycleTime: CycleTime, datetime: dateTime
        })
       

    },[Result])
    const renderData = (Data, index) => {
        return (
            <tr key={index}>
                <td> {index}</td>
                <th> {Data.datetime}</th>
                <td>{Data.Result}</td>
                <td>{Data.CycleTime}</td>
                <td>{Data.Area}</td>
                <td>{Data.Count}</td>
            </tr>
        )
    }

    return (
        <div class="Table-Result overflow-auto table-wrapper-scroll-y my-custom-scrollbar" height={h * 0.2}>
            <Table striped bordered hover class="table table-bordered table-striped mb-0" >
                <thead>
                    <tr>
                        <th>NO.</th>
                        <th> DateTime </th>
                        <th>Result</th>
                        <th>CycleTime[ms]</th>
                        <th>Area</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {Data.map(renderData)}

                </tbody>
            </Table>

        </div>
    )
}
