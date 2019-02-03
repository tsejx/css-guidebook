---
默认值: auto
继承性: no
版本: CSS1
---

## `height`

`height` 属性用于定义了元素内容区的高度。

```css
height: <length> | <percentage>
```

### 说明

- 对于 `img` 元素来说，若仅指定此属性，其 `height` 值将会根据图片源尺寸进行等比例缩放。
- `height` 属性是盒模型的重要组成部分，对于盒模型规则，请参阅 `box-sizing` 属性。

## `min-height`

`min-height` 属性用于定义元素的最小高度。（CSS2）

### 说明

- 当 `min-height` 属性的值小于 `height` 时，`min-height` 属性将会被忽略。
- 当 `min-height`属性的值大于 `height` 时，`min-height` 属性将会被忽略，同时 `height` 会忽略自己的值定义而使用 `min-height` 的值作为自己的使用值。
- 当 `min-height` 属性的值大于 `max-height` 时，`max-height` 属性将会被忽略。

## `max-height`

`min-height` 属性用于定义元素的最小高度。（CSS2）

### 说明

- `max-height` 属性的值小于 `height` 时，`max-height` 属性将会被忽略，同时 `height` 会忽略自己的值定义而使用 `max-height` 的值作为自己的使用值。
- 当 `max-height` 属性的值大于 `height` 时，`max-height` 属性将会被忽略。
- 当 `max-height` 属性的值小于 `min-height` 时，`max-height` 属性将会被忽略。