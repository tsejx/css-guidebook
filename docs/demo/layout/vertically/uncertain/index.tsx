/**
 * title: 块级元素-未知定位元素高度
 * desc: 与 **块级元素-有滚动条** 实现效果类似，只是对定位元素自身的偏移使用 `transform` 实现
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="uncertain-common uncertain-parent">
    <div className="uncertain-child">child</div>
  </div>
);

export default () => <App />;
