/**
 * title: 网格布局
 * desc: 父元素设置为网格布局容器，垂直居中元素设置外边距 `margin` 为自适应 `auto` 即可
 */

import React from 'react';
import './index.less';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="both-grid-common both-grid-parent">
          <div className="both-grid-child">child</div>
        </div>
      </>
    );
  }
}

export default () => <App />;
