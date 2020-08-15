/**
 * title: align-self 属性
 * desc:
 */

import React, { useState } from 'react';
import { Radio } from 'antd';
import './index.less';

const App = () => {
  const [value, setValue] = useState('auto');

  return (
    <>
      <Radio.Group
        value={value}
        onChange={e => setValue(e.target.value)}
        style={{ marginBottom: 20 }}
      >
        <Radio value="auto">auto</Radio>
        <Radio value="flex-start">flex-start</Radio>
        <Radio value="flex-end">flex-end</Radio>
        <Radio value="center">center</Radio>
        <Radio value="baseline">baseline</Radio>
        <Radio value="stretch">stretch</Radio>
      </Radio.Group>

      <div className="align-self">
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item" style={{ alignSelf: value }}>
          3
        </div>
        <div className="item">4</div>
        <div className="item">5</div>
      </div>
    </>
  );
};

export default () => <App />;
