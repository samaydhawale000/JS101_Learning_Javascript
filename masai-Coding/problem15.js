let details = {
  name: "Samay",
  age : 20,
  location :{
    city : "Yavatmal",
    area :"patipura",
    pincode :123456
  },
  driving : false,
  lanch : false
}

for( i in details){
  console.log(i ,":",details[i])
}

let arr = ["Samay","Samay","Ansh","Samay","Dikshant","Samay","Ansh","Dikshant","Samay"]
let obj =  {}

for(let i=0; i<arr.length; i++){
  obj[arr[i]] =  "1"
}
console.log(obj)










