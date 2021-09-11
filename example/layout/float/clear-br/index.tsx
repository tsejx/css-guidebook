/**
 * title: 添加 br 标签作为空标签
 * desc: 与添加空标签原理一致，使用 br 作为空标签，同样需要设置 `clear` 为 `both`
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
