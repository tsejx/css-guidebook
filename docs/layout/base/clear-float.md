---
title: 清除浮动
order: 5
group:
  title: 基础布局
  order: 5
nav:
  title: 布局
  order: 2
---

# 清除浮动

在各种浏览器中显示效果也有可能不相同，这样让清除浮动更难了，下面总结 8 种清除浮动的方法，测试已通过 ie chrome firefox opera

清除浮动是每一个 Web 前台设计师必须掌握的机能。CSS 清除浮动大全，共 8 种方法。

浮动会使当前标签产生向上浮的效果，同时会影响到前后标签、父级标签的位置及 width height 属性。而且同样的代码，在各种浏览器中显示效果也有可能不相同，这样让清除浮动更难了。解决浮动引起的问题有多种方法，但有些方法在浏览器兼容性方面还有问题。

下面总结 8 种清除浮动的方法（测试已通过 ie chrome firefox opera，后面三种方法只做了解就可以了）：

## 1.父级 div 定义 height

```javascript

  <style type="text/css">
  .div1{
    background:#000080;
    border:1px solid red;
    /*解决代码*/
    height:200px;
  }
  .div2{
    background:#800080;
    border:1px solid red;
    height:100px;
    margin-top:10px
  }
  .left{
    float:left;
    width:20%;
    height:200px;
    background:#DDD
  }
  .right{
    float:right;
    width:30%;
    height:80px;
    background:#DDD
  }
  </style>

  <div class="div1">
    <div class="left">Left</div>
    <div class="right">Right</div>
  </div>
  <div class="div2">
    div2
  </div>

```

- 原理：父级 `div` 手动定义 `height`，就解决了父级 `div` 无法自动获取到高度的问题。

- 优点：简单、代码少、容易掌握

- 缺点：只适合高度固定的布局，要给出精确的高度，如果高度和父级 `div` 不一样时，会产生问题

- 建议：不推荐使用，只建议高度固定的布局时使用

## 2.结尾处加空 div 标签 clear:both 

代码如下:

```html
<style type="text/css">
  .div1{
    background:#000080;
    border:1px solid red
  } 
  .div2{
    background:#800080;
    border:1px solid red;
    height:100px;
    margin-top:10px
  } 
  .left{
    float:left;
    width:20%;
    height:200px;
    background:#DDD
  } 
  .right{
    float:right;
    width:30%;
    height:80px;
    background:#DDD
  } 
  /*清除浮动代码*/ 
  .clearfloat{
    clear:both
  } 
</style>

<div class="div1">
  <div class="left">Left</div>
  <div class="right">Right</div>
  <div class="clearfloat"></div>
</div>
<div class="div2">
  div2
</div>
```

- 原理：添加一个空 `div`，利用 CSS 提高的 `clear:both` 清除浮动，让父级 `div` 能自动获取到高度

- 优点：简单、代码少、浏览器支持好、不容易出现怪问题

- 缺点：不少初学者不理解原理；如果页面浮动布局多，就要增加很多空 `div`，让人感觉很不好

- 建议：不推荐使用，但此方法是以前主要使用的一种清除浮动方法

## 3.父级 div 定义 伪类:after 和 zoom 

代码如下:

```html
<style type="text/css">
  .div1{
    background:#000080;
    border:1px solid red;
  } 
  .div2{
    background:#800080;
    border:1px solid red;
    height:100px;
    margin-top:10px
   } 
  .left{
    float:left;
    width:20%;
    height:200px;
    background:#DDD
  } 
  .right{
    float:right;
    width:30%;
    height:80px;
    background:#DDD
  } 
  /*清除浮动代码*/ 
  .clearfloat:after{
    display:block;
    clear:both;
    content:"";
    visibility:hidden;
    height:0
  } 
  .clearfloat{
    zoom:1
  } 
</style>
<div class="div1 clearfloat">
  <div class="left">Left</div>
  <div class="right">Right</div>
</div>
<div class="div2">
  div2
</div>
```

- 原理：IE8 以上和非 IE 浏览器才支持:after，原理和方法 2 有点类似，zoom(IE 转有属性)可解决 IE6、IE7 浮动问题

- 优点：浏览器支持好、不容易出现怪问题（目前：大型网站都有使用，如：腾迅，网易，新浪等等）

- 缺点：代码多、不少初学者不理解原理，要两句代码结合使用才能让主流浏览器都支持。

- 建议：推荐使用，建议定义公共类，以减少 CSS 代码。

## 4.父级 div 定义 overflow:hidden 

代码如下:

