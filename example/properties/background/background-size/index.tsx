/**
 * title: background-size
 * desc: 百分比按照父容器宽高百分比计算所得
 */

import React from 'react';
import './index.less';

const App = () => {
  return (
    <div className="background-size">
      <div>
        真实大小（默认）
        <div className="item auto"></div>
      </div>
      <div>
        完全覆盖
        <div className="item cover"></div>
      </div>
      <div>
        完全覆盖（居中）
        <div className="item cover-center"></div>
      </div>
      <div>
        等比缩放适配
        <div className="item contain"></div>
      </div>
      <div>
        宽高 50px（拉伸）
        <div className="item length-50"></div>
      </div>
      <div>
        宽 80px / 高 80%（拉伸）
        <div className="item perc-50"></div>
      </div>
    </div>
  );
};

export default () => <App />;
