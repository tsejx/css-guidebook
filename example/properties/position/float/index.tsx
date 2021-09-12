/**
 * title: float
 * desc: 可以通过滑动示例窗口查看效果
 */

import React, { useState } from 'react';
import { Radio } from 'antd';
import './index.less';

const App = () => {
  const [value, setValue] = useState('none');

  return (
    <div className="float">
      <Radio.Group defaultValue={value} onChange={(e) => setValue(e.target.value)}>
        <Radio value="none">none</Radio>
        <Radio value="left">left</Radio>
        <Radio value="right">right</Radio>
      </Radio.Group>
      <div className="container">
          <div className={`box ${value}`}></div>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容
      </div>
    </div>
  );
};

export default () => <App />;
