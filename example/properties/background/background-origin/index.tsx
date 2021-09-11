/**
 * title: background-origin
 * desc: 为了方便对比，在每个示例中添加了 <code>background-color</code>，由于 <code>background-image</code> 生效会覆盖 <code>background-color</code> 所以会呈现如上效果
 */

import React from 'react';
import './index.less';

const App = () => {
  return (
    <div className="background-origin">
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
