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

- box-sizing
- display
- width & height
- margin
- padding
- border
- border-color
- border-radius
- border-style
- border-width
- box-shadow

## display

| 值           | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| inline       | 默认。此元素会被显示为内联元素，元素前后没有换行符。         |
| block        | 此元素将显示为块级元素，此元素前后会带有换行符。             |
| none         | 此元素不会被显示（隐藏）。                                   |
| inline-block | 行内块元素。（CSS2.1 新增的值）                              |
| list-item    | 此元素会作为列表显示。                                       |
| table        | 此元素会作为块级表格来显示（类似 table），表格前后带有换行符 |

### 使用 `display: inline-block` 时奇怪的空隙

给两个或两个以上的元素设置 `display: inline-block` 或者 `display: inline`，将会导致它们之间产生一个微小的空隙。原因是浏览器会将元素当作字词去解释，从而给每个元素之间添加一个字符的空隙。

下面的例子中，每个项目的右侧都有一个 `8px` 的空隙，但是使用 `display: inline-block` 而产生的小空隙将会使其变为 `12px`，这不是我们想要的效果。

```css
li:not(:last-child) {
  margin-right: 8px;
}
```

https://ask.qcloudimg.com/draft/6430183/kvfewwshv4.png?imageView2/2/w/1620

通过给父元素设置 `font-size: 0` 可以简单地解决这个问题。

```css
ul {
  font-size: 0;
}
li {
  /* 应该在这里重新设置字体大小，因为它会从父元素继承 `font-size: 0` */
  font-size: 16px;
}
```

https://ask.qcloudimg.com/draft/6430183/az3oycwzvc.png?imageView2/2/w/1620

## width & height

块级元素的流体特性主要体现在水平方向上。

`width` 默认值是 `auto`。它所表现的含义是：

- **充分利用可用空间**：例如 `<div>`、`<p>` 这些元素的宽度默认是 100% 于父级容器的，这种充分利用空间行为称为 **fill-available**
- **收缩与包裹**：典型代表就是浮动、绝对定位、`inline-block` 元素或 `table` 元素，称为 **shrink-to-fit** 收缩到合适，CSS3 中 `fit-content` 就是这种宽度的表现
- **收缩到最小**：这个最容易出现在 `table-layout` 为 `auto` 的表格中
- **超出容器限制**：除非有明确的 width 相关设置，否则上面 3 种情况尺寸都不会主动超过父级容器宽度，但是也存在一些特殊情况。例如，内容很长的连续的英文和数字，或者内联元素被设置了 `white-space: nowrap`

除了盒子模型分为内在盒子和外在盒子，显示分内部显示和外部显示，同样地，尺寸也分**内部尺寸**和**外部尺寸**。

### 外部尺寸与流体特性

#### 正常流宽度

```css
a {
  display: block;
  width: 100%;
}
```

`<a>` 标签元素 display 属性默认为 inline，因此设置 `display: block` 使其块状化绝对没有问题，但后面设置的 `width: 100%` 则会使其失去了流动性。

所谓流动性并非看上去的宽度 100% 显示那么简单，而是一种 margin/border/padding/content 内容区域自动分配水平空间的机制。

#### 格式化宽度

格式化宽度仅在出现在**绝对定位模型**中，也就是出现在 `position` 属性值为 `absolute` 或 `fixed` 的元素中。在默认情况下，绝对定位元素的宽度表现是**包裹性**，宽度由内部尺寸决定。

而对于非替换元素，当 `left/right` 或 `top/bottom` 对立方位的属性值同时存在时，元素的宽度表现为**格式化宽度**，其宽度大小相对于最近的具有定位特性（`position` 属性值不是 `static`）的祖先元素计算。

🌰 **示例：**

```css
div {
  position: absolute;
  left: 20px;
  right: 20px;
}
```

假设该 `<div>` 元素最近的具有定位特性的祖先元素的宽度是 1000 像素，则这个 `<div>` 元素的宽度是 960（即 1000-20-20）像素。

### 内部尺寸与流体特性

内部尺寸指元素的尺寸由内部的元素决定，而非由外部容器决定。通过判断元素内是否由内容，也就是宽度为 0 时，则该元素宽度为内部尺寸。

#### 包裹性

#### 首选最小宽度

**首选最小宽度**指元素最适合的最小宽度。

若外部容器宽度为 240 像素，内部元素宽度设为 0，`inline-block` 元素的宽度根据其内部的图文表现。

- 东亚文字最小宽度为每个汉字的宽度
- 西方最小宽度由特定的连续的英文字符单元决定。并非所有的英文字符都会组成连续单元，一般会终止于空格（普通空格）、短横线、问号以及其他非英文字符等。

## border

---

**参考资料：**

- [awesome-css-cn](https://github.com/jobbole/awesome-css-cn)
