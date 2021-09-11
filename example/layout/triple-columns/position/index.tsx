/**
 * title: position absolute 绝对定位布局
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="triple-position">
    <div className="left">left 25%</div>
    <div className="center">center</div>
    <div className="right">right 30%</div>
  </div>
);

export default () => <App />;
