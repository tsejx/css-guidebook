---
title: 盒模型
order: 2
group:
  title: 属性
  order: 2
nav:
  title: 基础
  order: 1
---

# 盒模型

## display

| 属性值         | 说明                                             |
| :------------- | :----------------------------------------------- |
| `none`         | 隐藏元素                                         |
| `inline`       | （默认值）指定对象为内联元素，元素前后没有换行符 |
| `block`        | 指定对象为块元素，元素前后会带有换行符           |
| `inline-block` | 指定对象为内联块元素                             |
| `list-item`    | 指定对象为列表项目                               |
| `table`        | 指定对象作为块元素级的表格，表格前后带有换行符   |
| `flex`         | 弹性布局                                         |
| `grid`         | 网格布局                                         |

### 行内元素与块级元素

> `display` 属性的 `inline`、`block` 和 `inline-block` 之间有什么区别？

- **inline**：元素 **不会独占一行**，设置 `width`、`height` 属性无效。但可以设置水平方向的 `margin` 和 `padding` 属性，不能设置垂直方向的 `padding` 和 `margin`；
- **block**：**会独占一行**，多个元素会另起一行，可以设置 `width`、`height`、`margin` 和 `padding` 属性；
- **inline-block**： 将对象设置为 `inline` 对象，但对象的内容作为 `block` 对象呈现，之后的内联对象会被排列在同一行内。

对于行内元素和块级元素，其特点如下：

|      | 行内元素                                                                                | 块级元素                          |
| :--- | :-------------------------------------------------------------------------------------- | :-------------------------------- |
| 宽高 | 设置宽高无效                                                                            | 可以设置宽高                      |
| 边距 | 可以设置水平方向的 `margin` 和 `padding` 属性，不能设置垂直方向的 `margin` 和 `padding` | 设置 `margin` 和 `padding` 都有效 |
| 换行 | 不会自动换行                                                                            | 可以自动换行                      |
| 排列 |                                                                                         | 多个块状，默认排列从上到下        |

### 行内元素的空隙问题

**问题说明**：给两个或两个以上的元素设置 `display: inline-block` 或者 `display: inline`，将会导致它们之间产生一个微小的空隙。

**原理分析**：原因是浏览器会将元素当作字词去解释，从而给每个元素之间添加一个字符的空隙。

<!-- 这里需要一个 DEMo -->

下面的例子中，每个项目的右侧都有一个 `8px` 的空隙，但是使用 `display: inline-block` 而产生的小空隙将会使其变为 `12px`，这不是我们想要的效果。

```css
li:not(:last-child) {
  margin-right: 8px;
}
```

**解决方法**：通过给父元素设置 `font-size: 0` 可以简单地解决这个问题。

```css
ul {
  font-size: 0;
}
li {
  /* 应该在这里重新设置字体大小，因为它会从父元素继承 `font-size: 0` */
  font-size: 16px;
}
```

## width/height

相关属性：

- minWidth
- minHeight
- maxWidth
- maxHeight

可取属性值：

| 属性值        | 说明                           |
| :------------ | :----------------------------- |
| `auto`        | 无特定高度值，取决于其它属性值 |
| `<length>`    | 用长度值来定义高度。不允许负值 |
| `<percentag>` | 用百分比来定义高度。不允许负值 |

说明：

- 对于 `<img>` 元素来说，若仅指定此属性，其 `width` 或 `height` 值将会根据图片源尺寸进行等比例缩放

### 宽高自适应

块级元素的流体特性主要体现在水平方向上。

`width` 默认值是 `auto`。它所表现的含义是：

- **充分利用可用空间**：例如 `<div>`、`<p>` 这些元素的宽度默认是 100% 于父级容器的，这种充分利用空间行为称为 **fill-available**
- **收缩与包裹**：典型代表就是浮动、绝对定位、`inline-block` 元素或 `table` 元素，称为 **shrink-to-fit** 收缩到合适，CSS3 中 `fit-content` 就是这种宽度的表现
- **收缩到最小**：这个最容易出现在 `table-layout` 为 `auto` 的表格中
- **超出容器限制**：除非有明确的 `width` 相关设置，否则上面 3 种情况尺寸都不会主动超过父级容器宽度，但是也存在一些特殊情况。例如，内容很长的连续的英文和数字，或者内联元素被设置了 `white-space: nowrap`

除了盒子模型分为内在盒子和外在盒子，显示分内部显示和外部显示，同样地，尺寸也分 **内部尺寸** 和 **外部尺寸**。

### 外部尺寸与流体特性

##### 正常流宽度

```css
a {
  display: block;
  width: 100%;
}
```

`<a>` 标签元素 `display` 属性默认为 `inline`，因此设置 `display: block` 使其块状化绝对没有问题，但后面设置的 `width: 100%` 则会使其失去了流动性。

所谓流动性并非看上去的宽度 `100%` 显示那么简单，而是一种 `margin/border/padding/content` 内容区域自动分配水平空间的机制。

##### 格式化宽度

格式化宽度仅在出现在 **绝对定位模型** 中，也就是出现在 `position` 属性值为 `absolute` 或 `fixed` 的元素中。在默认情况下，绝对定位元素的宽度表现是 **包裹性**，宽度由内部尺寸决定。

而对于非替换元素，当 `left/right` 或 `top/bottom` 对立方位的属性值同时存在时，元素的宽度表现为 **格式化宽度**，其宽度大小相对于最近的具有定位特性（`position` 属性值不是 `static`）的祖先元素计算。

示例：

