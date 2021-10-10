---
title: 盒模型
order: 1
nav:
  title: 布局
  order: 2
---

# 盒模型

页面上显示的每个元素（包括内联元素）都可以看作一个盒子，即盒模型。

盒模型由四部分组成，从内到外分别是：`content -> padding -> border -> margin`

<!-- ![](../screenshots/box-model.png) -->

## 名词解释

### 包含块

每个元素都相对于其包含块摆放，包含块就是一个元素的布局上下文。 对于正常的西方语言文本流中的一个元素，包含块由最近的块级祖先框、表单元格或行内块祖先框的内容边界（Content Edge）构成。

### 正常流

这是指西方语言文本从左向右、从上向下显示，这也是我们熟悉的传统 HTML 文档的文本布局，注意，在非西方语言中，流方向可能不同。大多数元素都在正常流中，要让一个元素不在正常流中，唯一的办法就是使之成为浮动或定位元素。这里我们谈论的都是在正常流中的元素。

**块级元素**
这是指段落、标题或 `div` 之类的元素。这些元素在正常流中时，会在其框之前和之后生成“换行”，所以处于正常流中的块级元素会垂直摆放。通过声明 `display: block`，可以让元素生成块级框。

**行内元素**
这是指 `strong` 或 `span` 之类的元素，这些元素不会在之前或之后生成“行分隔符”，它们是块级元素的后代。通过声明 `display:inline`。可以让元素生成一个行内框。

## 盒模型分类

盒模型分为 **W3C 标准盒模型** 和 **IE 怪异盒模型**。

如果 CSS 里面写一个盒 `width: 100px`：

- 标准盒模型显示出来，是大于等于 `100px`，因为 `100px` 仅仅是 `内容` 的宽度，最终显示出来的是 `100px + padding + border`
- 但是 IE 怪异盒模型显示出来，就是 `100px`，`内容 + padding + border = 100px`

### 标准盒模型

```css
单个元素宽度 = content

盒子总宽度 = margin-left + border-left + padding-left + width + padding-right + border-right + margin-right
```

### 怪异盒模型

```css
单个元素宽度 = content + padding + border

盒子总宽度 = margin-left + width + margin-right
```

## box-sizing

`box-sizing` 是用于控制元素的盒子模型的解析模式，默认值是 `content-box`。

### content-box

- `padding` 和 `border` 不被包含在定义的 `width` 和 `height` 之内。

- 对象的实际宽度等于设置的 `width` 值和 `border`、`padding` 之和，即 ( `Element width = width + border + padding` )

- 此属性表现为标准模式下的盒模型。

### border-box

- `padding` 和 `border` 被包含在定义的 `width` 和 `height` 之内。

- 对象的实际宽度就等于设置的 `width` 值，即使定义有 `border` 和 `padding` 也不会改变对象的实际宽度，即 ( `Element width = width` )

- 此属性表现为怪异模式下的盒模型。

⚠️ 注意：避免同一份 CSS 在不同浏览器下表现不同，需要做相关兼容性。

在 HTML 文档中中声明了 `DOCTYPE` 类型，所有的浏览器都会把盒模型解释为 W3C 盒模型。

```html
<!DOCTYPE html>
```

```css
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
```

## 获取盒模型宽高

- 访问元素内联样式宽高：`element.style.width`
- 访问元素计算宽高（仅支持 IE 查询）：`element.currentStyle.width`
- 访问元素计算宽高（支持主流浏览器）：`window.getComputedStyle(element).width`
- 访问元素计算宽高（支持主流浏览器）取到的是盒子总宽度：`element.getBoundingClientRect().width`

## 参考资料

- [📝 CSS 盒子模型详解](https://juejin.im/entry/576f6f371532bc005fe0eae1)
