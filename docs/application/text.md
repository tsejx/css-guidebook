---
nav:
  title: 应用
  order: 4
title: 文本内容
order: 2
---

# 文本内容

## 换行

### 段落标签

- `<p>` 标签是默认自动换行的，但是会对不同的字符采用不同的处理方式
  - 中文：换行
  - 英文和数字：不换行

<br/>

<code src="../../example/application-text/paragraph-tag-wrap-example/index.tsx" />

### 强制不换行

### 自动换行

### 强制英文单词断行

注意：设置强制将英文单词断行，需要将行内元素设置为块级元素。

## 溢出省略

### 单行内容溢出省略

```css
.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

<br />

<code src="../../example/application-text/single-line-text-with-ellipsis/index.tsx" />

### 多行文本溢出省略（按行数）

- `display: -webkit-box`：设为元素为盒子伸缩模型
- `-webkit-box-orient: vertical`：伸缩方向设为垂直方向
- `-webkit-line-clamp: 3`：超出三行隐藏，并显示省略号

<br />

<code src="../../example/application-text/multiline-text-with-ellipsis/index.tsx" />

注意：这个方法只适用于 Webkit 浏览器或移动端

优点：

1. 响应式截断，根据不同宽度做出调整
2. 文本超出范围才显示省略号，否则不显示省略号
3. 浏览器原生实现，所以省略号位置显示刚好

缺点： `-webkit-line-clamp` 是不规范的属性，没有出现在 CSS 规范草案中，也就是说只有 webkit 内核的浏览器才支持这个属性。

### 多行文本溢出省略（兼容方案）

使用伪元素实现，将伪元素设为为白色背景，并放在最后一个字的上方，达到显示省略号的目的。该方法兼容性较好，但文字未超出的情况下也会出现省略号。

<code src="../../example/application-text/multiline-text-with-ellipsis-compatible/index.tsx" />

注意：将 `height` 设置为 `line-height` 的整数倍，防止超出的文字露出

### 多行文本溢出

<code src="../../example/application-text/multiline-text-with-overflow/index.tsx" />

### 利用浮动布局实现多行文本省略

<code src="../../example/application-text/multiline-text-with-ellipsis-float/index.tsx" />

### 原生 JavaScript 实现方案

开源方案：

- [Clamp.js](https://github.com/josephschmitt/Clamp.js)
- [jQuery.dotdotdot]()

## 参考资料

- [可能是最全的「文本溢出截断省略」方案合集](https://www.zoo.team/article/application-text-overflow)
- [纯 CSS 实现多行文字截断](https://github.com/happylindz/blog/issues/12)
