---
nav:
  title: 布局
  order: 2
group:
  title: 移动端布局
  order: 20
title: 响应式布局
order: 5
---

# 响应式布局

响应式布局（Responsive Layout）是一种网络页面的设计与开发应当根据 <strong style="color:red">用户行为</strong> 以及 <strong style="color:red">设备环境</strong>（系统平台、屏幕尺寸、屏幕定向等）进行相应的响应和调整的网页布局方案。

## 实现方案

响应式设计的基本原理是 **通过媒体查询检测不同的设备屏幕尺寸** 并做好兼容处理，为了处理移动端，页面头部必须有 `<meta>` 声明 `viewport`。

### 视口配置

代码示例：

```html
<meta
  name="viewport"
  content="initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, width=device-width, user-scalable=no"
/>
```

上述代码示例的指令说明：

- `width=device=width` 表示自适应手机屏幕的尺寸宽度
- `maximum-scale` 表示网页缩放比例的最大值
- `initial-scale` 表示网页缩放的初始化比例
- `user-scalable` 表示用户是否可以进行缩放操作

完整指令说明：

| 指令            | 取值          | 说明                                       |
| :-------------- | :------------ | :----------------------------------------- |
| `width`         | 正整数        | 定义布局视口的宽度，单位为像素             |
| `height`        | 正整数        | 定义布局视口的高度，单位为像素（较少使用） |
| `initial-scale` | `[0, 10]`     | 初始缩放比例（`1` 表示不缩放）             |
| `minimum-scale` | `[0, 10]`     | 网页最小缩放比例                           |
| `maximum-scale` | `[0, 10]`     | 网页最大缩放比例                           |
| `user-scalable` | `yes` 或 `no` | 是否允许用户手动缩放页面（默认为 `yes`）   |

### 媒体查询

以媒体查询实现响应式布局是痛通过 CSS3 `@media` 规则设置不同分辨率下的样式属性，来适配不同尺寸的屏幕设备。

不管是移动端优先还是 PC 优先，都是依据当随着屏幕宽度增大或减小的时候，后面的样式会覆盖前面的样式。因此，移动端优先首先使用的是 `min-width`，PC 端优先使用的 `max-width`。

代码示例：

```css
/* iPhone 6 7 8 */
body {
  background-color: yellow;
}

/* iPhone 5 */
@media screen and (max-width: 320px) {
  body {
    background-color: red;
  }
}

/* iPhoneX */
@media screen and (min-width: 375px) and (-webkit-device-pixel-ratio: 3) {
  body {
    background-color: orange;
  }
}

/* iPhone6 7 8 Plus */
@media screen and (min-width: 414px) {
  body {
    background-color: blue;
  }
}

/* iPad */
@media screen and (min-width: 768px) {
  body {
    background-color: green;
  }
}

/* iPad Pro */
@media screen and (min-width: 1024px) {
  body {
    background-color: gray;
  }
}

/* PC */
@media screen and (min-width: 1100px) {
  body {
    background-color: black;
  }
}
```

代码示例说明：

| 屏幕计算大小                | 判断屏幕机型     | 命中样式  |
| :-------------------------- | :--------------- | :-------- |
| `< 320px`                   | iPhone5          | `red`     |
| `320px < x < 375px`（默认） | iPhone 6/7/8     | ` yellow` |
| `375px < x 414px`           | iPhoneX          | `orange`  |
| `414px < x < 768px`         | iPhone6/7/8 Plus | `blue`    |
| `768px < x < 1024px`        | iPad             | `green`   |
| `1024px < x < 1100px`       | iPad Pro         | `gray`    |
| `< 1100px`                  | PC               | `black`   |

其他示例：[Codesandbox](https://codesandbox.io/s/cbo4g?resolutionWidth=586&resolutionHeight=675&file=/default.css)

### 百分比布局

通过百分比单位 `%` 来实现响应式的效果。比如当浏览器的宽度或者高度发生变化时，通过百分比单位，可以使得浏览器中的组件的宽和高随着浏览器的变化而变化，从而实现响应式的效果。

height、width 属性的百分比依托于父标签的宽高，但是其他盒子属性则不完全依赖父元素：

- 子元素的 `top/left` 和 `bottom/right` 如果设置百分比，则相对于直接非 `static` 定位（默认定位）的父元素的高度/宽度；
- 子元素的 `padding` 如果设置百分比，不论是垂直方向或者是水平方向，都相对于直接父亲元素的 `width`，而与父元素的 `height` 无关；
- 子元素的 `margin` 如果设置成百分比，不论是垂直方向还是水平方向，都相对于直接父元素的 `width`；
- `border-radius` 不一样，如果设置 `border-radius` 为百分比，则是相对于自身的宽度。

可以看到每个属性都使用百分比，会照成布局的复杂度，所以不建议使用百分比来实现响应式。

### REM 布局

当前页面的 `rem` 单位的样式值都是根据 `<html>` 元素的 `font-size` 样式属性值进行动态计算的，所以有两种方法可以达到适配不同屏幕：

1. 利用媒体查询，在不同分辨率下给 `<html>` 元素的 `font-size` 赋值
2. 利用 JavaScript 动态计算赋值

缺点：缺点是打开页面的时候，元素大小会有大小变化的过程。

```css
html {
  font-size: 16px;
  /* 默认16个像素，为了好记一般设置10px，20px */
}

@media (maxwidth: 375px) {
  html {
    font-size: 24px;
  }
}
@media (max-width: 320px) {
  html {
    fontsize: 20px;
  }
}
@media (max-width: 640px) {
  intro {
    margin: 0.3rem auto;
    display: block;
  }
}
```

⚠️ 注意：

- 精确性要求高的地方不要使用 `rem` 布局。

### 网格布局

Grid 布局可以自动判断容器大小，无论大小屏幕自动撑满并均分，请看以下属性

代码示例：

```css
.container {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
```

代码示例说明：

- `repeat`: 用以 N 整分
- `auto-fill`：表示自动填充
- `minmx`: 即书面意思，最小宽度为 300px

[在线示例](https://devtool.tech/fe-logo)

## 总结

## 参考资料

- [前端响应式布局原理与方案（详细版）](https://juejin.im/post/6844903814332432397)
- [前端响应式布局原理与实践](https://segmentfault.com/a/1190000021929510)
