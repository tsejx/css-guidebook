/**
 * title: background-position
 * desc: 此处将背景图片的大小 <code>background-size</code> 设置为 <code>50px</code>，方便观察背景图片设置对应 <code>background-position</code> 后的变化
 */

import React from 'react';
import './index.less';

const App = () => {
  return (
    <div className="background-position">
      <div>
        原点（默认）
        <div className="item"></div>
      </div>
      <div>
        居中
        <div className="item center"></div>
      </div>
      <div>
        左下偏移
        <div className="item bottom-left"></div>
      </div>
      <div>
        百分比
        <div className="item right-fifty-percent"></div>
      </div>
      <div>
        向左上偏移
        <div className="item top-left-offset"></div>
      </div>
      <div>
        向右下偏移
        <div className="item bottom-right-offset"></div>
      </div>
    </div>
  );
};

export default () => <App />;
