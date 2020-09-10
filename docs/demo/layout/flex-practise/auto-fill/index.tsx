/**
 * title: 自动填充剩余空间
 * desc: header 和 footer 固定高度，内容区自动填充剩余空间
 */

import React from 'react';
import './index.less';

const App = () => (
  // HTML 结构实现
  <div className="flexible-auto-fill">
    <div className="header">header</div>
    <div className="main">main</div>
    <div className="footer">footer</div>
  </div>
);

export default () => <App />;
