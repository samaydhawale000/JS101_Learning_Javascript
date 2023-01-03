
let cc = "masya"

let empty = ""
let x = Math.floor((cc.length-1)/2)

for (let i=x; i>=0;i--){
 empty = empty+cc[i]
}

for (let i = cc.length-1; i>x; i--){
  empty = empty+cc[i]
}
console.log(empty)



// prime Number

let num = 4;

let prime = 0

for (let i = 1; i<=num; i++){
  if(num%i==0){
    prime ++
  }
  
}if(prime == 2){
  console.log("Yes")
}else{
  console.log("No")
}