---
默认值: visibile
继承性: no
版本: CSS2/3
---

## `overflow`

`overflow` 属性用于定义了元素处理溢出内容的方式。

```css
overflow: visible | hidden | scroll | auto | clip
```

* 默认值：看每个独立属性
* 适用于：块容器、伸缩盒容器、Grid 容器

### 分拆独立语法

```
overflow-* = 'overflow-x' , 'overflow-y'
```

`overflow-x` 属性用于指定元素水平方向上的内容溢出时的处理方式，`overflow-y` 属性用于指定元素垂直方向上的内容溢出时的处理方式。

分拆属性取值与 `overflow` 属性一样。

### 取值

* `visible`：对溢出内容不做处理，内容可能会超出容器。
* `hidden`：隐藏溢出容器的内容且不出现滚动条。
* `scroll`：隐藏溢出容器的内容，溢出的内容可以通过滚动呈现。
* `auto`：当内容没有溢出容器时不出现滚动条，当内容溢出容器时出现滚动条，按需出现滚动条。`textarea` 元素的 `overflow` 默认值就是 `auto`。
* `clip`：（CSS3）与 `hidden` 一样，`clip` 也被用来隐藏溢出容器的内容且不出现滚动条。不同的地方在于，`clip` 是一个完全禁止滚动的容器，而 `hidden` 仍然可以通过编程机制让内容可以滚动。

### 说明

- 当块级元素定义了 `overflow` 属性（包括 `overflow-x` 与 `overflow-y`）值为非 `visibile` 时，将会为它的内容创建一个新的块格式化上下文（BFC）。
- 对于 `table` 来说，假如 `table-layout` 属性设置为 `fixed`，则 `td` 对象支持带有默认值为 `hidden` 的 `overflow` 属性。
  - 如果设为 `hidden`，`scroll` 或者 `auto`，那么超出 `td` 尺寸的内容将被剪切。
  - 如果设为 `visible`，将导致额外的文本溢出到右边或左边（视 `direction` 属性设置而定）的单元格。
- 当 `overflow-x`、`overflow-y` 中任意一个属性值的定义为非 `visible` 时，另一个属性会自动将默认值 `visible` 计算为 `auto`。