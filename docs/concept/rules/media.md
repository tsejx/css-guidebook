---
group:
  title: 规则
  order: 3
nav:
  title: 基础
  order: 1
title: '@media 媒体查询'
order: 4
---

# @media 媒体查询

媒体查询是 CSS3 引入的新的操作表达式。其允许开发者基于设备的不同特性来应用不同的样式申明。其中，通过对视口宽度的判断，对网页输出不同的展示效果。

## 规范

媒体查询包含一个可选的媒体类型和零个或多个表达式, 根据媒体特性限制样式表的作用域。例如 `width`、`height`、`color` 等 CSS3 中的媒体查询让内容的呈现可以根据设备进行变化，而不需要改变内容本身。

### Media Queries Level 2

在 CSS2 中，媒体查询只使用于 `<style>` 和 `<link>` 标签中，以 `media` 属性存在。

`media` 属性用于为不同的媒介类型规定不同的样式，而真正广泛使用的媒介类型是 `screen`、`print` 和 `all`。

| 属性值     | 说明                                         |
| ---------- | -------------------------------------------- |
| all        | 适合所有设备                                 |
| screen     | 计算机屏幕（默认值）                         |
| print      | 打印预览模式 / 打印页                        |
| tty        | 电传打字机以及使用等宽字符网格的类似媒介     |
| tv         | 电视类型设备（低分辨率、有限的屏幕翻滚能力） |
| projection | 反映机                                       |
| handheld   | 手持设备（小设备，有限宽带）                 |
| braille    | 盲人用点字法反馈设备                         |
| aural      | 语音合成器                                   |

🌰 **示例**：

```html
<style media="screen, tv">
  .box {
    height: 100px;
    width: 100px;
    background-color: lightblue;
  }
</style>
<div class="box"></div>
```

### Media Queries Level 3

在 `Media Queries Level 3` 规范中，媒体查询的能力被扩展，除了设备的类型，我们可以还获取到诸如窗口宽度、屏幕方向或分辨率等媒体特性(media features)：

- width – 输出设备渲染区域（如可视区域的宽度或打印机纸盒的宽度）的宽度
- height – 输出设备渲染区域（如可视区域的高度或打印机纸盒的高度）的高度
- device-width – 输出设备的宽度（整个屏幕或页的高度，而不是仅是渲染区域）
- device-height – 输出设备的高度（整个屏幕或页的高度，而不是仅是渲染区域）
- orientation – 设备处于横屏（宽度大于高度）模式还是竖屏（高度大于宽度）模式
- aspect-ratio – 输出设备目标显示区域的宽高比
- device-aspect-ratio – 输出设备的宽高比
- resolution – 输出设备的分辨率（像素密度）
- color – 检查设备支持多少种颜色等
- color-index – 输出设备中颜色查询表中的条目数量
- monochrome – 指定了一个黑白（灰度）设备每个像素的比特数
- scan – 检查电视输出设备是顺序扫描还是隔行扫描
- grid – 判断输出设备是网格设备还是位图设备

### Media Queries Level 4

几个有代表性的如：

- update – 根据设备的更新频度区分其类型 (none 如打印机, slow 如电子墨水, fast 正常设备)
- scripting – none 不支持脚本或未启用 | initial-only 仅支持页面初始化脚本 | enabled 支持脚本并且已启用
- pointer – 设备交互的精度 (coarse 不精确如手指, fine 精确如鼠标, none 无指点)
- hover – 设备是否支持悬停状态

## 使用形式

### 基本语法

媒体查询最基本的形式，就是单独或组合使用媒体类型和媒体特性（后者需要置于括号中）。

```css
@media screen {
  body {
    font-size: 20px;
  }
}

@media screen, print {
  body {
    font-size: 20px;
  }
}

@media (width: 30em) {
  nav li {
    display: bloack;
  }
}

@media screen and (width: 30em) {
  nav li {
    display: block;
  }
}
```

### 嵌套

```css
/* 媒体类型套媒体特征 */
@media screen {
  @media (min-width: 20em) {
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  @meida (min-width: 40em) {
    img {
      display: inline-block;
      max-width: 300px;
    }
  }
}
```

### 否定式查询

可以用关键字 `not` 表示一个否定查询；`not` 必须置于查询的一开头并会对整条查询串生效，除非逗号分割的多条。

```css
@media not print {
  body {
    background: url('paisly.png');
  }
}

@media not print and (min-resolution: 1.5dppx) {
  .external {
    background: url('arrow-lowres.png');
  }
}

/* not A or B */
@media not (hover: hover), (pointer: coarse) {
  font-size: 20px;
}
```

```css
/* 非法 */
/*非法：not 不在最前面*/
@media not print and not (min-resolution: 2dppx) {
}

/*非法：not 不在最前面*/
@media screen and not (min-resolution: 2dppx) {
}
```

