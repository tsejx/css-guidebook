---
nav:
  title: 布局
  order: 2
group:
  title: 移动端布局
  order: 20
title: 设备和视口
order: 1
---

# 设备和视口

## 尺寸

设备屏幕尺寸是指屏幕的 **对角线长度**。

比如：iPhone6/7 是 4.7 寸，iPhone6/7p 是 5.5 寸。

```plain
1in = 2.54cm
3.5in = 3.5*2.54cm = 8.89cm
4.0in = 4.0*2.54cm = 10.16cm
4.7in = 4.7*2.54cm = 11.938cm
5.0in = 5.0*2.54cm = 12.7cm
5.5in = 5.5*2.54cm = 13.97cm
6.0in = 6.0*2.54cm = 15.24cm
```

```jsx | inline
import React from 'react';
import img from '../../assets/responsive/mobile-demension.jpg';

export default () => <img alt="MobileDemension" src={img} width={520} />;
```

## 像素

像素是计算机屏幕能显示一种特定颜色的最小区域。

在移动 Web 应用中，像素分为：

- **设备像素**（也称物理像素）
- **逻辑像素**（也称设备独立像素和 CSS 像素）

### 设备像素

**设备像素**（又称物理像素）是物理概念，指的是设备中使用的物理像素，也就是屏幕中的发光点的个数（屏幕由很多个发光点组成，每个发光点可以显示不同的颜色，这些发光的点组成了屏幕）。

比如 iPhone 6 的分辨率 `750 x 1334`。横向有 750 个发光的点，纵向有 1334 个发光的点。所以我们说 iPhone6 的设备水平像素是 750 像素，指的是 750 个发光点。

| 机型             | 尺寸（inch） | 逻辑分辨率（pt） | 设备分辨率（px） | 缩放因子（Scale Factor） |
| :--------------- | :----------- | :--------------- | :--------------- | :----------------------- |
| 3GS              | 3.5          | `320 x 480`      | `320 x 480`      | `@1x`                    |
| 4(s)             | 3.5          | `320 x 480`      | `640 x 960`      | `@2x`                    |
| 5(s/se)          | 4            | `320 x 568`      | `640 x 1136`     | `@2x`                    |
| 6(s)/7/8         | 4.7          | `375 x 667`      | `750 x 1334`     | `@2x`                    |
| 6(s)/7/8 Plus    | 5.5          | `414 x 736`      | `1242 x 2208`    | `@3x`                    |
| X                | 5.8          | `375 x 812`      | `1125 x 2436`    | `@3x`                    |
| XR               | 6.1          | `414 x 896`      | `828 x 1792`     | `@2x`                    |
| XS               | 5.8          | `375 x 812`      | `1125 x 2436`    | `@3x`                    |
| XS Max           | 6.5          | `414 x 896`      | `1242 x 2688`    | `@3x`                    |
| 7.9" iPad mini 4 | 6.5          | `768 x 1024`     | `1536 x 2048`    | `@2x`                    |
| 9.7" iPad        | 6.5          | `768 x 1024`     | `1536 x 2048`    | `@2x`                    |
| 10.5" iPad Pro   | 6.5          | `834 x 1112`     | `1668 x 2224`    | `@2x`                    |
| 12.9" iPad Pro   | 6.5          | `1024 x 1366`    | `2048 x 1732`    | `@2x`                    |

### 逻辑像素

**逻辑像素** 又称 **设备独立像素（DIP，Device Independent Pixel，Density Independent Pixel）**，简单地来说设备独立像素就是：独立于设备的用于逻辑上衡量像素的单位，是 Web 编程的概念。CSS 样式代码中使用的正是逻辑像素。1 个逻辑像素可能对应多个物理像素（设备发光点）。

```plain
设备独立像素 = 逻辑像素 = CSS 像素
```

在 CSS 规范中，长度单位可以分为两类：

- 绝对（absolute）单位
- 相对（relative）单位：常用的 `px` 像素是一个相对单位，相对的是设备像素（Device Pixel）

在 Apple 的视网膜屏（Retina）中，每 4 个（设备）像素为一组，渲染出普通屏幕中一个像素显示区域内的图像，从而实现更为精细的显示效果。此时，`250px` 的（逻辑像素的）元素跨越了 500 个物理像素的宽度。

