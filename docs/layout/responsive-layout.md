---
title: 响应式设计和布局
order: 20
nav:
  title: 布局
  order: 2
---

# 响应式设计和布局

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

## 媒体查询

```css
@media (max-width: 640px) {
  .left {
    display: none;
  }
}
```

## rem

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
