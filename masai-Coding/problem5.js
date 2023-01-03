"use strict"

let n3 = 1;
let total = 0
let count = 0; 

while(n3<=100){
  if(n3%2==0){
      total = total+n3
  }
  n3++;
  count++;
}
console.log(total/count);

console.log("-----------")

// ********For loop*********

for(let i=1;i<=5;i++){
  console.log("Hello");
}

console.log("-----------")

let total1 = 0;
let count1 = 0;

for (let i= 0;i<=100;i++){
  if(i%2==0){
    total1 = total1+i
  }
  i++;
  count1++;
}
console.log(total1/count1)

console.log("-----------")

let sum  = 0;

for (let i =0; i<=10; i++){
  sum = sum+i
}
console.log(sum)

console.log("-----------")
// horizontal number printing

let  b =  ""
for (let i =0; i<=10; i++){
  b = b+i+" ";
}
console.log(b)

console.log("-----------")

let  c = "";
for (let i=0; i<=5; i++){
  c=c+i+"*"
}
console.log(c)

console.log("-----------")

let product = 1;

for(let i=1; i<=5; i++){
  product = product*i
}
console.log(product)

console.log("-----------")

let sum2 = 0;

for (let i = 0;  i<=20; i++){
  if(i%2==0 && i%5==0){
    sum2 = sum2+i
  }
}
console.log(sum2)
