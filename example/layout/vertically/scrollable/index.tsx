/**
 * title: 块级元素-有滚动条
 * desc: 垂直元素使用绝对定位定位元素 top 垂直居中，并使用 margin-top 以定位元素高度 50% 作为偏移量校正
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="scrollable-common scrollable-parent">
    <div className="scrollable-child">child</div>
  </div>
);

export default () => <App />;
