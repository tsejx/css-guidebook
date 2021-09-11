/**
 * title: 图像垂直居中对齐
 * desc:
 */

import React from 'react';
import img from './star.png';
import './index.less';

const App = () => (
  <div className="image-common image-parent">
    <img src={img} className="image-child" />
  </div>
);

export default () => <App />;
