---
nav:
  title: 基础
  order: 1
group:
  title: 属性
  order: 2
title: 变换
order: 6
---

# 变换

配合学习的网站：

- [CSS Transform Function Visualizer](https://css-transform.moro.es/)

## 属性说明

### transform

`transform` 属性能用于旋转，缩放，倾斜或平移给定元素。

语法：

```css
transform: none | transform-functions | initial | inherite;
```

`transform-functions` 的取值如下：

| 属性值                                      | 说明                                                                                                             |
| :------------------------------------------ | :--------------------------------------------------------------------------------------------------------------- |
| `none`                                      | 无转换                                                                                                           |
| `translateX(x)`                             | 指定对象 X 轴（水平方向）的平移                                                                                  |
| `translateY(y)`                             | 指定对象 Y 轴（垂直方向）的平移                                                                                  |
| `translateZ(z)`                             | 指定对象 Z 轴的平移                                                                                              |
| `translate(x,y)`                            | 指定对象的 2D 平移。两个参数分别对应 X 轴和 Y 轴。如果第二个参数未提供，则默认值为 `0`                           |
| `translate3d(x,y,z)`                        | 指定对象的 3D 位移。三个参数分别对应 X 轴、 Y 轴和 Z 轴，**参数不允许省略**                                      |
| `scaleX(x)`                                 | 指定对象 X 轴的（水平方向）缩放                                                                                  |
| `scaleY(y)`                                 | 指定对象 Y 轴的（垂直方向）缩放                                                                                  |
| `scaleZ(z)`                                 | 指定对象的 Z 轴缩放                                                                                              |
| `scale(x,y)`                                | 指定对象的 2D 缩放。两个分别对应 X 轴和 Y 轴。如果第二个参数未提供，则默认取第一个参数的值                       |
| `scale3d(x,y,z)`                            | 指定对象的 3D 缩放。三个参数对应 X 轴、 Y 轴和 Z 轴，**参数不允许省略**                                          |
| `rotateX(angle)`                            | 指定对象在 X 轴上的旋转角度                                                                                      |
| `rotateY(angle)`                            | 指定对象在 Y 轴上的旋转角度                                                                                      |
| `rotateZ(angle)`                            | 指定对象在 Z 轴上的旋转角度                                                                                      |
| `rotate(angle)`                             | 指定对象的 2D 旋转，需先有 `transform-origin` 属性的定义                                                         |
| `rotate3d(x,y,z,angle)`                     | 指定对象的 3D 旋转角度，其中前 3 个参数分别表示旋转的方向 X、Y、Z，第 4 个参数表示旋转的角度，**参数不允许省略** |
| `skewX(angle)`                              | 指定对象 X 轴的（水平方向）扭曲                                                                                  |
| `skewY(angle)`                              | 指定对象 Y 轴的（垂直方向）扭曲                                                                                  |
| `skew(x-angle,y-angle)`                     | 指定对象 斜切扭曲。两个参数分别对应 X 轴和 Y 轴。如果第二个参数未提供，则默认值为 `0`                            |
| `matrix(n,n,n,n,n,n)`                       | 以一个含六值的 `(a,b,c,d,e,f)` 变换矩阵的形式指定一个 2D 变换，相当于直接应用一个 `[a,b,c,d,e,f]` 变换矩阵       |
| `matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)` | 以一个 `4x4` 矩阵的形式指定一个 3D 变换                                                                          |
| `perspective(n)`                            | 指定透视距离                                                                                                     |

### transofm-origin

[transform-origin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin) 用于更改一个元素变形的原点。

示例：

```css
/* One-value syntax */
transform-origin: 2px;
transform-origin: bottom;

/* x-offset | y-offset */
transform-origin: 3cm 2px;

/* x-offset-keyword | y-offset */
transform-origin: left 2px;

/* x-offset-keyword | y-offset-keyword */
transform-origin: right top;

/* y-offset-keyword | x-offset-keyword */
transform-origin: top right;

/* x-offset | y-offset | z-offset */
transform-origin: 2px 30% 10px;

/* x-offset-keyword | y-offset | z-offset */
transform-origin: left 5px -3px;

/* x-offset-keyword | y-offset-keyword | z-offset */
transform-origin: right bottom 2cm;

/* y-offset-keyword | x-offset-keyword | z-offset */
transform-origin: bottom right 2cm;

/* Global values */
transform-origin: inherit;
transform-origin: initial;
transform-origin: unset;
```

### transofrm-style

### translate

`translate()` 用于单独声明平移转换，并独立于 `transform` 属性。

<code src="@example/properties/transform/translate/index.tsx" />

### rotate

`rotate()` 定义将元素围绕 `transform-origin` 旋转而不变形的转换。指定的角度定义了旋转的量度。

语法：

```css
transform: rotate(angle);
```

`angle`指定了 `rotate` 旋转的程度。参数为正时，顺时针旋转；参数为负时，逆时针旋转。180° 旋转称为点反演。

<code src="@example/properties/transform/rotate/index.tsx" />

### scale

`scale()`

该变换通过一个二维向量确定在一个方向缩放的多少。如果缩放向量的两个坐标是相等的，那么所讲是均等的，或者说是各向同的，同时元素的形状是被保持的。这种情况下进行的是位似变换。

当坐标值处于区间 `[-1, 1]` 之外时，该变换将在相应的坐标方向上放大该元素，当处在区间之中时，该变换将在相应的坐标方向上缩小该元素。当值为 1 时将不进行任何处理，当为负数时，将进行像素点反射之后再进行大小的修改。

语法：

```css
transform: scale(sx, sy);
```

参数说明：

| 参数 | 说明                                                                                               |
| :--- | :------------------------------------------------------------------------------------------------- |
| `sx` | 表示缩放向量的横坐标                                                                               |
| `sy` | 表示缩放向量的纵坐标。如果未设置，则他的默认值被设置为 `sx`。 从而使得元素在保持原有形状下均等缩放 |

<br />

<code src="@example/properties/transform/scale/index.tsx" />

### skew

`skew()` 用于定义元素在二维平面上的倾斜转换。

语法：

```css
transform: skew(x, y);
```

参数说明：

| 参数 | 说明                                                                         |
| :--- | :--------------------------------------------------------------------------- |
| `x`  | 表示用于沿横坐标扭曲元素的角度                                               |
| `y`  | 表示用于沿纵坐标扭曲元素的角度。如果未定义，则其默认值为 0，导致纯水平倾斜。 |

<br />

<code src="@example/properties/transform/skew/index.tsx" />

### matrix

`matrix()` 指定了一个由指定的 6 个值组成的 2D 变换矩阵。这种矩阵的常量值是隐含的，而不是由参数传递的；其他的参数是以列优先的顺序描述的。

### perspective

`perspective` 用于设置从何处查看一个元素的角度。

<code src="@example/properties/transform/perspective/index.tsx" />

### perspective-origin

透视原点

### backface-visibility

`backface-visibility` 用于指定元素背面面向用户时是否可见。

属性值：

| 参数      | 说明                                 |
| :-------- | :----------------------------------- |
| `visible` | 指定元素背面可见，允许显示正面的镜像 |
| `hidden`  | 指定元素背面不可见                   |

## 参考资料

- [理解 CSS3 transform 中的 Matrix（矩阵）](https://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-%E7%9F%A9%E9%98%B5/)
- [如何理解 transform 的 matrix() 用法](https://cloud.tencent.com/developer/article/1449235)
