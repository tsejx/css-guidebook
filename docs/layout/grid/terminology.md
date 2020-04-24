---
title: 网格布局术语
order: 4
group:
  title: 网格布局
  order: 8
nav:
  title: 布局
  order: 2
---

# 网格布局术语

## 网格容器 Grid Container

应用 `display: grid` 的元素。这是所有 网格项（grid item）的直接父级元素。

在这个例子中，`container` 就是 网格容器（Grid Container）。

```HTML
<div class="container">
  <div class="item item-1"></div>
  <div class="item item-2"></div>
  <div class="item item-3"></div>
</div>
```

## 网格项 Grid Item

网格容器（Grid Container）的子元素（例如直接子元素）。

以下例子 `item` 元素就是网格项（Grid Item），但是 `sub-item` 不是。

```HTML
<div class="container">
  <div class="item"></div>
  <div class="item">
    <p class="sub-item"></p>
  </div>
  <div class="item"></div>
</div>
```

## 网格线 Grid Line

构成网格结构的分界线。它们既可以是垂直的列网格线（column grid lines），也可以是水平的行网格线（row grid lines），并位于行或列的任一侧。

## 网格轨道 Grid Tracks

两条相邻网格线之间的空间。你可以把它们想象成网格的列或行。

通过 `grid-template-columns` 和 `grid-template-row` 或简写属性 `grid` 和 `grid-template` 在显式网格中定义。

网格轨道也可以在隐式网格中创建，通过将一个网格项目定位到显式网格中创建的轨道外面。

## 网格单元格 Grid Cell

两个相邻的行和两个相邻的列网格线之间的空间。这是 Grid（网格）系统的一个「单元」。

## 网格区域 Grid Areas

网格区域是网格中由一个或者多个网格单元格组成的一个矩形区域。当你使用基于网格线位置放置一个项目或者使用命名的网格区域定义区域时，网格区域被创建。

## 排水沟 Gutter

网格间距是网格轨道之间的间距，可以通过 `grid-column-gap`，`grid-row-gap` 或者 `grid-row-gap` 在 Grid 布局中创建。
