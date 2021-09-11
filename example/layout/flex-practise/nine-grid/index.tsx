/**
 * title: 自动填充剩余空间
 * desc: <code>header</code> 和 <code>footer</code> 固定高度，<code>main</code> 自动填充剩余空间
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="flexible-nine-grid">
    <div className="grid-item">1</div>
    <div className="grid-item">2</div>
    <div className="grid-item">3</div>
    <div className="grid-item">4</div>
    <div className="grid-item">5</div>
    <div className="grid-item">6</div>
    <div className="grid-item">7</div>
    <div className="grid-item">8</div>
    <div className="grid-item">9</div>
  </div>
);

export default () => <App />;
