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

### 字符绘制

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

## 同心圆

1. 使用 `box-shadow` 单个元素实现
2. 使用 CSS3 `repeating-radial-gradient` 函数单个元素实现

<code src="../../example/application-geometry/concentric-circles/index.tsx" />

## 参考资料

- [30 个案例教你用纯 CSS 实现常见的几何图形](https://segmentfault.com/a/1190000039200998)
- [老生常谈之 n 种使用 CSS 实现三角形的技巧](https://juejin.cn/post/6950081305560219679)
