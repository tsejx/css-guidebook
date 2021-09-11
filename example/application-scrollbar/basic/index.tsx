/**
 * title:
 * desc:
 */

import React from 'react';
import './index.less';

class App extends React.Component {
  render() {
    return (
      <div style={{ overflow: 'hidden', zoom: 1 }}>
        <div className="scrollbar" id="scrollbar-1">
          <div className="force-overflow"></div>
        </div>
        <div className="scrollbar" id="scrollbar-2">
          <div className="force-overflow"></div>
        </div>
        <div className="scrollbar" id="scrollbar-3">
          <div className="force-overflow"></div>
        </div>
        <div className="scrollbar" id="scrollbar-4">
          <div className="force-overflow"></div>
        </div>
        <div className="scrollbar" id="scrollbar-5">
          <div className="force-overflow"></div>
        </div>
        <div className="scrollbar" id="scrollbar-6">
          <div className="force-overflow"></div>
        </div>
      </div>
    );
  }
}

export default () => <App />;
