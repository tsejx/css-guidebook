/**
 * title: 自动填充剩余空间
 * desc: <code>header</code> 和 <code>footer</code> 固定高度，<code>main</code> 自动填充剩余空间
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="flexible-auto-fill">
    <div className="header">header</div>
    <div className="main">main</div>
    <div className="footer">footer</div>
  </div>
);

export default () => <App />;
