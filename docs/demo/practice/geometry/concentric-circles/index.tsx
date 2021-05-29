/**
 * title: 同心圆
 * desc:
 */

import React from 'react';
import './index.less';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="circle-1"></div>
        <br />
        <div className="circle-2"></div>
      </>
    );
  }
}

export default () => <App />;
