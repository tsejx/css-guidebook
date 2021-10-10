---
nav:
  title: 布局
  order: 2
group:
  title: 移动端布局
  order: 20
title: 1px 边框问题
order: 20
---

# 1px 边框问题

当我们 CSS 里写的 `1px` 的时候，由于它是逻辑像素，导致我们的逻辑像素根据这个设备像素比（DPR）去映射到设备上就为 `2px`，或者 `3px`。由于每个设备的屏幕尺寸不一致，就导致每个物理像素渲染出来的大小也不同，这样如果尺寸比较大的设备上，`1px` 渲染出来的样子就相当粗犷，这就是经典的一像素边框问题。

从第一部分的讨论可知 `viewport` 的 `initial-scale` 具有缩放页面的效果。对于 `dpr=2` 的屏幕，`1px` 压缩一半便可与 `1px` 的设备像素比匹配，这就可以通过将缩放比 `initial-scale` 设置为 `0.5 = 1 / 2` 而实现。以此类推 `dpr = 3` 的屏幕可以将 `initial-scale` 设置为 `0.33 = 1/3` 来实现。

本文主要介绍几种移动端视网膜（Retina）屏幕下 `1px` 边框线的解决方法。

## 通过 viewport + rem 的方式来兼容

目前这种兼容方案相对比较完美，适合新项目（老项目改用 REM 单位成本会比较高）。 淘宝 M 首页 就是这种方案。

在 `devicePixelRatio = 2` 时，输出 `viewport`

```html
<meta
  name="viewport"
  content="initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no"
/>
```

在 `devicePixelRatio = 3` 时，输出 `viewport`

```html
<meta
  name="viewport"
  content="initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no"
/>
```

同时通过设置对应 `viewport` 的 `rem` 基准值，这种方式就可以像以前一样轻松愉快的写 `1px` 了。

其他方案（该部分内容来源于妙净同学的分享）：

## transform: scale(0.5)

```css
.layout {
  height: 1px;
  -webkit-transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  overflow: hidden;
}
```

<br />

- 优点：圆角无法实现，HACK 代码多，实现四条边框比较闹心
- 缺点：只能单独使用，如果嵌套，`scale` 的作用也会对包含的元素产生，不想要的影响，所以此种方案配合 `:after` 和 `:before` 独立使用较多，比如画一个商品的边框四条线，容器的 `after` 和 `before` 可以画两条线，利用容器的父元素的 `after`、`before` 再画 2 条线。

<br />

```css
.after-scale {
  position: relative;
}

.after-scale:after {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  border-bottom: 1px solid #c8c7cc;
  -webkit-transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
}
```

## box-shadow

利用 CSS 对阴影处理的方式实现 `0.5px` 的效果。

```css
.one-pixel {
  -webkit-box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.5);
}
```

优点基本所有场景都能满足，包含圆角的 `button`，单条，多条线，

缺点

颜色不好处理， 黑色 `rgba(0,0,0,1)` 最浓的情况了。有阴影出现，不好用。

[参考链接](http://bradbirdsall.com/mobile-web-in-high-resolution)

## background-image

实现方式

设置 1px 通过 CSS 实现的 `image`，50% 有颜色，50% 透明

```css
.border {
  background-image: linear-gradient(180deg, red, red 50%, transparent 50%), linear-gradient(
      270deg,
      red,
      red 50%,
      transparent 50%
    ), linear-gradient(0deg, red, red 50%, transparent 50%), linear-gradient(90deg, red, red 50%, transparent
        50%);
  background-size: 100% 1px, 1px 100%, 100% 1px, 1px 100%;
  background-repeat: no-repeat;
  background-position: top, right top, bottom, left top;
  padding: 10px;
}
```

- 优点：配合 `background-image`、`background-size`、`background-position` 可以实现单条，多条边框。边框的颜色随意设置
- 缺点：如果有圆角的效果，很 sorry 圆角的地方没有线框的颜色。都要写的代码也不少

参考链接

## 用图片

```css
.border-image {
  border-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAECAYAAABP2FU6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5JREFUeNpiPnH8zH/G////MzAxAAHTyRNn/wMEGABpvQm9g9TJ1QAAAABJRU5ErkJggg==')
    2 0 stretch;
  border-width: 0px 0px 1px;
}
```

- 优点：无
- 缺点：也可以通过修改图片来达到圆角的效果，但是由于图片的原因，压缩过后的图片边缘变模糊了（不放大的情况下不明显），需要引用图片或者 base64，边框颜色修改起来不方便。

## 参考资料

- [移动端 1px 解决方案](https://juejin.im/post/6844903877947424782)
