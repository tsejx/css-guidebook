---
nav:
  title: 应用
  order: 4
title: 点九图
order: 20
---

# 点九图

**点九图** 是 Andriod 平台的应用软件开发里的一种特殊的图片形式，文件扩展名为：`.9.png`。

按照 UI 提供的素材，如果我们单纯的进行等比例缩放，遇到一些边角像素比较复杂（不规则）的情况，进行等比例拉伸时，很可能会造成拉伸变形，

其实相当于把一张 PNG 图分成了 9 个部分（九宫格），分别为 4 个角，4 条边，以及一个中间区域。

四周保持不同，中间区域根据内容伸缩。

```css
.content {
  border-image-source: url('nine-patch.png');
  border-image-slice: 48 61 27 61 fill;
  border-image-width: 48px 61px 27px 61px;
  border-image-outset: 48px 61px 27px 61px;
  border-image-repeat: repeat;
}
```

`border-image-slice` 四个属性值分别对应上、右、下、左。

分别表示上、右、下、左边距距离真正内容区域的距离。

<br />

<code src="../../example/application-nine-patch/index.tsx" />

## 参考资料

- [📖 MDN: border-image-slice](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image-slice)
- [📖 W3C: CSS Backgrounds and Borders Module Level 3](https://drafts.csswg.org/css-backgrounds-3/#border-image-slice)
- [border-image 的正确用法](https://jelly.jd.com/article/6006b1045b6c6a01506c87bc)
- [CSS 实现点九图](https://jcleeon.github.io/2018/12/21/CSS%E5%AE%9E%E7%8E%B0%E7%82%B99%E5%9B%BE/)
- [解决图片拉伸问题](https://segmentfault.com/a/1190000021876445)
- [Web 端的点九图](https://zhuanlan.zhihu.com/p/29472601)
