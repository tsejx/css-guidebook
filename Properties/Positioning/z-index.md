---
默认值: auto
继承性: 无
版本: CSS2
---

## `z-index`

`z-index` 属性用于定义一个元素在文档中的层叠顺序。[🔍详细文档](http://css.doyoe.com/properties/positioning/z-index.htm)

### 说明

`z-index` 用于确定元素在当前层叠上下文中的层叠级别，并确定该元素是否创建新的局部层叠上下文。

- 每个元素层叠顺序由所属的层叠上下文和元素本身的层叠级别决定（每个元素仅属于一个层叠上下文）。
- 📌同一个层叠上下文中，层叠级别大的显示在上面，反之显示在下面。
- 📌同一个层叠上下文中，层叠级别相同的两个元素，依据它们在 HTML 文档流中的顺序，写在后面的将会覆盖前面的。
- 不同层叠上下文中，元素的显示顺序依据祖先的层叠级别来决定，与自身的层叠级别无关。

⚠️ **注意：**

- 元素可拥有负的 `z-index` 属性值。
- `z-index` 仅能使用在进行定位元素为**绝对定位**、**相对定位**和**固定定位**时使用。

### 兼容性

<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" /> 当 `z-index` 未定义或者值为 `auto` 时，在 IE6~7 下会创建新的局部层叠上下文，而在高级浏览器中，按照规范不产生新的局部层叠上下文。

