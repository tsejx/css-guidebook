---
默认值: none
继承性: no
版本: CSS1
---

## `margin`

`margin` 属性是一个简写属性。为元素设置所有四个方向（上右下左）的外边距。

```css
margin: [<length> | <percentage>]{1, 4}
```

### 分拆纵向独立属性

```css
vertical-margin: <length> | <percentage> | auto
```

```
vertical-margin = 'margin-top', 'margin-bottom'
```

### 分拆横向独立属性

```css
horizontal-margin: <length> | <percentage> | auto
```

```
horizontal-margin: 'margin-right', 'margin-left'
```

### 说明

- `margin` 属性接受 1~4 个参数值
  - 如果提供四个参数值，将按上、右、下、左的顺序作用于四边
  - 提供三个，第一个用于上，第二个用于左、右，第三个用于下
  - 提供两个，第一个用于上、下，第二个用于左、右
  - 只提供一个，同时用于四边
- 非替代行内元素可以使用该属性定义 `horizontal-margin`；若要定义 `vertical-margin`，必须改变元素为块级或行内块级。
- 外延边距始终透明，即不可见也无法设置背景等任何样式。
- 某些相邻的 `margin` 会发生合并，我们称之为 `margin` 折叠。

### `margin` 折叠

`margin`折叠常规认知：

- `margin` 折叠只发生在**块级元素**上
- **浮动元素**的 `margin` 不与任何 `margin` 发生折叠
- 设置了属性 `overflow` 且值为非 `visible` 的块级元素，将不与它的子元素发生 `margin` 折叠
- **绝对定位**元素的 `margin` 不与任何 `margin` 发生折叠
- 根元素的 `margin` 不与其它任何 `margin` 发生折叠

**分拆纵向独立属性。为元素设置上、下外边距。**

- 替代行内元素可以应用该属性；非替代行内元素要使用该属性必须改变元素为块级或行内块级。
- 水平书写模式下，`margin` 合并只发生在 `vertical-margin` 上。

**分拆横向独立属性。为元素设置上、下外边距。**

- 所有的行内元素均可以应用该属性。
- 默认情况下，`horizontal-margin` 不会发生 `margin` 折叠，除非将书写模式改变为纵向。