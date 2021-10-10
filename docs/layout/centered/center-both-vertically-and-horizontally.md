---
title: 水平垂直居中
order: 12
group:
  title: 居中布局
  order: 6
nav:
  title: 布局
  order: 2
---

# 水平垂直居中

实现方案：

1. 文本元素：通过设置父元素容器 `text-align` 实现水平居中，设置一致的高度（`height`）和行高（`line-height`）实现对子元素的垂直居中，垂直居中元素设置 `vertical-align` 以及 `line-height` 为 `initial` 实现子元素内部的基准线垂直居中
2. 固定垂直居中元素的宽高：相对于父元素容器左边距和上边距坐标偏移 50%，通过计算垂直居中元素宽/高，利用负 `margin` 偏移自身宽/高的 50%。或者通过设置上下左右坐标为 0，外边距自适应 `auto` 实现垂直居中。两种处理手法都需要设置垂直居中元素为标准盒模型。
3. 不确定垂直居中元素的宽高：相对于父元素容器左边距和上边距坐标偏移 50%，使用 `transform + translate` 将垂直居中元素自身偏移负 50%，使用标准盒模型
4. 弹性布局：父元素设置为弹性布局容器，并将 `justify-content` 和 `align-items` 设置为 `center` 居中
5. 网格布局：父元素设置为网格布局容器，垂直居中元素设置外边距 `margin` 为自适应 `auto` 即可

## 垂直居中文本

<code src="../../../example/layout/centered/text/index.tsx" />

## 固定宽高元素

通过 `margin` 平移元素整体宽度的一半，使元素水平垂直居中。这里的宽度是指标准盒模型下 `content + padding + border` 的总和。

- 负 `margin` 方案：居中元素相对于父元素绝对定位于 50%，并使用负 `margin` 自身宽高的一半，校正过多的偏移量
- `margin` 自适应方案：居中元素相对于父元素四个方位的距离设为 0，并使用 `margin: auto` 自适应

<code src="../../../example/layout/centered/certain/index.tsx" />

## 未知宽高元素

利用 2D 转换，在水平和垂直两个方向都反向平移宽高的一半，从而使元素水平垂直居中。

<code src="../../../example/layout/centered/uncertain/index.tsx" />

## 弹性布局

利用弹性布局，其中 `justify-content` 用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式；而 `align-items` 属性定义弹性容器子项在弹性容器的当前行的侧轴（纵轴）方向上的对齐方式。

<code src="../../../example/layout/centered/flex/index.tsx" />

## 网格布局

<code src="../../../example/layout/centered/grid/index.tsx" />

## 可视窗口水平垂直居中

屏幕上水平垂直居中十分常用，常规的登录及注册页面都需要用到。要保证较好的兼容性，还需要用到表布局。

```css
.outer {
  display: table;
  position: absolute;
  height: 100%;
  width: 100%;
}

.middle {
  display: table-cell;
  vertical-align: middle;
}

.inner {
  margin: 0 auto;
  width: 400px;
}
```

## 参考资料

- [📝 Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)
