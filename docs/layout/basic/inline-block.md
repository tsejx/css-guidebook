---
nav:
  title: 布局
  order: 2
group:
  title: 基础布局
  order: 5
title: 内联块级布局
order: 1
---

# 内联块级布局

* 像文本一样排 `block` 元素
* 没有清除浮动等问题
* 需要处理间隙

## 处理间隙

间隙来源 HTML 中的空白

处理办法：

* 直接把两块 DOM 元素写在一起
* 两块中间加个注释 `<!-- -->`
* 父字体设置 `font-size: 0`，子块重新加上字体 `font-size: 14px`

