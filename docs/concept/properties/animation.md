---
nav:
  title: 基础
  order: 1
group:
  title: 属性
  order: 2
title: 动画
order: 7
---

# 动画

## 属性说明

### animation

`animation` 所有动画属性的简写属性，除了 `animation-play-state` 属性。

语法：

```
animation: name duration function delay count direction;

animation: 动画名称 动画时间 运动曲线 何时开始 播放次数 是否反方向;
```

### animation-name

`animation-name` 关键帧名称，用于定义 `@keyframes` 动画的名称，与 `@keyframes` 定义的动画名称一致。

语法：

```css
animation-name: keyframename | none;
```

<br />

| 属性值           | 说明                                   |
| :--------------- | :------------------------------------- |
| `<keyframename>` | 需要绑定到选择器的 `keyframe` 的名名称 |
| `none`           | 无动画效果（可用于覆盖来自级联的动画） |

示例：

```css
.box {
  width: 100px;
  height: 100px;
  animation-name: move;
  animation-duration 5s;
}

@keyframes move {
  from: {
    left: 0px;
  }
  to: {
    left: 200px;
  }
}
```

**注意**：需同时配置 `animation-duration` 属性，否则时长为 0，动画不会播放。

### anmiatio-duration

`animation-duration` 动画持续时间，规定元素动画播放完成一个周期所需要的时间，以秒或毫秒计量。默认为 0 表示没有动画效果。

示例：

```css
animation-duration: 6s
animation-duration: 120ms
animation-duration: 1s, 15s
animation-duration: 10s, 30s, 230ms
```

### animation-timing-function

`animation-timing-function` 速度曲线，规定速度效果的速度曲线，默认为 `ease`。

| 属性值                  | 说明                                                           |
| :---------------------- | :------------------------------------------------------------- |
| `linear`                | 线性效果，动画从头到尾的速率是相同的                           |
| `ease`                  | 缓解效果（慢快慢），动画以低速开始，然后加快，结束前变慢       |
| `ease-in`               | 渐显效果（由慢到快），动画以低速开始，然后逐渐加快             |
| `ease-out`              | 渐隐效果（由快到慢），动画以快速开始，然后逐渐减慢             |
| `ease-in-out`           | 渐显渐隐效果（很慢-慢-快-慢-很慢）                             |
| `step-start`            | 马上转跳到动画结束状态                                         |
| `step-end`              | 保持动画开始状态，直到动画执行时间结束，马上转跳到动画结束状态 |
| `steps()`               | 控制时间函数（详细说明看下文）                                 |
| `cubic-bezier(a,b,c,d)` | 在 cubic-bezier 函数中自己的值，可能的值是从 0 到 1 的数值     |

<br />

<code src="@example/properties/animation/animation-timing-function/index.tsx" />

### animation-delay

`animation-delay` 延迟间隔，规定执行动画前的等待时间，默认为 0。

注意：`animation-delay` 允许负值，`-2s` 使动画马上开始，但跳过 2 秒进入动画。

### animation-iteration-count

`animation-iteration-count` 播放次数，规定动画的播放次数，可选具体次数或者无限（infinite），默认为 1。

| 属性值    | 说明                                                                                                                        |
| :-------- | :-------------------------------------------------------------------------------------------------------------------------- |
| `infnite` | 无限循环播放动画                                                                                                            |
| `<time>`  | 动画播放的次数；默认值为 1。<br/>可以用小数定义循环，来播放动画周期的一部分：例如，0.5 将播放到动画周期的一半。不可为负值。 |

示例：

```css
/* 值为关键字 */
animation-iteration-count: infinite;

/* 值为数字 */
animation-iteration-count: 3;
animation-iteration-count: 2.4;

/* 指定多个值 */
animation-iteration-count: 2, 0, infinite;
```

<br />

<code src="@example/properties/animation/animation-iteration-count/index.tsx" />

### animation-direction

`animation-direction` 是否轮流反向播放动画，规定动画是否在下个周期逆向播放，默认为 `normal`。

| 属性值              | 说明                                     |
| :------------------ | :--------------------------------------- |
| `normal`            | 按时间轴顺序                             |
| `reverse`           | 时间轴反方向运行                         |
| `alternate`         | 轮流，即来回往复进行                     |
| `alternate-reverse` | 动画先反运行再正方向运行，并持续交替运行 |

<br />

<code src="@example/properties/animation/animation-direction/index.tsx" />

### animation-play-state

`animation-play-state` 播放状态，规定动画的播放状态，用此来控制动画的暂停和继续。

| 属性值    | 说明     |
| :-------- | :------- |
| `running` | 继续状态 |
| `paused`  | 暂停状态 |

<br />

<code src="@example/properties/animation/animation-play-state/index.tsx" />

### animation-fill-mode

`animation-fill-mode` 播放后样式，控制动画结束后的元素样式。

| 属性值      | 说明                                                               |
| :---------- | :----------------------------------------------------------------- |
| `none`      | 回到动画没开始时的状态                                             |
| `forwards`  | 动画结束后动画停留在结束状态                                       |
| `backwords` | 动画回到第一帧的状态                                               |
| `both`      | 根据 `animation-direction` 轮流应用 `forwards` 和 `backwards` 规则 |

注意：与 `iteration-count` 不能冲突（动画执行无限次）

## 实践应用

### 控制时间函数

`animation-timing-function` 是控制时间的函数，在取值中除了常用的三次贝塞尔曲线意外，还有个让人比较困惑的 `steps()` 函数。

`animation` 默认以 `ease` 方式过渡，它会在每个关键帧之间插入补间动画，所以动画效果是连贯性的。

除了 `ease`、`linear`、`cubic-bezier` 之类的过渡函数都会为其插入补间。但有些效果不需要补间，只需要关键帧之间的跳跃，这时应该使用 `steps` 过渡方式。

理解 steps 函数：

steps 函数指定一个阶跃函数

1. 第一个参数指定了时间函数中的间隔数量（必须是正整数）
2. 第二个参数可选，接受 `start` 和 `end` 两个值，指定在每个间隔的起点或是重点发生越阶变化，默认为 `end`

<code src="../../../example/properties/animation/steps/index.jsx"/>

## 动画支持检测

```js
let animation = false,
  animationString = 'animation',
  keyframePrefix = '',
  domPrefixes = ['Webkit', 'Moz', 'O', 'ms', 'Khtml'],
  prefix = '',
  element = document.createElement('div');

if (element.style.animationName !== undefined) {
  animation = true;
}

if (animation === false) {
  for (let i = 0; i < domPrefixes.length; i++) {
    if (element.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
      prefix = domPrefixes[i];
      animationString = prefix + 'Animation';
      ketframePrefix = '-' + prefix.toLowerCase() + '-';
      animation = true;
      break;
    }
  }
}
```

## 动画库

## 参考资料

- [🛠 CSS Animation beta](http://cssanimate.com/)
- [🛠 Browser Hacks](http://browserhacks.com/)
- [🛠 CSS3 动画工具](http://www.shouce.ren/example/show/s/6869)
- [📝 CSS3 动画合集：帧动画、补间动画、呼吸动画](https://blog.csdn.net/weixin_42839080/article/details/81546292)
- [Web 动画原则及技巧浅析](https://juejin.cn/post/6976792239393472520)
- [缓动函数速查表](https://www.xuanfengge.com/easeing/easeing/)
