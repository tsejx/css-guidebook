/**
 * title: animation-iteration-count
 * desc:
 */

import React, { useState } from 'react';
import { Radio } from 'antd';
import './index.less';

const App = () => {
  const [iterationCount, setCount] = useState('zero');

  const renderBox = (type) => {
    return <div key={type} className={`box ${type}`}></div>
  }

  return (
    <div className="animation-iteration-count">
      <Radio.Group
        defaultValue={iterationCount}
        onChange={(e) => setCount(e.target.value)}
      >
        <Radio value="zero">0 次</Radio>
        <Radio value="two-times">2 次</Radio>
        <Radio value="one-point-five-times">1.5 次</Radio>
        <Radio value="infinite">无限次</Radio>
      </Radio.Group>
      {renderBox(iterationCount)}
    </div>
  );
};

export default () => <App />;
