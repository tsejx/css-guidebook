/**
 * title: float + margin(fix)
 */

import React from 'react';
import './index.less';

const App = () => (
  <div className="lfra-float-margin-fix">
    <div className="left">left</div>
    <div className="right">
      <div className="right-content">right</div>
    </div>
  </div>
);

export default () => <App />;
