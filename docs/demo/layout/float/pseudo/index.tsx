/**
 * title: 伪类清除浮动
 * desc: IE8 以上和非 IE 浏览器才支持 `:after`，原理和方法 2 有点类似，`zoom` 可解决 IE6、IE7 浮动问题
 */

import React from 'react';
import { Button } from 'antd';
import { useToggle } from 'ahooks';
import './index.less';

const App = () => {
  const [isClear, { toggle }] = useToggle(true);

  return (
    <>
      <div className={`pseudo-box1 ${isClear ? 'pseudo-clear-float' : ''}`}>
        <div className="left">Left</div>
        <div className="right">Right</div>
      </div>
      <div className="pseudo-box2">box2</div>
      <br />
      <Button type="primary" onClick={() => toggle()}>
        {isClear ? '重置' : '清除浮动'}
      </Button>
    </>
  );
};

export default () => <App />;
