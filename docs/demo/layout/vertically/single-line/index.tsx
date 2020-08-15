/**
 * title:  单行内联元素
 * desc: 通过设置父元素的内联元素的高度 height 和行高 line-height 相等，从而使元素垂直居中。
 */

import React from 'react';
import './index.less';

const App = () => (
  <>
    <div className="common uncentered">未垂直居中</div>
    <br />

    {/* 父元素为块元素，子元素为纯文本 */}
    <div className="common parent">div -> text</div>
    <br />

    {/* 父元素为块元素，子元素为行内元素 */}
    <div className="common parent">
      <span>div -> span</span>
    </div>
    <br />

    {/* 父元素为行内元素，因为其没有高度，需先把父元素转换为行内块（inline-block）或者块元素（block）。 */}
    <span className="common parent" style={{ display: 'block' }}>
      <div>span -> div</div>
    </span>
    <br />

    {/* 父元素为行内元素，因为其没有高度，需先把父元素转换为行内块（inline-block）或者块元素（block）。 */}
    <span className="common parent" style={{ display: 'inline-block' }}>
      <span className="">span -> span</span>
    </span>
  </>
);

export default () => <App />;
