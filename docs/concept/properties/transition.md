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

## 过渡属性

| 属性                         | 说明                                                 |
| :--------------------------- | :--------------------------------------------------- |
| `transition`                 | 所有过渡属性的简写属性                               |
| `transition-property`        | 过渡属性名称，规定设置过渡效果的 CSS 属性的名称      |
| `transition-duration`        | 持续时间，规定完成过渡效果需要多少秒或毫秒，默认为 0 |
| `transition-timing-function` | 速度曲线，规定速度效果的速度曲线，默认为 `ease`      |
| `transition-delay`           | 延迟间隔，定义过渡效果何时开始，默认为 0             |
