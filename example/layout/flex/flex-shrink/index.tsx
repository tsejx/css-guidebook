/**
 * title: flex-shrink 属性
 * desc: 负值对该属性无效。且如果弹性子项总和没有超出父容器，设置 `flex-shrink` 将无效。
 */

import React from 'react';
import { useSetState } from 'ahooks';
import { InputNumber } from 'antd';
import './index.less';

const App = () => {
  const [value, setState] = useSetState({});

  return (
    <>
      <div className="flex-shrink-input-group">
        <InputNumber size="small" value={value[0]} onChange={val => setState({ 0: val })} />
        <InputNumber size="small" value={value[1]} onChange={val => setState({ 1: val })} />
        <InputNumber size="small" value={value[2]} onChange={val => setState({ 2: val })} />
        <InputNumber size="small" value={value[3]} onChange={val => setState({ 3: val })} />
        <InputNumber size="small" value={value[4]} onChange={val => setState({ 4: val })} />
      </div>

      <div className="flex-shrink">
        <div className="item" style={{ flexShrink: value[0] }}>
          1
        </div>
        <div className="item" style={{ flexShrink: value[1] }}>
          2
        </div>
        <div className="item" style={{ flexShrink: value[2] }}>
          3
        </div>
        <div className="item" style={{ flexShrink: value[3] }}>
          4
        </div>
        <div className="item" style={{ flexShrink: value[4] }}>
          5
        </div>
      </div>
    </>
  );
};

export default () => <App />;
