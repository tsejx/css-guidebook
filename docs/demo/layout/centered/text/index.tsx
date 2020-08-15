/**
 * title: 垂直居中文本
 * desc: 使用 `text-align` 和 `vertical-align`
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="both-text-common both-text-parent">
    <div className="both-text-child">Hello world!</div>
  </div>
);

export default () => <App />;
