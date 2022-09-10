import React, { memo } from 'react'

import TransactionTable from './c-pages/TransactionTable'

const Display = memo(() => {
  return (
    <div>
      <TransactionTable/>
    </div>
  )
})

export default Display