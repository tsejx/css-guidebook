/**
 * title: flex 弹性布局
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="holy-grail-flex">
    <header>header</header>
    <div className="container">
      <div className="left">left 25%</div>
      <div className="center">center</div>
      <div className="right">right 30%</div>
    </div>
    <footer>footer</footer>
  </div>
);

export default () => <App />;
