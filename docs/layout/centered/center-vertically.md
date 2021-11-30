---
title: 垂直居中
order: 11
group:
  title: 居中布局
  order: 6
nav:
  title: 布局
  order: 2
---

# 垂直居中

## 单行内联元素

通过设置内联元素的高度 `height` 和行高 `line-height` 相等，从而使元素垂直居中。

**原理**：`line-height` 最终表现通过 `inline box` 实现的，而无论 `inline box` 所占据的高度是多少（无论比文字大还是比文字小），其占据的空间都是与文字内容功能公用水平中垂线的。

**应用场景**：这种方法比较适合文字的居中，其核心是设置行高（line-height）等于包裹他的盒子的高，或者不设高度只设行高，这种适合文字居中且高度固定的场景，使用起来比较方便也比较有用。

<code src="../../../example/layout/vertically/single-line/index.tsx" />

**优点**： 简单兼容性好

**缺点**：

- 只能用于单行行内内容（单行文本、行内、行内块级）
- 需要明确知道 `height` 值

## 多行元素

### 表格布局

使用表格布局的 `vertical-align: middle` 可以实现子元素的垂直居中。

<code src="../../../example/layout/vertically/table/index.tsx" />

**实现条件**：

1. 父元素设有等于自身高度的行高
2. 且子元素为行内块元素

### 弹性布局

利用弹性布局实现垂直居中，其中 `flex-direction: column` 定义主轴方向为纵向。

<code src="../../../example/layout/vertically/flex/index.tsx" />

**优点**

- 内容块的宽高任意，优雅的溢出
- 可用于更复杂高级的布局技术中

**缺点**

- IE8/IE9 不支持
- 需要浏览器厂商前缀
- 渲染上可能会有一些问题

### 精灵元素

利用精灵元素（Ghost Element）技术实现垂直居中，即在父容器内放一个 100% 高度的伪元素，让 **文本** 和 **伪元素** 垂直对齐，从而达到垂直居中的目的。

<code src="../../../example/layout/vertically/ghost/index.tsx" />

## 块级元素

### 固定高度-外边距偏移

当居中元素的 `高度和宽度` 已知时，垂直居中问题就很简单。通过 **绝对定位** 元素距离顶部 50%，并设置 `margin-top` 向上偏移元素高度的一半，就可以实现垂直居中了。

<code src="../../../example/layout/vertically/scrollable/index.tsx" />

**优点**： 适用于所有浏览器.

**缺点**： 父元素空间不够时，子元素可能不可见（当浏览器窗口缩小时，滚动条不出现时）。如果子元素设置了 `overflow:auto`，则高度不够时，会出现滚动条。

### 固定高度-外边距适配

<code src="../../../example/layout/vertically/unscrollable/index.tsx" />

**优点**： 简单

**缺点**： 没有足够空间时，子元素会被截断，但不会有滚动条

### 未知高度

<code src="../../../example/layout/vertically/uncertain/index.tsx" />

**优点**： 代码量少

**缺点**： IE8 不支持，属性需要追加浏览器厂商前缀，可能干扰其他 `transform` 效果，某些情形下会出现文本或元素边界渲染模糊的现象。

## 图片垂直居中

<code src="../../../example/layout/vertically/image/index.tsx" />

**为什么 fontSize 为 0 是必要的？**

在 `font-size` 不为 0 时，图片设置垂直居中时的中线位置并不是它的父元素的绝对中线位置，它们会有一个和字符 `x` 高度相关的高度差。设置 `font-size` 为 0，会消除这个高度差，使图片的中线位置和父元素中线重合。详细解释见 [CSS 深入理解 vertical-align 和 line-height 的基友关系](https://www.zhangxinxu.com/wordpress/2015/08/css-deep-understand-vertical-align-and-line-height/)
