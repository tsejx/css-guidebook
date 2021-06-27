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

- position
- float
- top / right / bottom / left
- z-index

## position

| 值       | 描述                                                                                                                                                                                                                                         |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| absolute | 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位，如果父级不是，会一直往上到 body，脱离文档流                                                                                                                                |
| fixed    | 生成固定定位的元素，相对于浏览器窗口进行定位，脱离文档流。（老 IE 不支持）                                                                                                                                                                   |
| relative | 生成相对定位的元素，相对于其正常位置进行定位，不脱离文档流。                                                                                                                                                                                 |
| static   | 默认值。没有定位，元素出现在正常的文档流中（忽略 top, bottom, left, right 或者 z-index 声明）。                                                                                                                                              |
| inherit  | 规定应该从父元素继承 position 属性的值。                                                                                                                                                                                                     |
| sticky   | 粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。主要用于 scroll 事件的监听上。[详情](https://link.juejin.im/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FCSS%2Fposition) |

**absolute 的 containing block(容器块)计算方式跟正常流有什么不同？**

无论属于哪种，都要先找到其祖先元素中最近的 position 值不为 static 的元素，然后再判断：

1. 若此元素为 inline 元素，则 containing block 为能够包含这个元素生成的第一个和最后一个 inline box 的 padding box （除 margin, border 外的区域）的最小矩形；
2. 否则,则由这个祖先元素的 padding box 构成。

如果都找不到，则为 initial containing block。

补充：

1. `static`（默认的）/ `relative`：简单说就是它的父元素的内容框（即去掉 `padding` 的部分）
2. `absolute`: 向上找最近的定位为 `absolute/relative` 的元素
3. `fixed`: 它的 containing block 一律为根元素（`html/body`），根元素也是 initial containing block

## z-index

`z-index` 用于提高元素层级关系，数值越大层级越高。

注意事项：

- 被使用的元素必须是定位元素，即元素 `position` 属性值必须为 `absolute`、`relative` 或 `fixed`等非 `static` 元素上
- 父节点的层叠性影响着子节点的层叠性，也就是父节点 `z-index` 值很小，无论子节点的 `z-index` 值多大，其层级仍然很小
- 如果没有 `z-index` 值，或者值相同，谁在 HTML 后面，谁的层叠行就更高

## 应用实践

### 固定定位相对于父元素定位

## 参考资料

- [从零开始の CSS 学习笔记——定位](https://juejin.im/post/6859685615269576718)
