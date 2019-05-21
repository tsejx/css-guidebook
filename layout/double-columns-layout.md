# 双栏布局

* 左边栏固定，右边栏自适应
* 左边栏自适应，右边栏固定
* 不定宽，自适应

下列各种解决方案中的固定元素以实际为准，并非单纯设置 `width` 即可，理应加上 `padding` 和 `border` 方为准确的描述。

## 左固定右适应

### float + margin

**原理**：

* 定宽元素浮动，脱离文档流
* 自适应元素为了不被遮挡，设置 `margin` 大于等于定宽元素宽度

🌰 **标准示例**

```css
.left {
    float: left;
    /* 固定宽度 */
    width: 100px;
}
.right {
    margin-left: 100px;
}
```

> 均需设置 height

**优点**：简单，易理解，兼容性好

**缺点**：定宽元素 `width` 需和自适应元素 `margin` 对应且固定

### float + margin(fix)

🌰 **标准示例**

```html
<div class="left"></div>
<div class="right">
    <div class="right-content"></div>
</div>
```

```css
.left {
    float: left;
    width: 100px;
    height: 500px;
}
.right {
    float: right;
    width: 100%;
    /* 绝对值大于等于定宽元素 width 才能上移一行 */
    margin-left: -100px;
}
.right-content {
    /* 大于等于定宽元素 width 才不会遮挡定宽元素 */
    margin-left: 100px;
}
```

> 均需设置 height

### float + overflow

**原理**：

定宽元素浮动，自适应元素触发 [BFC](bfc.md) 达到自适应。

🌰 **标准示例**

```css
.left {
    float: left;
    width: 100px;
}
.right {
    overflow: hidden;
}
```

> 均需设置 height

### table

**原理**：CSS Table 以表格的形式显示。

🌰 **标准示例**

```html
<div class="parent">
    <div class="left"></div>
    <div class="right"></div>
</div>
```

```css
.parent {
    display: table;
    width: 100%;
}
.left {
    width: 100px;
}
/* 利用单元格自动分配宽度 */
.left, .right {
    display: table-cell;
}
```

**优点**：

* 简单，易理解，兼容性好
* 适用于宽度高度未知情况

**缺点**：

* `margin` 失效
* 设置间隔比较麻烦
* 设置 `table-cell` 的元素，宽度和高度的值设置百分比失效，需要给它的父元素设置 `display: table` 才生效
* `table-cell` 不感知 `margin`，在父元素上设置 `table-row` 等属性，也会使其不感知 `height`
设置 `float` 或 `position` 会对默认布局造成破坏，可以考虑为之增加一个父 `div` 定义 `float` 等属性
* 内容溢出时会自动撑开父元素

### position

**原理**：利用绝对定位算好宽高固定好两个盒子的位置。

🌰 **标准示例**

```html
<div class="parent">
    <div class="left"></div>
    <div class="right"></div>
</div>
```

```css
.parent {
    position: relative;
}
.left {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
}
.right {
    position: absolute;
    top: 0;
    /* 大于等于定宽元素 width */
    left: 100px;
    right: 0;
}
```

> 均需设置 height

**优点**：

* 易理解，兼容性好

**缺点**：

* 脱离文档流
* 固定宽度元素的 `width` 需要与自适应元素的反方向值对应，如 `left`

### flex

🌰 **标准示例**

```html
<div class="parent">
    <div class="left"></div>
    <div class="right"></div>
</div>
```

```css
.parent {
    display: flex;
}
.left {
    /* 固定宽度 */
    width: 100px;
}
.right {
    /* 均分了父元素剩余空间 */
    flex: 1;
}
```

**缺点**：PC 端兼容性不好

### grid

🌰 **标准示例**

```html
<div class="parent">
    <div class="left"></div>
    <div class="right"></div>
</div>
```

```css
.parent {
    display: grid;
    grid-template-columns: 100px auto;
    width: 100%;
    height: 500px;
}
```

**优点**：

* 灵活划分网格区域，适用于页面三位布局

**缺点**：

* 兼容性不好

## 左适应右固定

### float + margin

* 两元素浮动
* 自适应元素为了不被遮挡，设置 `margin` 大于等于定宽元素宽度

🌰 **标准示例**

```css
.parent {
  padding-left: 100px;
}
.left {
  float: left;
  /* 绝对值为固定宽度元素的 width */
  margin-left: -100px;
  width: 100%;
}
.right {
  /* 固定宽度 */
  width: 100px;
  float: right;
}
```

### float + overflow

🌰 **标准示例**

```css
.left {
  /* 触发 BFC */
  overflow: hidden;
}
.right {
  float: right;
  width: 100px;
  margin-left: 10px;
}
```

### table

🌰 **标准示例**

```css
.parent {
  display: table;
  width: 100%;
}
.left,
.right {
  display: table-cell;
}
.right {
  width: 100px;
}
```

### flex

🌰 **标准示例**

```css
.parent {
  display: flex;
}
.left {
  flex: 1
}
.right {
  width: 100px;
}
```

### grid

🌰 **标准示例**

```css
.parent {
    display: grid;
    /* 100px 为固定宽度元素 */
    grid-template-columns: auto 100px;
}
```
