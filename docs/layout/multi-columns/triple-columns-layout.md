---
nav:
  title: 布局
  order: 2
group:
  title: 多栏布局
  order: 7
title: 三栏布局
order: 2
---

# 三栏布局

三栏布局，这里实现的是两侧栏固定宽度，中间栏自适应。

## 实现方式

### 浮动布局

基于纯 `float` 实现的三栏布局需要将中间的内容放在 HTML 结构的最后，否则右侧会沉在中间内容的下侧.

- HTML 结构中，中间栏元素置于同级末尾
- 两侧栏设置浮动布局 `float: left` 和 `float: right`
- 两侧栏设置固定宽度 `width`

⚠️ **注意**：

- 因为浮动脱离文档流，所以中间栏一定要放到最后面
- 如果有文字出现，布局就会错乱，导致扩展性不好

<code src="../../../example/layout/triple-columns/float/index.tsx" />

- 两边固定宽度，中间宽度自适应。
- 利用中间元素的 margin 值控制两边的间距
- 宽度小于左右部分宽度之和时，右侧部分会被挤下去

### 绝对定位

- 外部容器设置相对定位 `position: relative`
- 三栏设置绝对定位 `position: absolute`
- 两侧栏设置固定宽度 `width`
- 两侧分别设置至两侧边距 `left: 0` 和 `right: 0`
- 中间栏左右边距设置为上面的固定宽度 `left: width` 和 `right: width`

<code src="../../../example/layout/triple-columns/position/index.tsx" />

### 表格布局

- 容器布局 `display: table`
- 容器设置宽度 `width: 100%`
- 容器设置固定高度 `height`
- 三栏 `display: table-cell`
- 两侧栏设置固定宽度 `width`

<code src="../../../example/layout/triple-columns/table/index.tsx" />

- 表格布局外边距 `margin` 不起效

### 弹性布局

- 容器弹性布局 `display: flex`
- 两侧栏设置固定宽度 `width`
- 中间栏设置占主轴空间 `flex: 1`

<code src="../../../example/layout/triple-columns/flex/index.tsx" />

### 网格布局

- 容器布局 `display: grid`
- 容器宽度 `width: 100%`
- 容器分栏，两侧固定，中间自适应 `grid-template-columns: width auto width`
- 容器分列固定高度 `grid-template-rows`

<code src="../../../example/layout/triple-columns/grid/index.tsx" />

## 圣杯布局

圣杯布局（Holy Grail）：随着页面宽度的变化，三栏布局中的中间栏区域优先自适应渲染，两侧区域宽度固定不变。

圣杯布局要求：

- `header` 和 `footer` 各自占领屏幕所有宽度，高度固定
- 中间的 `container` 是一个三栏布局，且三列等高
- 三栏布局两侧宽度固定不变，中间部分自适应填充整个区域
- 中间部分的高度是三栏中最高的区域的高度，并且优先加载

会出现的问题：

- 当面板中间栏部分比两边的子面板宽度小的时候，布局就会乱掉
- 解决方案：[双飞翼布局](#双飞翼布局)

### 浮动布局

🛠 **实现方式**：

- 定义 `header` 和 `footer` 样式，使之横向撑满
- 在 `container` 中的三列设为浮动和相对定位，`center` 要放最前面，`footer` 清除浮动
- 三列左右两列各自设定固定宽度，`center` 设置 `width: 100%` 占满容器
- 因为浮动原因，`center` 占满容器，两侧区域被挤下去
- 容器设置 `padding-left` 为左侧区域腾出展示空间，相对应设置 `padding-right` 为右侧区域腾出空间
- 左侧区域需要设置 `margin-left: -100%` 和 `right` 为自身宽度，回到上一行最左侧
- 右侧区域需要设置 `margin-right` 为自身宽度，回到上一行最右侧

<code src="../../../example/layout/holy-grail/float/index.tsx" />

**文字溢出问题**：

- 问题：如果某列内容过多，文字会溢出

- 解决方案；等高布局

### 弹性布局

🛠 **实现方式**：

- 定义 `header` 和 `footer` 样式，使之横向撑满
- `container` 中的 `left`、`center`、`right` 依次排布即可
- 设置 `container` 为弹性布局 `display: flex`
- `left` 和 `right` 区域定宽，`center` 设置为 `flex: 1` 即可

<code src="../../../example/layout/holy-grail/flex/index.tsx" />

参考资料：[CodePen](https://codepen.io/cameron-townsend/pen/qZrLpE?editors=1100)

### 网格布局

🛠 **实现方式**：

- 将整个布局抽象为九个方块，`header` 和 `footer` 分别占三个，其余各占一个，并为其命名
- 将命名区域赋值给各个元素选择器 `grid-area`
- 设置各列宽度 `grid-template-rows`
- 设置各行高度 `grid-template-columns`

<code src="../../../example/layout/holy-grail/grid/index.tsx" />

## 双飞翼布局

<code src="../../../example/layout/holy-grail/double-wings/index.tsx" />

[🖥 演示代码](https://codepen.io/itagn/pen/XxpVqP)

双飞翼布局与圣杯布局对比：

两者解决的问题一半是相同的，也就是三栏全部浮动，但左右两栏加上负 `margin` 让其跟中间栏并排，以形成三栏布局。

不同在于解决中间栏内容不被遮挡的解决方案上。圣杯布局通过父容器设置 `padding-left` 和 `padding-right` 后，将左右两栏用相对布局并分别配合 `right` 和 `left` 属性，以便让左右两栏移动后不遮挡中间栏。

双飞翼布局，为了中间栏不被遮挡，直接在中间栏内部创建子容器用于放置内容，在该子容器里用 `margin-left` 和 `margin-right` 为左右两栏区域留出位置。

- 双飞翼给中间栏添加了父标签通过 `margin` 给中间内容展示区域腾出空间
- 圣杯采用 `padding`，而双飞翼采用 `margin`，解决圣杯布局文字溢出问题
- 双飞翼不用设置相对定位，以及对应的 `left` 和 `right` 值
