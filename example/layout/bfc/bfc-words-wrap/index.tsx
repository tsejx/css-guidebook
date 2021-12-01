/**
 * title: 避免文字环绕
 * desc: 为 <code>p</code> 标签创建新的 BFC 以不再紧贴包含块的左侧
 */

import React from 'react';
import './index.less';

const App = () => {
  return (
    <div className="bfc-words-wrap">
      <div className="floated">Floated div</div>
      <p className="paragraph">
        Quae hic ut ab perferendis sit quod architecto, dolor debitis quam rem provident aspernatur
        tempora expedita.
      </p>
    </div>
  );
};

export default () => <App />;
