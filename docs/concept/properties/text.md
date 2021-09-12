---
nav:
  title: 基础
  order: 1
group:
  title: 属性
  order: 2
title: 文本
order: 4
---

# 文本

- `white-space`：用于设置如何处理元素中的空白
- `normal`：默认，空白会被浏览器忽略
- `pre`：空白会被浏览器保留，其行为方式类似 HTML 的 `pre` 标签
- `nowrap`：文本不会换行，文本会在同一行的
- `word-wrap`
- `word-break`
- `text-overflow`

## 属性说明

### text-align

`text-align` 用于定义元素内容的水平对齐方式。

可取属性值：

| 属性值         | 说明                                                                                                                                   |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| `left`         | 内容左对齐                                                                                                                             |
| `center`       | 内容居中对齐                                                                                                                           |
| `right`        | 内容右对齐                                                                                                                             |
| `justify`      | 内容两端对齐，但对于强制打断的行（被打断的这一行）及最后一行（包括仅有一行文本的情况，因为它既是第一行也是最后一行）不做处理           |
| `start`        | 内容对齐开始边界                                                                                                                       |
| `end`          | 内容对齐结束边界                                                                                                                       |
| `match-parent` | 这个值和 `inherit` 表现一致，只是该值继承的 `start` 或 `end` 关键字是针对父母的 `direction` 值并计算的，计算值可以是 `left` 和 `right` |
| `justify-all`  | 效果等同于 `justify`，不同的是最后一行也会两端对齐                                                                                     |

### text-decoration

`text-decoration` 为简写属性，用于定义元素文本装饰。

语法：

```
text-decoration: <text-decoration-line> | <text-decoration-style> | <text-decoration-color>
```

对于 `<text-decoration-line>` 的可取属性值：

| 属性值         | 说明               |
| :------------- | :----------------- |
| `none`         | 文字无装饰         |
| `underline`    | 文字的装饰是下划线 |
| `overline`     | 文字的装饰是上划线 |
| `line-through` | 文字的装饰是贯穿线 |
| `blink`        | 文字的装饰是闪烁   |

[CSS 文字装饰 text-decoration & text-emphasis](https://juejin.cn/post/6947866495309316104)

### text-transform

`text-transform` 用于定义元素的文本如何转换大小写。

### text-justfy

`text-justify` 用于定义使用什么方式实现文本内容两端对齐。

### text-indent

`text-indent` 用于定义块内文本内容的缩进。

### vertical-align

`vertical-align` 用于定义行内元素在行框内的垂直对齐方式。

### word-wrap

`word-wrap` 用于设置或检索当内容超过指定容器的边界时是否断行。

### word-break

`word-break` 用于定义元素内容文本的字间与字符间的换行行为

### text-overflow

`text-overflow` 用于当块容器 `overflow` 为非 `visible` 时，定义内联内容溢出其块容器是否截断或者添加 `...` 及自定义字符。

### white-space

`white-space` 用于指定元素是否保留文本间的空格、换行；指定文本超过边界时是否换行。

### line-height

相关属性：`line-height`

- 行高由 `line-box` 决定
- `line-hight` 会撑起 `inline-box` 的高度，并不会影响本身布局的高度，但是会影响外部元素（line-box）
- `inline-box` 组成 `line-box`，`line-box` 高度是由 `inline-box` 决定

#### 现象

- 一般做垂直居中用 `line-height` 做就行了
- 默认情况是按照 `base-line` 对齐，如果要居中对齐就用 `vertical-align: middle`
- 底线、顶线和文字的顶和文字的底是不一样的

### 图片间隙问题

原理：按照 `inline` 排版，如果按照 `inline` 排版的话，默认按照基线排版（base-line）

基线和底线之间有距离的，如果 12px 字体那么缝隙可能就是 3px
解决方案：按照底线对齐，`vertical-align: bottom` 或者 `display:block`
