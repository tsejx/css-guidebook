/**
 * title: br 标签清除浮动
 */

import React from 'react';
import { Button } from 'antd';
import { useToggle } from 'ahooks';
import './index.less';

const App = () => {
  const [isClear, { toggle }] = useToggle(true);

  return (
    <>
      <div className={`br-clear-box1`}>
        <div className="left">Left</div>
        <div className="right">Right</div>
        <br className={isClear ? 'br-clear-float' : ''}></br>
      </div>
      <div className="br-clear-box2">box2</div>
      <br />
      <Button type="primary" onClick={() => toggle()}>
        {isClear ? '重置' : '清除浮动'}
      </Button>
    </>
  );
};

export default () => <App />;
