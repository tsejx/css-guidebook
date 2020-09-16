---
nav:
  title: 基础
  order: 1
group:
  title: 规则
  order: 3
title: '@import 样式导入'
order: 2
---

# @import 样式导入

`@import` 规则用于指定导入的外部样式表及目标媒体。

该规则必须在样式表头部最先声明。并且其后的分号是必需的，如果省略了此分号，外部样式表将无法正确导入，并会生成错误信息。

IE 使用 `@import` 无法引入超过 35 条的样式表。

## 语法

```css
@import 'style.css' @import url('style.css');
```

`@import` 规则一定要先于除了 `@charset` 的其他任何 CSS 规则。
