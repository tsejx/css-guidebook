/**
 * title: overflow auto 清除浮动
 * desc: 浮动元素的父元素必须定义 `width` 或 `zoom` 设定为 1，同时不能定义高度 `height`，使用 `overflow` 设定为 `auto` 时，浏览器会自动检查浮动区域的高度
 */

import React from 'react';
import { Button } from 'antd';
import { useToggle } from 'ahooks';
import './index.less';

const App = () => {
  const [isClear, { toggle }] = useToggle(true);

  return (
    <>
      <div className={`overflow-auto-box1 ${isClear ? 'overflow-auto-clear-float' : ''}`}>
        <div className="left">Left</div>
        <div className="right">Right</div>
      </div>
      <div className="overflow-auto-box2">box2</div>
      <br />
      <Button type="primary" onClick={() => toggle()}>
        {isClear ? '重置' : '清除浮动'}
      </Button>
    </>
  );
};

export default () => <App />;
