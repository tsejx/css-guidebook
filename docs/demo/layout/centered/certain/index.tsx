/**
 * title: 固定宽高偏移
 * desc: 相对于父元素容器左边距和上边距坐标偏移 50%，通过计算垂直居中元素宽/高，利用负 `margin` 偏移自身宽/高的 50%。或者通过设置上下左右坐标为 0，外边距自适应 `auto` 实现垂直居中。两种处理手法都需要设置垂直居中元素为标准盒模型。
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
