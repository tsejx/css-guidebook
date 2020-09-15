/**
 * title: 垂直居中文本（行内元素）
 * desc: 通过设置父元素容器 `text-align` 实现水平居中，设置一致的高度（`height`）和行高（`line-height`）实现对子元素的垂直居中，垂直居中元素设置 `vertical-align` 以及 `line-height` 为 `initial` 实现子元素内部的基准线垂直居中
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="both-text-common both-text-parent">
    <div className="both-text-child">Hello world!</div>
  </div>
);

export default () => <App />;
