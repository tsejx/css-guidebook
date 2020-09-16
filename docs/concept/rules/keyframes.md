---
nav:
  title: 基础
  order: 1
group:
  title: 规则
  order: 3
title: '@keyframes 关键帧'
order: 3
---

# @keyframes 关键帧

`@keyframes` 规则用于指定动画名称和动画效果。

**语法**

```css
@keyframes <identifier> { <keyframes-blocks> }
```

```css
<keyframes-blocks>: [[ from | to | <percentage>]{sRules}][[, from | to | <percentage>]{sRules}] *;
```

**取值**

- `<identifier>` 定义动画名称
- `<keyframes-blocks>` 定义动画在每个阶段的样式，即帧动画

```css
   /* 规定动画语法:from...to...定义的是从开始到结束两个状态 */

   @keyframes 动画名称 {
	  from{ 开始位置 }  0%
	  to{  结束  }  100%
	}

  /* 规定各个阶段不同的状态的动画(不只有开始于结束状态) */
  @keyframes 动画名称 {
	    0% {  }
	    n1% {   }
	    n2% {   }
	    n3% {   }
	    n4% {   }
	    .........
	    100% {  }
  }
```

```css
@keyframes goback {
  0% {
  }
  49% {
    transform: translateX(1000px);
  }
  55% {
    transform: translateX(1000px) rotateY(180deg);
  }
  95% {
    transform: translateX(0) rotateY(180deg);
  }
  100% {
    transform: translateX(0) rotateY(0deg);
  }
}

/* 在规定动画的时候,可以有多个过程节点用来描述动画的状态. */
/* 上面的例子中:goback动画就是在不同的时间点位置不同. */
```
