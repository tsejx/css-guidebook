import React, { useState } from 'react';
import { Slider } from 'antd';
import './index.less';

function formatter(value) {
  return `${value}px`
}

const App = () => {
  const [value, setValue] = useState(600)

  return (
    <div className="perspective">
      <Slider defaultValue={value} tipFormatter={formatter} step={20} min={100} max={1000} onChange={(val) => setValue(val)} />
      <div className="cube" style={{ perspective: value }}>
        <div className="side  front">1</div>
        <div className="side   back">6</div>
        <div className="side  right">4</div>
        <div className="side   left">3</div>
        <div className="side    top">5</div>
        <div className="side bottom">2</div>
      </div>
    </div>
  );
};

export default () => <App />;
