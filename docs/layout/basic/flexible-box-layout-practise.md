---
nav:
  title: 布局
  order: 2
group:
  title: 基础布局
  order: 5
title: 弹性布局应用
order: 7
---

# 弹性布局应用

## 自动填充剩余空间

常见布局：当内容区域高度不够的时候，`footer` 仍然需要固定在底部。这时候，我们可以给 `main` 使用 `flex-grow: 1`，使他自动填满剩余空间。

<code src="@example/layout/flex-practise/auto-fill/index.tsx" />

## 自适应布局

<code src="@example/layout/flex-practise/responsive-layout/index.tsx" />

## 九宫格

### 边距九宫格

<code src="@example/layout/flex-practise/nine-grid/index.tsx" />

### 边框九宫格

## 十六宫格

### 平均分布并可换行

```css
.container {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
```

## 参考资料

- [Common CSS Flexbox Layout Patterns with Example Code](https://tobiasahlin.com/blog/common-flexbox-patterns)
