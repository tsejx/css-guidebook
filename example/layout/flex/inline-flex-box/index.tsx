/**
 * title: inline-block 布局
 * desc: 此时虽然没有为弹性容器设置宽度，但是弹性容器会默认根据弹性子项的宽高去自适应
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="flex-container inline-flex-box-container">
    <div className="flex-item centered inline-flex-box-item">1</div>
    <div className="flex-item centered inline-flex-box-item">2</div>
    <div className="flex-item centered inline-flex-box-item">3</div>
  </div>
);

export default () => <App />;
