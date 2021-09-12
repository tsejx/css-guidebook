/**
 * title: skew()
 * desc:
 */

import React, { useState } from 'react';
import { Radio } from 'antd';
import './index.less';

const App = () => {
  const [value, setValue] = useState('zero');

  return (
    <div className="transform-skew">
      <Radio.Group defaultValue={value} onChange={(e) => setValue(e.target.value)}>
        <Radio value="zero">skew(0)</Radio>
        <Radio value="fifty-deg">skew(15deg, 15deg)</Radio>
        <Radio value="two-values">skew(-0.06turn, 18deg)</Radio>
        <Radio value="rad">skew(.312rad)</Radio>
      </Radio.Group>
      <div className="container">
        <div className={`item ${value}`}>文本内容</div>
      </div>
    </div>
  );
};

export default () => <App />;
