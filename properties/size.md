# 尺寸

* display
* width / height
* margin
* padding
* border


## display

| 值           | 描述                                                        |
| ------------ | ----------------------------------------------------------- |
| inline       | 默认。此元素会被显示为内联元素，元素前后没有换行符。        |
| block        | 此元素将显示为块级元素，此元素前后会带有换行符。            |
| none         | 此元素不会被显示（隐藏）。                                  |
| inline-block | 行内块元素。（CSS2.1 新增的值）                             |
| list-item    | 此元素会作为列表显示。                                      |
| table        | 此元素会作为块级表格来显示（类似 table），表格前后带有换行符 |


## border





### 画三角形

首先将元素的宽度、高度设为 0，然后设置边框样式。

```css
.triangle {
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 50px solid #ff0000;
}
```

