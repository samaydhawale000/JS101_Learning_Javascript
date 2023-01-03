// for (i=1; i<=5; i++){
//   console.log(i,"farm")

//   let str = ""
// for(let j=1; j<=i; j++){
//   str = str+"*";
// }
// console.log(str)
// }


// for(let i=1; i<=5; i++){
//   let s = ""
//   for (let j=1; j<=i; j++){
//     s = s+ j
//   }
//   console.log(s)
// }


for( let i=1; i<=6; i++){
  let a = ""
  for(let j=1; j<=6; j++){
    if(i==1 || i==6){
      a = a+ "*"
    }else if(j==1 || j==6){
      a = a+"*"
    }else{
      a = a+" "
    }
  }
  console.log(a)
}

console.log("-----------")

for (let i=1; i<=5; i++) {
s =""
  for (let j=1; j<=5; j++){
   
    if(i == 1 || i==5 || j==1 ||j==5 || i==3 ||j==3  ){
       s = s+"*"+" "
    }else{
       s = s+" "+" "
    }
   
}
  console.log(s)
}

console.log("-----------")

for (let i=1; i<=5; i++) {
s =""
  for (let j=1; j<=5; j++){
   
    if(i%2==0 || j%2==0 ){
       s = s+"*"+" "
    }else{
       s = s+" "+" "
    }
   
}
  console.log(s)
}


  