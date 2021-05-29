/**
 * title: 边框实现三角形
 * desc: 只设置指定方向的 `border` 宽度，其他方向宽度为 0，并将元素的宽高置 0
 */

import React from 'react';
import './index.less';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="arrow-up"></div>
        <div className="arrow-down"></div>
        <div className="arrow-left"></div>
        <div className="arrow-right"></div>
      </>
    );
  }
}

export default () => <App />;
