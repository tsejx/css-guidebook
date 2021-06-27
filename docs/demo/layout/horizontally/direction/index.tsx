/**
 * title: 多块级元素-固定宽度-外边距适配
 * desc: 先确保定位元素到父元素两边的距离为 0，使用 margin 设置为 `0 auto` 自适应外边距居中对齐
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="hor-direction-common hor-direction-parent">
    <div className="hor-direction-child">child1</div>
    <div className="hor-direction-child" style={{ bottom: 0 }}>
      child2
    </div>
  </div>
);

export default () => <App />;
