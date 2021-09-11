---
title: 背景
order: 5
group:
  title: 属性
  order: 2
nav:
  title: 基础
  order: 1
---

# 背景

## 属性说明

### background

语法：

```
background: <background-color> <background-image> <background-repeat> <background-attachment> | <background-position>
```

### background-color

`background-color` 用于指定背景颜色。

| 属性值        | 说明       |
| :------------ | :--------- |
| `<color>`     | 指定颜色   |
| `transparent` | 透明背景色 |

使用示例：

```css
h1 {
  background-color: #f00;
}
```

注意事项：

- 在同一组背景定义中，如果背景颜色和背景图像都设置了，那么背景图像会覆盖在背景颜色之上

### background-image

| 属性值  | 说明                                         |
| :------ | :------------------------------------------- |
| `<uri>` | 使用绝对或相对地址指或者创建渐变色来确定图像 |
| `none`  | 无背景图                                     |

使用示例：

```css
/* 绝对地址 */
.absolute-url {
  background-image: url('https://mrsingsing.com/images.jpg');
}

/* 相对地址 */
.relative-url {
  background-image: url('./images.jpg');
}

/* 渐变色 */
.gradient-color {
  background-image: linear-gradient(to right, #ffdde1, #ee9ca7);
}

/* 无背景图 */
p {
  background-image: none;
}
```

<br />

<code src="@example/properties/background/background-image/index.tsx" />

### background-origin

`background-origin` 用于规定背景图片 `background-image` 属性的原点位置的背景相对区域。

语法：

```css
background-origin: <box>;
```

`<box>` 的取值如下：

| 属性值        | 说明                                              |
| :------------ | :------------------------------------------------ |
| `border-box`  | 从 `border` 区域（含 `border`）开始显示背景图像   |
| `padding-box` | 从 `padding` 区域（含 `padding`）开始显示背景图像 |
| `content-box` | 从 `content` 区域开始显示背景图像                 |

<br />

<code src="@example/properties/background/background-origin/index.tsx" />

### background-position

语法：

```css
background-position: <position> [, <position>];
background-position: <background-position-x> <background-position-y>;
```

<br />

| 属性值      | 说明                       |
| :---------- | :------------------------- |
| `<percent>` | 百分比                     |
| `<length>`  | 具体长度                   |
| `top`       | 用于指定当前项位于顶端边缘 |
| `right`     | 用于指定当前项位于右端边缘 |
| `bottom`    | 用于指定当前项位于底端边缘 |
| `left`      | 用于指定当前项位于左端边缘 |
| `center`    | 背景图片居中               |

注意：

- 如果一个值是 `top` 或 `bottom`，那么另一个值不应该是 `top` 或 `bottom`
- 同理，如果一个值是 `left` 或 `right`，那么另一个值不应该是 `left` 或 `right`

示例：

<code src="@example/properties/background/background-position/index.tsx" />

### background-repeat

| 属性值      | 说明                           |
| :---------- | :----------------------------- |
| `repeat`    | 图像在水平和垂直方向上重复     |
| `repeat-x`  | 图像在水平方向上重复           |
| `repeat-y`  | 图像在垂直方向上重复           |
| `no-repeat` | 图像在水平和垂直方向上都不重复 |

### background-size

`background-size` 设置背景图片大小。图片可以保有其原有的尺寸，或者拉伸到新的尺寸，或者在保持其原有比例的同时缩放到元素的可用空间的尺寸。

属性值：

