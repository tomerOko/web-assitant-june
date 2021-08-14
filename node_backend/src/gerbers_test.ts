

//
interface result{
  small:number|null,
  big:number|null
}

const run_checks =(iterations:number, length:number, range:number):void => {
  let test:number[][] = new Array(iterations).fill([]).map(val => rundom_array(range, length))
  for(let i=0; i<iterations; i++){
     const target = choose_value(test[i])
     const result:result = check_gerber(test[i], target)
    //  console.log(test[i], target, result)
  }
}

const check_gerber = (arr:number[], val:number):result=>{
  let small=0, big=arr.length-1
  let sum = arr[small]+arr[big]
  // console.log({arr, val, sum , small, big})
    while(sum!==val&&small<big){
      sum>val?big--:small++
      sum = arr[small]+arr[big]
    }
  if(big==small)
    console.log({small, big})
  return{small, big}
}

const choose_value =(arr:number[]):number =>{
  let a=0,b=0
  a = Math.floor(Math.random()*(arr.length-1))
  b=a
  while(b==a){
  b = Math.floor(Math.random()*(arr.length-1))
  }
  return arr[a]+arr[b]
}

const rundom_array = (range:number, length:number):number[]=>{
  return new Array(length).fill(0).map( val => rundom_in_range(range)).sort((a,b)=>a-b)
}

const rundom_in_range = (range:number):number =>{
  return Math.floor(Math.random()*2*range)-range
}


// console.log(rundom_in_range(10))
// console.log(rundom_array(60,12))
// console.log(choose_value(rundom_array(60,12)))
run_checks(100, 29, 40)





// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })