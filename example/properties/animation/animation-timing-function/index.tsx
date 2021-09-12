/**
 * title: animation-timing-function
 * desc:
 */

import React, { useState } from 'react';
import { Radio } from 'antd';
import './index.less';

const App  = () => {
  const [timingFunction, setFun] = useState('linear');

  const renderBox = (type) => {
    return <div key={type} className={`box ${type}`} ></div>
  }

  return (
    <div className="animation-timing-function">
      <Radio.Group defaultValue={timingFunction} onChange={(e) => setFun(e.target.value)}>
        <Radio value="ease">ease</Radio>
        <Radio value="ease-in">ease-in</Radio>
        <Radio value="ease-out">ease-out</Radio>
        <Radio value="ease-in-out">ease-in-out</Radio>
        <Radio value="linear">linear</Radio>
        <Radio value="step-start">step-start</Radio>
        <Radio value="step-end">step-end</Radio>
        <Radio value="cubic-bezier">cubic-bezier</Radio>
      </Radio.Group>
      {renderBox(timingFunction)}
    </div>
  );
};

export default () => <App />;