| 属性值         | 说明                                                                                                                                                                                              |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<length>`     | 用长度值指定背景图像大小。不允许负值。                                                                                                                                                            |
| `<percentage>` | 用百分比指定背景图像大小。不允许负值。                                                                                                                                                            |
| `auto`         | 背景图像的真实大小。                                                                                                                                                                              |
| `cover`        | 将背景图像等比缩放到 **完全覆盖** 容器，背景图像有可能超出容器。我的理解就是 `width` 或 `height` 有任何一个属性如果没有覆盖到容器范围，就会放大，另一个也跟谁着等比例放大。可能会超过图片的范围。 |
| `contain`      | 将背景图像等比缩放到宽度或高度与容器的宽度或高度相等，背景图像始终被包含在容器内。我的理解就是，`width` 或 `height`，有任何一个属性超出了容器的范围，就会等比缩小，直到图片完全包含在容器内。     |

<br />

<code src="@example/properties/background/background-size/index.tsx" />

### background-attachment

| 属性值   | 说明                                                                                                                                                          |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `scroll` | 背景相对于 **元素本身** 固定， 而不是随着它的内容滚动（对元素边框是有效的）。                                                                                 |
| `local`  | 背景相对于 **元素的内容** 固定。如果一个元素拥有滚动机制，背景将会随着元素的内容滚动， 并且背景的绘制区域和定位区域是相对于可滚动的区域而不是包含他们的边框。 |
| `fixed`  | 背景相对于 **视口** 固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。                                                                            |

<br />

<code src="@example/properties/background/background-attachment/index.tsx" />

注意：

- 相对于（浏览器）视口固定，需要滚动浏览器滚动条方可滚动
- 由于示例设置了 `background-position: center`，所以第二种情况下，背景位于整个滚动区域的居中部位

### background-clip

`background-clip` 设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面。

| 属性值        | 说明                       |
| :------------ | :------------------------- |
| `border-box`  | 百分比                     |
| `padding-box` | 具体长度                   |
| `content-box` | 用于指定当前项位于顶端边缘 |

<br />

<code src="@example/properties/background/background-clip/index.tsx" />

## 色彩模式

### RGB

RGB 色彩空间：RGB 色彩空间又称 RGB 颜色模型或红绿蓝颜色空间，是一种加色模型，将红（Red）、绿（Green）、蓝（Blue）三原色的色光以不同的比例相加，以产生多种多样的色光。在 CSS 中表示方法譬如：`rgb(255, 0, 0)` 表示红色，`rgb(255, 255, 255)` 表示黑色。

RGBA 色彩空间：在 RGB 的基础上增加了透明度。这是 CSS3 新增加的色彩模式，它的表示方法是，`rgba(255, 255, 255, 0.5)`，其中 `alpha` 的取值在 `0~1` 之间，`0` 为完全透明，`1` 为完全不透明。与 `opacity` 属性的区别是，`opacity` 能影响到其子元素透明度，RGBA 不会。

### HEX

HEX 色彩空间：又叫十六进制颜色模式，是用十六进制表示颜色的。形如 `#000000` 的格式，这是在 CSS 中经常使用的。

### HSL

HSL 色彩空间：HSL 和 HSV（也叫 HSB）是对 RGB 色彩空间中点的两种有关系的表示，它们尝试描述比 RGB 更准确的感知颜色联系，并仍保持在计算上简单。

HSLA 色彩空间：HSLA 是在 HSL 的基础上增加了透明度。

- HSL
  - H：Hue（色调）。0（或 360）表示红色，120 表示绿色，240 表示蓝色，也可取其他数值来指定颜色。取值为：0 - 360
  - S：Saturation（饱和度）。指色彩的纯度，越高色彩越纯，低则逐渐变灰，取 `0-100%` 的数值。
  - L：Lightness（亮度）。取值为：`0-100%`，示例 `background: hsl(0,100%,50%)`
  - V：Value（色调）
  - B：Bridghtness（明度）

```css
/* RGB */
background-color: rgb(255, 0, 0);

/* HEX */
background: #000000;

/* RGBA */
background: rgb(255, 255, 255, 0.5);

/* HSL */
background: hsl(10, 60%, 60%);

/* HSLA */
background: hsl(10, 60%, 60%, 0.5);
```

### 渐变色

### 多背景叠加

指定多个背景：

```css
.bg {
  background: <background1>, <background2>, ..., <backgroundN>;
}
```

<br />

<code src="@example/properties/background/multi-background/index.tsx" />

## 参考资料

- [📖 W3C Recommendation：Colors and Backgrounds](https://www.w3.org/TR/CSS2/colors.html)
