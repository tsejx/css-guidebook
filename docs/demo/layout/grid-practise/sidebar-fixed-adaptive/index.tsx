/**
 * title:
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
      <Label text="自适应容器宽度" />
      <Slider
        value={style.width}
        min={50}
        max={800}
        step={50}
        style={{ width: 300, margin: 16 }}
        onChange={val => setStyle({ width: val })}
      />
      <br />
      <div className="grid-sidebar-fixed-adaptive">
        {/* HTML 结构实现 */}
        <div class="parent">
          <div class="child" contenteditable>
            Min: 150px / Max: 25%
          </div>
          <div class="child" contenteditable style={style}>
            This element takes the second grid position (1fr), meaning it takes up the rest of the
            remaining space.
          </div>
        </div>
      </div>
    </>
  );
};

export default () => <App />;
