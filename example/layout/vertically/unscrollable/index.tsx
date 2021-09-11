/**
 * title: 块级元素-无有滚动条
 * desc:
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="unscrollable-common unscrollable-parent">
    <div className="unscrollable-child">child</div>
  </div>
);

export default () => <App />;
