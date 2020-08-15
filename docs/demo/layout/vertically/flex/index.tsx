/**
 * title:  多行元素-弹性布局
 * desc: 为父元素设置为 flex 弹性布局，并设置布局方向 flex-direction 为垂直，子元素适配 justify-content 为居中即可实现垂直居中
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="flex-common flex-parent">
    <div>child1</div>
    <div>child2</div>
  </div>
);

export default () => <App />;
