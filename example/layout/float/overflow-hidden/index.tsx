/**
 * title: 使用 overflow-hidden 触发 BFC
 * desc: 定义父元素的 `overflow` 为 `hidden`，`width` 或 `zoom` 设定为 1，同时不能定义容器高度，父元素触发实现 BFC
 */

import React from 'react';
import { Button } from 'antd';
import { useToggle } from 'ahooks';
import './index.less';

const App = () => {
  const [isClear, { toggle }] = useToggle(true);

  return (
    <>
      <div className={`overflow-hidden-box1 ${isClear ? 'overflow-hidden-clear-float' : ''}`}>
        <div className="left">Left</div>
        <div className="right">Right</div>
      </div>
      <div className="overflow-hidden-box2">box2</div>
      <br />
      <Button type="primary" onClick={() => toggle()}>
        {isClear ? '重置' : '清除浮动'}
      </Button>
    </>
  );
};

export default () => <App />;
