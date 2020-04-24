---
title: 垂直居中
order: 11
group:
  title: 居中布局
  order: 6
nav:
  title: 布局
  order: 2
---

# 垂直居中

## 单行内联元素

通过设置内联元素的高度 `height` 和行高 `line-height` 相等，从而使元素垂直居中。

`line-height` 最终表现通过 `inline box` 实现的，而无论 `inline box` 所占据的高度是多少（无论比文字大还是比文字小），其占据的空间都是与文字内容功能公用水平中垂线的。

```css
.parent {
  height: 100px;
  line-height: 100px;
}
```

**优点：** 简单兼容性好

**缺点：**

* 只能用于单行行内内容（单行文本、行内、行内块级）
* 需要明确知道 `height` 值

## 多行元素

### 表格布局

使用表格布局的 `vertical-align: middle` 可以实现子元素的垂直居中。

```css
.parent {
    dispaly: table;
}
.child {
    display: table-cell;
    vertical-align: middle;
}
```

### 弹性布局

利用弹性布局实现垂直居中，其中 `flex-direction: column` 定义主轴方向为纵向。

```css
.parent {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
```

**优点**

- 内容块的宽高任意, 优雅的溢出.
- 可用于更复杂高级的布局技术中.

**缺点**

- IE8/IE9 不支持
- 需要浏览器厂商前缀
- 渲染上可能会有一些问题

### 精灵元素

利用精灵元素（Ghost Element）技术实现垂直居中，即在父容器内放一个 100% 高度的伪元素，让文本和伪元素垂直对齐，从而达到垂直居中的目的。

```css
.parent {
    position: relative;
}
.child,
.parent::before {
    display: inline-block;
    vertical-align: middle;
}
.parent::before {
    content: " ";
    height: 100%;
}
```

## 块级元素

### 固定高度的块级元素

#### 有滚动条

我们知道居中元素的高度和宽度，垂直居中问题就很简单。通过绝对定位元素距离顶部 50%，并设置 `margin-top` 向上偏移元素高度的一半，就可以实现垂直居中了。

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 50%;
  height: 固定高度;
  margin-top: -0.5固定高度;
}
```

**优点：** 适用于所有浏览器.

**缺点：** 父元素空间不够时，子元素可能不可见（当浏览器窗口缩小时,滚动条不出现时）。如果子元素设置了 `overflow:auto`，则高度不够时，会出现滚动条。

#### 无滚动条

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 0;
  bottom: 0;
  /* 固定高度 */
  height: ;
  margin: auto 0;
}
```

**优点：** 简单

**缺点：** 没有足够空间时，子元素会被截断，但不会有滚动条

### 未知高度的块级元素

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```

**优点：** 代码量少

**缺点：** IE8 不支持, 属性需要追加浏览器厂商前缀, 可能干扰其他 transform 效果, 某些情形下会出现文本或元素边界渲染模糊的现象。

## 图片垂直居中

```css
.parent {
  height: 150px;
  line-height: 150px;
  font-size: 0;
}
.child {
  vertical-align: middle;
}
```