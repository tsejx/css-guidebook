/**
 * title: 解决边距折叠问题
 * desc:
 */

import React from 'react';
import './index.less';

const App = () => {
  return (
    <div className="bfc-margin-collapse-vertical">
      <div className="container">
        <div className="mb-20"></div>
        <div className="mt-20"></div>
      </div>
      <div className="container">
        <div className="mb-20"></div>
        <div style={{ overflow: 'hidden' }}>
          <div className="mt-20"></div>
        </div>
      </div>
    </div>
  );
};

export default () => <App />;
