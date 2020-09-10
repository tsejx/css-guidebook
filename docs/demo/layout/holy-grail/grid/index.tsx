/**
 * title: grid 网格布局
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="holy-grail-grid">
    <header>header</header>
    <div className="left">left 25%</div>
    <div className="center">center</div>
    <div className="right">right 30%</div>
    <footer>footer</footer>
  </div>
);

export default () => <App />;
