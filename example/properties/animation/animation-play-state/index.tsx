/**
 * title: animation-play-state
 * desc: 暂停后重新开始运行动画时，将从原暂停的位置开始，不会从原起点开始
 */

import React, { useState } from 'react';
import { Radio } from 'antd';
import './index.less';

const App = () => {
  const [playState, setCount] = useState('paused');

  return (
    <div className="animation-play-state">
      <Radio.Group
        defaultValue={playState}
        onChange={(e) => setCount(e.target.value)}
      >
        <Radio value="paused">paused</Radio>
        <Radio value="running">running</Radio>
      </Radio.Group>
      <div className={`box ${playState}`}></div>
    </div>
  );
};

export default () => <App />;
