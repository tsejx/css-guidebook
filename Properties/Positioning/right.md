---
默认值: auto
继承性: 无
版本: CSS2
---

## right

`right` 属性定义了元素右外边距与其包含块右边界之间的偏移。[🔍详细文档](http://css.doyoe.com/properties/positioning/right.htm)

### 计算值

- `position: static`：计算值是 `auto`
- `position: relative`
  - 如果 `right` 和 `left` 都是 `auto`，则它们的计算值是 0
  - 如果 `right` 和 `left` 其中一个是 `auto`，则 `auto` 相当于另一个的负值，即 `left = -right`
  - 如果 `right` 和 `left` 的值都不为 `auto`，则忽略 `right`
- 否则在其他情况下
  - 当指定值为 `<length>` 时，计算值为指定值
  - 当指定值为 `<percentage>` 时，计算值为计算后的绝对值
- 除去以上这些情况，都为 `auto` 

### 说明

该属性用于指定盒子参照相对物**右边界向左偏移**。

相对定位元素的相对物是自身，**绝对定位**和**居中定位**元素是从包含块的内边距边界开始计算偏移值。

