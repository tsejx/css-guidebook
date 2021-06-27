/**
 * title: 块级元素
 * desc: 只需要为定位元素设置  即可实现
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="hor-block-common">
    <div className="hor-block-child">child</div>
  </div>
);

export default () => <App />;
