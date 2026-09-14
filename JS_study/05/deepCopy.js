const user = {
    name: '张三',
    age: 18,
    sex: '男',
    like: ['篮球', '足球', '跑步']
}

function deepCopy(obj) {
    const newObj = Array.isArray(obj) ? [] : {}
    for (const key in obj){
        if (obj.hasOwnProperty(key)){
            //newObj[key] = obj[key]

            if (typeof obj[key] === 'object' && obj[key] !== null) {
                newObj[key] = deepCopy(obj[key])
            }else{
                newObj[key] = obj[key]
            }
        }
    }
    return newObj
}
