---
nav:
  title: 布局
  order: 2
group:
  title: 多栏布局
  order: 7
title: 双栏布局
order: 1
---

# 双栏布局

- 左边栏固定，右边栏自适应
- 左边栏自适应，右边栏固定
- 不定宽，自适应

下列各种解决方案中的固定元素以实际为准，并非单纯设置 `width` 即可，理应加上 `padding` 和 `border` 方为准确的描述。

## 左固定右适应

### float + margin

**原理**：

- 定宽元素浮动，脱离文档流
- 自适应元素为了不被遮挡，设置 `margin` 大于等于定宽元素宽度

<code src="../../../example/layout/double-columns/left-fixed-right-adaptive/float-margin/index.tsx" />

**优点**：简单，易理解，兼容性好

**缺点**：定宽元素 `width` 需和自适应元素 `margin` 对应且固定

### float + margin(fix)

<code src="../../../example/layout/double-columns/left-fixed-right-adaptive/float-margin-fix/index.tsx" />

⚠️ **注意事项：**

- 右边栏需要设定浮动 `float: right`
- 右边栏需要设定宽度 `width: 100%` 和左外边距 `margin-left` 绝对值需要大于等于左边栏 `width` 才能上移一行
- 右边栏子元素内容区需要设定左外边距 `margin-left` 大于等于钉款元素 `width` 才不会遮挡左边栏

### float + overflow

**原理**：

定宽元素浮动，自适应元素触发 [BFC](bfc.md) 达到自适应。

<code src="../../../example/layout/double-columns/left-fixed-right-adaptive/float-overflow/index.tsx" />

### table

**原理**：CSS Table 以表格的形式显示。

<code src="../../../example/layout/double-columns/left-fixed-right-adaptive/table/index.tsx" />

**优点**：

- 简单，易理解，兼容性好
- 适用于宽度高度未知情况

**缺点**：

- `margin` 失效
- 设置间隔比较麻烦
- 设置 `table-cell` 的元素，宽度和高度的值设置百分比失效，需要给它的父元素设置 `display: table` 才生效
- `table-cell` 不感知 `margin`，在父元素上设置 `table-row` 等属性，也会使其不感知 `height`
  设置 `float` 或 `position` 会对默认布局造成破坏，可以考虑为之增加一个父 `div` 定义 `float` 等属性
- 内容溢出时会自动撑开父元素

### position

**原理**：利用绝对定位算好宽高固定好两个盒子的位置。

<code src="../../../example/layout/double-columns/left-fixed-right-adaptive/position/index.tsx" />

**优点**：

- 易理解，兼容性好

**缺点**：

- 脱离文档流
- 固定宽度元素的 `width` 需要与自适应元素的反方向值对应，如 `left`

### flex

<code src="../../../example/layout/double-columns/left-fixed-right-adaptive/flex/index.tsx" />

**缺点**：PC 端兼容性不好

### grid

<code src="../../../example/layout/double-columns/left-fixed-right-adaptive/grid/index.tsx" />

**优点**：

- 灵活划分网格区域，适用于页面三位布局

**缺点**：

- 兼容性不好

## 左适应右固定

### float + margin

- 两元素浮动
- 自适应元素为了不被遮挡，设置 `margin` 大于等于定宽元素宽度

<code src="../../../example/layout/double-columns/left-adaptive-right-fixed/float-margin/index.tsx" />

### table

<code src="../../../example/layout/double-columns/left-adaptive-right-fixed/table/index.tsx" />

### flex

<code src="../../../example/layout/double-columns/left-adaptive-right-fixed/flex/index.tsx" />

### grid

<code src="../../../example/layout/double-columns/left-adaptive-right-fixed/grid/index.tsx" />
