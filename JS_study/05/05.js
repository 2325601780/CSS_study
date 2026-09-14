const user = {
    name: '张三',
    age: 18,
    sex: '男',
    like: ['篮球', '足球', '跑步']
}

const user2 = {...user}

user2.age = 24
console.log(user);
