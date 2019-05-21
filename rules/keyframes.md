## `@keyframes`

`@keyframes` 规则用于指定动画名称和动画效果。

**语法**

```css
@keyframes <identifier> { <keyframes-blocks> }
```

```css
<keyframes-blocks>: [[ from | to | <percentage>]{sRules}][[, from | to | <percentage>]{sRules}]*
```

**取值**

* `<identifier>` 定义动画名称
* `<keyframes-blocks>` 定义动画在每个阶段的样式，即帧动画

