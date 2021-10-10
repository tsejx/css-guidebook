---
nav:
  title: 基础
  order: 1
group:
  title: 规则
  order: 3
title: '@font-face 自定义字体'
order: 1
---

# @font-face 自定义字体

`@font-face` 规则用于设置嵌入 HTML 文档的字体。

## 语法

```css
@font-face {
    font-family: <identifier>;
    src: <fontsrc> [, <fontsrc> ]*;
    <font>;
}

/**
* <fontsrc> = <url> [format(<string>)]
*/
```

属性取值：

- `<identifier>`：字体名称
- `<url>`：此值指的是你自定义的字体的存放路径，可以是相对路径也可以是绝对路径。可以是本地字体文件（IE9+支持），也可以是线上地址（可能有跨域限制）。
- `<string>`：此值指的是你自定义的字体的格式，主要用来帮助浏览器识别，其值主要有以下几种类型：`truetype`、`opentype`、`embedded-opentype`、`svg` 等
- `<font>`：定义字体相关样式

### 字体分类

为了兼容当前的主流浏览器，需同时使用 TrueType（`.ttf`）、Web Open Font Format（`.woff`）、Embedded Open Type（`.eot`）、SVG（`.svg`）四种字体格式。

### 基本用法

```css
@font-face {
  font-family: Lato;
  src: url('font-lato/lato-regular-webfont.woff2') .format('woff2'), url('font-lato/lato-regular-webfont.woff')
      .format('woff'), url('font-lato/lato-regular-webfont.ttf') .format('opentype');
  font-style: normal;
  font-weight: normal;
  unicode-range: U+0025-00FF;
}

.paragraph {
  font-family: Lato, serif;
}
```

这样就可以使我们的网页用上自定义字体了。 除了 font-family 和 src 属性之外，还拥有 font-style 以及 font-weight 属性。 src 可以指定多种字体，会按顺序依次适用，比如上面的示例中会先加载 woff2 字体，如果失败再加载 woff 字体，否则加载 opentype 字体。 src 所支持的字体可以有以下类型：

| String            | Font Format                      | Common extensions |
| :---------------- | :------------------------------- | :---------------- |
| woff              | WOFF 1.0（Web Open Font Format） | `.woff`           |
| woff2             | WOFF 2.0（Web Open Font Format） | `.woff2`          |
| truetype          | TrueType                         | `.ttf`            |
| opentype          | OpenType                         | `.ttf`、`.otf`    |
| embedded-opentype | Embedded OpenType                | `.eot`            |
| svg               | SVG Font                         | `.svg`、`.svgz`   |

`src` 中加载的字体地址受跨域的约束，如果想跨域加载字体，需要设置 CORS。

这就是 `font-face` 的最基础的用法。 接下来我们会进一步分析 `font-face` 的用法，并尽可能的找出优化策略。

## 字体下载

上面讲了字体的基本知识，那你有没有想过，字体是在什么时候下载的呢？当我们仅仅在 CSS 中定义如下样式的时候, 页面加载，字体会自动下载吗？

```css
@font-face {
  font-family: Lato;
  src: url('font-lato/lato-regular-webfont.woff2') format('woff2'), url('font-lato/lato-regular-webfont.woff')
      format('woff'), url(font-lato/lato-regular-webfont.ttf) format('opentype');
}
```

很遗憾，字体并不会下载。 通常情况下，只有当我们的页面元素用到了 font-face 中定义的字体的情况下，才会下载对应的字体。

> 注意: 这里我们说了是通常情况，这是因为，IE8 在只要是定义了 font-face，即使页面元素没有使用对应的字体，也会下载。

在其它浏览器中也不尽相同，

比如在 Firefox 和 IE 9+ 中，遇到如下情况也会下载字体：

HTML：

```html
<div id="test"></div>
```

CSS：

```css
#test {
  font-family: Lato;
}
```

所以总结一下，不同浏览器下载字体的策略：

- IE8 只要定义了 font-face，就会去下载字体，不论实际有没有应用该字体。
- Firefox, IE 9+ 只有定义了 font-face 并且页面有元素应用了该字体，就会去下载，不论该元素是否有文本内容。
- Chrome, Safari 只有定义了 font-face 并且页面有元素应用了该字体，并且该元素有文本内容，才会去下载字体。

那你可能会问了，如果我们的 DOM 元素是通过动态插入的呢？比如：

```js
var el = document.createElement('div');
el.style.fontFamily = 'open_sansregular';
document.body.appendChild(el);
el.innerHTML = 'Content.';
```

答案是一样的，它的下载策略如下：

```js
var el = document.createElement('div');
el.style.fontFamily = 'open_sansregular';
/* 到这里，IE8就会开始下载字体 */

document.body.appendChild(el);
/* 只有到这里，Firefox, IE 9+ 才会开始下载字体 */

el.innerHTML = 'Content.';
/* 只有到这里，Chrome, Safari 才会开始下载字体 */
```

### 预加载

在页面加入下面这个代码以便更快的加载字体：

```html
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin />
```

通常和最基本的字体用法配合使用。

## 参考资料

- [🛠 中文字体压缩器](https://www.font-spider.org/)
- [📝 真正了解 CSS3 背景下的 @font-face 规则](https://www.zhangxinxu.com/wordpress/2017/03/css3-font-face-src-local/)
- [📝 CSS @font-face 性能优化](https://juejin.im/post/6844903790580072462)
- [📝 2018 的@font-face](https://juejin.im/entry/5b8611f0e51d4538a108c11a)
