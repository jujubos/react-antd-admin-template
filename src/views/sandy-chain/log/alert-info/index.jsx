import React, { memo } from 'react'

import Linechart from './c-pages/Linechart'
import Panel from './c-pages/Panel'

const AlertInfo = memo(() => {

  const lineChartDefaultData = {
    "New Visits": {
      expectedData: [100, 120, 161, 134, 105, 160, 165],
      actualData: [120, 82, 91, 154, 162, 140, 145],
    },
    Messages: {
      expectedData: [200, 192, 120, 144, 160, 130, 140],
      actualData: [180, 160, 151, 106, 145, 150, 130],
    },
    Purchases: {
      expectedData: [80, 100, 121, 104, 105, 90, 100],
      actualData: [120, 90, 100, 138, 142, 130, 130],
    },
    Shoppings: {
      expectedData: [130, 140, 141, 142, 145, 150, 160],
      actualData: [120, 82, 91, 154, 162, 140, 130],
    },
  };


  return (
    <div style={{padding: 20}}>
      <Panel/>
      <Linechart
        chartData={lineChartDefaultData["New Visits"]}
        styles={{
          padding: 12,
          backgroundColor: "#fff",
          marginBottom: "25px",
        }}
      />
    </div>
  )
})

export default AlertInfo