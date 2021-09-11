/**
 * title:  多行元素-表格布局
 * desc: 子元素高度呈现效果是撑满整个父元素
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="table-common table-parent">
    <div className="table-child">child1</div>
    <div className="table-child">child2</div>
  </div>
);

export default () => <App />;
