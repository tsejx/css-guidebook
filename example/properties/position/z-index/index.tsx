/**
 * title: z-index
 * desc:
 */

import React, { useState } from 'react';
import { Radio } from 'antd';
import './index.less';

const App = () => {
  const [value, setValue] = useState('auto');

  return (
    <div className="z-index">
      <Radio.Group defaultValue={value} onChange={(e) => setValue(e.target.value)}>
        <Radio value="auto">auto</Radio>
        <Radio value="index1">z-index: 1</Radio>
        <Radio value="index3">z-index: 3</Radio>
        <Radio value="index5">z-index: 5</Radio>
        <Radio value="index7">z-index: 7</Radio>
      </Radio.Group>
      <div className="container">
        <div className="blue index6 position1">z-index: 6</div>
        <div className="blue index4 position2">z-index: 4</div>
        <div className="blue index2 position3">z-index: 2</div>
        <div className={`box ${value}`}>文本内容</div>
        <div className="red auto position4">z-index: auto</div>
        <div className="red auto position5">z-index: auto</div>
        <div className="red auto position6">z-index: auto</div>
      </div>
    </div>
  );
};

export default () => <App />;
