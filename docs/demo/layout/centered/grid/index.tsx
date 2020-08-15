/**
 * title: 网格布局
 * desc:
 */

import React from 'react';
import './index.less';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="both-grid-common both-grid-parent">
          <div className="both-grid-child">child</div>
        </div>
      </>
    );
  }
}

export default () => <App />;
