// ***************** Arrays *****************


let names = ["Samay", "Dikshant", "Roshan", "Anshu"];

names.push("YashRaj")
names[0] = "Pandu"
console.log(names)

// find a how many items in arrayBuffer

let a = [1,2,3,"hello", "h", "b"]

for (let i = 0; i<a.length; i++){
  console.log(a[i], "is a",typeof a[i])
}

let a2 = [1,2,3,"hello","a", "h", "b"]
let count = 0
for (let i = 0; i<a2.length; i++){
  if(a2[i]*0 !==0){
    count++
  }
}
console.log(count)



let name2 = ["Samay", "Dikshant", "Roshan", "Anshu"];

for (let i=0; i<name2.length; i++){
  console.log(i,name2[i])
}


// home work

let ar = [1,2,3,-1,-2,-3]

for (let i=0; i< ar.length; i++){
  if(ar[i] <0){
    ar[i]= 0
  }
}
console.log(ar)


// Even and oddd counting in array
let arrr = [1,2,3,4,5,6,7,8,9]
let count1 = 0;
let count2=0

for ( let i =0; i<arrr.length; i++){

  if(i%2==0){
    count1++
  }else if(i%2 !==0){
    count2++
  }
}
console.log("Even :",count1++, " ", "odd:", count2++)


// array reverse problem
let arr2 = [1,2,3,4,5,6,7];
let newarr2 = []

for (let i=arr2.length-1; i>=0; i--){
  newarr2.push(arr2[i])
}
console.log(newarr2)


// smaller and greater problem 
let arr3 =  [1,4,77,-1,3,89,2];

let greater = arr3[0]
let smaller = arr3[0]

for(let i=0; i<arr3.length; i++){

  if(arr3[i]<smaller){
    smaller = arr3[i]
  }
  if(arr3[i]>greater){
    greater = arr3[i]
  }
}
console.log(smaller , greater)

// loop with string
let name  = "Samay"

for (let i=0; i<name.length; i++){
  console.log(name[i])
}

// find how many words in string
let name22 = "Hello guys my name is samay";
let count111=0

for ( let i=0; i< name22.length; i++){
  if(name22[i]==" "){
    count111++
  }
}console.log("words:",count111+1)


// need to be find the sum of given array string

let str =["Samay", "Subodh", "Dhawale"]
let sum =0;
for(let i=0; i<str.length; i++){
  sum = sum +str[i].length
}
console.log(sum)


// counting how many strings starts from "s" in array
let str2 = ["samay", "suresh", "ansh","subodh"]
let count222 = 0;

for (let i=0; i<str2.length; i++){
  if(str2[i][0]==="s"){
    count222++
  }
}
console.log(count222)


// reversing string

let str3 = "Samay"
let empty ="";

for (let i=str3.length-1; i>=0; i--){
  empty = empty+str3[i]
}
console.log(empty)


let str4 = "go%.a$."
let newstr = ""

for(let i =0; i<str4.length; i++){
  if(str4[i]=="%"){
    newstr = newstr +"h"
  }
  else if(str4[i]=="."){
    newstr = newstr + ""
  }
  else if(str4[i]=="$"){
    newstr = newstr + "n"
  }else {
    newstr = newstr + str4[i]
  }
}
console.log(newstr)

  let str1 = "man"
    let s =""
    
    for(let i=str1.length-1; i>=0; i--){
        s = s + str[i]
    }
    
    if(s===str1){
        console.log("Yes")
    }else{
        console.log("No")
    }

// do password cheker problem 



// ******** homework 1 ********
// need to find odd and even no sum and which one is greater




