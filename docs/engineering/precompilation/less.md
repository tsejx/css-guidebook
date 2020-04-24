---
title: Less
order: 1
group:
  title: 预编译
  order: 2
nav:
  title: 工程化
  order: 3
---

# Less

## 变量

```less
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}
```

## 混合

```less
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}

// Usage
#menu a {
  color: #111;
  .bordered();
}

.post a {
  color: red;
  .bordered();
}
```

## 嵌套

```less
#header {
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

规则嵌套。

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
