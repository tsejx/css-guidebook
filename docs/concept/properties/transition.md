---
title: 过渡
order: 8
group:
  title: 属性
  order: 2
nav:
  title: 基础
  order: 1
---

# 过渡

过渡 `transition` 是 CSS3 中具有颠覆性的特征之一，我们可以在不实用 Flash 动画或 JavaScript 的情况下，当元素从一种样式变换为另一种样式时为元素添加效果。

要实现这一点，必须规定两项内容：

- 规定您希望把效果添加到哪个 CSS 属性上
- 规定效果的时长

## 属性说明

### transition

`transition` 为所有过渡属性的简写属性。

### transition-property

`transition-property` 用于设定过渡的属性名称，规定设置过渡效果的 CSS 属性的名称。

### transition-duration

`transition-duration` 用于设定过渡的持续时间，规定完成过渡效果需要多少秒或毫秒，默认为 `0`。

### transition-timing-function

`transition-timing-function` 用于设定过渡的速度曲线，规定速度效果的速度曲线，默认为 `ease`

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

### transition-delay

`transition-delay` 用于设定过渡的延迟间隔，定义过渡效果何时开始，默认为 `0`。
