---
title: Sass - 语法
order: 6
group:
  title: 预编译
  order: 2
nav:
  title: 工程化
  order: 3
---

# Sass - 语法

[中文文档](https://www.sass.hk/docs/)

## 功能拓展

### 嵌套规则

内层样式将它的外层的选择器作为父选择器。

嵌套功能避免了重复输入父选择器，而且令复杂的 CSS 结构更易于管理。

```scss
.main {
  width: 97%;

  p,
  div {
    font-size: 2em;
    a {
      font-weight: bold;
    }
  }

  pre {
    font-size: 3em;
  }
}
```

### 父选择器 &

在嵌套 CSS 规则时，有时也需要直接使用嵌套外层的父选择器，例如，当给某个元素设定 hover 样式时，或者当 body 元素有某个 classname 时，可以用 `&` 代表嵌套规则外层的父选择器。

编译后的 CSS 文件中 `&` 将被替换成嵌套外层的父选择器，如果含有多层嵌套，最外层的父选择器会一层一层向下传递。

`&` 必须作为选择器的第一个字符，其后可以跟随后缀生成复合的选择器。

```scss
.main {
  color: black;

  &-sidebar {
    border: 1px solid;
  }

  &:hover {
    color: red;
  }
}
```

### 属性嵌套

命名空间也可以包含自己的属性值。

```scss
.funky {
  font: 20px/24px {
    family: fantasy;
    weight: bold;
  }

  background: {
    color: red;
    position: 0 0;
  }
}
```

## SassScript

## 变量 \$

变量以美元符号开头，赋值方法与 CSS 属性的写法一样。

```scss
$color: red;
$font-size: 16px;

.foo {
  color: $color;
}
```

变量支持块级作用域，嵌套规则内定义的变量只能在嵌套规则内使用（局部变量），不在嵌套规则内定义的变量则可在任何地方使用（全局变量）。将局部变量转换为全局变量可以添加 `!global` 声明。

```scss
.main {
  $width: 5em !global;
  width: $width;
}

.sidebar {
  width: $width;
}
```

变量用 `#{}` 包裹：

```scss
$ipt: input;
$btm: bottom;

.#{$ipt} {
  // 这里输出 .input{}*
  // 这里输出 padding-bottom: 5rem;
  padding-#{$btm}: 5rem;
}
```

### 数据类型

共有六种数据类型，包括数字、字符串、颜色、布尔值、空值、数组和 Maps。

常用的有字符串。使用 `#{}` 时，有引号字符串将被编译为无引号字符串，这样便于在 mixin 中引用选择器名。

```scss
@mixin firefox-message($selector) {
  body.firefox #{$selector}:before {
    content: 'Hi, Firefox users!';
  }
}

@include firefox-message('.header');
```

### 插值语句

通过 `#{}` 插值语句可以在选择器或属性命中使用变量。

```scss
$name: foo;
$attr: border;

p.#{$name} {
  #{$attr}-color: blue;
}

// 相当于
p.foo {
  border-color: blue;
}
```

`#{}` 插值语句也可以在属性值中插入 SassScript，大多数情况下，这样可能还不如使用变量方便，但是使用 `#{}` 可以避免 Sass 运行运算表达式，直接编译 CSS。

```scss
p {
  $font-size: 12px;
  $line-height: 30px;

  font: #{$font-size}/#{$line-height};
}

// 相当于
p {
  font: 12px/30px;
}
```

## @-Rules 与指令

### @import

Sass 拓展了 `@import` 的功能，允许其导入 SCSS 或 Sass 文件。被导入的文件将合并编译到同一个 CSS 文件中，另外，被导入的文件中所包含的变量或者混合指令 (mixin) 都可以在导入的文件中使用。

通常，@import 寻找 Sass 文件并将其导入，但在以下情况下，@import 仅作为普通的 CSS 语句，不会导入任何 Sass 文件。

- 文件拓展名是 `.css`；
- 文件名以 `http://` 开头；
- 文件名是 `url()`；
- `@import` 包含 media queries。

如果不在上述情况内，文件的拓展名是 `.scss` 或 `.sass`，则导入成功。没有指定拓展名，Sass 将会试着寻找文件名相同，拓展名为 `.scss` 或 `.sass` 的文件并将其导入。

```scss
@import 'foo';

// 相当于
@import 'foo.scss';
@import 'foo.css';
@import 'foo' screen;
@import 'http://foo.com/bar';
@import url(foo);
```

允许导入多个文件。

```scss
@import 'rounded-corners', 'text-shadow';
```

### @media

Sass 中 `@media` 指令与 CSS 中用法一样，只是增加了一点额外的功能：允许其在 CSS 规则中嵌套。如果 `@media` 嵌套在 CSS 规则内，编译时，`@media` 将被编译到文件的最外层，包含嵌套的父选择器。这个功能让 `@media` 用起来更方便，不需要重复使用选择器，也不会打乱 CSS 的书写流程。

```scss
.sidebar {
  width: 300px;
  @media screen and (orientation: landscape) {
    width: 500px;
  }
}
```

`@media` 的 queries 允许互相嵌套使用，编译时，Sass 自动添加 `and`。

```scss
@media screen {
  .sidebar {
    @media (orientation: landscape) {
      width: 500px;
    }
  }
}
```

`@media` 甚至可以使用 SassScript（比如变量，函数，以及运算符）代替条件的名称或者值。

```scss
$media: screen;
$feature: -webkit-min-device-pixel-ratio;
$value: 1.5;

@media #{$media} and ($feature: $value) {
  .sidebar {
    width: 500px;
  }
}
```

### @extend

用于某个选择器下的所有样式继承给另一个选择器。

```scss
.error {
  border: 1px #f00;
  background-color: #fdd;
}

.seriousError {
  @extend .error;
  border-width: 3px;
}
```

`@extend` 的作用是将重复使用的样式 (.error) 延伸 (extend) 给需要包含这个样式的特殊样式（.seriousError）。

#### 延伸复杂的选择器

Class 选择器并不是唯一可以被延伸 (extend) 的，Sass 允许延伸任何定义给单个元素的选择器。

```scss
.hoverlink {
  @extend a:hover;
}

// 同 class 元素一样，a:hover 的样式将继承给 .hoverlink。
.hoverlink {
  @extend a:hover;
}

a:hover {
  text-decoration: underline;
}
```

#### 多重延伸

同一个选择器可以延伸给多个选择器，它所包含的属性将继承给所有被延伸的选择器。

```scss
.error {
  border: 1px #f00;
  background-color: #fdd;
}

.attention {
  font-size: 3em;
  background-color: #ff0;
}

.seriousError {
  @extend .error;
  @extend .attention;
  border-width: 3px;
}
```

相当于

```css
.error,
.seriousError {
  border: 1px #f00;
  background-color: #fdd;
}

.attention,
.seriousError {
  font-size: 3em;
  background-color: #ff0;
}

.seriousError {
  border-width: 3px;
}
```

每个 `.seriousError` 将包含 `.error` 与 `.attention` 下的所有样式，这时，后定义的样式享有优先权：`.seriousError` 的背景颜色是 `#ff0` 而不是 `#fdd`，因为 `.attention` 在 `.error` 之后定义。

多重延伸可以使用逗号分隔选择器名，比如 `@extend .error, .attention;` 与 `@extend .error;` `@extend.attention` 有相同的效果。

#### 继续延伸

```scss
.a {
  border: 1px #f00;
  background-color: #fdd;
}
.b {
  @extend .a;
  border-width: 3px;
}
.c {
  @extend .b;
  position: fixed;
  top: 10%;
  bottom: 10%;
  left: 10%;
  right: 10%;
}
```

## 混合指令

### 定义混合指令 @mixin

**使用方法**：`@mixin` 后添加名称和样式。

```scss
@mixin large-text {
  font: {
    family: Arial;
    size: 20px;
    weight: bold;
  }
  color: #ff0000;
}
```

### 引用混合指令 @include

使用 `@include` 指令引用混合样式，格式是在其后添加混合名称，以及需要的参数（可选）：

```scss
.heading {
  @include large-text;
  padding: 4px;
  margin-top: 10px;
}
```

也可以混合其他混合样式。

```scss
@mixin compound {
  @include hightlighted-background;
  @include header-text;
}
@mixin hightlighted-background {
  background-color: #fc0;
}
@mixin header-text {
  font-size: 20px;
}
```

### 参数

参数用于给混合指令中的样式设定变量，并且赋值使用。在定义混合指令的时候，按照变量的格式，通过逗号分隔，将参数写进圆括号里。引用指令时，按照参数的顺序，再将所赋的值对应写进括号：

```scss
@mixin sexy-border($color, $width) {
  border: {
    color: $color;
    width: $width;
    style: dashed;
  }
}
p {
  @include sexy-border(blue, 1in);
}
```

## 函数指令

Sass 支持自定义函数，并能在任何属性值或 SassScript 中使用。

```scss
$grid-width: 40px;
$gutter-width: 10px;

@function grid-width($n) {
  @return $n * $grid-width + ($n - 1) * $gutter-width;
}

#sidebar {
  width: grid-width(5);
}
```

与 mixin 相同，也可以传递若干个全局变量给函数作为参数。一个函数可以含有多条语句，需要调用 `@return` 输出结果。

## 参考资料

- [Sass Guidelines（中文版）](https://www.kancloud.cn/kancloud/sass-guidelin/48049)
- [定义好的变量名](https://www.sass.hk/skill/sass67.html)
