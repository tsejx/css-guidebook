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

## 垂直居中文本

<code src="../../demo/layout/centered/text/index.tsx" />

## 固定宽高元素

通过 `margin` 平移元素整体宽度的一半，使元素水平垂直居中。这里的宽度是指标准盒模型下 `content + padding + border` 的总和。

- 负 `margin` 方案：居中元素相对于父元素绝对定位于 50%，并使用负 `margin` 自身宽高的一半，校正过多的偏移量
- `margin` 自适应方案：居中元素相对于父元素四个方位的距离设为 0，并使用 `margin: auto` 自适应

<code src="../../demo/layout/centered/certain/index.tsx" />

## 未知宽高元素

利用 2D 转换，在水平和垂直两个方向都反向平移宽高的一半，从而使元素水平垂直居中。

<code src="../../demo/layout/centered/uncertain/index.tsx" />

## 弹性布局

利用弹性布局，其中 `justify-content` 用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式；而 `align-items` 属性定义弹性容器子项在弹性容器的当前行的侧轴（纵轴）方向上的对齐方式。

<code src="../../demo/layout/centered/flex/index.tsx" />

## 网格布局

<code src="../../demo/layout/centered/grid/index.tsx" />

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

---

**参考资料：**

- [📝 Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)
