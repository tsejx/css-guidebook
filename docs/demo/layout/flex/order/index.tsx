/**
 * title: order 属性
 * desc:
 */

import React from 'react';
import { useSetState } from 'ahooks';
import { InputNumber, Tooltip } from 'antd';
import './index.less';

const App = () => {
  const [value, setState] = useSetState({});

  return (
    <>
      <div className="order-input-group">
        <InputNumber size="small" value={value[0]} onChange={val => setState({ 0: val })} />
        <InputNumber size="small" value={value[1]} onChange={val => setState({ 1: val })} />
        <InputNumber size="small" value={value[2]} onChange={val => setState({ 2: val })} />
        <InputNumber size="small" value={value[3]} onChange={val => setState({ 3: val })} />
        <InputNumber size="small" value={value[4]} onChange={val => setState({ 4: val })} />
      </div>

      <div className="flex-order">
        <div className="item" style={{ order: value[0] }} placeholder="elemento 1">
          1
        </div>
        <div className="item" style={{ order: value[1] }} placeholder="elemento 2">
          2
        </div>
        <div className="item" style={{ order: value[2] }} placeholder="elemento 3">
          3
        </div>
        <div className="item" style={{ order: value[3] }} placeholder="elemento 4">
          4
        </div>
        <div className="item" style={{ order: value[4] }} placeholder="elemento 5">
          5
        </div>
      </div>
    </>
  );
};

export default () => <App />;
