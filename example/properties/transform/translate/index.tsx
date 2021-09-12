/**
 * title: translate()
 * desc:
 */

import React, { useState } from 'react';
import { Radio } from 'antd';
import './index.less';

const App = () => {
  const [value, setValue] = useState('single-value-pixel');

  return (
    <div className="transform-translate">
      <Radio.Group
        defaultValue={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <Radio value="single-value-pixel">translate(100px)</Radio>
        <Radio value="single-value-percentage">translate(50%)</Radio>
        <Radio value="two-values">translate(80px, 50%)</Radio>
        <Radio value="three-values">translate(80px, 50%, 5em)</Radio>
      </Radio.Group>
      <div className="container">
        <div className={`item ${value}`}></div>
      </div>
    </div>
  );
};

export default () => <App />;