## 媒体特征

### 根据媒体特性的范围查询

指定一个固定的宽度通常是没有意义的，更多的情况下，我们需要限定的是类似「小于等于」或「大于等于」这样的范围，而大多数媒体特性可以通过添加 `max-` 和 `min-` 前缀达到上述目的

```css
/*0 至 30em*/
@media (max-width: 30em) {
  nav li {
    display: block;
  }
}

/*30em 至 100em*/
@media (min-width: 30em) and (max-width: 100em) {
  nav li {
    display: block;
  }
}
```

| 支持范围选择的特性  | 取值类型              |
| ------------------- | --------------------- |
| aspect-ratio        | 诸如 1024/768 或 16:9 |
| device-aspect-ratio | 诸如 1024/768 或 16:9 |
| color               | 整数                  |
| color-index         | 整数                  |
| width               | 合法宽度              |
| height              | 合法高度              |
| device-width        | 合法宽度              |
| device-height       | 合法高度              |
| monochrome          | 整数                  |
| resolution          | 分辨率高度            |

### 选项式的媒体特性查询

不同于取值连续的范围式查询，很多媒体特性只有几个固定的取值可供选择。

```css
@media screen and (orientation: portarit) {
  #log {
    height: 10vh;
    width: auto;
  }
}
```

| 选项式的媒体特性 | 取值选项                               | 备注                                                               |
| ---------------- | -------------------------------------- | ------------------------------------------------------------------ |
| grid             | 布尔值（使用时直接写成 `grid` 运行）   | 是网格设备还是位图设备                                             |
| hover            | none / on-demand / hover               | 是否支持悬停状态                                                   |
| orientation      | portrait / landscape                   | 设备方向                                                           |
| light-level      | dim / normal /washed                   | 环境光                                                             |
| pointer          | none / coarse / fine                   | 设备交互的精度                                                     |
| scriting         | none / initial-only / enabled          | 是否支持脚本                                                       |
| update           | none / slow / normal                   | 根据设备的更新频率区分其类型                                       |
| scan             | interlace / progressive                | 电视输出设备是顺序扫描还是隔行扫描                                 |
| any-hover        | none / on-demand / hover               |                                                                    |
| any-pointer      | none / coarse / fine                   |                                                                    |
| inverted-colors  | none / inverted                        | useragent 或 OS 是否导致了颜色                                     |
| overflow-block   | none / scroll / optional-paged / paged | 在 block 轴方向，当内容超出初始包含块或视口时，设备或浏览器的行为  |
| overflow-inline  | none / scroll                          | 在 inline 轴方向，当内容超出初始包含块或视觉时，设备或浏览器的行为 |

```css
@media screen and (hover: on-demand) {
  input[type='checkbox'] + label {
    padding: 0.5em;
  }
}

@media screen and (hover: none) and (pointer: coarse) {
  input[type='checkbox'] + label {
    padding: 0.5em;
  }
}
```

## 其他适配

### 针对高分屏的媒体查询

```css
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  /* Retina屏幕下的样式 */
}
```

### 引入外部文件时的媒体查询

```css
@import url(typography.css) screen, print;

@import url(hi-res-icons.css) (min-resolution: 1.5dppx), (min-resolution: 96dpi);
```

```html
<!--即使媒体查询不符，样式文件总会被下载-->
<link rel="stylesheet" href="styles.css" type="text/css" media="screen and (max-width: 480px)" />
```

### 在 style 标签上的媒体查询

```html
<style type="text/css" media="screen and (max-width: 480px)">
  body {
    font-size: 20px;
  }
</style>
```

### 利用媒体查询实现图片自适应

```html
<picture>
  <source srcset="large.jpg" media="(min-width: 1024px)" />
  <source srcset="medium.jpg" media="(min-width: 680px)" />

  <!-- fallback -->
  <img src="small.jpg" alt="" />
</picture>
```

看上去很简单，但在实际应用中，考虑到各种情况，可能会是这样：

```html
<picture>
  <source
    src="large.jpg"
    media="( (min-device-pixel-ratio: 1.5) and (min-width: 20.001em) and (max-width: 35.999em) ) or
                 ( (max-device-pixel-ratio: 1.5) and (min-width: 120.001em) ) or
                 ( (min-device-pixel-ratio: 1.5) and (min-width: 60.001em) )"
  />
  <source
    src="medium.jpg"
    media="( (max-device-pixel-ratio: 1.5) and (min-width: 20.001em) and (max-width: 35.999em) ) or
                 ( (max-device-pixel-ratio: 1.5) and (min-width: 60.001em) ) or
                 ( (min-device-pixel-ratio: 1.5) and (min-width: 10.001em) )"
  />
  <source src="small.jpg" />

  <!-- fallback -->
  <img src="small.jpg" alt="" />
</picture>
```

