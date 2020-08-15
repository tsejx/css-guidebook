/**
 * title: flex-wrap 属性
 * desc: 使用该属性，需要为弹性容器添加固定宽度，当弹性容器宽度超过子项宽度总和时，值设为 `wrap` 或 `wrap-reverse` 均不起效果
 */

import React, { useState } from 'react';
import { Radio } from 'antd';
import './index.less';

const App = () => {
  const [value, setValue] = useState('nowrap');

  return (
    <>
      <Radio.Group
        value={value}
        onChange={e => setValue(e.target.value)}
        style={{ marginBottom: 16 }}
      >
        <Radio value="nowrap">nowrap</Radio>
        <Radio value="wrap">wrap</Radio>
        <Radio value="wrap-reverse">wrap-reverse</Radio>
      </Radio.Group>

      <div className="flex-wrap" style={{ flexWrap: value }}>
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
        <div className="item">5</div>
      </div>
    </>
  );
};

export default () => <App />;
