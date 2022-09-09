import React, { memo } from 'react'

import Mixcharts from '@/views/charts/mixChart'
import Table from '@/views/table'
const ActiveUser = memo(() => {
  return (
    <div>
        <Mixcharts/>
        <Table/>
    </div>
  )
})

export default ActiveUser