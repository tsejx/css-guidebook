/**
 * title: 边框实现三角形
 * desc: 只设置指定方向的 `border` 宽度，其他方向宽度为 0，并将元素的宽高置 0
 */

import React from 'react';
import './arrow-up.less';
import './arrow-right.less';
import './arrow-down.less';
import './arrow-left.less';

const App = () => {
  return (
    <>
      <div className="arrow-up"></div>
      <div className="arrow-down"></div>
      <div className="arrow-left"></div>
      <div className="arrow-right"></div>
    </>
  );
}

export default () => <App />;
