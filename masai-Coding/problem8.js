let arr = [12,15,8,22,19,27,30,26,45];

for (let i = 0; i< arr.length; i++){
  if(arr[i]%2!=0 && (arr[i]%3==0 &&arr[i]%5==00)){
    console.log(arr[i])
  }
}

let n = 100;
let bag = 0;
while(n>5){
  if (n%5==0 && n%10==0){
    bag = bag+5
  }
  n--
}
console.log(bag)

let left = 1
let right = 10
let k =3
 count = 0
    for(let i =left; i<=right; i++){
        if(i%k==0){
            count++
        }
    }
    
    console.log(count)










