/**
 * title: align-items 属性
 * desc:
 */

import React, { useState } from 'react';
import { Radio } from 'antd';
import './index.less';

const App = () => {
  const [value, setValue] = useState('stretch');

  return (
    <>
      <Radio.Group
        value={value}
        onChange={e => setValue(e.target.value)}
        style={{ marginBottom: 20 }}
      >
        <Radio value="stretch">stretch</Radio>
        <Radio value="flex-start">flex-start</Radio>
        <Radio value="flex-end">flex-end</Radio>
        <Radio value="center">center</Radio>
        <Radio value="baseline">baseline</Radio>
      </Radio.Group>

      <div className="align-items" style={{ alignItems: value }}>
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
