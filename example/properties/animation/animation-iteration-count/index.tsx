/**
 * title: animation-timing-function
 * desc:
 */

import React, { useState } from 'react';
import { Radio } from 'antd';
import './index.less';

const App = () => {
  const [iterationCount, setCount] = useState('zero');

  return (
    <div className="animation-timing-function">
      <Radio.Group
        name="radiogroup"
        defaultValue={iterationCount}
        onChange={(e) => setCount(e.target.value)}
      >
        <Radio value="zero">0 次</Radio>
        <Radio value="two-times">2 次</Radio>
        <Radio value="one-point-five-times">1.5 次</Radio>
        <Radio value="inifinit">无限次</Radio>
      </Radio.Group>
      <div className={`box ${iterationCount}`}></div>
    </div>
  );
};

export default () => <App />;
