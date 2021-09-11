/**
 * title: 多行文本内容超出省略兼容方案
 * desc:
 */

import React from 'react';
import classnames from 'classnames';
import styles from './index.module.less';

class App extends React.Component {
  render() {
    return (
      <>
        <div className={classnames([styles.paragraph, styles['text-ellipsis']])}>
          持续两周的课程设计结束了，本次已经是我们小组的第三次合作了，相比以前大家都进步了很多，所以合作还是很顺利的。我们这次的是一个
          OJ（Online Judge
          在线检测代码的平台）持续两周的课程设计结束了，本次已经是我们第三次合作了，相比以前大家都进步了很多，所以合作还是很顺利的。
        </div>
      </>
    );
  }
}

export default () => <App />;
