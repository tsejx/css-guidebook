### 定位 Position

| 属性值     | 描述                     | 可取值                                              |
| ---------- | ------------------------ | --------------------------------------------------- |
| `position` | 定位方式                 | `static \| absolute \| relative \| fixed \| sticky` |
| `z-index`  | 层叠顺序                 | `auto \| <number>`                                  |
| `top`      | 与最近定位父级顶部相距   | `auto \| <length> \| <percentage>`                  |
| `right`    | 与最近定位父级右边缘相距 | `auto \| <length> \| <percentage>`                  |
| `bottom`   | 与最近定位父级底部相距   | `auto \| <length> \| <percentage>`                  |
| `left`     | 与最近定位父级左边缘相距 | `auto \| <length> \| <percentage>`                  |

### 尺寸 Dimensions

| 属性值       | 描述     | 可取值             |
| ------------ | -------- | ------------------ |
| `width`      | 宽度     | `auto \| <length>` |
| `max-width`  | 最大宽度 | `none \| <length>` |
| `min-width`  | 最小宽度 | `none \| <length>` |
| `height`     | 高度     | `auto \| <length>` |
| `max-height` | 最大高度 | `none \| <length>` |
| `min-height` | 最小高度 | `none \| <length>` |

### 内边距 Padding

| 属性值           | 描述         | 可取值     |
| ---------------- | ------------ | ---------- |
| `padding`        | 内边距       | `<length>` |
| `padding-top`    | 顶部内边距   | `<length>` |
| `padding-right`  | 右边缘内边距 | `<length>` |
| `padding-bottom` | 底部内边距   | `<length>` |
| `padding-left`   | 左边缘内边距 | `<length>` |

### 边框 Border

| 属性值          | 描述           | 可取值                                                       |
| --------------- | -------------- | ------------------------------------------------------------ |
| `border`        | 边框复合属性   | `border-width \|\| border-style \|\| border-color`           |
| `border-color`  | 边框颜色       | `<color>`                                                    |
| `border-style`  | 边框样式       | `none \| hidden \| dotted \| dashed \| solid \| double \| groove \| ridge \| inset \| outset` |
| `border-width`  | 边框宽度       | `medium \| thin \| thick \| <length>`                        |
| `border-top`    | 上边框复合属性 | `border-width \|\| border-style \|\| border-color`           |
| `border-right`  | 右边框复合属性 | `border-width \|\| border-style \|\| border-color`           |
| `border-bottom` | 底边框复合属性 | `border-width \|\| border-style \|\| border-color`           |
| `border-left`   | 左边框复合属性 | `border-width \|\| border-style \|\| border-color`           |

不累赘描述，省略以下多个属性值：

`border-top-color`、`border-top-style`、`border-top-width`、`border-right-color`、`border-right-style`、`border-right-width`、`border-bottom-color`、`border-bottom-style`、`border-bottom-width`、`border-left-color`、`border-left-style`、`border-left-width`

### 外边距 Margin

| 属性值          | 描述         | 可取值             |
| --------------- | ------------ | ------------------ |
| `margin`        | 外边距       | `auto \| <length>` |
| `margin-top`    | 顶部外边距   | `auto \| <length>` |
| `margin-right`  | 右边缘外边距 | `auto \| <length>` |
| `margin-bottom` | 底边外边距   | `auto \| <length>` |
| `margin-left`   | 左边缘外边距 | `auto \| <length>` |

### 布局 Layout

| 属性值       | 描述                       | 可取值                                      |
| ------------ | -------------------------- | ------------------------------------------- |
| `clear`      | 不允许有浮动的边际         | `none \| left \| right \| both`             |
| `float`      | 浮动属性                   | `none \| left \| right`                     |
| `clip`       | 元素可视区域               | `auto \| rect(number numebr number number)` |
| `overflow`   | 内容超出指定宽高内容管理   | `visible \| auto \| hidden \|scroll`        |
| `overflow-x` | 内容超出指定宽度内容管理   | `visible \| auto \| hidden \|scroll`        |
| `overflow-y` | 内容超出指定高度内容管理   | `visible \| auto \| hidden \|scroll`        |
| `display`    | 元素显示模式               | 详细信息留意表格注释                        |
| `visibility` | 元素可见性（保留物理空间） | `inherit \| visible \| collapse \| hidden`  |

