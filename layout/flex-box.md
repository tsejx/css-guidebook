# 弹性布局

弹性布局的目的是提供一种更加高效的方式来对容器中的条目进行布局、对齐和分配空间。在传统的布局方式中，`block` 布局是把块在垂直方向从上到下依次排列的；而 `inline` 布局则是在水平方向来排列。弹性盒子布局并没有这样内在的芳香限制，可以由开发人员自由操作。

适用场景：弹性布局适合于移动开发，在 Android 和 iOS 上也完美支持。

📌 CSS 的 `display` 属性增加的 `flex` 值，意为：让容器的显示模式为弹性盒子。

```css
.box {
    display: flex;
}
```

> ⚠️注意：设为 Flex 布局之后，子元素的 `float`、`clear` 和 `vertical-align` 属性将失效。

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

- 弹性盒子的轴
- Flex 容器属性
- Flex 子项属性

## 弹性盒子的轴

容器默认存在两根轴：水平的主轴 `main axis` 和垂直的侧轴 `cross axis`。

* 主轴的开始位置（与边框的侧点）叫做 `main start`，结束位置叫做 `main end`。

* 侧轴（也叫交叉轴）的开始位置叫做 `cross start`，结束位置叫做 `cross end`。

![弹性盒子的轴](../screenshots/ad3b5eeb-975f-4b80-a4d2-01ca1e1753d3.png)

- `main axis`（主轴）：Flex 容器的主轴主要用来排列 Flex 子元素。它不一定是水平，这主要取决于 `flex-direction` 属性。
- `main-start`（主轴起点边）`main-end`（主轴终点边）：Flex 元素的排列从容器的主轴起点边开始，往主轴终点边结束。
- `main size`：Flex 元素的在主轴方向的宽度或高度就是项目的主轴长度，Flex 元素的主轴长度属性是 `width` 或 `height` 属性，由哪一个对着主轴方向决定。
- `cross axis`（和主轴垂直交叉的轴）：与主轴垂直的轴称作交叉轴。
- `cross-start`（交叉轴起点边）`cross-end`（交叉轴终点边）：伸缩行的排列从容器的交叉轴起点边开始，往交叉轴终点边结束。
- `cross size`：Flex 元素的在交叉轴方向的宽度或高度就是项目的交叉轴长度，Flex 元素的交叉轴长度属性是 `width` 或 `height` 属性，由哪一个对着交叉轴方向决定。

Flex 子元素默认沿主轴排列。单个项目占据的主轴空间叫做 `main size`，占据的交叉轴空间叫做 `cross size`。

Flex 属性分为两部分，一部分作用于容器称容器属性，另一部分作用于子元素称为项目属性。

## 容器属性

```css
.box {
    display: flex; /* 或者 inline-flex */
}
```

上述写法，定义了一个 Flex 容器，根据设值的不同可以是块状容器或内联容器。这使得直接子容器拥有了一个 Flex 上下文。

### flex-direction

`flex-direction` 属性决定主轴的方向，继而决定子容器在容器中的位置。

```css
.box {
    flex-direction: row | row-reverse | column | column-reverse;
}
```

- `row`（默认值）：表示子容器从左向右排列。此时水平方向轴为主轴。
- `row-reverse`：表示子容器从右向左排列。
- `column`：表示子容器从上向下排列。此时垂直方向轴为主轴。
- `column-reverse`：表示子容器从下向上排列。

![flex-direction](../screenshots/05c1fe08-ffb8-4011-a886-d69c93675597.png)

### flex-wrap

`flex-wrap` 属性用于指定 Flex 子容器是否换行。

