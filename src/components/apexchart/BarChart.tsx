"use client"
import React, { useState } from 'react'
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const BarChart = ({d1,d2,d3,d4,d5,d6,d7}) => {
  const state={
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["mon", "tue", "wed", "thu", "fri", "sat","sun"]
      }
    },
    series: [
      {
        name: "series-1",
        data: [d1,d2,d3,d4,d5,d6,d7]
      }
    ]
  };


  return (
    <div >
      <Chart options={state.options} series={state.series} type="area" width={500} height={440} />
    </div>
  )
}

export default BarChart