/**
 * title: flex-basis 属性
 * desc:
 */

import React from 'react';
import { useSetState } from 'ahooks';
import { InputNumber } from 'antd';
import './index.less';

const App = () => {
  const [valueFixed, setFixedState] = useSetState({ 0: 100, 1: 200, 2: 100 });
  const [valuePerc, setPercState] = useSetState({ 0: 25, 1: 50, 2: 25 });

  return (
    <>
      <p>示例一：固定宽度</p>
      <div className="flex-shrink-input-group">
        <InputNumber
          size="small"
          value={valueFixed[0]}
          onChange={val => setFixedState({ 0: val })}
        />
        <InputNumber
          size="small"
          value={valueFixed[1]}
          onChange={val => setFixedState({ 1: val })}
        />
        <InputNumber
          size="small"
          value={valueFixed[2]}
          onChange={val => setFixedState({ 2: val })}
        />
      </div>
      <div className="flex-basis">
        <div className="item" style={{ flexBasis: valueFixed[0] }}>
          1
        </div>
        <div className="item" style={{ flexBasis: valueFixed[1] }}>
          2
        </div>
        <div className="item" style={{ flexBasis: valueFixed[2] }}>
          3
        </div>
      </div>
      <br />
      <p>示例二：百分比</p>
      <div className="flex-shrink-input-group">
        <InputNumber
          size="small"
          min={0}
          max={100}
          value={valuePerc[0]}
          formatter={value => `${value}%`}
          parser={value => value.replace('%', '')}
          onChange={val => setPercState({ 0: val })}
        />
        <InputNumber
          size="small"
          min={0}
          max={100}
          value={valuePerc[1]}
          formatter={value => `${value}%`}
          parser={value => value.replace('%', '')}
          onChange={val => setPercState({ 1: val })}
        />
        <InputNumber
          size="small"
          min={0}
          max={100}
          value={valuePerc[2]}
          formatter={value => `${value}%`}
          parser={value => value.replace('%', '')}
          onChange={val => setPercState({ 2: val })}
        />
      </div>
      <div className="flex-basis">
        <div className="item" style={{ flexBasis: `${valuePerc[0]}%` }}>
          1
        </div>
        <div className="item" style={{ flexBasis: `${valuePerc[1]}%` }}>
          2
        </div>
        <div className="item" style={{ flexBasis: `${valuePerc[2]}%` }}>
          3
        </div>
      </div>
    </>
  );
};

export default () => <App />;
