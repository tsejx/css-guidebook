# Sass



### 变量

```scss
$color: red;
$font-size: 16px;
```

### 插值语句

通过 `#{}` 插值语句可以在选择器或属性命中使用变量。

```scss
$name: foo;
$attr: border;
p.#${$name} {
    #{$attr}-color: blue;
}
```



### @-Rules与指令

#### @import



#### @screen





#### @extend





### 混合指令

#### 定义混合指令

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

#### 引用混合指令

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
@mixin hightlighted-background { background-color: #fc0; }
@mixin header-text { font-size: 20px; }
```

#### 参数

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

