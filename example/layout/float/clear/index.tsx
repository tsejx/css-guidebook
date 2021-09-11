/**
 * title: 添加空标签子元素
 * desc: 与浮动元素同级额外添加一个空标签子元素，为其设置 `clear` 属性为 `both` 清除浮动，让父级元素能自动获取到高度
 */

import React from 'react';
import { Button } from 'antd';
import { useToggle } from 'ahooks';
import './index.less';

const App = () => {
  const [isClear, { toggle }] = useToggle(true);

  return (
    <>
      <div className={`clear-box1`}>
        <div className="left">Left</div>
        <div className="right">Right</div>
        <div className={isClear ? 'clear-float' : ''}></div>
      </div>
      <div className="clear-box2">box2</div>
      <br />
      <Button type="primary" onClick={() => toggle()}>
        {isClear ? '重置' : '清除浮动'}
      </Button>
    </>
  );
};

export default () => <App />;
