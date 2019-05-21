# 内容

* font
* text

## 字体族

* `serif`（衬线字体）
* `sans-serif`（非衬线字体）
* `monospace`（等宽字体，例如代码）
* `cursive`（方正静蕾体）
* `fantasy`

## 多字体反馈机制

指定多个字体，如果找不到会按照顺序使用其他字体，或者用同类字体。

## 自定义字体

**自定义字体**

```css
@font-face{
    font-family: "IF";
    src:url("./IndieFlower.ttf");
}

.custom-font{
    font-family: IF;
}
```

**网络字体**

* iconfont

* 先把只有一个平台才有的写到最前面
* 引用远程字体有问题的话，要注意跨域问题
* 阿里巴巴的图标库，自选 iconfont.cn

> 需要注意跨域问题

# Text

# LineHeight

## 构成

- 行高由 `line-box` 决定
- `line-hight` 会撑起 `inline-box` 的高度，并不会影响本身布局的高度，但是会影响外部元素（line-box）
- `inline-box` 组成 `line-box`，`line-box` 高度是由 `inline-box` 决定

## 现象

- 一般做垂直居中用 `line-height` 做就行了
- 默认情况是按照 `base-line` 对齐，如果要居中对齐就用 `vertical-align: middle`
- 底线、顶线和文字的顶和文字的底是不一样的

## 图片间隙问题

原理：按照 `inline` 排版，如果按照 `inline` 排版的话，默认按照基线排版（base-line）

基线和底线之间有距离的，如果 12px 字体那么缝隙可能就是 3px
解决方案：按照底线对齐，`vertical-align:bottom` 或者 `display:block`