```jsx | inline
import React from 'react';
import img from '../../assets/responsive/retina-logical-pixel.png';

export default () => <img alt="Retina逻辑像素" src={img} width={520} />;
```

浅显的理解就是可以看作是 `2cm x 2cm` 的正方形被切割成四块，然后遇到 DPR 为 2 的时候，被切割的四块又被分别切割成四块，但是总面积不变。

如果用户进行了放大，那么一个 CSS 像素还将跨越更多的物理像素。

## 分辨率

屏幕分辨率（Resolution）是指：纵横向上的像素点素（单位是 `px`），也就是显示器所能显示的像素有多少。由于屏幕上的点、线和面都是由像素组成的，显示器可显示的像素越多，画面就越精细，同样的屏幕区域内能显示的信息也越多。

就相同大小的屏幕而言，当屏幕分辨率低时（例如 `640 x 480`），在屏幕上显示的像素少，单个像素尺寸比较大。屏幕分辨率高时（例如 `1600 x 1200`），在屏幕上显示的像素多，单个像素尺寸比较小。

- 在 PC 端的分辨率常见是：`1366*768`、`1440*900`、`1024*768`、`1400*900`
- 移动端常见分辨率: `2160*1080`、`1920*1080`、`1334*750`、`1136*640`

> 在说分辨率的时候我们常常会把大的值说在前面，所以在 PC 端屏幕宽度比高度的值要大一点，第一个值一般是指的宽度，第二个值为高度。
>
> 移动端正好相反，手机一般宽度都是小于高度，所以第一个值是宽度。

### 设备像素密度

PPI（Pixels Per Inch）表示每英寸所拥有的逻辑像素数目，即像素密度（Screen Density）。是图像分辨率的单位，图像 PPI 值越高，画面的细节就越丰富，因为单位面积的像素数量更多。

上述我们知道了屏幕尺寸是指对角线长度，如果又知道了屏幕的分辨率（即知道了宽高的像素值），那么宽高和对角线就形成了一个垂直三角形。利用勾股定理，可以算出对角线的像素值了。而又知道了对角线的英寸值，那么就可以算出屏幕的 PPI 值了：

```jsx | inline
import React from 'react';
import img from '../../assets/responsive/ppi.png';

export default () => <img alt="PPI" src={img} width={360} />;
```

屏幕对角线的分辨率也就是屏幕对角线上的像素点数，可以根据已知的横纵分辨率通过勾股定理计算得。

