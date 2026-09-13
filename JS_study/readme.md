# 1. JS数组常用的方法有哪些？

- 增: push,unshift,splice,解构,concat
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
