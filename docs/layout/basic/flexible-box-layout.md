---
nav:
  title: 布局
  order: 2
group:
  title: 基础布局
  order: 5
title: 弹性布局
order: 6
---

# 弹性布局

弹性布局的目的是提供一种更加高效的方式来对容器中的条目进行布局、对齐和分配空间。在传统的布局方式中，`block` 布局是把块在垂直方向从上到下依次排列的；而 `inline` 布局则是在水平方向来排列。弹性盒子布局并没有这样内在的方向限制，可以由开发人员自由操作。

**适用场景**：弹性布局适合于移动开发，在 Android 和 iOS 上也完美支持。

📌 CSS 的 `display` 属性增加的 `flex` 值，意为：**让容器的显示模式为弹性盒子**。

```css
.container {
  display: flex;
}
```

> ⚠️ **注意**：设为弹性布局之后，子项的 `float`、`clear` 和 `vertical-align` 属性将失效。

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称 **容器**。它的所有子项自动成为容器成员，称为 Flex 子项（flex item），简称 **子项**。

- 弹性盒子的轴
- Flex 容器属性
- Flex 子项属性

## 弹性盒子的轴

容器默认存在两根轴：水平的主轴 `main axis` 和垂直的侧轴 `cross axis`。

- 主轴的开始位置（与边框的侧点）叫做 `main start`，结束位置叫做 `main end`。
- 侧轴（也叫交叉轴）的开始位置叫做 `cross start`，结束位置叫做 `cross end`。

```jsx | inline
import React from 'react';
import img from '../../assets/flex/flexbox-axis.png';

export default () => <img alt="弹性盒子的轴" src={img} width={520} />;
```

- `main axis`（主轴）：Flex 容器的主轴主要用来排列 Flex 子项。它不一定是水平，这主要取决于 `flex-direction` 属性。
- `main-start`（主轴起点边）`main-end`（主轴终点边）：Flex 元素的排列从容器的主轴起点边开始，往主轴终点边结束。
- `main size`：Flex 元素的在主轴方向的宽度或高度就是项目的主轴长度，Flex 元素的主轴长度属性是 `width` 或 `height` 属性，由哪一个对着主轴方向决定。
- `cross axis`（和主轴垂直交叉的轴）：与主轴垂直的轴称作交叉轴。
- `cross-start`（交叉轴起点边）`cross-end`（交叉轴终点边）：伸缩行的排列从容器的交叉轴起点边开始，往交叉轴终点边结束。
- `cross size`：Flex 元素的在交叉轴方向的宽度或高度就是项目的交叉轴长度，Flex 元素的交叉轴长度属性是 `width` 或 `height` 属性，由哪一个对着交叉轴方向决定。

Flex 子项默认沿主轴排列。单个项目占据的主轴空间叫做 `main size`，占据的交叉轴空间叫做 `cross size`。

Flex 属性分为两部分：

- 一部分作用于容器称 **容器属性**
- 另一部分作用于子项称为 **子项属性**

## 容器属性

```css
.container {
  display: flex; /* 或者 inline-flex */
}
```

上述写法，定义了一个 Flex 容器，根据设值的不同可以是 **块状容器** 或 **内联容器**。这使得直接子项拥有了一个 Flex 上下文。

**flex：将对象作为弹性伸缩盒显示**

<code src="../../../example/layout/flex/flex-box/index.tsx" />

**inline-flex：将对象作为内联块级弹性伸缩盒显示**

<code src="../../../example/layout/flex/inline-flex-box/index.tsx" />

### flex-direction

`flex-direction` 属性决定主轴的方向，继而决定子项在容器中的位置。

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

- `row`（默认值）：表示子项从左向右排列。此时**水平方向轴**为主轴。
- `row-reverse`：表示子项从右向左排列。
- `column`：表示子项从上向下排列。此时**垂直方向轴**为主轴。
- `column-reverse`：表示子项从下向上排列。

<code src="../../../example/layout/flex/flex-direction/index.tsx" />

### flex-wrap

`flex-wrap` 属性用于指定弹性布局中子项是否换行。