⚠️ **注意：**元素显示模式

`block | none | inline | compact | marker | inline-table | list-item | run-in | table | table-caption | table-cell | table-column | table-column-group | table-footer-group | table-header-group | table-row | table-row-group `

### 字体 Font

| 属性值                    | 说明         | 可取值                                                       |
| ------------------------- | ------------ | ------------------------------------------------------------ |
| `font`                    | 字体复合属性 | 详细信息留意表格注释                                         |
| `color`                   | 字体颜色     | `<color>`                                                    |
| `font-family`             | 字体名称     | `<name>` `cursive \| fantasy \| monospace \| serif \| sans-serif` |
| `font-size`               | 字体大小     | `<length>`                                                   |
| `font-style`              | 字体样式     | `normal \| italic \| oblique`                                |
| `font-weight`             | 字体粗细     | `normal \| bold \| bolder \| lighter \| <number>`            |
| `font-stretch`            | 字体拉伸变形 |                                                              |
| `text-decoration`         | 文本修饰     | `none \|\| underline \|\| blink \|\| overline \|\| line-through` |
| `text-underline-position` | 下划线位置   | `below \| above`                                             |
| `text-shadow`             | 文本阴影     | `<color> \|\| <length> \|\| <lenth> \|\| <opacity>`          |
| `font-variant`            | 大写字母形态 | `normal \| small-caps`                                       |
| `text-transform`          | 文本的大小写 | `none \| capitalize \| uppercase \| lowercase`               |
| `line-height`             | 行高         | `normal \| <length>`                                         |
| `letter-spacing`          | 文字间隔     | `normal \| <length>`                                         |
| `word-spacing`            | 单词间隔     | `normal \| <length>`                                         |

⚠️ **注意：** `font` 属性可取值有两种方式


* `font-style || font-variant || font-weight || font-size || line-height || font-family`
* `caption | icon | menu | message-box | small-caption | status-bar`

### 文本 Text

| 属性值               | 说明                                   | 可取值                                                       |
| -------------------- | -------------------------------------- | ------------------------------------------------------------ |
| `text-indent`        | 文本缩进                               | `<length>`                                                   |
| `text-overflow`      | 是否使用省略标记文本溢出               | `clip \| ellipsis`                                           |
| `vertical-align`     | 内容对齐方式                           | `baseline \| sub \| super \| top \| text-top \| middle | bottom \| text-bottom \| <length>` |
| `text-align`         | 文本居中                               | `left \| right \| center \| justify`                         |
| `layout-flow`        | 文本流动和方向                         | `horizontal \| vertical-ideographic`                         |
| `writing-mode`       | 书写方向                               | `lr-tb \| tb-rl`                                             |
| `direction`          | 文本流的方向                           | `ltr \| rtl \| inherit`                                      |
| `unicode-bidi`       | 同页面不同方向读进的文本显示           | `normal \| bidi-overrid \| embed`                            |
| `word-break`         | 文本的字内换行行为（英文）             | `normal \| break-all \| keep-all`                            |
| `line-break`         | 日文文本的换行规则                     | `normal \| strict`                                           |
| `white-space`        | 空格的处理方式                         | `normal \| pre \| nowrap`                                    |
| `word-wrap`          | 当前行超过容器边界是否断开转行         | `normal \| break-word`                                       |
| `text-autospace`     | 文本的自动空格和紧缩空格宽度调整的方式 | `none \| ideograph-alpha \| ideograph-numeric \| ideograph-parenthesis \| ideograph-space` |
| `text-kashida-space` | 拉伸字符来调节文本行排列               | `<length>`                                                   |
| `text-justify`       | 文本的对齐方式                         | `auto \| inter-word \| newspaper \| distribute \| distribute-all-lines \| inter-ideograph` |

