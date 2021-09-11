/**
 * title:  多行元素-精灵元素
 * desc: 父元素内放置 100% 高度伪元素使其与文本垂直对齐
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="ghost-common ghost-parent">
    <div className="ghost-child">child1</div>
    <div className="ghost-child">child2</div>
  </div>
);

export default () => <App />;
