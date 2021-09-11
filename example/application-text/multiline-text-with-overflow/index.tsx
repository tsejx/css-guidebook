/**
 * title: 多行文本溢出
 * desc:
 */

import React from 'react';
import classnames from 'classnames';
import styles from './index.module.less';

class App extends React.Component {
  render() {
    return (
      <>
        <div className={classnames([styles.paragraph])}>
        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
        </div>
      </>
    );
  }
}

export default () => <App />;
