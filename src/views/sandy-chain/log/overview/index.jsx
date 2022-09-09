import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import React from 'react';

const Overview = () => {

  const Style = {
    padding: 30,
    background: "#ececec",
  }

  return (
    <div className="site-statistic-demo-card" style={Style}>
      <Row gutter={200}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Actiaaave"
              value={11.28}
              precision={2}
              valueStyle={{
                color: '#3f8600',
              }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
              loading
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{
                color: '#cf1322',
              }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{
                color: '#cf1322',
              }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
};

export default Overview;