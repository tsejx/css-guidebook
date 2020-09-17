/**
 * title: 父元素设置固定高度
 * desc: 子元素为浮动元素脱离文档流，父元素无法获取子元素高度因此无法被撑高，通过设置父元素高度，避免与父容器处于相同文档流下的块级元素顶上
 */

import React from 'react';
import { Button } from 'antd';
import { useToggle } from 'ahooks';
import './index.less';

const App = () => {
  const [isClear, { toggle }] = useToggle(true);

  return (
    <>
      <div className={`height-box1 ${isClear ? 'height-clear-float' : ''}`}>
        <div className="left">Left</div>
        <div className="right">Right</div>
      </div>
      <div className="height-box2">box2</div>
      <br />
      <Button type="primary" onClick={() => toggle()}>
        {isClear ? '重置' : '清除浮动'}
      </Button>
    </>
  );
};

export default () => <App />;
