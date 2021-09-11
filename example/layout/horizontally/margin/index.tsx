/**
 * title: 多块级元素-固定宽度-外边距偏移
 * desc: 先相对于父元素向右偏离半个父元素宽度，然后使用负左外边距校正居中元素的偏移量
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="hor-margin-common hor-margin-parent">
    <div className="hor-margin-child">child1</div>
    <div className="hor-margin-child" style={{ bottom: 0 }}>
      child2
    </div>
  </div>
);

export default () => <App />;
