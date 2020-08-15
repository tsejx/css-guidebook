/**
 * title: flex 布局
 * desc: 此时为弹性容器设置宽度，默认为弹性容器的父元素的 100%
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="flexible-container">
    <div className="item">1</div>
    <div className="item">2</div>
    <div className="item">3</div>
  </div>
);

export default () => <App />;