[DPI 和 PPI 的区别是什么?](https://www.zhihu.com/question/23770739)

### 设备像素比

设备像素比是默认缩放为 100%的情况下，设备像素和逻辑像素的比值。

```
设备像素比 DPR = 物理像素数 / 逻辑像素数
```

单位之间的换算关系：

```plain
1 倍：1pt = 1dp = 1px（iPhone 3GS）
2 倍：1pt = 1dp = 2px（iPhone 6/7/8）
3 倍：1pt = 1dp = 3px（iPhone 6/7/8 Plus）
```

> MacBook Pro 视网膜屏（Retina）显示器硬件像素是 `2880px *1800px`。当设置屏幕分辨率为 `1920px * 1200px` 的时候，理想视口的宽度值是 1920px， 那么 DIP 的宽度值就是 1920px。其与理想视口宽度的比值为 1.5（2880/1920），这个比值叫做设备像素比。

设备像素比可以通过 `window.devicePixelRatio` 来获取，或者使用 CSS 中的 `device-pixel-ratio`。

设备像素比不一定都是整数，尤其是 Android 设备十分的碎片化。

下面常见的设备像素比：

- 普通密度桌面显示屏：`devicePixelRatio = 1`
- 高密度桌面显示屏（Retina）：`devicPixelRatio = 2`
- 主流手机显示屏：`devicePixelRatio = 2 or 3`

### 图像分辨率

图像分辨率则是单位英寸中所包含的像素点数，其定义更趋近于分辨率本身的定义。

从这个定义上来看很明显，跟 PPI 的含义是一样，所以 PPI 是用来表示图像分辨率的单位，如一图片分辨率为 `100ppi`，含义是每英寸中所含有 100 个像素。

对于一张 `100px * 100px` 的图片，通过 CSS 设置其宽高：

```css
img {
  width: 100px;
  height: 100px;
}
```

在普通显示屏的电脑中打开是正常的，但假设在手机或 Retina 屏中打开，按照逻辑分辨率来渲染，他们的 `deviceRatio = 2`，那么就相当于拿 4 个物理像素来描绘 1 个逻辑像素。这等于拿一个 2 倍的放大镜去看图片，图片就会变得模糊。

这时，就需要使用 `@2x` 甚至 `@3x` 图来避免图片的失真。

## 视口

在 PC 端，视口指的是浏览器的可视区域，其宽度和浏览器窗口的度保持一致。在 CSS 标准文档中，视口也被称为初始包含块，它是所有 CSS 百分比宽度推算的根源，给 CSS 布局限制了一个最大宽度。

移动端浏览器通常宽度是 `240px~640px`，而大多数为 PC 端设计的网站宽度至少为 `800px`，如果仍以浏览器窗口作为视口的话，网站内容在手机上看起来会非常窄。因此，移动端引入三个概念，使得移动端中的视口与浏览器宽度不再相关联。

- 布局视口 Layout Viewport
- 视觉视口 Visual Viewport
- 理想视口 Ideal Viewpor

### 布局视口

一般移动设备的浏览器都默认设置了一个 `<viewport>` 元标签，定义一个虚拟的布局视口（Layout Viewport），用于解决早期的页面在手机上显示的问题。iOS 和 Android 基本都将这个视口分辨率设置为 `980px`，所以 PC 上的网页基本能在手机上呈现，只不过元素看上去很小，一般默认可以手动缩放网页。

```jsx | inline
import React from 'react';
import img from '../../assets/responsive/layout-viewport.jpg';

export default () => <img alt="布局视口" src={img} width={480} />;
```

布局视口的宽度 / 高度可以通过以下获取。

```js
const layoutViewport = document.documentElement.clientWidth / clientHeight;
```

可以看到，默认的布局视口宽度为 980px。如果要显式设置布局视口，可以使用 HTML 中的 `<meta>` 标签：

```html
<meta name="viewport" content="width=400" />
```

布局视口使视口与移动端浏览器屏幕宽度完全独立开。CSS 布局将会根据它来进行计算，并被它约束。

我们可以使用视口标签（Viewport `<meta>` 标签）来显式地设置布局视口。

```html
<meta
  name="viewport"
  content="width=device-width,initial-scale=0,maximum-scale=1,user-scalable=no"
/>
```

下面是每个属性的详细说明：

| 属性名        | 取值                     | 描述                                                    |
| :------------ | :----------------------- | :------------------------------------------------------ |
| width         | 正整数或 `device-width`  | 定义视口的宽度，单位为像素                              |
| height        | 正整数或 `device-height` | 定义视口的高度，单位为像素，一般不用                    |
| initial-scale | `[0.0-10.0]`             | 定义初始缩放值                                          |
| minimum-scale | `[0.0-10.0]`             | 定义放大最大比例，它必须小于或等于 `maximum-scale` 设置 |
| maximum-scale | `[0.0-10.0]`             | 定义缩小最小比例，它必须大于或等于 `minimum-scale` 设置 |
| user-scalable | yes / no                 | 定义是否允许用户缩放页面，默认 `yes`                    |

有几点值得注意：

- `<viewport>` 标签只对移动端浏览器有效，对 PC 端浏览器无效
- 当缩放比例为 100% 时，`DIP 的宽度 = CSS 像素宽度 = 理想视口的宽度 = 布局视口的宽度`
- 单独设置 `initial-scale` 或 `width` 都会有兼容性问题，所以设置布局视口为理想视口的最佳方法是同时设置这两个属性
- 即使设置了 `user-scalable = no`，在 Android Chrome 浏览器中也可以强制启用手动缩放

如果 `布局视口的宽度 = device-width`（设备宽度，也就是：`物理像素/dpr`）时，此时页面 100% 的宽度正好能在视觉视口中完全显示，不需要缩放查看页面了，而且在不同尺寸下都能基本表现一致，此时的布局视口的状态我们就称为 **理想视口（Ideal Viewport）**。

### 视觉视口

视觉视口是用户当前看到的区域，用户可以通过缩放操作视觉视口，同时不会影响布局视口。

```jsx | inline
import React from 'react';
import img from '../../assets/responsive/vision-viewport.jpg';

export default () => <img alt="Webpack执行流程" src={img} width={480} />;
```

视觉视口和缩放比例的关系为：`当前缩放值 = 理想视口宽度 / 视觉视口宽度`

所以，当用户放大时，视觉视口将会变小，CSS 像素将跨越更多的物理像素。

### 理想视口

布局视口的默认宽度并不是一个理想的宽度，于是 Apple 和其他浏览器厂商引入了理想视口的概念，它对设备而言是最理想的布局视口尺寸。显示在理想视口中的网站具有最理想的宽度，用户无需进行缩放。

理想视口的值其实就是屏幕分辨率的值，它对应的像素叫做设备逻辑像素（Device Independent Pixel，DIP）。DIP 和设备的物理像素无关，一个 DIP 在任意像素密度的设备屏幕上都占据相同的空间。如果用户没有进行缩放，那么一个 CSS 像素就等于一个 DIP。

理想视口的宽度一般可以通过以下公式计算： `理想视口的宽度 = 设备像素 / dpr`

也就是当 **布局视口的宽度** 等于 **设备独立像素的宽度** 时就是理想视口。

用下面的方法可以使布局视口与理想视口的宽度一致：

```html
<!-- 这行代码告诉浏览器,布局视口的宽度应该与理想视口的宽度一致 -->
<meta name="viewport" content="width=device-width" />
```

实际上，这就是响应式布局的基础。

## 实际应用

以下是通过改变 meta viewport 的几个参数的值来算取不同的 viewport：

| width        | initial-scale | layout viewport | visual viewport | ideal viewport | 是否滚动 |
| :----------- | :------------ | :-------------- | :-------------- | :------------- | :------- |
| -            | -             | 980px           | 980px           | 375px          | no       |
| device-width | 1             | 375px           | 375px           | 375px          | no       |
| device-width | 2             | 375px           | 188px           | 375px          | yes      |
| device-width | 0.5           | 750px           | 750px           | 375px          | no       |
| 480px        | 1             | 480px           | 375px           | 375px          | yes      |
| 480px        | 2             | 480px           | 188px           | 375px          | yes      |
| 480px        | 0.5           | 750px           | 750px           | 375px          | no       |

以上是针对 iPhone 6/7/8 的测试数据，且无论怎么设置 `viewport` 都具有临界值，即：

```plain
75 <= layoutviewport <= 10000`，`75 <= visualviewport <= 1500
```

> **为什么要设置 Viewport？**

`viewport` 的设置不会对 PC 页面产生影响，但对于移动页面却很重要。

下面我们举例来说明：

1. 媒体查询 `@media` 响应式布局中，会根据媒体查询功能来适配多端布局，必须对 `viewport` 进行设置，否则根据查询到的尺寸无法正确匹配视觉宽度而导致布局混乱。如不设置 `viewport` 参数，多说移动端媒体查询的结果将是 `980px` 这个节点布局的参数，而非我们通常设置的 `768px` 范围内的这个布局参数
2. 由于目前多数手机的 DPR 都不再是 1，为了产出高保真页面，我们一般会给出 `750px` 的设计稿，那么就需要通过设置 `viewport` 的参数来进行整体换算，而不是在每次设置尺寸时进行长度的换算。

## 总结

```plain
屏幕尺寸、屏幕分辨率 ==> 对角线分辨率/屏幕尺寸 ==> 屏幕像素密度PPI
                                                 |
                  设备像素比 dpr = 物理像素 / 设备独立像素 dip(dp)
                                                 |
                                           viewport: scale
                                                 |
                                              CSS像素px
```

## 参考资料

- [📖 Image Size and Resolution 缩放因子](https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/)
- [📖 The UItimate Guide To iPhone Resolutions](https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions)
- [移动前端开发之 Viewport 的深入理解](https://www.cnblogs.com/2050/p/3877280.html)
- [移动端适配总结](https://juejin.im/post/5c0dd7ac6fb9a049c43d7edc)
- [CSS 像素、物理像素、逻辑像素、设备像素比、PPI、Viewport](https://github.com/jawil/blog/issues/21)
