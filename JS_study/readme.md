# 1. JS数组常用的方法有哪些？

- 增: push,unshift,splice(原地修改),解构,concat
- 删: pop,shift,splice,slice
- 改:
- 查: indexOf,LastIndexOf,find,findIndex,includes
- 遍历: forEach,map,filter,some,every,reduce,reduceRight
- 其他: sort,reverse,toReversed,toString,join,flat

# 2. 字符串常用的方法有哪些？

- 增: concat
- 删: slice,substring
- 改: replace,trim,trimStart,trimEnd,padStart,padEnd,toLowerCase,toUpperCase
- 查: indexOf,LastIndexOf,includes,startsWith,endsWith
- 其他: split,match,search

# 3. 谈一谈JS中的类型转换机制

- 类型

1. 原始类型
   string, number, boolean, null, undefined, symbol, bigint
2. 引用类型
   object, array, function, date, regexp, Map, Set

- 类型转换分为
  1. 隐式转换：发生在运算符、比较运算符、条件语句等场景中，通常都是将其他类型转换为原始类型
  2. 显式转换：人为调用 Number()、String()、Boolean()等函数
- 特点
  - 隐式转换：
    1. 条件语句会导致v8把其他类型转成boolean类型
    2. 大部分运算情况都会转成number类型
      *  +被作为二元运算符时，一旦有一元被转成string类型，结果就会是string类型
    3. 任何引用类型转boolean都是True
    4. 引用类型转原始类型 中间v8会调用一个 ToPrimitive()方法
      1. 调用valueOf()方法
      2. 调用toString()方法
      3. 如果得不到原始类型，那么就报错

    - toString()有三个版本
      1. Object.prototype.toString()  ==>  [object Object]
      2. Array.prototype.toString()  ==>  数组中的元素用逗号拼接的字符串
      3. xxx.prototype.toString()  ==>  直接将值用引号包裹起来

# 4. == 与 === 的区别？

# 5. 聊一下js中的拷贝
  - 是什么
    js中类型分为
    1. 原始类型：值存在调用栈中
    2. 引用类型：值存在堆内存中，调用栈中存储的是引用地址值
  - 拷贝是克隆一份原对象，分为深拷贝和浅拷贝
    1. 浅拷贝：只将对象的第一层属性拷贝到新对象中，碰到引用地址也直接照搬
    2. 深拷贝：层层拷贝，原始值照搬，引用类型的值会创建新的地址

  - 特点：
    1. 常见的浅拷贝方法：
      1. 解构赋值
      2. Object.assign()
      3. slice()
      4. concat()
    2. 常见的深拷贝方法：
      1. JSON.parse(JSON.stringify()) 不能拷贝函数，symbol, undefined, bigint. 不能处理循环引用
      2. structuredClone()  除了函数和Symbol，其他类型都能深拷贝
      3. MessageChannel()

  - 实现原理
    1. 浅拷贝: for in 循环遍历对象的属性，将属性赋值给新对象的属性
    2. 深拷贝: for in 循环遍历对象的属性，将原始值拷贝到新对象中，引用类型做递归拷贝
   

# 6. 聊一下js中的闭包问题
  - 是什么
    根据作用域的查找规则，内部函数一定可以访问外部函数的变量，另外一个函数执行完毕后函数的执行上下文就会被销毁。当一个函数A内部定义了一个函数B，函数B引用了函数A中的变量，那么函数A在执行完毕后上下文就不会完全销毁，而是会将函数B需要的变量以一个集合的形式保存下来。这个集合就是闭包。

  - 特点：
    定义私有变量，防止全局变量污染，适合做模块化开发
    内存泄漏

  - 场景:
    1. 封装模块
    2. 防抖节流