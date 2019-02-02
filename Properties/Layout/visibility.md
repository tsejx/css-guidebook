---
默认值: visibile
继承性: no
版本: CSS2
---

## `visibility`

`visibility` 属性用于定义元素是否可见。与 `display` 属性不同，`visibility` 会为隐藏的元素保留其占据的物理空间。

```css
visibility: visible | hidden | collapse
```

### 取值

* `visible`：设置对象可视
* `hidden`：设置对象隐藏
* `collapse`：主要用来隐藏表格的行或列。隐藏的行或列能够被其他内容使用。对于表格外的其他对象，其作用等同于 `hidden`。

### 说明

如果希望某个元素为可见，其父元素也必须是可见的。

