/**
 * title: 双飞翼布局
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="double-wings">
    <header>header</header>
    <div className="container">
      <div className="center">
        <div className="content">center</div>
      </div>
      <div className="left">left 200px</div>
      <div className="right">right 300px</div>
    </div>
    <footer>footer</footer>
  </div>
);

export default () => <App />;
