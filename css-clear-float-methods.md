# CSS清除浮动的方法大全


在各种浏览器中显示效果也有可能不相同，这样让清除浮动更难了，下面总结8种清除浮动的方法，测试已通过 ie chrome firefox opera 

清除浮动是每一个 web前台设计师必须掌握的机能。css清除浮动大全，共8种方法。 

浮动会使当前标签产生向上浮的效果，同时会影响到前后标签、父级标签的位置及 width height 属性。而且同样的代码，在各种浏览器中显示效果也有可能不相同，这样让清除浮动更难了。解决浮动引起的问题有多种方法，但有些方法在浏览器兼容性方面还有问题。

下面总结8种清除浮动的方法（测试已通过 ie chrome firefox opera，后面三种方法只做了解就可以了）： 

## 1.父级div定义 height 
```javascript
 
  <style type="text/css"> 
  .div1{background:#000080;border:1px solid red;/*解决代码*/height:200px;} 
  .div2{background:#800080;border:1px solid red;height:100px;margin-top:10px} 
  .left{float:left;width:20%;height:200px;background:#DDD} 
  .right{float:right;width:30%;height:80px;background:#DDD} 
  </style> 
  <div class="div1"> 
  <div class="left">Left</div> 
  <div class="right">Right</div> 
  </div> 
  <div class="div2"> 
  div2 
  </div> 

```

- 原理：父级div手动定义height，就解决了父级div无法自动获取到高度的问题。 

- 优点：简单、代码少、容易掌握 

- 缺点：只适合高度固定的布局，要给出精确的高度，如果高度和父级div不一样时，会产生问题 

- 建议：不推荐使用，只建议高度固定的布局时使用 
