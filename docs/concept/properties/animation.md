---
title: 动画
order: 7
group:
  title: 属性
  order: 2
nav:
  title: 基础
  order: 1
---

# 动画

- name 用来调用@keyframes 定义好的动画，与@keyframes 定义的动画名称一致
- duration 指定元素播放动画所持续的时间
- timing-function 规定速度效果的速度曲线，是针对每一个小动画所在时间范围的变换速率
- delay 定义在浏览器开始执行动画之前等待的时间，值整个 animation 执行之前等待的时间
- iteration-count 定义动画的播放次数，可选具体次数或者无限(infinite)
- direction 设置动画播放方向：normal(按时间轴顺序),reverse(时间轴反方向运行),alternate(轮流，即来回往复进行),alternate-reverse(动画先反运行再正方向运行，并持续交替运行)
- play-state 控制元素动画的播放状态，通过此来控制动画的暂停和继续，两个值：running(继续)，paused(暂停)
- fill-mode 控制动画结束后，元素的样式，有四个值：none(回到动画没开始时的状态)，forwards(动画结束后动画停留在结束状态)，backwords(动画回到第一帧的状态)，both(根据 animation-direction 轮流应用 forwards 和 backwards 规则)，注意与 iteration-count 不要冲突(动画执行无限次)

* animation-name 关键帧名称
* animation-duration 持续时间
* animation-timing-function 设置动画如何完成一个周期
* animation-delay 延迟间隔
* animation-iteration-count 播放次数
* animation-direction 轮流反向播放动画

animation-fill-mode

- none
- forwards 动画结束后，动画将应用该属性
- backwards 动画将应用在 animation-delay 定义期间启动动画的第一次迭代的关键帧中定义的属性值
- both 动画遵循 forwards 和 backwards 的规则

animation-play-state

initial
inherit

http://cssanimate.com/
http://www.shouce.ren/example/show/s/6869

- ease 默认模式，慢快慢
- linear 匀速
- ease-in 由慢到快（加速）
- ease-out 由快到慢（减速）
- ease-in-out （开始）很慢-快-变慢-很慢（结束）
- backgroung-position 属性能够定位到你需要的图标，x 横轴 正数向右边，负数向右；y 轴，正数向下，负数向上

animation: name duration function delay count;

//语法:
animation:动画名称 动画时间 运动曲线 何时开始 播放次数 是否反方向;
/\*
默认情况下，动画执行完毕都会恢复原样
参数 1：动画名
参数 2：动画持续时间
参数 3：延迟时间
参数 4：动画曲线 steps linear 这些
参数 5：动画次数
参数 6：是否恢复原样，默认为恢复，加一个 forwards 就代表不恢复(就变成动画最终的样子)
参数 7：alternate：加这个东西就代表让元素恢复的时候也有动画效果
恢复的时候也算一次动画，所有如果为 2，那么一次到动画目的一次返回就没了
normal：默认值就是用动画效果到最终目的
reverse：先闪现最终目的，再用动画效果回到最初的值
alternate-rever：相当于就是 reverse，只是比 reverse 多了一个动画恢复

关于几个值，除了名字，动画时间，延时有严格顺序要求其它随意.
\*/

```css
   //规定动画语法:from...to...定义的是从开始到结束两个状态

   @keyframes 动画名称 {
	  from{ 开始位置 }  0%
	  to{  结束  }  100%
	}

  //规定各个阶段不同的状态的动画(不只有开始于结束状态)
  @keyframes 动画名称 {
	    0% {  }
	    n1% {   }
	    n2% {   }
	    n3% {   }
	    n4% {   }
	    .........
	    100% {  }
  }
```

```css
@keyframes goback {
  0% {
  }
  49% {
    transform: translateX(1000px);
  }
  55% {
    transform: translateX(1000px) rotateY(180deg);
  }
  95% {
    transform: translateX(0) rotateY(180deg);
  }
  100% {
    transform: translateX(0) rotateY(0deg);
  }
}

//在规定动画的时候,可以有多个过程节点用来描述动画的状态.
//上面的例子中:goback动画就是在不同的时间点位置不同.
```


https://blog.csdn.net/weixin_42839080/article/details/81546292