```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- `nowrap`（默认值）：表示不换行，所有子项目单行排列，子项可能会溢出。
- `wrap`：表示换行，所有子项目多行排列，溢出的子项会被放到下一行，按从上向下顺序排列。
- `wrap-reverse`：所有子项目多行排列，按从下向上顺序排列。

<code src="../../../example/layout/flex/flex-wrap/index.tsx" />

从上述 demo 中不难发现，换行以后两行之间产生了很大的间距，这个问题，在后面介绍的  `align-content`  属性中可以得到很好的解决。

### flex-flow

`flex-flow` 属性是 `flex-direction` 属性和 `flex-wrap` 属性的简写形式，默认值为 `row nowrap`。

```css
.container {
  flex-flow: < 'flex-direction' > || < 'flex-wrap' >;
}
```

### justify-content

`justify-content` 属性定义了子项在 **主轴**（水平方向）上的对齐方式。

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

- `flex-start`（默认值）：表示弹性容器子项按主轴起点线对齐
- `flex-end`：表示弹性容器子项按主轴终点线对齐
- `center`： 居中排列
- `space-between`：弹性容器子项均匀分布，第一项紧贴主轴起点线，最后一项紧贴主轴终点线，子项目之间的间隔都相等。要注意特殊情况，当剩余空间为负数或者只有一个项时，效果等同于 `flex-start`。
- `space-around`：弹性容器子项均匀分布，每个项目两侧的间隔相等，相邻项目之间的距离是两个项目之间留白的和。所以，项目之间的间隔比项目与边框的间隔大一倍。要注意特殊情况，当剩余空间为负数或者只有一个项时，效果等同于`center`。
- `space-evenly`：弹性容器子项均匀分布，所有项目之间及项目与边框之间的距离相等。

<code src="../../../example/layout/flex/justify-content/index.tsx" />

### align-items

`align-items` 属性定义弹性容器子项在交叉轴（垂直方向）上的对齐方式。

```css
.container {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

- `stretch`（默认值）：当子项未设置高度或者高度为 `atuo` 时，子项的高度设为行高。这里需要注意，在只有一行的情况下，行的高度为容器的高度，即子项高度为容器的高度。（当子项设定了高度时无法展开）
- `flex-start`：表示子项与交叉轴的起点线对齐。
- `flex-end`：表示子项与交叉轴的终点线对齐。
- `center`：表示与交叉轴的中线对齐。
- `baseline`：表示基线对齐，当行内轴与侧轴在同一线上，即所有子项的基线在同一线上时，效果等同于`flex-start`。

<code src="../../../example/layout/flex/align-items/index.tsx" />

### align-content

`align-content` 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

核心是一定是盒子内部的元素超过了盒子项的宽度（默认）出现了换行，也就是有多行才可以。

```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

- `stretch`（默认值）：轴线占满整个交叉轴。（当子项设定了高度时无法展开）
- `flex-start`：表示各行与交叉轴的起点线对齐。
- `flex-end`：表示各行与交叉轴的终点线对齐。
- `center`：表示各行与交叉轴的中线对齐。
- `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。要注意特殊情况，当剩余空间为负数时，效果等同于`flex-start`。
- `space-around`：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。要注意特殊情况，当剩余空间为负数时，效果等同于`center`。

⚠️ **注意**：该属性只作用于多行的情况（`flex-warp: wrap / warp-reverse`），在只有一行的弹性容器上无效，另外该属性可以很好的处理，换行以后相邻行之间产生的间距。

<code src="../../../example/layout/flex/align-content/index.tsx" />

设定条件：

- `flex-wrap`：只作用于多行情况
- `margin`（可选）：子项间的间距
- `line-height`（可选）：因为子项无高度，行高相当于给子项一个最低高度

## 子项属性

### order

缺省情况下，Flex 子项是按照在代码中出现的先后顺序排列的。CSS3 新增加 `order` 属性定义项目的排列顺序，是数值类型。数值越小，排列越靠前，默认为 0。

> 注意此属性设置在子项上，浏览器自动按照 `order` 的大小排序盒子，默认都是 0，如果相同的 `order` 则按照编写标签的顺序排放盒子。

```css
.item {
  order: 1;
}
```

<code src="../../../example/layout/flex/order/index.tsx" />

### flex-grow

`flex-grow` 属性定义子项的**扩展比例**，取值必须是一个单位的正整数，表示放大的比例。默认为 0，即如果存在额外空间，也不放大，负值无效。Flex 容器会根据子项设置的扩展比例作为比率来分配剩余空间

如果所有项目的 `flex-grow` 属性都为 1，则它们将等分剩余空间（如果有的话）。如果一个项目的 `flex-grow` 属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项多一倍。

一行的子盒子同时设置 `flex-grow` 属性的话，会根据设置的值的大小按比例排放子项。

<code src="../../../example/layout/flex/flex-grow/index.tsx" />

计算方式：

- 假设剩余空间 `x`（弹性容器宽度与所有弹性子项宽度总和之差）
- 假设有三个弹性子项元素，`flex-grow` 设定值分别为 `a`、`b` 和 `c`
- 每个元素可以分配的剩余空间为：`a/(a+b+c) * x`、`b/(a+b+c) * x` 和 `c/(a+b+c) * x`

假设剩余空间为 `150px`，`a`、`b` 和 `c` 的 `flex-grow` 分别为 1、2 和 3，那么 `a` 占比剩余空间：`1/(1+2+3) = 1/6`，那么 `a` 瓜分到的剩余空间宽度是 `150*(1/6)=25`，加上 `a` 原本的宽度，实际的宽度为 `<origin-width> + 25`。

### flex-shrink

如果子容器宽度超过父容器宽度，即使是设置了 `flex-grow`，但是由于没有剩余空间，就分配不到剩余空间了。这时候有两个办法：换行和压缩。由于 `flex` 默认不换行，那么压缩的话，怎么压缩呢，压缩多少？此时就需要用到 `flex-shrink` 属性了。

`flex-shrink` 属性定义了项目的**缩小比例**，默认为 1，即如果空间不足，该项目将缩小。

此时，剩余空间的概念就转化成了 **溢出空间**。

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

如果所有项目的 `flex-shrink` 属性都为 1，当空间不足时，都将等比例缩小。如果一个项目的 `flex-shrink` 属性为 0，其他项目都为 1，则空间不足时，前者不缩小。

<code src="../../../example/layout/flex/flex-shrink/index.tsx" />

计算方式：

- 假设三个子项的 `width` 为：`w1`、`w2`、`w3`
- 假设三个子项的 `flex-shrink` 为：`a`、`b`、`c`
- 计算总压缩权重：`sum = a * w1 + b * w2 + c * w3`
- 计算每个元素压缩率：`s1 = a * w1 / sum`、`s2 = b * w2 / sum`、`s3 = c * w3 / sum`
- 计算每个元素宽度：`width - 压缩率 * 溢出空间`

### flex-basis

`flex-basis` 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 `auto`，即项目的本来大小。

```css
.item {
  flex-basis: <number> | <percentage> | auto; /* default auto */
}
```

示例：

<code src="../../../example/layout/flex/flex-basis/index.tsx" />

⚠️ **注意**：

1. 设置 `flex-grow` 进行分配剩余空间，或者使用 `flex-shrink` 进行收缩都是在 `flex-basis` 的基础上进行的；
2. 当 `flex-basis` 的值以及 `width`（或者 `height`）的值均为非 `auto` 时，
   - 若 `content` 长度同时大于 `flex-basis` 的值以及 `width`（或者 `height`）的值，此时以 `flex-basis` 与 `width`（或者 `height`）中值大的为准 ，**但是**，如果子项设置了`overflow: hidden` 或者 `overflow: auto`，此时以`flex-basis`值为准；
   - 若 `content` 长度同时小于 `flex-basis` 的值以及 `width`（或者 `height`）的值，此时以 `flex-basis` 值为准
   - 若 `content` 长度小于 `flex-basis` 的值，大于 `width`（或者 `height`）的值，此时以 `flex-basis` 值为准；
   - 若 `content` 长度大于 `flex-basis` 的值，小于 `width`（或者 `height`）的值，此时以 `content` 自身长度值为准；
3. 当 `width`（或者 `height`）的值为 `auto` 时，且内容的长度大于 `flex-basis`设置的值，此时以 `content` 自身长度值为准，且**不能进行 `flex-shrink` 收缩**。相反如果内容的长度小于 `flex-basis` 设置的值，则会使用 `flex-basis` 设置的值；
4. 当存在最小值 `min-width`（`min-height`）时，且 `flex-basis` 的值小于最小值时，宽度以最小值为准，当 `flex-basis` 的值大于最小值时，以 `flex-basis` 的值为准。

> 属性优先级：`max-width / min-width -> flex-basis -> width -> box`

### flex

`flex` 属性是 `flex-grow`、`flex-shrink` 和 `flex-basis` 的简写，默认值为 `0 1 auto`。后两个属性可选。

```css
.item {
  flex: none | [ < 'flex-grow' > < 'flex-shrink' >? || < 'flex-basis' > ];
}
```

该属性有两个快捷值：`auto (1 1 auto)` 和 `none (0 0 auto)`。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

### align-self

`align-self` 属性用于指定子项的对齐方式，可覆盖 `align-items` 属性。

默认值为 `auto`，表示继承父元素的 `align-items` 属性，如果没有父元素，则等同于 `stretch`。

```css
.item {
  align-self: auto || flex-start || flex-end || center || baseline || stretch;
}
```

<code src="../../../example/layout/flex/align-self/index.tsx" />

## 兼容性

| Chrome | Safari | Firefox | Opera | IE  |
| ------ | ------ | ------- | ----- | --- |
| 21+    | 6.1+   | 22+     | 12.1+ | 11+ |

Flexbox 需要一些特定的前缀以支持大多数的浏览器。甚至还存在完全不同的属性名称或属性值。这就需要 [Autoprefixer](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fpostcss%2Fautoprefixer) 或类似的 CSS 后处理器的辅助，具体内容请参考相关文档。

- Webkit 内核浏览器应使用前缀 `-webkit`
- IE10 浏览器只有部分属性兼容，需使用前缀 `-ms`

## 总结

这里假设 flex 容器为 `.box`，子项为 `.item`。

<code src="../../../example/layout/flex/flex-generator/index.tsx" />

### 定义容器为弹性布局

```css
.container {
  display: flex;
}

/* 行内flex */
.item {
  display: inline-flex;
}
```

### 容器样式

```css
.container {
    flex-direction: row | row-reverse | column | column-reverse;
    /* 主轴方向: 左到右（默认）| 右到左 | 上到下 | 下到上 */

    flex-wrap: nowrap | wrap | wrap-reverse;
    /* 换行: 不换行（默认）| 换行 | 换行并第一行在下方 */

    flex-flow: <flex-direction> | <flex-wrap>
    /* 主轴方向和换行简写 */

    justify-content: flex-start | flex-end | center | space-between | space-around;
    /* 主轴对齐方式: 左对齐（默认） | 右对齐 | 居中对齐 | 两端对齐 | 平均分布 */

    align-items: flex-start | flex-end | center | baseline | stretch;
    /* 交叉轴对齐方式: 顶部对齐（默认）| 底部对齐 | 居中对齐 | 上下对齐并铺满 | 文本基线对齐 */

    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
    /* 多主轴对齐: 顶部对齐（默认）| 底部对齐 | 居中对齐 | 上下对齐并铺满 | 上下平均分布*/
}
```

### 子项样式

```css
.item {
    order: <integer>;
    /* 排序: 数值越小,排越前,默认为0 */

    flex-grow: <number>; /* default 0*/
    /* 放大: 默认0（即如果有剩余空间也不放大,值为1则放大,2是1的双倍大小,以此类推）*/

    flex-shrink: <number>; /* default 1*/
    /* 缩小: 默认1（如果空间不足则会缩小,值为0不缩小）*/

    flex-basis: <length> | auto; /* default auto */
    /* 固定大小: 默认为0,可以设置px值,也可以设置为百分比大小 */

    flex: none | [<'flex-grow'> <'flex-shrink'>? || <'flex-basis'>]
    /* flex-grow, flex-shrink 和 flex-basis 的简写,默认值为0 1 auto */

    align-self: auto | flex-start | flex-end | center | baseline | stretch;
    /* 单独对齐方式: 自动（默认）| 顶部对齐 | 底部对齐 | 居中对齐 | 上下对齐并铺满 | 文本基线对齐 */
}
```

## 参考资料

- [📖 CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/)
- [📝 A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [📝 Codepen - Flex playground](https://codepen.io/enxaneta/full/adLPwv/)
- [📝 掘金：CSS Flex 布局属性整理](https://juejin.im/post/591d74ad128fe1005cfc21cd)
- [📝 CSS3 Flexbox 布局完全指南](https://www.html.cn/archives/8629)
