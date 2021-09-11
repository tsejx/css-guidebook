---
nav:
  title: 基础
  order: 1
group:
  title: 属性
  order: 2
title: 顺序
order: 21
---

# 顺序

推荐书写顺序：

同一规则下的属性在书写时，应按功能进行分组。并按下面的顺序书写，以提高代码的可读性。

```
布局方式、位置      尺寸         文本相关       视觉效果
Formatting Model > Box Model > Typographic > Visual
```

- **Formatting Model**：position / top / right / bottom / float / display / overflow
- **Box Model**：border / margin / padding / width / height
- **Typographic**：font / line-height / text-align / word-wrap
- **Visual**：background / coloor / transition / list-style
