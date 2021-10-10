---
nav:
  title: 布局
  order: 2
group:
  title: 基础布局
  order: 5
title: 清除浮动
order: 5
---

# 清除浮动

在各种浏览器中显示效果也有可能不相同，这样让清除浮动更难了，下面总结 8 种清除浮动的方法，测试已通过 IE Chrome Firefox Opera。

清除浮动是每一个 Web 前端设计师必须掌握的机能。CSS 清除浮动大全，共 8 种方法，后面三种方法只做了解就可以了。

浮动会使当前标签产生向上浮的效果，同时会影响到前后标签、父级标签的位置及 width height 属性。而且同样的代码，在各种浏览器中显示效果也有可能不相同，这样让清除浮动更难了。解决浮动引起的问题有多种方法，但有些方法在浏览器兼容性方面还有问题。

## 父元素设置固定高度

<code src="../../../example/layout/float/height/index.tsx" />

- 优点：简单、代码少、容易掌握
- 缺点：只适合高度固定的布局，要给出精确的高度，如果高度和父级 `div` 不一样时，会产生问题

**建议**：不推荐使用，只建议高度固定的布局时使用

## 添加空标签子元素

结尾处加空 `div` 标签 `clear: both`。

<code src="../../../example/layout/float/clear/index.tsx" />

- 优点：简单、代码少、浏览器支持好、不容易出现怪问题
- 缺点：不少初学者不理解原理；如果页面浮动布局多，就要增加很多空 `div`，让人感觉很不好

**建议**：不推荐使用，但此方法是以前主要使用的一种清除浮动方法

## 添加 br 标签作为空标签

原理其实和第二种方法一样，只是这里的空标签使用的是 `<br/>` 标签。

<code src="../../../example/layout/float/clear-br/index.tsx" />

**建议**：不推荐使用，只作了解。

## 父元素设置伪类作为空标签

父级块级元素定义 伪类 `:after` 和 `zoom`。

<code src="../../../example/layout/float/pseudo/index.tsx" />

- 优点：浏览器支持好、不容易出现怪问题（目前：大型网站都有使用，如：腾迅，网易，新浪等等）
- 缺点：代码多、不少初学者不理解原理，要两句代码结合使用才能让主流浏览器都支持。

**建议**：推荐使用，建议定义公共类，以减少 CSS 代码。

## 使用 overflow-hidden 触发 BFC

父级 `div` 定义 `overflow: hidden`。

<code src="../../../example/layout/float/overflow-hidden/index.tsx" />

- 优点：简单、代码少、浏览器支持好
- 缺点：不能和 `position` 配合使用，因为超出的尺寸的会被隐藏。

**建议**：只推荐没有使用 `position` 或对 `overflow: hidden` 理解比较深的开发者使用。

## 使用 overflow-auto  触发 BFC

<code src="../../../example/layout/float/overflow-auto/index.tsx" />

- 优点：简单、代码少、浏览器支持好
- 缺点：内部宽高超过父级 `div` 时，会出现滚动条。

**建议**：不推荐使用，如果你需要出现滚动条或者确保你的代码不会出现滚动条就使用吧。

## 设置父元素浮动触发 BFC

<code src="../../../example/layout/float/parent-float/index.tsx" />

- 优点：没有优点
- 缺点：会产生新的浮动问题。

**建议**：不推荐使用，只作了解。

## 设置父级为表格元素触发 BFC

<code src="../../../example/layout/float/parent-table/index.tsx" />

- 优点：没有优点
- 缺点：会产生新的未知问题。

**建议**：不推荐使用，只作了解。
