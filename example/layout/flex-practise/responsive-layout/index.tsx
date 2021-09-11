/**
 * title: 自适应布局
 * desc:
 */

import React from 'react';
import { Slider, Radio } from 'antd';
import { useSetState } from 'ahooks';
import './index.less';

const Label = ({ text }) => <div style={{ marginBottom: 8 }}>{text}</div>;

const App = () => {
  const [style, setStyle] = useSetState({ width: 300 });
  return (
    <>
      <Label text="父容器宽度" />
      <Slider
        value={style.width}
        min={50}
        max={800}
        step={50}
        style={{ width: 300, margin: 16 }}
        onChange={val => setStyle({ width: val })}
      />
      <br />
      <div className="flexible-responsive-layout">
        {/* HTML 结构实现 */}
        <div className="parent" style={style}>
          <div className="child">1</div>
          <div className="child">2</div>
          <div className="child">3</div>
        </div>
      </div>
    </>
  );
};

export default () => <App />;
