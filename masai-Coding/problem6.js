
let x = 27;
if (x ** (1 / 3) < 4 && x % 3 == 0) {
  console.log(true)
} else {
  console.log(false)
}


let x2=1;
let num =0;

while(x2 <=10){
  if(x2%2 !=0){
    num = 3*x2;
    if(num>9){
      console.log(num)
    }
  }
  x2++
}
console.log(x2)


let i =10;
while(i>=1){
  console.log(i);
  i--
}


for (let i=10; i>=1 ; i--){
  if(i==4){
    break;
  }
  console.log(i)
}



for (let i=1; i<=10 ; i++){
  if(i==5 || i==6 || i==7){
    continue;
  }
  console.log(i)
  
}
