/**
 * title: background-image
 * desc: 支持绝对地址、相对地址和渐变色三种形式定义 `background-image` 属性
 */

import React from 'react';
import './index.less';

const App = () => {
  return (
    <div className="background-image">
      <div>
        绝对地址
        <div className="item absolute-url"></div>
      </div>
      <div>
        相对地址
        <div className="item relative-url"></div>
      </div>
      <div>
        渐变色
        <div className="item gradient-color"></div>
      </div>
    </div>
  );
};

export default () => <App />;
