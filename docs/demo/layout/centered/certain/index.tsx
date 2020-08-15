/**
 * title: 固定宽高偏移
 * desc: 先绝对定位偏离父元素左边距和上边距半个父元素宽/高，再通过计算自身宽/高，利用 both-certain 向反方向偏移半个定位元素宽/高
 */

import React from 'react';
import './index.less';

class App extends React.Component {
  render() {
    return (
      <>
        {/* 负 margin 实现 */}
        <div className="both-negative-common both-negative-parent">
          <div className="both-negative-child">negative</div>
        </div>
        <br />

        {/* margin 自适应实现 */}
        <div className="both-auto-common both-auto-parent">
          <div className="both-auto-child">auto</div>
        </div>
      </>
    );
  }
}

export default () => <App />;
