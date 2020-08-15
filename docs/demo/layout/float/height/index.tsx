/**
 * title: 父元素添加固定高度
 * desc: 父级元素手动定义高度 `height`，就解决了父级元素无法自动获取到高度的问题
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
