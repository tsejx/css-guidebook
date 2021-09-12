---
nav:
  title: 基础
  order: 1
group:
  title: 属性
  order: 2
title: 字体
order: 4
---

# 字体

## font

- `serif`（衬线字体）
- `sans-serif`（非衬线字体）
- `monospace`（等宽字体，例如代码）
- `cursive`（方正静蕾体）
- `fantasy`

### 多字体反馈机制

指定多个字体，如果找不到会按照顺序使用其他字体，或者用同类字体。

### 自定义字体

**自定义字体**

```css
@font-face {
  font-family: 'IF';
  src: url('./IndieFlower.ttf');
}

.custom-font {
  font-family: IF;
}
```

**网络字体**

- iconfont

- 先把只有一个平台才有的写到最前面
- 引用远程字体有问题的话，要注意跨域问题
- 阿里巴巴的图标库，自选 iconfont.cn

> 需要注意跨域问题