```css
.box {
    flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- `nowrap`（默认值）：表示不换行，所有子项目单行排列，子项可能会溢出。
- `wrap`：表示换行，所有子项目多行排列，溢出的子项会被放到下一行，按从上向下顺序排列。
- `wrap-reverse`：所有子项目多行排列，按从下向上顺序排列。

![flex-wrap](../screenshots/c020806a-da5e-4850-954a-f0d82337737f.png)

从示例图中不难发现，换行以后两行之间产生了很大的间距，这个问题，在后面介绍的 `align-content` 属性中可以得到很好的解决。

#### ### flex-flow

`flex-flow` 属性是 `flex-direction` 属性和 `flex-wrap` 属性的简写形式，默认值为 `row nowrap`。

```css
.box {
    flex-flow: <'flex-direction'> || <'flex-wrap'>;
}
```

### justify-content

`justify-content` 属性定义了子容器在主轴（水平方向）上的对齐方式。

```css
.box {
    justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

- `flex-start`（默认值）：表示 Flex 子容器按主轴起点线对齐
- `flex-end`：表示 Flex 子容器按主轴终点线对齐
- `center`： 居中排列
- `space-between`：Flex 子容器均匀分布，第一项紧贴主轴起点线，最后一项紧贴主轴终点线，子项目之间的间隔都相等。要注意特殊情况，当剩余空间为负数或者只有一个项时，效果等同于 `flex-start`。
- `space-around`：Flex 子容器均匀分布，每个项目两侧的间隔相等，相邻项目之间的距离是两个项目之间留白的和。所以，项目之间的间隔比项目与边框的间隔大一倍。要注意特殊情况，当剩余空间为负数或者只有一个项时，效果等同于`center`。
- `space-evenly`：Flex 子容器均匀分布，所有项目之间及项目与边框之间的距离相等。

![justify-content](../screenshots/fb516935-cba9-4a38-920b-80b8a5e7a5b3.png)

### align-items

`align-items` 属性定义 Flex 子项在交叉轴（垂直方向）上的对齐方式。

```css
.box {
    align-items: flex-start | flex-end | center | baseline | stretch;
}
```

- `stretch`（默认值）：当子容器未设置高度或者高度为 `atuo` 时，子容器的高度设为行高。这里需要注意，在只有一行的情况下，行的高度为容器的高度，即子容器高度为容器的高度。
- `flex-start`：表示子容器与交叉轴的起点线对齐。
- `flex-end`：表示子容器与交叉轴的终点线对齐。
- `center`：表示与交叉轴的中线对齐。
- `baseline`：表示基线对齐，当行内轴与侧轴在同一线上，即所有子容器的基线在同一线上时，效果等同于`flex-start`。

![align-items](../screenshots/7dc519a4-7ddf-4033-9239-edc63014f270.png)

### align-content

`align-content` 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

核心是一定是盒子内部的元素超过了盒子容器的宽度（默认）出现了换行，也就是有多行才可以。

```css
.box {
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

- `stretch`（默认值）：轴线占满整个交叉轴。
- `flex-start`：表示各行与交叉轴的起点线对齐。
- `flex-end`：表示各行与交叉轴的终点线对齐。
- `center`：表示各行与交叉轴的中线对齐。
- `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。要注意特殊情况，当剩余空间为负数时，效果等同于`flex-start`。
- `space-around`：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。要注意特殊情况，当剩余空间为负数时，效果等同于`center`。

再次强调：该属性只作用于多行的情况，在只有一行的 Flex 容器上无效，另外该属性可以很好的处理，换行以后相邻行之间产生的间距。

![align-content](../screenshots/3c856db5-7928-481c-8676-795264741f55.png)

## 子容器属性

### order

缺省情况下，Flex 子容器是按照在代码中出现的先后顺序排列的。CSS3 新增加 `order` 属性定义项目的排列顺序，是数值类型。数值越小，排列越靠前，默认为  0。

> 注意此属性设置在子容器上，浏览器自动按照 `order` 的大小排序盒子，默认都是 0，如果相同的 `order` 则按照编写标签的顺序排放盒子。

```css
.item {
    order: 1;
}
```

### flex-grow

`flex-grow` 属性定义子容器的扩展比例，取值必须是一个单位的正整数，表示放大的比例。默认为 0，即如果存在额外空间，也不放大，负值无效。Flex 容器会根据子容器设置的扩展比例作为比率来分配剩余空间

如果所有项目的 `flex-grow` 属性都为 1，则它们将等分剩余空间（如果有的话）。如果一个项目的 `flex-grow` 属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项多一倍。

一行的子盒子同时设置 `flex-grow` 属性的话，会根据设置的值的大小按比例排放子容器。

```css
.item1 {
  flex-grow: 5;
}
.item2 {
  flex-grow: 4;
}
.item3 {
  flex-grow: 3;
}
.item4 {
  flex-grow: 2;
}
.item5 {
  flex-grow: 1;
}
```

![flex-grow](../screenshots/b1152211-970b-4858-8a2f-3db0f4a9ed05.png)

### flex-shrink

`flex-shrink` 属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。

 ```css
.item {
  flex-shrink: <number>; /* default 1 */
}
 ```

如果所有项目的 `flex-shrink` 属性都为 1，当空间不足时，都将等比例缩小。如果一个项目的 `flex-shrink` 属性为 0，其他项目都为 1，则空间不足时，前者不缩小。

> ⚠️注意：负值对该属性无效。

![flex-shrink](../screenshots/be9ccacc-a411-4cc3-8768-1e3982442b2e.png)

### flex-basis

`flex-basis` 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 `auto`，即项目的本来大小。

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

它可以设为跟 `width` 属性一样的值（比如 350px），则项目将占据固定空间。

![flex-basis](../screenshots/bd1ee61c-1392-42cd-aa39-6ec7a09da7dc.png)

<detail>

<summary>说明</summary>

- `flex-basis` 的默认值为 `auto`（无特定宽度值，取决于其它属性值），浏览器将超出的空间，按照各子项`basis` 的值的比例进行空间收缩。
- 图例中 5 定义了 `flex-basis:400px`，其余子项定义了 `flex-basis:200px`，我们给父容器 `width` 定义为`800px`，5 个子项相加之后即为 `1200px`，超出父容器 `400px`。那么这么超出的 `400px` 需要被这 5 个子项消化。
- 假定：这 5 个子项的比例为 1:1:1:1:2，则多出来的 `400px` 要被分为 6 份，于是我们可以计算子项将被移除的溢出量是多少：
- `flex-basis` 为 `400px` 的，被移除溢出量：400/6*2，即约等于 `133.33px`
- `flex-basis` 为 `200px` 的，被移除溢出量：400/6*1，即约等于 `66.67px `
- 最后实际宽度分别为：`400-133.33=266.67px`, `200-66.67=133.33px`  `flex-basis:[percentage]` 与 `[length]` 的计算方式类似
- 它可以设为跟 `width` 属性一样的值（比如 350px），则项目将占据固定空间。

</detail>

⚠️注意：

1. 设置 `flex-grow` 进行分配剩余空间，或者使用 `flex-shrink` 进行收缩都是在 `flex-basis` 的基础上进行的；
2. 当 `flex-basis` 的值以及 `width`（或者 `height`）的值均为非 `auto` 时，
   - 若 content 长度同时大于 `flex-basis` 的值以及 `width`（或者 `height`）的值，此时以 `flex-basis` 与 `width`（或者 `height`）中值大的为准 ，**但是**，如果子项设置了`overflow: hidden` 或者 `overflow: auto`，此时以`flex-basis`值为准；
   - 若 content 长度同时小于 `flex-basis` 的值以及 `width`（或者 `height`）的值，此时以 `flex-basis` 值为准
   - 若 content 长度小于 `flex-basis` 的值，大于 `width`（或者 `height`）的值，此时以 `flex-basis` 值为准；
   - 若 content 长度大于 `flex-basis` 的值，小于 `width`（或者 `height`）的值，此时以 content 自身长度值为准；
3. 当 `width`（或者 `height`）的值为 `auto` 时，且内容的长度大于 `flex-basis`设置的值，此时以 `content` 自身长度值为准，且**不能进行 `flex-shrink` 收缩**。相反如果内容的长度小于 `flex-basis` 设置的值，则会使用 `flex-basis` 设置的值；
4. 当存在最小值 `min-width`（`min-height`）时，且 `flex-basis` 的值小于最小值时，宽度以最小值为准，当 `flex-basis` 的值大于最小值时，以 `flex-basis` 的值为准。

### flex

`flex` 属性是 `flex-grow`、`flex-shrink` 和 `flex-basis` 的简写，默认值为 `0 1 auto`。后两个属性可选。

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

该属性有两个快捷值：`auto (1 1 auto) ` 和 `none (0 0 auto)`。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

### align-self

`align-self` 属性用于指定子容器的对齐方式，可覆盖 `align-items` 属性。

默认值为 `auto`，表示继承父元素的 `align-items` 属性，如果没有父元素，则等同于 `stretch`。

```css
.item {
    align-self: auto || flex-start || flex-end || center || baseline || stretch;
}
```

![align-self](../screenshots/8e06bd4e-dae9-4082-bac0-0edd436a0a47.png)

## 兼容性

| Chrome | Safari | Firefox | Opera | IE   |
| ------ | ------ | ------- | ----- | ---- |
| 21+    | 6.1+   | 22+     | 12.1+ | 11+  |

Flexbox 需要一些特定的前缀以支持大多数的浏览器。甚至还存在完全不同的属性名称或属性值。这就需要 [Autoprefixer](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fpostcss%2Fautoprefixer) 或类似的 CSS 后处理器的辅助，具体内容请参考相关文档。

- Webkit 内核浏览器应使用前缀 `-webkit`
- IE10 浏览器只有部分属性兼容，需使用前缀 `-ms`

## 总结

这里假设 flex 容器为 `.box`，子元素为 `.item`。

### 定义容器为弹性布局

```css
.box {
    display: flex;
}

/* 行内flex */
.item {
    display: inline-flex;
}
```

### 容器样式

```css
.box {
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

### 子元素样式

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

---

**参考资料：**

- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/)
- [Codepen - Flex playground](https://codepen.io/enxaneta/full/adLPwv/)
- [掘金：CSS Flex 布局属性整理](https://juejin.im/post/591d74ad128fe1005cfc21cd)
- [CSS3 Flexbox 布局完全指南](https://www.html.cn/archives/8629)

