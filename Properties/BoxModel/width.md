---
默认值: auto
继承性: no
版本: CSS1
---

## `width`

`width` 属性用于定义元素的宽度。

```css
width: <length> | <percentage> | auto
```

### 说明

- 对于 `<img>` 元素来说，若仅指定此属性，其 `height` 值将会根据图片源尺寸进行等比例缩放。
- `width` 属性是盒模型的重要组成部分，对于盒模型规则，请参阅 `box-sizing` 属性。

## `min-width`

`min-width` 属性用于定义元素的最小宽度。（CSS2）

### 说明

- 当 `min-width` 属性的值小于 `width` 时，`min-width` 属性将会被忽略。
- 当 `min-width`属性的值大于 `width` 时，`min-width` 属性将会被忽略，同时 `width` 会忽略自己的值定义而使用 `min-width` 的值作为自己的使用值。
- 当 `min-width` 属性的值大于 `max-width` 时，`max-width` 属性将会被忽略。

## `max-width`

`min-width` 属性用于定义元素的最小宽度。（CSS2）

### 说明

- `max-width` 属性的值小于 `width` 时，`max-width` 属性将会被忽略，同时 `width` 会忽略自己的值定义而使用 `max-width` 的值作为自己的使用值。
- 当 `max-width` 属性的值大于 `width` 时，`max-width` 属性将会被忽略。
- 当 `max-width` 属性的值小于 `min-width` 时，`max-width` 属性将会被忽略。



