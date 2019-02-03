---
默认值: none
继承性: no
版本: CSS1
---

## `padding`

`padding` 属性是一个简写属性。为元素设置所有四个方向（上右下左）的内边距。

```css
padding: [<length> | <percentage>]{1, 4}
```

### 分拆独立属性

```css
padding-*: <length> | <percentage>
```

```
padding-* = 'padding-top' , 'padding-right', 'padding-bottom', 'padding-left'
```

### 说明

- `padding` 属性接受 1~4 个参数值。
  - 如果提供四个参数值，将按上、右、下、左的顺序作用于四边
  - 提供三个，第一个用于上，第二个用于左、右，第三个用于下
  - 提供两个，第一个用于上、下，第二个用于左、右
  - 只提供一个，同时用于四边
- 需要注意的是，当我们为行内元素定义纵向内补白（`padding-top` / `padding-bottom`）时，虽然不需要将之转化为行内块或者块级，但是给行内元素设置纵向内补白并不会影响布局。内补白会在当前元素的行框基础上向顶部和顶部外延，但是这些外延不会拓展新的布局大小（你甚至可以把它想象成类似 `outline`）。