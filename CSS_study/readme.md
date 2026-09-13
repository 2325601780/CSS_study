# 1. 什么是盒模型

- 是什么
  盒模型是CSS布局的基础，浏览器会把页面中的每一个元素都看成一个矩形的盒子，
  盒子从内到外由四部分组成：

1.  content（内容区）：存放文本、图片等内容，由 width、height 控制大小
2.  padding（内边距）：内容与边框之间的距离，会被背景色填充
3.  border（边框）：盒子的边框，会占据空间
4.  margin（外边距）：盒子与其他盒子之间的距离，透明且不显示背景

- 特点

1.  CSS中有两种盒模型，通过 box-sizing 切换：
    - content-box（标准盒模型/W3C，浏览器默认值）
      元素实际宽度 = width + 左右padding + 左右border
      设置 padding、border 会把盒子撑大
    - border-box（怪异盒模型/IE）
      width 已经包含 content + padding + border
      元素实际宽度 = width，加 padding、border 只会向内挤压内容区
2.  实际开发中通常统一重置：\* { box-sizing: border-box; }，布局更直观，不易撑破容器

- 应用场景

1.  写布局时统一使用 border-box，保证设置 width: 25% 的四个盒子加了 padding 后仍能一行排开
2.  需要让内容与边框之间留白（如按钮内边距、卡片内边距）时用 padding
3.  需要拉开兄弟元素之间的距离时用 margin

# 2. CSS选择器

# 3. px,em,rem,vm,vh

# 4. CSS中有哪些方式可以隐藏一个元素，区别是什么？

- display: none; 不占据文档流，不触发事件

- visibility: hidden; 占据文档流，不触发事件

- opacity: 0; 占据文档流，能触发事件

- position: absolute; 不占据文档流，不触发事件

- clip-path: circle(0px); 占据文档流，不触发事件

# 5. CSS中常见的动画实现方式有哪些？

- transition 过渡动画
  x,y轴移动时间，linear线性动画,
- transform 转变动画
  x轴移动，y轴移动，旋转，缩放，倾斜
- animation 自定义动画
  @keyframes name{
  0%{
  transform: translate(0px,0px);
  }
  100%{
  transform: translate(500px,500px);
  }
  }

# 6. 解释一下回流重绘

当浏览器从服务器接受到了数据包之后会开始解析

1.  解析html，生成DOM树
2.  解析css，生成CSSOM树
3.  合并DOM树和CSSOM树，生成render渲染树
4.  计算页面布局 （回流 || 重排）
5.  GPU绘制页面（重绘）

- 特点
- 回流发生的场景：
  1. 可视区域尺寸变更
  2. 元素尺寸变更
  3. 元素位置变更
  4. 增加或删除元素
  - 元素的几何属性发生变化

- 只重绘发生的场景：
  1. 元素的非几何属性发生变更（如字体，颜色，边框等）
- 如何减少回流
  1.  将父容器先脱离文档流，然后再往父容器中添加子元素，最后将父容器添加到文档流中。
      display: none;
  2.  使用文档片段（DocumentFragment）来批量操作元素，避免回流

## 浏览器的优化队列

会将多个回流操作存入一个队列中，等到队列达到一定阈值或者一定时间之后，才一次性将所有的回流操作全部执行

## 强制刷新优化队列的操作

offsetWidth/offsetHeight/offsetLeft/offsetTop
clientWidth/clientHeight/clientLeft/clientTop
getBoundingClientRect()

# 7. 元素水平垂直居中的实现方案？

1.  父容器 position: relative; 子容器 position: absolute; + margin: auto; --- 子容器已知宽高
2.  父容器 position: relative; 子容器 position: absolute; + margin: 负值; --- 子容器已知宽高
3.  父容器 position: relative; 子容器 position: absolute; + transform: translate(-50%,-50%); --- 子容器未知宽高
4.  flex 布局（弹性布局） 父容器display: flex; justify-content: center; align-items: center; --- 子容器未知宽高
5.  grid 布局（网格布局） 父容器display: grid; justify-content: center; align-items: center; --- 子容器未知宽高
6.  table-cell 布局（表格布局） 父容器display: table-cell; text-align: center; vertical-align: middle; 子容器display: inline-block; --- 子容器未知宽高
7.  text-align: center; + 行高 --- 控制文本水平居中

# 8. 说说你对flex布局的理解 将ul中li水平排列

- 是什么
  flex布局是css中一种常见的布局方式，可以简便的，响应式实现各种布局
- 特点

1.  弹性容器会让子元素默认在主轴上排列
2.  子元素可以按比例继承父容器的空间
3.  允许人为修改弹性方向
4.  可以用order属性来改变子元素的排列顺序

- 特点

1.  做水平垂直居中的布局
2.  做三栏布局

# 9. 说说你是怎么处理浮动的 图片环绕，解决标签重叠

1. clear: both; 清除浮动
2. overflow: hidden; 清除浮动
3. ul::after{ content: ""; display: block; clear: both; } 清除浮动

# 10. 说说你对BFC的理解 解决margin-top的bug

- 是什么
  BFC（Block Formatting Context）是块级格式化上下文，BFC容器是一个独立的渲染区域，它拥有自己的渲染规则，不会受外部元素的影响

- 特点

1.  解决了父子容器margin-top 重叠问题
2.  BFC容器在计算高度时，会考虑浮动元素的高度

- 有什么属性可以触发BFC：
  1. float: left/right;
  2. position: absolute/fixed;
  3. overflow: hidden/auto;
  4. display: flex/inline-flex;

- 应用场景

1.  清除浮动

# 11. 你是怎么做响应式布局的? 不同宽度下布局会自动改变

1. 有些容器可以直接弹性布局
2. % 单位
3. vw/vh 单位
4. rem 单位 + 媒体查询 @media screen and (max-width: 768px) {}

# 12. 怎么用CSS画一个三角形

右边框，下边框置为零
