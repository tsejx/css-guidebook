/**
 * title: 父级元素浮动
 * desc: 所有代码一起浮动，就变成了一个整体
 */

import React from 'react';
import { Button } from 'antd';
import { useToggle } from 'ahooks';
import './index.less';

const App = () => {
  const [isClear, { toggle }] = useToggle(true);

  return (
    <>
      <div className={`parent-float-box1 ${isClear ? 'parent-float-clear-float' : ''}`}>
        <div className="left">Left</div>
        <div className="right">Right</div>
      </div>
      <div className={`parent-float-box2 ${isClear ? 'parent-float-clear-both' : ''}`}>box2</div>
      <br />
      <Button type="primary" onClick={() => toggle()}>
        {isClear ? '重置' : '清除浮动'}
      </Button>
    </>
  );
};

export default () => <App />;
