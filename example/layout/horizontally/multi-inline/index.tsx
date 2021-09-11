/**
 * title: 多块级元素-inlineBlock
 * desc: 将行内多个元素设定为 `inline-block` 行内块，然后在父元素添加 `text-align`
 */

import React from 'react';
import './index.less';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="hor-multi-inline-common hor-multi-inline-parent">
          <div className="hor-multi-inline-child">child1</div>
          <div className="hor-multi-inline-child">child2</div>
        </div>
      </>
    );
  }
}

export default () => <App />;
