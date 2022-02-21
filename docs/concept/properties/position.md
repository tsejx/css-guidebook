---
nav:
  title: 基础
  order: 1
group:
  title: 属性
  order: 2
title: 定位
order: 1
---

# 定位

## position

`position` 用于指定一个元素在文档中的定位方式。

| 属性值     | 说明                                                                                                                                                                                                                                                |
| :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `static`   | 默认值。没有定位，元素出现在正常的文档流中（忽略 `top`、`bottom`、`left`、`right` 和 `z-index` 声明）。                                                                                                                                             |
| `absolute` | 生成绝对定位的元素，相对于 **`static` 定位以外的第一个父元素** 进行定位，如果父级不是，会一直往上到 `body`，脱离文档流。                                                                                                                            |
| `fixed`    | 生成固定定位的元素，相对于 **浏览器窗口** 进行定位，脱离文档流。（老 IE 不支持）                                                                                                                                                                    |
| `relative` | 生成相对定位的元素，相对于 **其正常位置** 进行定位，不脱离文档流。                                                                                                                                                                                  |
| `sticky`   | 粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。<br/>主要用于 `scroll` 事件的监听上。[详情](https://link.juejin.im/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FCSS%2Fposition) |
| `unset`    |                                                                                                                                                                                                                                                     |

> `absolute` 的 `containing block` 容器块计算方式跟正常流有什么不同？

<!-- 这里需要 DEMO 解析说明 -->

无论属于哪种，都要先找到其祖先元素中最近的 `position` 值不为 `static` 的元素，然后再判断：

1. 若此元素为 `inline` 元素，则 `containing block` 为能够包含这个元素生成的第一个和最后一个 `inline box` 的 `padding box` （除 `margin` 和 `border` 外的区域）的最小矩形；
2. 否则，则由这个祖先元素的 `padding box` 构成。

如果都找不到，则为 `initial containing block`。

补充：

1. `static`（默认的）/ `relative`：简单说就是它的父元素的内容框（即去掉 `padding` 的部分）
2. `absolute`: 向上找最近的定位为 `absolute/relative` 的元素
3. `fixed`: 它的 containing block 一律为根元素（`html/body`），根元素也是 initial containing block

### 脱离文档流

当把元素 `position` 属性设置为 `absolute` 或 `fixed` 的时候，会发生三件事：

1. 把该元素往 Z 轴方向移了一层，元素脱离了普通流，所以不再占据原来那层的空间，还会覆盖下层的元素；
2. 该元素将变为块级元素，相当于给该元素设置了 `display: block`（给一个内联元素，如 `<span>`，设置 `absolute` 之后发现它可以设置宽高了）；
3. 如果该元素是块级元素，元素的宽度由原来的 `width: 100%`（占据一行），变为了 `auto`。​

### sticky

`position: sticky` 的生效具有一定的条件限制：

1. 这个特定阈值指的是 `top`、`right`、`bottom` 或 `left` 之一，换言之，指定 `top`、`right`、`bottom` 或 `left` 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同
2. 并且 `top` 和 `bottom` 同时设置时，`top` 生效的优先级高；`left` 和 `right` 同时设置时，`left` 的优先级高。
3. 元素表现为 `relative` 还是 `fixed` 是根据元素是否达到设定了的阈值决定的
4. 设定为 `position: sticky` 元素的任意父节点的 `overflow` 属性必须是 `visible`，否则 `position:sticky` 不会生效。

第四点需要特别解释一下：

1. 如果 `position:sticky` 元素的任意父节点定位设置为 `overflow: hidden`，则父容器无法进行滚动，所以 `position: sticky` 元素也不会有滚动然后固定的情况。
2. 如果 `position:sticky` 元素的任意父节点定位设置为 `position: relative | absolute | fixed`，则元素相对父元素进行定位，而不会相对 viewprot 定位。

<code src="@example/properties/position/position/index.tsx" />

## float

<code src="@example/properties/position/float/index.tsx" />

## top/right/bottom/left

不设置 `position` 属性的值，`top/right/bottom/left` 不会生效，但是设置了 `position: static` 也不会生效。

## z-index

`z-index` 用户定义一个元素在文档中的层叠顺序，数值越大层级最大。

<code src="@example/properties/position/z-index/index.tsx" />

使用相对性：`z-index` 值只决定 **同一父元素中的同级子元素** 的堆叠顺序。父元素的 `z-index` 值（如果有）为子元素定义了堆叠顺序（CSS 版堆叠「拼爹」）。

向上追溯找不到含有 `z-index` 值的父元素的情况下，则可以视为自由的 `z-index` 元素，它可以与父元素的同级兄弟定位元素或其他自由的定位元素来比较 `z-index` 的值，决定其堆叠顺序。同级元素的 `z-index` 值如果相同，则堆叠顺序由元素在文档中的先后位置决定，后出现的会在上面。所以如果当你发现一个 `z-index` 值较大的元素被值较小的元素遮挡了，请先检查它们之间的 DOM 结点关系，多半是因为其父结点含有激活并设置了 `z-index` 值的 `position` 定位元素。

注意事项：

- 被使用的元素必须是定位元素，即元素 `position` 属性值必须为 `absolute`、`relative` 或 `fixed`等非 `static` 元素上
- 父节点的层叠性影响着子节点的层叠性，也就是父节点 `z-index` 值很小，无论子节点的 `z-index` 值多大，其层级仍然很小
- 如果没有 `z-index` 值，或者值相同，谁在 HTML 后面，谁的层叠行就更高

### 失效场景

`z-index` 属性在下列情况下会失效：

1. 父元素 `position` 为 `relative` 时，子元素的 `z-index` 失效

解决：父元素 `position` 改为 `absolute` 或 `static`

2. 元素没有设置 `position` 属性为非 `static` 属性

解决：设置该元素的 `position` 属性为 `relative`、`absolute` 或是 `fixed` 中的一种

3. 元素在设置 `z-index` 的同时还设置了 `float` 浮动

解决：`float` 去除，改为 `display：inline-block`

## 参考资料

- [从零开始の CSS 学习笔记——定位](https://juejin.im/post/6859685615269576718)
