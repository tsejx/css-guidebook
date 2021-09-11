/**
 * title: 内联元素
 * desc: 内联元素、内联块、内联表等使用 `text-align` 可直接实现水平居中
 */

import React from 'react';
import './index.less';

class App extends React.Component {
  render() {
    return (
      <>
        {/* 水平居中的元素为内联元素 */}
        <div className="hor-inline-common hor-inline-parent">
          <span className="hor-inline-child">inline element</span>
        </div>
        <br />

        {/* 将需要水平居中的块级元素设为 inline-block */}
        <div className="hor-inline-common hor-inline-parent">
          <div className="hor-inline-block hor-inline-child">inline-block</div>
        </div>
        <br />

        {/* 将需要水平居中的块级元素设为 inline-table */}
        <div className="hor-inline-common hor-inline-parent">
          <div className="hor-inline-table hor-inline-child">inline-table</div>
        </div>
        <br />

        {/* 将需要水平居中的块级元素设为 inline-flex */}
        <div className="hor-inline-common hor-inline-parent">
          <div className="hor-inline-flex hor-inline-child">inline-flex</div>
        </div>
      </>
    );
  }
}

export default () => <App />;
