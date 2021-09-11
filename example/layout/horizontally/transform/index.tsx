/**
 * title: 多块级元素-未知宽度
 * desc: 当定位元素未知宽度时，使用 `transform` 对自身进行偏移可以解决这个问题
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="hor-transform-common hor-transform-parent">
  <div className="hor-transform-child">child1</div>
  <div className="hor-transform-child" style={{ bottom: 0 }}>
    child2
  </div>
</div>
)

export default () => <App />;
