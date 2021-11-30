---
nav:
  title: 应用
  order: 4
title: 几何图形
order: 1
---

# 几何图形

## 三角形

### border 边框实现

利用宽高为 `0` 的容器及透明的 `border` 实现。

<code src="../../example/application-geometry/border-triangle/index.tsx" />

### linear-gradient 线性渐变实现

实现一个 45° 的渐变容器。

<code src="../../example/application-geometry/linear-gradient-triangle/index.tsx" />

通过旋转 `rotate` 或者 `scale`，可以获得不同角度，不同大小的三角形。

### conic-gradient 角向渐变实现

在渐变属性上，角向渐变 `conic-gradient` 也可以用于实现三角形。

方法在于，角向渐变的圆心点是可以设置的，类似于径向渐变的圆心点也可以被设置。

我们将角向渐变的圆心点设置于 `50% 0`，也就是 center top，容器最上方的中间，再进行角向渐变，渐变到一定的角度范围内，都是三角形图形。

<code src="../../example/application-geometry/conic-gradient-triangle/index.tsx" />

上述代码中的 `deeppink 45deg, transparent 45.1deg` 多出来的 `0.1deg` 是为了简单消除渐变产生的锯齿的影响，这样，我们通过 `conic-gradient`，也轻松的得到了一个三角形。

同理，再配合旋转 `rotate` 或者 `scale`，我们也能得到各种角度，不同大小的三角形。

### rotate 旋转实现

这种方法还是比较常规的，先设置图形的旋转中心在左下角 `left bottom`，并使用 `transform: rotate` 配合 `overflow: hidden`。

<code src="../../example/application-geometry/transform-rotate-triangle/index.tsx" />

### clip-path 裁剪可视区域实现

`clip-path` CSS 属性可以创建一个只有元素的部分区域可以显示的剪切区域。区域内的部分显示，区域外的隐藏。剪切区域是被引用内嵌的 URL 定义的路径或者外部 SVG 的路径。

也就是说，使用 `clip-path` 可以将一个容器裁剪成任何我们想要的样子。

通过 3 个坐标点，实现一个多边形，多余的空间则会被裁减掉。

<code src="../../example/application-geometry/clip-path-triangle/index.tsx" />

在这个网站 [CSS clip-path marker](https://bennettfeely.com/clippy/) 可以快捷创建简单的 `clip-path` 图形，得到对应的 CSS 代码。

### 三角形字符绘制

十进制 Unicode 三角形的表示码。

```text
◄ : &#9668;
► : &#9658;
▼ : &#9660;
▲ : &#9650;
⊿ : &#8895;
△ : &#9651;
```

<br />

<code src="../../example/application-geometry/unicode-triangle/index.tsx" />

### 阴影三角形

<code src="../../example/application-geometry/shadow-triangle/index.tsx" />

### 角落三角形

<code src="../../example/application-geometry/corner-triangle/index.tsx" />

## 正方形

### 利用 vw 单位

实现思路：将盒子的宽高设置为相同的数值和计量单位 `vw` 或 `vh`（一般使用 `vw`）

<code src="../../example/application-geometry/square-vw/index.tsx" />

### 设置垂直方向的 padding 撑开容器

在 CSS 盒模型中，一个比较容易被忽略的就是 `margin` 和 `padding` 的百分比数值计算。按照规定，`margin` 和 `padding` 的百分比数值是相对 **父元素宽度** 的宽度计算的。由此可以发现只需将元素 <strong style="color:red">垂直方向</strong> 的一个 `padding` 值设定为与 `width` <strong style="color:red">相同的百分比</strong> 就可以制作出自适应正方形了：

<code src="../../example/application-geometry/square-vertical-padding/index.tsx" />

注意：为了解决内容区域被内容撑高的问题，可以设置容器的高度为 `0`。

这种方案简洁明了，且兼容性好；但是除了填充内容后会出现问题以外，还有可能碰上 `max-height` 不收缩。

### 利用伪元素的上边距撑开容器

利用百分比数值的 `padding-bottom` 属性撑开容器诶不空间，但是这样做会导致再元素上设置 `max-height` 属性失效。

<code src="../../example/application-geometry/square-pseudo/index.tsx" />

由于 margin collapse 的原因，容器与伪元素在垂直方向发生了外边距折叠，所以我们想象中的撑开父元素高度并没有出现，解决方法就是在父元素上触发 BFC。

```css
.sqaure-pseudo {
  overflow: hidden;
}
```

若使用垂直方向上的 `padding` 撑开父元素，则不需要触发 BFC。

## 同心圆

1. 使用 `box-shadow` 单个元素实现
2. 使用 CSS3 `repeating-radial-gradient` 函数单个元素实现

<code src="../../example/application-geometry/concentric-circles/index.tsx" />

## 五角星

<code src="../../example/application-geometry/pentagram-pseudo/index.tsx" />

### 五角星字符绘制

## 参考资料

- [30 个案例教你用纯 CSS 实现常见的几何图形](https://segmentfault.com/a/1190000039200998)
- [老生常谈之 n 种使用 CSS 实现三角形的技巧](https://juejin.cn/post/6950081305560219679)
