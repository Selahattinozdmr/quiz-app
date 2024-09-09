"use client"
import React, { useState } from 'react'
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ApexChartd = ({type}:{type:any}) => {
  const state={
    options: {
      dataLabels:{
        enabled:true,
      }
      },

      series: [
        44, 55, 41, 
      ],
      labels:["A","B"]
    }
  


  return (
    <div >
      <Chart options={state.options} series={state.series} type={type} width={300} height={220} />
    </div>
  )
}

export default ApexChartd