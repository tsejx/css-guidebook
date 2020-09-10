/**
 * title: 圣杯布局 - 浮动实现
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="holy-grail-float">
    <header>header</header>
    <div className="container">
      <div className="center">center</div>
      <div className="left">left 200px</div>
      <div className="right">right 300px</div>
    </div>
    <footer>footer</footer>
  </div>
);

export default () => <App />;
