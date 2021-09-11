/**
 * title: justify-content 属性
 * desc: 仅当 `flex-direction` 为 `row` 时生效，因为 `justify-content` 仅定义子项在水平方向上的对齐方式
 */

import React, { useState } from 'react';
import { Radio } from 'antd';
import './index.less';

const App = () => {
  const [value, setValue] = useState('flex-start');

  return (
    <>
      <Radio.Group
        value={value}
        onChange={e => setValue(e.target.value)}
        style={{ marginBottom: 16 }}
      >
        <Radio value="flex-start">flex-start</Radio>
        <Radio value="flex-end">flex-end</Radio>
        <Radio value="center">center</Radio>
        <Radio value="space-between">space-between</Radio>
        <Radio value="space-around">space-around</Radio>
        <Radio value="space-evenly">space-evenly</Radio>
      </Radio.Group>

      <div className="justify-content" style={{ justifyContent: value }}>
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
