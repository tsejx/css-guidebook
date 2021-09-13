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

```css
body {
  /* 定位属性 */
  display: flex;
  position: absolute;
  float: left;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  clear: both;
  z-index: 100;
  content: '';
  list-style: square;
  visibility: visible;

  /* 自身属性 */
  width: 100px;
  height: 100px;
  border: 10px solid #fff;
  padding: 10px;
  margin: 10px;
  background: #fff;

  /* 文字样式 */
  color: white;
  font-family: '微软雅黑';
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  font-varient: normal;

  /* 文本属性 */
  text-align: center;
  vertical-align: middle;
  text-transform: none;
  text-indent: 2px;
  text-decoration: underline;
  letter-spacing: 10px;
  word-spacing: 10px;
  white-space: 10px;
  text-overflow: ellipsis;
}
```
