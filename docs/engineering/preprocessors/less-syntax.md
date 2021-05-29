---
title: Less - 语法
order: 2
group:
  title: 预编译
  order: 2
nav:
  title: 工程化
  order: 3
---

# Less - 语法

## 变量 Variables

采用变量定义属性值可以让属性值更具语义化

### 定义变量 @

```less
@width: 10px;
@height: @width + 10px;

.heading {
  width: @width;
  height: @height;
}

// 编译后
.heading {
  width: 10px;
  height: 20px;
}
```

### 变量插值 @{}

- 选择器、属性名、属性值（插值）
- 选择器、属性名中、部分片段中：必须使用插值语句

**选择器**

```less
@banner: banner;

.@{banner} {
  font-weight: bold;
}

// 编译后
.banner {
  font-weight: bold;
}
```

**属性名**

```less
@color: color;

.widget {
  @{color}: #ffffff;
}

// 编译后
.widget {
  color: #ffffff;
}
```

**属性值**

```less
@images: '../images';

.banner {
  background: url('@{images}/banner.png');
}

// 编译后
.banner {
  background: url('../images/banner.png');
}
```

## 混合 Mixin

混合可以理解为可以复用的样式片段

### 混合集

输出和不输出

```less
// 被输出
.bordered-top {
  border-top: dotted 1px black;
}

// 不被输出，加括号
.bordered-bottom() {
  border-bottom: solid 2px black;
}

.menu a {
  // 调用混合集的时候：括号可加可不加
  .bordered-top();

  .bordered-bottom;
}

// 编译后
.bordered-top {
  border-top: dotted 1px black;
}

.meanu a {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```

### 带选择器的混合集

```less
.hover-mixin() {
  &:hover {
    border: 1px solid red;
  }
}

button {
  .hover-mixin();
}

// 编译后
button:hover {
  border: 1px solid red;
}
```

### 命名空间混入

```less
.bundle {
  .button () {
    display: block;
    &:hover {
      background-color: white;
    }
  }

  .tab () {
    color: #fff;
  }
}

.heading a {
  color: orange;

  // 重点
  .bundle > .button;
}

// 编译后
.heading a {
  display: block;
}

.heading a:hover {
  background-color: #ffffff;
}
```

### 带参数混入 @ 定义

**单一参数**

```less
.border-radius(@radius) {
  border-radius: @radius;
}

.box {
  .border-radius(4px);
}

// 被编译为
.box {
  border-radius: 4px;
}
```

**带默认值的参数**

```less
.border-radius(@radius: 4px) {
  border-radius: @radius;
}

.box {
  .border-radius;
}

// 编译后
.box {
  border-radius: 4px;
}
```

**多个参数**（推荐使用逗号 `,` 或分号 `;` 隔开）

```less
.mixin(@color; @padding: 2px) {
  color: @color;
  padding: @padding;
}

.selector {
  .mixin(#008000);
}

// 编译后
.selector {
  color: #008000;
  padding: 2px;
}
```

**命名参数**（不用再注意参数的位置）

```less
.mixin(@color: black; @margin: 10px) {
  color: @color;
  margin: @margin;
}
.banner {
  .mixin(@margin: 20px; @color: #33acfe);
}

// 编译后
.banner {
  color: #33acfe;
  margin: 20px;
}
```

## 嵌套

```less
.heading {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

使用 `&` 代表父选择器。

```less
.clearfix {
  display: block;
  zoom: 1;

  &:after {
    content: ' ';
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
```

规则嵌套

```less
.component {
  width: 300px;
  @media (min-width: 768px) {
    width: 600px;
    @media (min-resolution: 192dpi) {
      background-image: url(/img/retina2x.png);
    }
  }
  @media (min-width: 1280px) {
    width: 800px;
  }
}
```

## 函数

```less
@base: #f04615;
@width: 0.5;

.class {
  width: percentage(@width); // returns `50%`
  color: saturate(@base, 5%);
  background-color: spin(lighten(@base, 25%), 8);
}
```

## 条件/循环语句

比较运算符的完整列表为 `>`、`>=`、`=`、`=<`、`<`

```less
.max (@foo) when (@foo > 0) {
  width: @foo;
}

.mixin (@foo) when (default()) {
  width: 0;
}

.max(10px);

// 编译后
.max {
  width: 10px;
}
```

### 类型检测函数

- 检测参数类型
  - `iscolor`
  - `isnumber`
  - `isstring`
  - `iskeyword`
  - `isurl`
- 检测参数单位
  - `ispixel`
  - `ispercentage`
  - `isem`
  - `isunit`

```less
.mixin (@foo; @bar: 0) when (isnumber(@bar)) {
  // ... do something
}

.mixin (@foo; @bar: black) when (iscolor(@bar)) {
  // ... do something
}
```

Less 中混合调用自身，即可形成循环。

```less
.loop(@counter) when (@counter > 0) {
  // 递归调用自身
  .loop(@counter - 1);

  // 每次调用时产生的样式代码
  width: (10px - * @counter);
}

.container {
  // 调用循环
  .loop(5);
}

// 编译后
.container {
  width: 10px;
  width: 20px;
  width: 30px;
  width: 40px;
  width: 50px;
}
```

### 循环语句

## 作用域

类似于 JavaScript 的作用域规则。

```less
@var: red;

#page {
  #header {
    color: @var; // white
  }
  @var: white;
}
```
