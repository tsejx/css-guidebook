/**
 * title: float 浮动布局
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="triple-float">
    <div className="left">left 25%</div>
    <div className="right">right 30%</div>
    <div className="center">center</div>
  </div>
);

export default () => <App />;
