# `@font-face`

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

## 取值

- `<identifier>`：字体名称
- `<url>`：此值指的是你自定义的字体的存放路径，可以是相对路径也可以是绝对路径。可以是本地字体文件（IE9+支持），也可以是线上地址（可能有跨域限制）。
- `<string>`：此值指的是你自定义的字体的格式，主要用来帮助浏览器识别，其值主要有以下几种类型：`truetype`、`opentype`、`embedded-opentype`、`svg` 等
- `<font>`：定义字体相关样式

## 字体分类

为了兼容当前的主流浏览器，需同时使用 TrueType（`.ttf`）、Web Open Font Format（`.woff`）、Embedded Open Type（`.eot`）、SVG（`.svg`）四种字体格式。

## 示例

```css
@font-face {
  font-family: 'example';
  src: url(example.tiff);
  font-style: normal;
  font-weight: normal;
  unicode-range: U+0025-00FF;
}
```

---

**参考资料：**

- [2018 的@font-face](https://juejin.im/entry/5b8611f0e51d4538a108c11a)
- [真正了解 CSS3 背景下的@font-face 规则](https://www.zhangxinxu.com/wordpress/2017/03/css3-font-face-src-local/)
