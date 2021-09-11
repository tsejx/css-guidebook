/**
 * title: flex-grow 属性
 * desc: flex-grow 属性决定了子项要占用父容器多少剩余空间
 */

import React from 'react';
import { useSetState } from 'ahooks';
import { InputNumber, Tooltip } from 'antd';
import './index.less';

const App = () => {
  const [value, setState] = useSetState({ 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 });

  return (
    <>
      <div className="flex-grow-input-group">
        <InputNumber size="small" value={value[0]} onChange={val => setState({ 0: val })} />
        <InputNumber size="small" value={value[1]} onChange={val => setState({ 1: val })} />
        <InputNumber size="small" value={value[2]} onChange={val => setState({ 2: val })} />
        <InputNumber size="small" value={value[3]} onChange={val => setState({ 3: val })} />
        <InputNumber size="small" value={value[4]} onChange={val => setState({ 4: val })} />
      </div>

      <div className="flex-grow">
        <div className="item" style={{ flexGrow: value[0] }}>
          1
        </div>
        <div className="item" style={{ flexGrow: value[1] }}>
          2
        </div>
        <div className="item" style={{ flexGrow: value[2] }}>
          3
        </div>
        <div className="item" style={{ flexGrow: value[3] }}>
          4
        </div>
        <div className="item" style={{ flexGrow: value[4] }}>
          5
        </div>
      </div>
    </>
  );
};

export default () => <App />;
