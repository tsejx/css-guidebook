---
title: 结构
order: 4
group:
  title: 概念
  order: 1
nav:
  title: 基础
  order: 1
---

# 结构

块级元素（block-level element）
内联元素（inline element）

块级盒子（block-level box）负责结构
内联盒子（inline box）负责内容

标记盒子（marker box）专门用来放圆点、数字这些项目符号
IE 浏览器下伪元素不支持 `list-item` 或许就是无法创建这个标记盒子导致

外在盒子，负责元素是可以一行显示，还是只能换行显示
内在盒子，负责宽高、内容呈现（称为容器盒子）

`display: block` 由内在的块级盒子和内在的块级容器盒子组成
`display: inline-block` 则由外在的内联盒子和内在的块级容器盒子组成
`display: inline` 则内外均是内联盒子。

因此，`display` 属性值为 `inline-block` 时元素既能图文一行显示，又能直接设置 `width/height`。因为有两个盒子，外面的盒子是 `inline` 级别，里面的盒子是 `block` 级别。