```html
<style type="text/css">
  .div1{
    background:#000080;
    border:1px solid red;
    /*解决代码*/
    width:98%;
    overflow:hidden
  } 
  .div2{
    background:#800080;
    border:1px solid red;
    height:100px;
    margin-top:10px;
    width:98%
  } 
  .left{
    float:left;
    width:20%;
    height:200px;
    background:#DDD
  } 
  .right{
    float:right;
    width:30%;
    height:80px;
    background:#DDD
  } 
</style>
<div class="div1">
  <div class="left">Left</div>
  <div class="right">Right</div>
</div>
<div class="div2">
  div2
</div>
```

- 原理：必须定义 `width` 或 `zoom:1`，同时不能定义 `height`，使用 `overflow:hidden` 时，浏览器会自动检查浮动区域的高度

- 优点：简单、代码少、浏览器支持好

- 缺点：不能和 `position` 配合使用，因为超出的尺寸的会被隐藏。

- 建议：只推荐没有使用 `position` 或对 `overflow:hidden` 理解比较深的朋友使用。

## 5.父级 div 定义 overflow:auto 

代码如下:

```html
<style type="text/css">
  .div1{
    background:#000080;
    border:1px solid red;
    /*解决代码*/width:98%;
    overflow:auto
  } 
  .div2{
    background:#800080;
    border:1px solid red;
    height:100px;
    margin-top:10px;
    width:98%
  } 
  .left{
    float:left;
    width:20%;
    height:200px;
    background:#DDD
  } 
  .right{
    float:right;
    width:30%;
    height:80px;
    background:#DDD
  } 
</style>
<div class="div1">
  <div class="left">Left</div>
  <div class="right">Right</div>
</div>
<div class="div2">
  div2
</div>
```

- 原理：必须定义 `width` 或 `zoom:1`，同时不能定义 `height`，使用 `overflow:auto` 时，浏览器会自动检查浮动区域的高度

- 优点：简单、代码少、浏览器支持好

- 缺点：内部宽高超过父级 `div` 时，会出现滚动条。

- 建议：不推荐使用，如果你需要出现滚动条或者确保你的代码不会出现滚动条就使用吧。

## 6.父级 div 也一起浮动  

代码如下:

```html
<style type="text/css">
  .div1{
    background:#000080;
    border:1px solid red;
    /*解决代码*/
    width:98%;
    margin-bottom:10px;
    float:left
  } 
  .div2{
    background:#800080;
    border:1px solid red;
    height:100px;
    width:98%;
    /*解决代码*/
    clear:both
  } 
  .left{
    float:left;
    width:20%;
    height:200px;
    background:#DDD
  } 
  .right{
    float:right;
    width:30%;
    height:80px;
    background:#DDD
  } 
</style>
<div class="div1">
  <div class="left">Left</div>
  <div class="right">Right</div>
</div>
<div class="div2">
  div2
</div>
```

- 原理：所有代码一起浮动，就变成了一个整体

- 优点：没有优点

- 缺点：会产生新的浮动问题。

- 建议：不推荐使用，只作了解。

## 7.父级 div 定义 display:table 

代码如下:

```html
<style type="text/css">
  .div1{
    background:#000080;
    border:1px solid red;
    /*解决代码*/width:98%;
    display:table;
    margin-bottom:10px;
  } 
  .div2{
    background:#800080;
    border:1px solid red;
    height:100px;
    width:98%;
  } 
  .left{
    float:left;
    width:20%;
    height:200px;
    background:#DDD
  } 
  .right{
    float:right;
    width:30%;
    height:80px;
    background:#DDD
  } 
</style>
<div class="div1">
  <div class="left">Left</div>
  <div class="right">Right</div>
</div>
<div class="div2">
  div2
</div>
```

- 原理：将 `div` 属性变成表格

- 优点：没有优点

- 缺点：会产生新的未知问题。

- 建议：不推荐使用，只作了解。

## 8.结尾处加 br 标签 clear:both 

代码如下:

```html
<style type="text/css">
  .div1{
    background:#000080;
    border:1px solid red;
    margin-bottom:10px;
    zoom:1
  } 
  .div2{
    background:#800080;
    border:1px solid red;
    height:100px
  } 
  .left{
    float:left;
    width:20%;
    height:200px;
    background:#DDD
  } 
  .right{
    float:right;
    width:30%;
    height:80px;
    background:#DDD
  } 
  .clearfloat{
    clear:both
  } 
</style>
<div class="div1">
  <div class="left">Left</div>
  <div class="right">Right</div>
  <br class="clearfloat" />
</div>
<div class="div2">
  div2
</div>
```

- 原理：父级 `div` 定义 `zoom:1` 来解决 IE 浮动问题，结尾处加 `br` 标签 clear:both

- 建议：不推荐使用，只作了解。
