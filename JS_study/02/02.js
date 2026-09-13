//遍历数组
arr=[1,2,3,4,5,6,7,8,9,10]

arr.forEach((item,index,array)=>{
  console.log(item,index)
})

arr.map((item,index,array)=>{
  return item+1
})

arr.filter((item,index,array)=>{
  return item>20
})

some((item,index,array)=>{
  return item>20
})

every

reduce
