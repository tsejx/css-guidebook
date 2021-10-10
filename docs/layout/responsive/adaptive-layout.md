---
nav:
  title: 布局
  order: 2
group:
  title: 移动端布局
  order: 20
title: 自适应布局
order: 2
---

# 自适应布局

自适应布局的特点是分别为不同的屏幕分辨率定义布局，即创建多个静态布局，每个静态布局对应一个屏幕分辨率范围。改变屏幕分辨率可以切换不同的静态局部（页面元素位置发生改变），但在每个静态布局中，页面元素不随窗口大小的调整发生变化。可以把自适应布局看作是静态布局的一个系列。

关键是需要找到一种长度单位，使得一样的取值，在不同尺寸的设备屏幕上按大小比例缩放。

移动端适配方案：

- `rem`
- `rem` + 媒体查询
- `vw/vh`
- `rem` + `vw/vh`
- 百分比布局

## rem

`rem` 是 CSS3 新增的相对单位，与 `em` 不同，使用 `rem` 为元素设定字体大小时，相对的是 HTML 根元素。

这个单位可谓集相对大小和绝对大小的优点于一身，通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。

对于不支持它的浏览器，应对方法也很简单，就是多写一个绝对单位的声明。这些浏览器会忽略用 `rem` 设定的字体大小

### 适配原理

首先，REM 是根元素 `<html>` 标签的 `font-size` 字体大小决定的，它们的关系是：

```plain
$fontSize = 7.5px

1rem = 1 * $fontSize
2rem = 2 * $fontSize
```

设计师给的视觉稿通常都是 `640px` 或者 `750px`（这里指的是宽度），我们会约定一种尺寸的稿子作为参考去布局。

假如约定的是 `750px` 布局，那么第一件事情就是设置根元素 `<html>` 的 `font-size`，那我们把 `750px` 分成 10 份，每份 `$rem = 750px / 10 = 75px`，也就是 `1rem = 75px`，`10rem = 750px`。

但是我们视觉稿上的单位是 `px`，我们需要转换成 `rem`，因为前面说了 `1rem = 75px`、`1px = 1/75rem`，所以用视觉稿上的 `px` 值除以 75 就可以了，比如 `100px = 100/75rem = 1.333rem`。

也可以借助预编译器：

```scss
/* 基准 font-size，可设置成其他值 */
$rem: 100;
@mixin px2rem($name, $px) {
  #{$name}: $px / $rem * 1rem;
}

// 使用示例
.container {
  @include px2rem(height, 240);
}

// 编译后
.container {
  height: 2.4rem;
}
```

### 可伸缩布局实践

