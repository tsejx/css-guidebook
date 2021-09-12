/**
 * title: box-sizing
 * desc:
 */

import React, { useState } from 'react';
import { Radio } from 'antd';
import './index.less';

const App = () => {
  const [value, setValue] = useState('content-box-no-border-padding');

  return (
    <div className="box-sizing">
      <Radio.Group defaultValue={value} onChange={(e) => setValue(e.target.value)}>
        <Radio value="content-box-no-border-padding">content-box(no border and padding)</Radio>
        <Radio value="content-box-with-border-padding">content-box(with border and padding)</Radio>
        <Radio value="border-box">border-box</Radio>
      </Radio.Group>
      <div className="container">
        <div className={`box ${value}`}></div>
      </div>
    </div>
  );
};

export default () => <App />;