```css
div {
  position: absolute;
  left: 20px;
  right: 20px;
}
```

假设该 `<div>` 元素最近的具有定位特性的祖先元素的宽度是 `1000` 像素，则这个 `<div>` 元素的宽度是 `960`（即 `1000-20-20`）像素。

### 内部尺寸与流体特性

内部尺寸指元素的尺寸由内部的元素决定，而非由外部容器决定。通过判断元素内是否由内容，也就是宽度为 0 时，则该元素宽度为内部尺寸。

### 包裹性

### 首选最小宽度

**首选最小宽度** 指元素最适合的最小宽度。

若外部容器宽度为 `240` 像素，内部元素宽度设为 `0`，`inline-block` 元素的宽度根据其内部的图文表现。

- 东亚文字最小宽度为每个汉字的宽度
- 西方最小宽度由特定的连续的英文字符单元决定。并非所有的英文字符都会组成连续单元，一般会终止于空格（普通空格）、短横线、问号以及其他非英文字符等。

## margin

`margin` 属性为给定元素设置所有四个（上下左右）方向的外边距属性。

示例：

```css
/* 应用于所有边 */
margin: 1em;
margin: -3px;

/* 上边下边 | 左边右边 */
margin: 5% auto;

/* 上边 | 左边右边 | 下边 */
margin: 1em auto 2em;

/* 上边 | 右边 | 下边 | 左边 */
margin: 2px 1em 0 auto;

/* 全局值 */
margin: inherit;
margin: initial;
margin: unset;
```

### 叠加上下文

负边距 `margin` 为负值时元素会依参考线向外偏移。

- `margin-left` 和 `margin-top` 的参考线为文档流中左边元素和上面的元素（如无兄弟元素则为父元素的左内侧和上内侧）
- `margin-right` 和 `margin-bottom` 的参考线为元素本身的 `border` 右侧 和 `border` 下侧

一般可以利用负边距来就行布局，但没有计算好的话就可能造成元素重叠。堆叠顺序由元素在文档中的先后位置决定，后出现的会在上面。

## padding

`padding` 用于设置元素所有四条边的内边距区域。

## box-sizing

`box-sizing` 用于定义文档如何计算一个元素的总宽度和总高度。

在 CSS 盒子模型的默认定义里，你对一个元素所设置的 `width` 与 `height` 只会应用到这个元素的内容区。如果这个元素有任何的 `border` 或 `padding` ，绘制到屏幕上时的盒子宽度和高度会加上设置的边框和内边距值。这意味着当你调整一个元素的宽度和高度时需要时刻注意到这个元素的边框和内边距。

可取属性值：

| 属性值        | 说明                                                  |
| :------------ | :---------------------------------------------------- |
| `content-box` | 标准盒模型，`对象实际宽度 = width + border + padding` |
| `border-box`  | 怪异盒模型，`对象实际宽度 = width`                    |

<br />

<code src="@example/properties/box/box-sizing/index.tsx" />

## box-shadow

`box-shadow` 用于定义元素的阴影。

语法：

```
box-shadow: none | <shadow> [, <shadow>]*;

<shadow> = inset? && <length>{2,4} && <color>?
```

1. 第一个长度值定义元素的阴影水平偏移值。正值，阴影出现在元素 **右侧**；负值，则阴影出现在元素 **左侧**
2. 第二个长度值定义元素的阴影垂直偏移值。正值，阴影出现在元素 **底部**；负值，则阴影出现在元素 **顶部**
3. 第三个长度值定义元素的 **阴影模糊值半径**（如果提供了）。该 **值越大阴影边缘越模糊**，若该值为 `0`，阴影边缘不出现模糊。不允许负值
4. 第四个长度值定义元素的 **阴影外延值**（如果提供了）。正值，阴影将 **向四面扩展**；负值，则阴影 **向里收缩**

注意事项：

1. `box-shadow` 可以设定多组阴影效果，每组参数值以逗号分隔。该属性可以对几乎所有元素的生成框产生阴影。如果元素同时设置了 `border-radius`，阴影也会有圆角效果。
2. 如果定义了多组阴影效果，它们的 `z-ordering` 和多个 `text-shadow` 规则相同，第一个阴影在最上面，以此类推

示例：

```css
/* x偏移量 | y偏移量 | 阴影颜色 */
box-shadow: 60px -16px teal;

/* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影颜色 */
box-shadow: 10px 5px 5px black;

/* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* 插页(阴影向内) | x偏移量 | y偏移量 | 阴影颜色 */
box-shadow: inset 5em 1em gold;

/* 任意数量的阴影，以逗号分隔 */
box-shadow: 3px 3px red, -1em 0 0.4em olive;

/* 全局关键字 */
box-shadow: inherit;
box-shadow: initial;
box-shadow: unset;
```

快速生成工具：

- [Box-Shadow CSS Generator](https://html-css-js.com/css/generator/box-shadow/)
- [Box Shadow CSS Generator](https://cssgenerator.org/box-shadow-css-generator.html)

## outline

`outline` 为复合属性，用于设置或检索对象外的线条轮廓。

语法：

```css
outline: <outline-width> || <outline-style> || <outline-color>;
```

- `outline` 不占据布局空间，不会影响元素的尺寸，绘制于元素内容周围
- `outline` 通常是矩形，也可能是非矩形
- `outline` 不允许像 `boder` 那样分拆为 `border-top` 或 `border-right`

## 参考资料

- [awesome-css-cn](https://github.com/jobbole/awesome-css-cn)
