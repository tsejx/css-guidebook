/**
 * title: position
 * desc: 可以通过滑动示例窗口查看效果
 */

import React, { useState } from 'react';
import { Radio } from 'antd';
import './index.less';

const App = () => {
  const [value, setValue] = useState('static');

  return (
    <div className="position">
      <Radio.Group defaultValue={value} onChange={(e) => setValue(e.target.value)}>
        <Radio value="static">static</Radio>
        <Radio value="relative">relative</Radio>
        <Radio value="absolute">absolute</Radio>
        <Radio value="sticky">sticky</Radio>
      </Radio.Group>
      <div className="container">
        <p>
          文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容
        </p>
        <div className="box"></div>
        <div className={`box target ${value}`}></div>
        <div className="box"></div>
        <p className="clear">
          文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容
        </p>
      </div>
    </div>
  );
};

export default () => <App />;
