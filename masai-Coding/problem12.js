let num = 10

for (let i=1; i<=num; i++){
 let sum = 0;
  for (let j=1; j<=i; j++){
    if(j%2==0){
      sum = sum+ j
    }
  }
  console.log(sum)
}


for (let i=1; i<=4;i++){
  s= ""
  for(let j =1; j<=4; j++){
    if( j==2){
      console.log(s=s+ " ")
    }else{
      console.log(s=s+ "*")
    }
  }

}
console.log(s)