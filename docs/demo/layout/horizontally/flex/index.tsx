/**
 * title: 多块级元素-弹性布局
 * desc: 父元素设定为 flex 布局，并使用 justify-content 将子元素位于容器中心
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="hor-flex-common hor-flex-parent">
    <div className="hor-flex-child">child1</div>
    <div className="hor-flex-child">child2</div>
  </div>
);

export default () => <App />;
