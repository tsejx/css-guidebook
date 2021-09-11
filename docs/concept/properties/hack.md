---
title: HACK
order: 20
group:
  title: 属性
  order: 2
nav:
  title: 基础
  order: 1
---

# Hack

Hack 看起来不合法但生效的写法

主要用于区分不同的浏览器，只在特定的浏览器生效
缺点

- 难理解
- 难维护
- 易失效

替代方案

- 特性检测
- 针对性加 `class`

使用注意

标准属性写到前面，Hack 写到后面

作用

- 浏览器兼容性

典型案例

checkbox
tabs

## 默认标签边距

不同浏览器的标签默认的 `margin` 和 `padding` 不一样。

解决办法是添加全局样式统一

```css
* {
  margin: 0;
  padding: 0;
}
```

## 双边距问题

IE6 双边距 BUG：块属性标签 `float` 后，又有横行的 `margin` 情况下，在 IE6 显示 `margin` 比设置的大。

```css
display: inline;
```

将其转化为行内属性。渐进识别的方式，从总体中逐渐排除局部。

首先，巧妙的使用 **9** 这一标记，将 IE 浏览器从所有情况中分离出来。接着，再次使用 **+** 将 IE8 和 IE7、IE6 分离开来，这样 IE8 已经独立识别。 渐进识别的方式，从总体中逐渐排除局部。首先，巧妙的使用 **9** 这一标记，将 IE 浏览器从所有情况中分离出来。接着，再次使用 **+** 将 IE8 和 IE7、IE6 分离开来，这样 IE8 已经独立识别。

```css
 {
  background-color: #f1ee18; /*所有识别*/
  .background-color: #00deff\9; /*IE6、7、8识别*/
  +background-color: #a200ff; /*IE6、7识别*/
  _background-color: #1e0bd1; /*IE6识别*/
}
```

## 小高度标签

设置较小高度标签（一般小于 10px），在 IE6，IE7 中高度超出自己设置高度。

解决方法：给超出高度的标签设置 `overflow: hidden;` 或者设置行高 `line-height` 小于你设置的高度。

## 获取自定义属性

IE 下，可以使用获取常规属性的方法来获取自定义属性,也可以使用 `getAttribute()` 获取自定义属性；Firefox 下，只能使用 `getAttribute()` 获取自定义属性。

解决方法:统一通过 `getAttribute()` 获取自定义属性。

## 12 像素文本限制

Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示，可通过加入 CSS 属性 `-webkit-text-size-adjust: none;` 解决。

## 超链接样式

超链接访问过后 hover 样式就不出现了，因为被点击访问过的超链接样式不再具有 `hover` 和 `active` 了。

解决方法是改变 CSS 属性的排列顺序：L-V-H-A :

```css
a:link {
}
a:visited {
}
a:hover {
}
a:active {
}
```

## 事件对象

IE 下，`event` 对象有 `x`、`y` 属性，但是没有 `pageX`、`pageY` 属性

Firefox 下，`event` 对象有 `pageX`、`pageY` 属性,但是没有 `x`、`y` 属性

**解决方法**：（条件注释）缺点是在 IE 浏览器下可能会增加额外的 HTTP 请求数。

## PNG 图片兼容性

PNG24 位的图片在 IE6 浏览器上出现背景，解决方案是做成 PNG8

## 为什么要初始化 CSS 样式

因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对 CSS 初始化往往会出现浏览器之间的页面显示差异。当然，初始化样式会对 SEO 有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。
