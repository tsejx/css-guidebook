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

- 在不同的设备上正常使用
- 一般主要处理屏幕大小的问题
- 主要方法：
  - 隐藏+折行+自适应空间
  - `rem/viewport/media query`

## viewport

- 适配的第一部永远是加上 `viewport`
- `viewport`、`可视区大小 = 屏幕大小`，有些设备默认屏幕宽度 980px
- `<meta name='viewport' content="width=device-width,initial-scale=1.0">`
- 如果固定使用 `width`，可以使不同页面等比放大
- 也可以根据 `window.innerWidth` 动态计算页面的宽度

## 实现方案

### 媒体查询

屏幕大小分割点：

- `600px`、`900px`、`1200px`、`1800px`
- 小屏幕 `480px`、中屏幕 `800px`、大屏幕 `1400px`、巨屏 `1400px+`

Bootstrap 断点：

- 超小屏幕（手机）`<768px`
- 小屏幕（平板）`>=768px`
- 中等屏幕（桌面显示器）`>=992px`
- 大屏幕（大桌面显示器）`>=1200px`

Bootstrap Supported devices：

| Label             | Layout width              | Column width                   | Gutter width |
| :---------------- | :------------------------ | :----------------------------- | :----------- |
| Large display     | `1200px+`                 | 70px                           | 30px         |
| Default           | `980px <= width < 1200px` | 60px                           | 20px         |
| Portrait tablets  | `768px <= width < 980px`  | 42px                           | 20px         |
| Phones or tablets | `480px <= width < 767px`  | Fluid columns, no fixed widths |              |
| Phones            | `480px-`                  | Fluid columns, no fixed widths |              |

```css
/* Large desktop */
@media screen and (min-width: 1200px) {
  /* ...; */
}

/* Portrait tablet to landscape and desktop */
@media screen and (min-width: 768px) and (max-width: 979px) {
  /* ...; */
}

/* Landscape phone to portrait tablet */
@media screen and (max-width: 767px) {
  /* ...; */
}

/* Landscape phones and down */
@media screen and (max-width: 480px) {
  /* ...; */
}
```

移动优先 or PC 优先

不管是移动优先还是 PC 优先，都是依据当随着屏幕宽度增大或减小的时候，后面的样式会覆盖前面的样式。因此，移动端优先首先使用的是 min-width，PC 端优先使用的 max-width。

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
    background-color: #0ff000;
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
    background-color: #ff00ff;
  }
}

/* PC */
@media screen and (min-width: 1100px) {
  body {
    background-color: black;
  }
}
```

PC 优先：

```css
/* PC width > 1024px */
body {
  background-color: yellow;
}
/* iPad Pro */
@media screen and (max-width: 1024px) {
  body {
    background-color: #ff00ff;
  }
}
/* iPad */
@media screen and (max-width: 768px) {
  body {
    background-color: green;
  }
}
/* iPhone6 7 8 plus */
@media screen and (max-width: 414px) {
  body {
    background-color: blue;
  }
}
/* iPhoneX */
@media screen and (max-width: 375px) and (-webkit-device-pixel-ratio: 3) {
  body {
    background-color: #0ff000;
  }
}
/* iPhone6 7 8 */
@media screen and (max-width: 375px) and (-webkit-device-pixel-ratio: 2) {
  body {
    background-color: #0ff000;
  }
}
/* iPhone5 */
@media screen and (max-width: 320px) {
  body {
    background-color: #0ff000;
  }
}
```

## 百分比布局

## REM 布局

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

精确性要求高的地方不要使用 `rem` 布局。

## 参考资料

- [前端响应式布局原理与方案（详细版）](https://juejin.im/post/6844903814332432397)
- [前端响应式布局原理与实践](https://segmentfault.com/a/1190000021929510)
