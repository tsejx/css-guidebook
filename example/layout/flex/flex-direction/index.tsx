/**
 * title: flex-direction
 * desc:
 */

import React, { useState } from 'react';
import { Radio } from 'antd';
import './index.less';

const App = () => {
  const [value, setValue] = useState('row');

  return (
    <>
      <Radio.Group
        value={value}
        onChange={e => setValue(e.target.value)}
        style={{ marginBottom: 16 }}
      >
        <Radio value="row">row</Radio>
        <Radio value="row-reverse">row-reverse</Radio>
        <Radio value="column">column</Radio>
        <Radio value="column-reverse">column-reverse</Radio>
      </Radio.Group>

      <div className="flex-direction" style={{ flexDirection: value }}>
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
