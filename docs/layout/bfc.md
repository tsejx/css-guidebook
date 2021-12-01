---
title: BFC
order: 2
nav:
  title: 布局
  order: 2
---

# BFC

块级格式化上下文（Block Fromatting Context，BFC），指一个 <strong style="color:red">隔离的独立的块级渲染区域</strong>，是 Web 页面的可视化 CSS 渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。

注意：一个 BFC 的范围包含创建该上下文的所有子元素，但 **不包括** 创建了新 BFC 的子元素的内部元素。这从另一个角度说明，一个元素不能同时存在于两个 BFC 中。因为如果一个元素能够同时处于两个 BFC 中，那么就意味着这个元素能与两个 BFC 中的元素发生作用，就违反了 BFC 的 **隔离作用**。

## 文档流

我们常说的文档流其实分为 **定位流**、**浮动流** 和 **普通流** 三种。而普通流其实就是指 BFC 中的 FC。FC（Formatting Context），直译过来就是格式上下文，它是页面中的一块渲染区域，有一套渲染规则，决定了其子元素如何布局，以及和其他元素之间的关系和作用。常见的 FC 有 BFC、IFC（内联元素格式化上下文）、GFC 和 FFC。

### 常规流

- 在常规流中，盒子一个接着一个排列;
- 在块级格式化上下文里面，它们垂直方向排列；
- 在行内格式化上下文里面，它们水平方向排列;
- 当 `position` 为 `static` 或 `relative`，并且 `float` 为 `none` 时会触发常规流；
- 对于静态定位（static positioning），`position: static`，盒的位置是常规流布局里的位置；
- 对于相对定位（relative positioning），`position: relative`，盒偏移位置由 `top`、`bottom`、`left`、`right` 属性定义。即使有偏移，仍然保留原有的位置，其它常规流不能占用这个位置。

### 浮动流

- 左浮动元素尽量靠左、靠上，右浮动同理，这导致常规流环绕在它的周边，除非设置 `clear` 属性；
- 浮动元素不会影响块级元素的布局，但浮动元素会影响行内元素的布局，让其围绕在自己周围，撑大父级元素，从而间接影响块级元素布局；
- 最高点不会超过当前行的最高点、它前面的浮动元素的最高点；
- 不超过它的包含块，除非元素本身已经比包含块更宽；
- 行内元素出现在左浮动元素的右边和右浮动元素的左边，左浮动元素的左边和右浮动元素的右边是不会摆放浮动元素的；

### 定位流

- 绝对定位方案，盒从常规流中被移除，不影响常规流的布局；
- 它的定位相对于它的包含块，相关 CSS 属性：`top`、`bottom`、`left`、`right`；
- 如果元素的属性 `position` 为 `absolute` 或 `fixed`，它是绝对定位元素；
- 对于 `position: absolute`，元素定位将相对于上级元素中最近的一个 `relative`、`fixed`、`absolute`，如果没有则相对于 `body`；

## BFC 触发条件

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

## BFC 约束规则

浏览器对 BFC 区域的约束规则：

1. 生成 BFC 元素的子元素会一个接一个的放置；
2. 垂直方向上他们的起点是一个包含块的顶部，两个相邻子元素之间的垂直距离取决于元素的 `margin` 特性。在 BFC 中相邻的块级元素的外边距会折叠（Mastering margin collapsing）。
3. 生成 BFC 元素的子元素中，每一个子元素左外边距与包含块的左边界相接触（对于从右到左的格式化，右外边距接触右边界），即使浮动元素也是如此（尽管子元素的内容区域会由于浮动而压缩），除非这个子元素也创建了一个新的 BFC（如它自身也是一个浮动元素）。

规则解读：

1. 在 BFC 的垂直方向上，边距会发生重叠（margin collapse）
2. 每个元素的左外边距与包含块的左边界相接触（从左向右），即使浮动元素也是如此。（这说明 BFC 中子元素不会超出他的包含块，而 `position` 为 `absolute` 的元素可以超出他的包含块边界）
3. BFC 的区域不会与 `float` 的元素浮动区域重叠
4. 计算 BFC 的高度时，浮动子元素也参与计算

## 使用场景

### 解决边距折叠问题

当相邻元素都设置了 `margin` 边距时，重叠边缘的 `margin` 会塌陷到其中的最大值，这种情况称作 **外边距折叠（Collapsing Margins）**。

**折叠结果的规则计算**：

- 两个相邻的外边距都是 **正数** 时，折叠结果是 **两者之间较大的值**
- 两个相邻的外边距都是 **负数** 时，折叠结果是 **两者绝对值的较大值**
- 两个外边距 **一正一负** 时，折叠结果是 **两者的相加的和**

问题原因：这种情况产生的根本原理就是两个相邻的元素均处于同一个 BFC，符合属于同一个 BFC 的两个相邻元素的 `margin` 会发生重叠的规则。

解决方式：为了不让边距重叠，可以给子元素加一个父元素，并设置该父元素为 BFC。

<code src="../../example/layout/bfc/bfc-margin-collapse/index.tsx" />

### 清除浮动

浮动元素是会脱离文档流的（绝对定位元素会脱离文档流）。如果一个没有高度或者 `height` 是 `auto` 的容器的子元素是浮动元素，则该容器的高度是不会被撑开的。我们通常会利用伪元素（`:after` 或者 `:before`）来解决这个问题。BFC 能包含浮动，也能解决容器高度不会被撑开的问题。

解决方式：通过给浮动元素的父元素设置 `overflow: hidden` 可以清除子元素的浮动。

当在父元素中设置 `overflow: hidden` 就会触发 BFC，所以其他内部的元素就不会影响外面的布局，BFC 就把浮动的子元素高度当做了自身内部的高度去处理溢出。

<code src="../../example/layout/bfc/bfc-clear-float/index.tsx" />

### 避免文字环绕

`<p>` 元素没有移位但它叠在了浮动元素之下，而 `<p>` 元素的文本（行盒子）却移位了，行盒子水平变窄来给浮动元素腾出了空间。随着文本的增加，最后文本将环绕在浮动元素之下，因为那时候行盒子不再需要移位。

<code src="../../example/layout/bfc/bfc-words-wrap/index.tsx" />

### 多列布局设定

如果我们创建一个占满整个容器宽度的多列布局，在某些浏览器中最后一列有时候会掉到下一行。这可能是因为浏览器四舍五入了列宽从而所有列的总宽度会超出容器。但如果我们在多列布局中的最后一列里创建一个新的 BFC，它将总是占据其他列先占位完毕后剩下的空间。

代码示例：

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