### 背景 Background

| 属性值                   | 描述                         | 可取值                                                       |
| ------------------------ | ---------------------------- | ------------------------------------------------------------ |
| `background`             | 背景属性的复合属性           | `background-color \|\| background-image \|\| background-repeat \|\| background-attachment \|\| background-position` |
| `background-attachment`  | 背景图像是随内容滚动还是固定 | `scroll \| fixed`                                            |
| `background-color`       | 背景颜色                     | `<color>`                                                    |
| `background-image`       | 背景图像                     | `none \| url(url)`                                           |
| `background-position`    | 背景图像位置                 | `<length> \|\| <length>` `<position> \|\| <position>`        |
| `background-positionX`   | 背景图像横坐标位置           | `<length> \| left \| center \| right`                        |
| `background-positionY`   | 背景图像纵坐标位置           | `<length> \| left \| center \| right`                        |
| `background-repeat`      | 背景图像是否及如何铺排       | `repeat \| no-repeat \| repeat-x \| repeat-y`                |
| `layer-background-color` | 整个区域的背景颜色           | `transparent \| <color>`                                     |
| `layer-background-image` | 整个区域的背景图像           | `none \| url(url)`                                           |

### 轮廓 Outline

| 属性值          | 描述         | 可取值                                                       |
| --------------- | ------------ | ------------------------------------------------------------ |
| `outline`       | 轮廓复合属性 | `outline-color \|\| outline-style \|\| outline-width`        |
| `outline-color` | 轮廓颜色     | `<color> \| invert`                                          |
| `outline-style` | 轮廓样式     | `none \| dotted \| dashed \| solid \| double \| groove \| ridge \| inset \| outset` |
| `outline-width` | 轮廓宽度     | `medium \| thin \| thick \| <length>`                        |

### 内容 Content

| 属性值              | 描述                                         | 可取值                         |
| ------------------- | -------------------------------------------- | ------------------------------ |
| `include-source`    | 插入另一个文档到当前文档，取代当前元素的内容 | `url(url)`                     |
| `quotes`            | 元素内使用的嵌套标记                         | `none \| <string>`             |
| `content`           | 在元素前或后显示内容                         | 详细信息留意表格注释           |
| `counter-increment` | 设定当一个 selector 发生时计数器增加的值     | `none \| <identifier number>`  |
| `counter-reset`     | 指定 selector 的计数器复位                   | `none \| <indentifier number>` |

⚠️ **注意：**`content` 属性值

`attr(alt) \| counter(name) \| counter(name, list-style-type) \| counters(name, string) \| counters(name, string, list-style-type) \| no-close-quote \| no-open-quote \| close-quote \| open-quote \| <string> \| url(url)`

### 列表 List

| 属性值                | 描述                       | 可取值                                                       |
| --------------------- | -------------------------- | ------------------------------------------------------------ |
| `list-style`          | 列表复合属性               | `list-style-image \|\| list-style-position \|\| list-style-type` |
| `list-style-image`    | 列表项标记的图像           | `none \| url(url)`                                           |
| `list-style-position` | 列表项标记如何根据文本排列 | `outside \| inside`                                          |
| `list-style-type`     | 列表项标记                 |                                                              |

### 其他属性 Classification

| 属性值     | 描述                        | 可取值                                                  |
| ---------- | --------------------------- | ------------------------------------------------------- |
| `behavior` | 设置或检索对象的 DHTML 行为 | `url(url) \| url(#objID) \| url(#default#behaviorName)` |
| `zoom`     | 缩放比例                    | `normal \| <number>`                                    |
| `cursor`   | 鼠标指针                    | 详细信息留意表格注释                                    |
| `filter`   | 滤镜效果                    | `<filter>`                                              |

⚠️ **注意：**

`auto \| crosshair \| default \| hand \| move \| help \| wait \| text \| w-resize \| s-resize \| n-resize \| e-resize \| ne-resize \| sw-resize \| se-resize \| nw-resize \| pointer \| url(url)`

