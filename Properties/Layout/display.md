---
默认值: inline
继承性: no
版本: CSS2/3
---

## `display`

`display` 属性用于设置或检索对象是否及显示方式。

```css
css: none | inline | block | list-item | inline-bloack | table | inline-table | table-caption | table-cell | table-row | table-row-group | table-column | table-column-group | table-footer-group | table-header-group | run-in | box | inline-box | flexbox | inline-flexbox | flex | inline-flex
```

### 取值

* `none`：隐藏对象。与 `visibility` 属性的 `hidden` 值不同，其不为被隐藏的对象保留其物理空间。
* `inline`：指定对象为内联元素。
* `block`：指定对象为块元素。
* `list-item`：指定对象为列表项目。
* `inline-block`：指定对象为内联块元素。（CSS2）
* `table`：指定对象作为块元素级的表格。类同于html标签 `<table>`（CSS2）
* `inline-table`：指定对象作为内联元素级的表格。类同于html标签 `<table>`（CSS2）
* `table-caption`：指定对象作为表格标题。类同于html标签 `<caption>`（CSS2）
* `table-cell`：指定对象作为表格单元格。类同于html标签 `<td>`（CSS2）
* `table-row`：指定对象作为表格行。类同于html标签 `<tr>`（CSS2）
* `table-row-group`：指定对象作为表格行组。类同于html标签 `<tbody>`（CSS2）
* `table-column`：指定对象作为表格列。类同于html标签 `<col>`（CSS2）
* `table-column-group`：指定对象作为表格列组显示。类同于html标签 `<colgroup>`（CSS2）
* `table-header-group`：指定对象作为表格标题组。类同于html标签 `<thead>`（CSS2）
* `table-footer-group`：指定对象作为表格脚注组。类同于html标签 `<tfoot>`（CSS2）
* `run-in`：根据上下文决定对象是内联对象还是块级对象。（CSS3）
* `box`：将对象作为弹性伸缩盒显示。*（伸缩盒最老版本）*（CSS3）
* `inline-box`：将对象作为内联块级弹性伸缩盒显示。*（伸缩盒最老版本）*（CSS3）
* `flexbox`：将对象作为弹性伸缩盒显示。*（伸缩盒过渡版本）*（CSS3）
* `inline-flexbox`：将对象作为内联块级弹性伸缩盒显示。*（伸缩盒过渡版本）*（CSS3）
* `flex`：将对象作为弹性伸缩盒显示。*（伸缩盒最新版本）*（CSS3）
* `inline-flex`：将对象作为内联块级弹性伸缩盒显示。*（伸缩盒最新版本）*（CSS3）

### 说明

- 如果 `display` 设置为 `none`，`float` 及 `position` 属性定义将不生效
- 如果 `position` 既不是 `static` 也不是 `relative` 或者 `float` 不是 `none` 或者该元素是根元素
  - 当 `display: inline-table` 时，`display` 的计算值为 `table`
  - 当`display: inline | inline-block | run-in | table-*` 系时，`display` 的计算值为 `block`，其它情况为指定值