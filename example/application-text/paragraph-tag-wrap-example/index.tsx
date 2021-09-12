/**
 * title: 文本段落标签的默认属性说明
 * desc:
 */

import React from 'react';
import './index.less';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="paragraph-tag-wrapper">
          <p className="chinese-paragraph">
            这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本
          </p>
        </div>

        <div className="container">
          <p className="english-paragraph">
            This is paragraph.This is paragraph.This is paragraph.This is paragraph.This is
            paragraph.This is paragraph.This is paragraph.This is paragraph.This is paragraph.This
            is paragraph.This is paragraph.This is paragraph.This is paragraph.This is paragraph.
          </p>
        </div>

        <div className="container">
          <p className="number-paragraph">
            123456789012345678901234567890123456789012345678901234567890
          </p>
        </div>
      </>
    );
  }
}

export default () => <App />;
