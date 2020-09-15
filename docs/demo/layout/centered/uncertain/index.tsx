/**
 * title: 未知垂直居中元素的宽高进行偏移
 * desc: 相对于父元素容器左边距和上边距坐标偏移 50%，使用 `transform + translate` 将垂直居中元素自身偏移负 50%，使用标准盒模型
 */

import React from 'react';
import './index.less';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="both-uncertain-common both-uncertain-parent">
          <div className="both-uncertain-child">child</div>
        </div>
      </>
    );
  }
}

export default () => <App />;
