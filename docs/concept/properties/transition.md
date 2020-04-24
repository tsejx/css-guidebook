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

比如我们平时用到的 `:hoever`、`:focus`、`:checked`、媒体查询或者 JavaScript。

我们来分析这一整个过程，首先 transition 给元素设置的过渡属性是 transform，当鼠标移入元素时，元素的 transform 发生变化，那么这个时候就触发了 transition，产生了动画，当鼠标移出时，transform 又发生变化，这个时候还是会触发 transition，产生动画，所以 transition 产生动画的条件是 transition 设置的 property 发生变化，这种动画的特点是需要“一个驱动力去触发”，有着以下几个不足：

需要事件触发，所以没法在网页加载时自动发生
是一次性的，不能重复发生，除非一再触发
只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态
一条 transition 规则，只能定义一个属性的变化，不能涉及多个属性。

* transition-property 规定设置过渡效果的 CSS 属性的名称
* transition-duration 规定完成过渡效果需要多少秒或毫秒
* transition-timing-function 规定速度效果的速度曲线
* transtion-delay 定义过渡效果何时开始