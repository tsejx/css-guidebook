/**
 * title: 未知宽高偏移
 * desc:
 */

import React from 'react';
import './index.less';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="both-uncertain-common both-uncertain-parent">
          <div className="both-uncertain-child">child</div>
        </div>
      </>
    );
  }
}

export default () => <App />;
