---
title: 边框
order: 3
group:
  title: 属性
  order: 2
nav:
  title: 基础
  order: 1
---

# 边框

## 属性说明

### border

- border
- border-color
- border-style

### border-radius

### border-image

[border-image](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image) 属性允许在元素的边框上绘制图像。这使得绘制复杂的外观组件更加简单，也不用在某些情况下使用九宫格了。

使用 border-image 时，其将会替换掉 border-style 属性所设置的边框样式。

```css
border-image: image-source image-height image-width image-repeat;
```

### border-image-slice

[border-image-slice](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image-slice) 用于定义引用边框图片后的元素切割区域的边界。

**语法**

```css
bordre-image-slice [<number> | <percentage>]{1,4} && fill?
```

<br />

```jsx | inline
import React from 'react';
import img from '../../assets/border-image/border-image-slice-sample.gif';

export default () => <img alt="MobileDemension" src={img} width={81} height={81} />;
```

关键字 fill 的作用是：将 border-image-source 九宫格中间那一块切片作为 DOM 节点的背景。

### border-image-source

[border-image-source](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image-source) 用于定义边框图片（border-image）的资源引用。

### border-image-repeat

[border-image-repeat](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image-repeat) 用于定义图片如何填充边框。

```css
border-image-repeat: stretch | repeat | round | space;
```

| 关键词  | 说明                                                                             |
| :------ | :------------------------------------------------------------------------------- |
| stretch | 拉伸图片以填充边框，强调边框拉伸。                                               |
| repeat  | 平铺图片以填充边框，强调边框重复填充（建议使用此方式保持高清效果）。             |
| round   | 平铺图像。当不能整数次平铺时，根据情况放大或缩小图像。                           |
| space   | 平铺图像。当不能整数次平铺时，会用空白间隙填充在图像周围（不会放大或缩小图像）。 |

只要记住，该属性主要是负责边框的缩放形式即可。

### border-image-width

[border-image-width](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image-width) 用于定义边界图像 (border image) 的宽度。

### border-image-outset

[border-image-outset](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image-outset) 用于定义边框图片可超出边框的大小。
