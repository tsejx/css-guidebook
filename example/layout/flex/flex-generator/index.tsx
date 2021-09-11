import React from 'react';
import { Slider, Radio } from 'antd';
import { useSetState } from 'ahooks';
import './index.less';

const Label = ({ text }) => <div style={{ marginBottom: 8 }}>{text}</div>;

const App = () => {
  const [container, setContainer] = useSetState({
    width: 300,
    height: 'auto',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'stretch',
  });

  return (
    <>
      <Label text="容器宽高" />
      <Slider
        value={container.width}
        min={50}
        max={800}
        step={50}
        style={{ width: 300, margin: 16 }}
        onChange={val => setContainer({ width: val })}
      />
      <Slider
        value={container.height}
        min={50}
        max={800}
        step={50}
        style={{ width: 300 }}
        onChange={val => setContainer({ height: val })}
      />
      <br />
      <Label text="flex-direction" />
      <Radio.Group
        value={container.flexDirection}
        onChange={e => setContainer({ flexDirection: e.target.value })}
        style={{ marginBottom: 16 }}
      >
        <Radio.Button value="row">row</Radio.Button>
        <Radio.Button value="row-reverse">row-reverse</Radio.Button>
        <Radio.Button value="column">column</Radio.Button>
        <Radio.Button value="column-reverse">column-reverse</Radio.Button>
      </Radio.Group>
      <br />
      <Label text="flex-wrap" />
      <Radio.Group
        value={container.flexWrap}
        onChange={e => setContainer({ flexWrap: e.target.value })}
        style={{ marginBottom: 16 }}
      >
        <Radio.Button value="nowrap">nowrap</Radio.Button>
        <Radio.Button value="wrap">wrap</Radio.Button>
        <Radio.Button value="wrap-reverse">wrap-reverse</Radio.Button>
      </Radio.Group>
      <br />
      <Label text="justify-content" />
      <Radio.Group
        value={container.justifyContent}
        onChange={e => setContainer({ justifyContent: e.target.value })}
        style={{ marginBottom: 16 }}
      >
        <Radio.Button value="flex-start">flex-start</Radio.Button>
        <Radio.Button value="flex-end">flex-end</Radio.Button>
        <Radio.Button value="center">center</Radio.Button>
        <Radio.Button value="space-between">space-between</Radio.Button>
        <Radio.Button value="space-around">space-around</Radio.Button>
        <Radio.Button value="space-evenly">space-evenly</Radio.Button>
      </Radio.Group>
      <br />
      <Label text="align-items" />
      <Radio.Group
        value={container.alignItems}
        onChange={e => setContainer({ alignItems: e.target.value })}
        style={{ marginBottom: 16 }}
      >
        <Radio.Button value="stretch">stretch</Radio.Button>
        <Radio.Button value="flex-start">flex-start</Radio.Button>
        <Radio.Button value="flex-end">flex-end</Radio.Button>
        <Radio.Button value="center">center</Radio.Button>
        <Radio.Button value="baseline">baseline</Radio.Button>
      </Radio.Group>
      <br />
      <Label text="align-content" />
      <Radio.Group
        value={container.alignContent}
        onChange={e => setContainer({ alignContent: e.target.value })}
        style={{ marginBottom: 16 }}
      >
        <Radio.Button value="stretch">stretch</Radio.Button>
        <Radio.Button value="flex-start">flex-start</Radio.Button>
        <Radio.Button value="flex-end">flex-end</Radio.Button>
        <Radio.Button value="center">center</Radio.Button>
        <Radio.Button value="space-between">space-between</Radio.Button>
        <Radio.Button value="space-around">space-around</Radio.Button>
      </Radio.Group>

      <div className="flex-generator" style={container}>
        <div className="item">1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
        <div className="item">5</div>
      </div>
    </>
  );
};

export default () => <App />;
