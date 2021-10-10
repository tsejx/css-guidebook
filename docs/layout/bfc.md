---
title: BFC
order: 2
nav:
  title: 布局
  order: 2
---

# BFC

块级格式化上下文（Block Fromatting Context，BFC），指一个隔离的独立的块级渲染区域，是 Web 页面的可视化 CSS 渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。

> 相关：IFC 为内联元素格式化上下文

## 实现原理

内部的元素会在垂直方向一个接一个地排列，可以理解为是 BFC 中的一个 **常规流**。

每个元素的左外边距与包含块的左边界相接触（从左往右，否则相反），即使存在浮动也是如此，这说明 **BFC 的子元素不会超出它的包含块**。

特点：

1. 在 BFC 的垂直方向上，边距会发生重叠
2. BFC 区域不会与浮动区域重叠
3. BFC 在页面上是一个隔离的独立容器，与容器外的其他元素互不影响
4. 计算 BFC 高度时，浮动子元素也会参与计算

## 触发条件

1. 根元素默认创建 BFC
2. 浮动元素（元素 `float` 不为 `none`）
3. 绝对定位元素（元素 `position` 为 `absolute` 或 `fixed`）
4. 行内块元素（元素 `display` 为 `inline-block`）
5. 表格单元格（元素 `display` 为 `table-cell`，HTML 表格单元格默认为该值）
6. 表格标题（元素 `display` 为 `table-caption`，HTML 表格标题默认该值）
7. 匿名表格单元格元素（`display` 值是 `table`、`table-row`、`table-row-group`、`table-header-group`、`table-footer-group`）
8. `overflow` 值不为 `visible`
9. 弹性元素（`display` 为 `flex` 或 `inline-flex` 元素的直接子元素）
10. 网格元素（`display` 为 `grid` 或 `inline-grid` 元素的直接子元素）

## 使用场景

### 解决边距重叠问题

当相邻元素都设置了 `margin` 边距时，重叠边缘的 `margin` 会塌陷到其中的最大值，这种情况称作 **外边距折叠（Collapsing Margins）**。

**折叠结果的规则计算：**

- 两个相邻的外边距都是 **正数** 时，折叠结果是 **两者之间较大的值**
- 两个相邻的外边距都是 **负数** 时，折叠结果是 **两者绝对值的较大值**
- 两个外边距 **一正一负** 时，折叠结果是 **两者的相加的和**

这种情况产生的根本原理就是两个相邻的元素均处于同一个 BFC，符合属于同一个 BFC 的两个相邻元素的 `margin` 会发生重叠的规则。

为了不让边距重叠，可以给子元素加一个父元素，并设置该父元素为 BFC。

### 清除浮动

浮动元素是会脱离文档流的（绝对定位元素会脱离文档流）。如果一个没有高度或者 `height` 是 `auto` 的容器的子元素是浮动元素，则该容器的高度是不会被撑开的。我们通常会利用伪元素（`:after` 或者 `:before`）来解决这个问题。BFC 能包含浮动，也能解决容器高度不会被撑开的问题。

通过给浮动元素的父元素设置 `overflow: hidden` 可以清除子元素的浮动。

当在父元素中设置 `overflow: hidden` 就会触发 BFC，所以其他内部的元素就不会影响外面的布局，BFC 就把浮动的子元素高度当做了自身内部的高度去处理溢出。

### 侵占浮动元素的位置

设置元素为浮动元素后，浮动元素会脱离文档流，然后浮盖在文档流元素上。

为非浮动元素设置 BFC 环境，根据 BFC 的不与浮动元素重叠的规则，解决了侵占元素问题。

在两栏布局中，对比我们常规为非浮动元素或非定位元素设置 `margin` 挤开的方法，其优点在于不需要去知道浮动或定位元素的宽度。

### 避免文字环绕

`p` 元素没有移位但它叠在了浮动元素之下，而 `p` 元素的文本（行盒子）却移位了，行盒子水平变窄来给浮动元素腾出了空间。随着文本的增加，最后文本将环绕在浮动元素之下，因为那时候行盒子不再需要移位。

为 `p` 元素创建一个新的 BFC 那它就不会再紧贴包含块的左侧了。

```html
<div class="container">
  <div class="floated">Floated div</div>
  <p>
    Quae hic ut ab perferendis sit quod architecto, dolor debitis quam rem provident aspernatur
    tempora expedita.
  </p>
</div>
```

### 多列布局设定

如果我们创建一个占满整个容器宽度的多列布局，在某些浏览器中最后一列有时候会掉到下一行。这可能是因为浏览器四舍五入了列宽从而所有列的总宽度会超出容器。但如果我们在多列布局中的最后一列里创建一个新的 BFC，它将总是占据其他列先占位完毕后剩下的空间。

**示例**

```html
<div class="container">
  <div class="column">Column 1</div>
  <div class="column">Column 2</div>
  <div class="column">Column 3</div>
</div>
```

```css
.column {
  width: 31.33%;
  background-color: green;
  float: left;
  margin: 0 1%;
}
/*  Establishing a new block formatting
    context in the last column */
.column:last-child {
  float: none;
  overflow: hidden;
}
```

## 参考资料

- [📝 什么是 BFC](https://www.cnblogs.com/libin-1/p/7098468.html)