### 扩展阅读：用 srcset 和 sizes 实现更好的图片自适应

- 对于**固定宽度**(不同设备的设计稿上尺寸相同)的图像：

  ```html
  <img src="pic-255.jpg" alt="pic" srcset="pic-383.jpg 1.5x, pic-510.jpg 2x" />
  ```

- - `srcset` 属性列出了浏览器可以选择加载的源图像池，是一个由逗号分隔的列表。
  - `x` 描述符表示图像的设备像素比
  - 浏览器根据运行环境，利用这些信息来选择适当的图像
  - 不理解 `srcset` 的浏览器会直接加载 `src` 属性中声明的图像

- **可变宽度**（根据设备有不同显示策略）的图像：基于 viewport 选择

  ```html
  <img
    srcset="pic-480.jpg 480w, pic-640.jpg 640w, pic-960.jpg 960w, pic-1280.jpg 1280w"
    sizes="(max-width: 400px) 100vw,
          (max-width: 960px) 75vw,
          640px"
    src="pic-640.jpg"
    alt="pic"
  />
  ```

- - `w` 描述符告诉浏览器列表中的每个图象的宽度
  - 如果 `srcset` 中任何图像使用了 w 描述符，那么必须要设置 sizes 属性
  - `sizes` 属性有两个值：第一个是媒体条件；第二个是源图尺寸值
  - 源图尺寸值不能使用百分比
  - 浏览器利用 `srcset` 和 `sizes` 信息来自动选择最符合规定条件的图像
  - 无法确定究竟显示哪张图像，因为每个浏览器挑选适当图像的算法有差异

### 扩展阅读：用 `image-set()` 设置响应式的背景图片

```css
body {
  /*
    为普通屏幕使用 pic-1.jpg，
    为高分屏使用 pic-2.jpg，
    如果更高的分辨率则使用 pic-3.jpg，比如印刷
    */
  background-image: image-set(
    url(../images/pic-1.jpg) 1x,
    url(../images/pic-2.jpg) 2x,
    url(../images/pic-3.jpg) 600dpi
  );
}
```

### 在 Javascript 中使用媒体查询

- 全局方法 `matchMedia()`，其唯一参数为一个合法的媒体查询字符串

  ```js
  var isWideScreen = matchMedia('(min-width: 960px)');
  console.log(isWideScreen.matches); // 是否匹配 true | false
  console.log(isWideScreen.media); // "(min-width: 960px)"
  ```

  以下情况下 `matches` 属性会返回 `false`：

- - 媒体查询条件不匹配
  - 媒体查询字符串语法错误
  - 浏览器不支持该查询特性

- 监听媒体的更改

  ```js
  function toggleClass(mq) {
    if (mq.matches) {
      document.body.classList.add('widescreen');
    } else {
      document.body.classList.remove('widescreen');
    }
  }
  //添加监听
  isWideScreen.addListener(toggleClass);
  //撤销监听
  isWideScreen.removeListener(toggleClass);
  ```

### 在常见框架中的应用

- 在 Bootstrap 中控制 `.container` 的宽度和内边距

  ```css
  @media (min-width: 1200px) {
    .container {
      padding-right: 15px;
      padding-left: 15px;
    }
  }

  @media (min-width: 576px) {
    .container {
      width: 540px;
      max-width: 100%;
    }
  }

  @media (min-width: 768px) {
    .container {
      width: 720px;
      max-width: 100%;
    }
  }

  ...
  ```

- 在 Bootstrap 中控制 `grid`

  ```css
  @media (min-width: 768px) {
    .col-md-1 {
      max-width: 8.333333%;
    }
    .col-md-2 {
      max-width: 16.666667%;
    }
    .col-md-3 {
      max-width: 25%;
    }
    .col-md-4 {
      max-width: 33.333333%;
    }
    .col-md-5 {
      max-width: 41.666667%;
    }
    ...
  }
  ...
  ```

### 在 Chrome DevTools 中模拟不同尺寸设备

调试工具打开，选中调试工具左上角的手机图标：

- 方式 1：设备型号选 `Responsive`，在同一任务栏最右侧的菜单中选择 `add device pixel ratio`，在出现的菜单中选择 DPR 1、2、3
- 方式 2：设备型号选 `Edit` => `Add custom device`，并在 `Device pixel ratio` 中填入需要的值

## 设备自适应相关参数

- 大尺寸：width > 1024px
- 中尺寸：768px < width < 1024px
- 小尺寸：width < 768px

---

**参考资料**：

- [全面理解 CSS 媒体查询](https://juejin.im/entry/595b6208f265da6c3902041e)
