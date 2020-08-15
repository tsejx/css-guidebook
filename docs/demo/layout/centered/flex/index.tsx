/**
 * title: 弹性布局
 * desc:
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
