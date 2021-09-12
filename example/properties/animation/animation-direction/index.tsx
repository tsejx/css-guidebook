/**
 * title: animation-direction
 * desc: 对于交替切换方向的动画，<code>animation-iteration-count</code> 至少设置两次或以上才能看到效果
 */

import React, { useState } from 'react';
import { Radio } from 'antd';
import './index.less';

const App = () => {
  const [direction, setFun] = useState('initial');

  const renderBox = (type) => {
    return <div key={type} className={`box ${type}`}></div>;
  };

  return (
    <div className="animation-direction">
      <Radio.Group
        defaultValue={direction}
        onChange={(e) => setFun(e.target.value)}
      >
        <Radio value="initial">initial</Radio>
        <Radio value="normal">normal</Radio>
        <Radio value="reverse">reverse</Radio>
        <Radio value="alternate">alternate</Radio>
        <Radio value="alternate-reverse">alternate-reverse</Radio>
      </Radio.Group>
      {renderBox(direction)}
    </div>
  );
};

export default () => <App />;