[flexible.js](https://github.com/amfe/lib-flexible/tree/master) 方案是阿里手淘团队早期开源的一个移动端适配解决方案，引用 flexible.js 后，我们在页面上统一使用 `rem` 来布局。

1. 动态根据根元素 `<html>` 的 `font-size` 字体大小，等比缩放元素大小来自适应移动设备
2. 获取设备 DPR 设备像素比，动态修改 `<meta>` 标签的 `viewport`，对视口缩放，进行高清显示

```js
(function flexible(window, document) {
  const doc = document.documentElement;
  const dpr = window.devicePixelRatio || 1;

  // 适配 body 字体大小
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + 'px';
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize);
    }
  }
  setBodyFontSize();

  // 设置 rem 单位，当设计稿 360px 更好计算
  function setRemUnit() {
    const rem = doc.clientWidth / 3.6;
    doc.style.fontSize = rem + 'px';
  }
  setRemUnit();

  // 页面容器伸缩时重置 rem 单位
  window.addEventListener('resize', setRemUnit);
  window.addEventListener('pageshow', function (err) {
    if (e.persisted || (window.performance && window.performance.navigation.type === 2)) {
      setRemUnit();
    }
  });

  // 检测是否支持 0.5 px（用于解决 1px 问题）
  if (dpr >= 2) {
    const fakeBody = document.createElement('body');
    const div = document.createElement('div');

    div.style.border = '.5px solid transparent';
    fakeBody.appendChild(div);
    doc.appendChild(fakeBody);

    if (div.offsetHeight === 1) {
      doc.classList.add('hairlines');
    }
  }
})(window, document);
```

### Retina 高清显示

对于 `dpr = 2` 的 Retina 屏幕而言，1 个位图像素对应于 4 个物理像素，由于单个位图像素不可以再进一步分割，所以只能就近取色，从而导致图片模糊（注意上述的几个颜色值）

为了使这张图高清显示，需要提供（`@2x`）两倍图，比如 `200×300(css pixel)` 的 `<img>` 标签，就需要提供 `400×600` 的图片，使得位图像素跟物理像素 `1:1` 对应，图片就自然清晰了。

但是对于普通屏幕，就没有必要加载（`@2x`）两倍图了，一个是因为会造成资源浪费，另一个是（如上图）会让图片失去了一些锐利度（或色差）

对于图片高清，最好的解决方案是，不同的 dpr，加载不同的图片

对于网页高清，如果我们要使我们的网页在 Retina 屏上高清显示，就要缩放视口，使得布局的像素与屏幕的物理像素 1:1 对应。

下面是 `flexible.js` 对 DPR 的 `scale` 的设置：

```js
if (!dpr && !scale) {
  const isAndroid = window.navigator.appVersion.match(/android/gi);
  const isIPhone = window.navigator.appVersion.match(/iphone/gi);
  const devicePixelRatio = window.devicePixelRatio;

  if (isIPhone) {
    if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
      dpr = 3;
    } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
      dpr = 2;
    } else {
      dpr 1;
    }
  } else {
    // 其他设备下，仍旧使用 1 倍的方案
    dpr = 1;
  }

  scale = 1 / dpr;
}
```

在引入 `lib-flexible` 需要执行的 JavaScript 文件之前，可以手动设置 `<meta>` 标签来控制 DPR 值，如：

```html
<meta name="flexible" content="initial-dpr=2" />
```

其中 `initial-dpr` 会把 DPR 强制设置为给定的值。如果手动设置了 DPR 之后，不管设备是多少的 DPR，都会强制认为其 DPR 是你设置的值。在此不建议手动强制设置 dpr，因为在 Flexible 中，只对 iOS 设备进行 DPR 的判断，对于 Android 系列，始终认为其 `dpr` 为 1。

代码中对 iOS 设备的 `window.devicePixelRatio` 进行判断，设置对应的整倍数 `dpr`，然后根据 `dpr` 设置 缩放比 `scale`，以 iphone 6 为例。

|             | 布局视口 | 视觉视口 | 理想视口 | 基准 `font-size |
| :---------- | :------- | :------- | :------- | :-------------- |
| `scale=1`   | 375      | 375      | 375      | 50              |
| `scale=0.5` | 750      | 750      | 375      | 100             |

> 为什么不建议文本字号是哟功能 `rem`？

因为我们希望文本能够流动，使得大屏手机能看到更多的文本，而不是文本因为 `rem` 等比缩放使得大字号显得突兀；同样也不希望在小屏手机字体因为等比缩放显得太小。

所以我们根据不同的 DPR 动态设置固定字号的字体。

```css
div {
  width: 1rem;
  height: 0.4rem;
  /* 默认写上 DPR 为 1 的 fontSize */
  font-size: 12px;
}

[data-dpr='2'] div {
  font-size: 24px;
}

[data-dpr='3'] div {
  font-size: 36px;
}
```

## rem + 媒体查询

## vw/vh

`vw/vh` 方案即将视觉视口宽度 `window.innerWidth` 和视觉视口高度 `window.innerHeight` 等分为 100 份。

`vw/vh` 方案和 `rem` 类似也是相当麻烦需要做单位转化，而且 `px` 转换成 `vw` 不一定能完整整除，因此有一定的 **像素差**。

不过在前端工程化的今天，Webpack 解析 CSS 的时候用 `postcss-loader` 有个 `postcss-px-to-viewport` 能自动实现 `px` 到 `vw` 的转化。

---

在 [CSS Values and Units Module Level 3](https://www.w3.org/TR/css3-values/) 中和 Viewport 相关的单位有四个，分别为 `vw`、`vh`、`vmin` 和 `vmax`。

- `vw`：是 Viewport's width 的简写，`1vw` 等于 `window.innerWidth` 的 `1%`
- `vh`：和 `vw` 类似，是 Viewport's height 的简写，`1vh` 等于 `window.innerHeihgt` 的 `1%`
- `vmin`：`vmin` 的值是当前 `vw` 和 `vh` 中较小的值
- `vmax`：`vmax` 的值是当前 `vw` 和 `vh` 中较大的值

> `vmin` 和 `vmax` 是根据 Viewport 中长度偏大的那个维度值计算出来的，如果 `window.innerHeight > window.innerWidth` 则 `vmin` 取百分之一的 `window.innerWidth`，`vmax` 取百分之一的 `window.innerHeight` 计算。

## 百分比缩放

## 方案总结

| 布局方案       | 用户体验 | 兼容性            | 依赖 JS | 支持超大屏幕 | 需要修正字体 |
| :------------- | :------- | :---------------- | :------ | :----------- | :----------- |
| rem            | 良       | iOS4.1 Android2.1 | ✓       | ✓            | ✓            |
| rem + 媒体查询 | 中       | iOS4.1 Anrdoid2.1 | x       | ✓            | ✓            |
| vw/vh          | 优       | iOS6.1 Android4.4 | x       | x            | x            |
| rem + vw       | 优       | iOS6.1 Anroid.4.4 | x       | ✓            | ✓            |

## 参考资料

- [📝 移动端布局方案](https://github.com/PolluxLee/blog/issues/86)
- [面试官：你了解过移动端适配吗？](https://juejin.im/post/6844903631993454600)
- [前端响应式布局原理与方案（详细版）](https://juejin.im/post/6844903814332432397)
- [苏宁易购 pc 端与移动端布局的探索与思考](https://juejin.im/post/6844904049217667086)
- [响应式布局的常用解决方案对比](https://juejin.im/post/6844903630655471624)
