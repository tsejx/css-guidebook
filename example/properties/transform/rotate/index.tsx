/**
 * title: rotate()
 * desc:
 */

import React, { useState } from 'react';
import { Radio } from 'antd';
import './index.less';

const App = () => {
  const [value, setValue] = useState('fourty-five');

  return (
    <div className="transform-rotate">
      <Radio.Group defaultValue={value} onChange={(e) => setValue(e.target.value)}>
        <Radio value="fourty-five">45°</Radio>
        <Radio value="ninty">90°</Radio>
        <Radio value="one-eighty">180°</Radio>
        <Radio value="two-eighty-five">285°</Radio>
        <Radio value="three-sisty">360°</Radio>
      </Radio.Group>
      <div className="container">
        <div className={`item ${value}`}>文本内容</div>
      </div>
    </div>
  );
};

export default () => <App />;
