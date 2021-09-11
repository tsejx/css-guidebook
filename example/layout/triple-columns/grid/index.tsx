/**
 * title: grid 网格布局
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="triple-grid">
    <div className="left">left 25%</div>
    <div className="center">center</div>
    <div className="right">right 30%</div>
  </div>
);

export default () => <App />;
