/**
 * title: scale()
 * desc:
 */

import React, { useState } from 'react';
import { Radio } from 'antd';
import './index.less';

const App = () => {
  const [value, setValue] = useState('point-two');

  return (
    <div className="transform-scale">
      <Radio.Group defaultValue={value} onChange={(e) => setValue(e.target.value)}>
        <Radio value="point-two">0.2</Radio>
        <Radio value="point-five">0.5</Radio>
        <Radio value="one-point-two">1.2</Radio>
        <Radio value="two">2</Radio>
      </Radio.Group>
      <div className="container">
        <div className={`item ${value}`}>文本内容</div>
      </div>
    </div>
  );
};

export default () => <App />;
