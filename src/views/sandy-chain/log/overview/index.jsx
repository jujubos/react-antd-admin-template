import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import React from 'react';
import { PieChartTwoTone } from '@ant-design/icons'

import Mixchart from './c-pages/Mixchart';
import Panel from './c-pages/Panel'

const Overview = () => {

  return (
    <div style={{padding: 20}}>
      <Panel/>
      <div>
        <Mixchart/>
      </div>
    </div>
  )
};

export default Overview;