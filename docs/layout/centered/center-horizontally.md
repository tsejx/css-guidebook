---
title: 水平居中
order: 10
group:
  title: 居中布局
  order: 6
nav:
  title: 布局
  order: 2
---

# 水平居中

## 内联元素

利用 `text-align: center` 可以实现块级元素内部的内联元素水平居中。

**适用对象**：

- 内联元素 `line`
- 内联块 `inline-block`
- 内联表 `inline-table`
- `inline-flex` 元素

<code src="../../../example/layout/horizontally/inline/index.tsx" />

**优点**

- 简单快捷，兼容性好

**缺点**

- 只对行内内容有效
- 属性会继承影响到后代行内内容
- 如果子元素宽度大于父元素宽度则无效，但是后代行内内容中宽度小雨设置 `text-align` 属性的元素宽度的时候，也会继承水平居中

## 块级元素

通过固定宽度块级元素的 `margin-left` 和 `margin-right` 设成 `auto`，就可以使块级元素水平居中。

```css
.child {
  /* width: fit-content */
  margin: 0 auto;
}
```

<code src="../../../example/layout/horizontally/block/index.tsx" />

## 多块级元素

### 内联块实现

如果一行中有两个或两个以上的块级元素，通过设置块级元素的显示类型为 `inline-block` 和父容器的 `text-align` 属性从而使多块级元素水平居中。

<code src="../../../example/layout/horizontally/multi-inline/index.tsx" />

**优点**

- 简单易理解，兼容性好

**缺点**

- 只对行内内容有效
- 属性会继承影响到后代行内内容
- 块级改为 `inline-block` 换行、空格会产生元素间隔

### 弹性布局

利用弹性布局，实现水平居中，其中 `align-items` 用于设置弹性盒子元素在主轴方向上的对齐方式。

<code src="../../../example/layout/horizontally/flex/index.tsx" />

**优点**： 适用于任意个元素

**缺点**： PC 端兼容性不好

### 固定宽度-外边距偏移

<code src="../../../example/layout/horizontally/margin/index.tsx" />

**优点**

- 兼容性好
- 不管块级还是行内元素都可以实现

**缺点**

- 脱离文档流
- 使用 `margin-left` 需要知道宽度值

### 固定宽度-外边距适配

<code src="../../../example/layout/horizontally/direction/index.tsx" />

### 未知宽度

<code src="../../../example/layout/horizontally/transform/index.tsx" />

**优点**： 不用回流
