function foo(){
    let name = '张三'
    let age = 18

    let bar = () => {
        console.log(name + age)
    }
    return bar
}

let res = foo()
res()

//调用栈
//1.全局预编译，创建全局上下文，变量环境词法环境
//2.变量声明
//3.函数体声明
//4.全局执行

// 函数体内预编译
//1.上下文
//2.变量声明
//3.形参实参统一
//4.函数体内找函数声明
