/**
 * title: background-clip
 * desc: 为了方便对比设置容器的 <code>border</code> 宽度为 <code>20px</code>，<code>padding</code> 也为 <code>20px</code>
 */

import React from 'react';
import './index.less';

const App = () => {
  return (
    <div className="background-clip">
      <div>
        默认
        <div className="item initial"></div>
      </div>
      <div>
        border-box
        <div className="item border-box"></div>
      </div>
      <div>
        padding-box
        <div className="item padding-box"></div>
      </div>
      <div>
        content-box
        <div className="item content-box"></div>
      </div>
    </div>
  );
};

export default () => <App />;
