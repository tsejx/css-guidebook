/**
 * title: 弹性布局
 * desc: 父元素设置为弹性布局容器，并将 `justify-content` 和 `align-items` 设置为 `center` 居中
 */

import React from 'react';
import './index.less';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="both-flex-common both-flex-parent">
          <div className="both-flex-child">child</div>
        </div>
      </>
    );
  }
}

export default () => <App />;
