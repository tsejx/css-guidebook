/**
 * title: align-content 属性
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
        style={{ marginBottom: 16 }}
      >
        <Radio value="stretch">stretch</Radio>
        <Radio value="flex-start">flex-start</Radio>
        <Radio value="flex-end">flex-end</Radio>
        <Radio value="center">center</Radio>
        <Radio value="space-between">space-between</Radio>
        <Radio value="space-around">space-around</Radio>
      </Radio.Group>

      <div className="align-content" style={{ alignContent: value }}>
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
        <div className="item">5</div>
        <div className="item">6</div>
        <div className="item">7</div>
        <div className="item">8</div>
        <div className="item">9</div>
        <div className="item">10</div>
        <div className="item">11</div>
        <div className="item">12</div>
        <div className="item">13</div>
        <div className="item">14</div>
        <div className="item">15</div>
      </div>
    </>
  );
};

export default () => <App />;
