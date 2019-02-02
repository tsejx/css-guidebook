---
默认值: static
继承性: 无
版本: CSS2/3
---

## `position`

`position` 属性用于指定元素在文档中的定位方式。

- 当属性值为非 `static` 时，对象层叠关系通过 `z-index` 属性定义实现。

### 属性值

#### static

对象遵循常规流。四个定位偏移属性不会被应用。

#### relative

对象遵循常规流。并且参照自身在常规流中的位置通过四个定位偏移属性进行偏移时不会影响常规流中的任何元素。

对象不具有外边距（margin），但仍然适用于盒模型的内边距（padding）和边框（border）

#### absolute

对象脱离常规流。此时偏移属性参照的是离自身最近的定位祖先元素，如果没有定位的祖先元素，则一直回溯到 `body` 元素。

盒子的偏移位置不影响常规流中的任何元素，其外边距不会与其他任何外边距折叠。

#### fixed

与 `absolute` 一致，但偏移定位是以窗口为参考。当出现滚动条时，对象不会随着滚动。

**兼容性：**

<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" /> IE7 和 IE8 下需要描述 `!DOCTYPE` 才能支持。

#### sticky

（CSS3）对象在常态时遵循常规流。当在屏幕中时按常规流排版，当卷动到屏幕外时则表现如固定定位。

元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。

这个特定阈值指的是四个定位偏移属性之一，换言之，指定四个定位偏移属性作为阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。

**兼容性**：

<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" /> Internet Explorer、Edge 15 及更早 IE 版本不支持 `sticky` 定位。 

<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" /> Safari 需要使用 `-webkit-` 前缀。 

