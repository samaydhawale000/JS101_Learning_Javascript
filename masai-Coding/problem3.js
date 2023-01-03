// if else stetments

let a =5;
let b =6;

if(a>b){
  console.log("a is greater")
}else {
  console.log("b is greater")
}


let item = 1000;
let your_money =500;

if(your_money>=item){
  console.log("i bought item")
}
else{
  console.log("i dont have money")
}


let num = 10

if(num%5==0){
  console.log("multiple of 5")
}else if (num%2==0){
  console.log("multiple of 2")
}else {
  console.log("NA")
}



// traffic lite home work

let light = "Green";

if(light=="Red"){
  console.log("Stop Please")
}else if(light==="Green"){
  console.log("you can go")
}else if(light === "Yellow"){
  console.log("Get ready")
}else{
  console.log("something went wrong!")
}

let a1 =1;
let b1 =2;

(a1>b1)? (console.log("a is greater")): (console.log("b is greater"))


let  phone = "Redme"
let budget  = 1000;

// if(phone === "Redme" && budget<=10000){
//   console.log("i can buy the phone")
// }else{
//   console.log("Cant buy")
// }

(phone==="Redme" && budget >=10000)? console.log("I can buy phone"): console.log("Cant buy phone")

// supermarket proble
let shop = "colgate"

if(shop == "clseup" || shop == "patanjali" || shop =="pesudent" || shop == "colgate"){
  console.log("please give me toothpest")
}
else{
  console.log("No toothpest")
}


let sub = "English"
let passmarks = 70;

let gokuMarks = 75;
let gokuSub = "English"

if( sub === gokuSub && gokuMarks>=passmarks){
  console.log("Goku is pass in english")
}else{
  console.log("Goku is fail in english")
}



let gender ="female";
let age =16;

if((gender=="male" && age>=21) || (gender=="female" && age>=18)){
  console.log(gender, "can get married")
}else{
  console.log(gender, "cant get married")
}


// shitch case

let user = 3;

switch (user){
  case 1 : console.log("Marathi");
    break;
   case 2 : console.log("English");
    break;
   case 3 : console.log("Hindi");
    break;
   case 4 : console.log("Telegu");
    break;

}


let number  = 9

if(number%3==0){
  console.log("multiple of 3")
}

let num1 = 1;

if(typeof(num1)=== typeof(2)){
  if(num1 %2==0){
    console.log("Even")
  }else{
     console.log("odd")
  }
}else{
     console.log("Provide a number")
     }


// turnary oprater for more than 1 condition

let x = 2;
let y = 3;
let z = 6;

(x>y && x>z) ? console.log("x is greater"): (y>x &&y>z) ? console.log("y is greater") :  console.log("z is grea")


let var1  = "Samay"
let var2 = "Ansh"
let var3 = "Dikshant"


if(var1===var2 && var1===var3 && var3===var2){
  console.log("All are same")
}else if(var1===var2){
  console.log("var1",":",var1,"equal to",var2,":","var2")
}else if(var1===var3){
  console.log("var1",":",var1,"equal to",var3,":","var3")
}else if(var3===var2){
  console.log("var3",":",var3,"equal to",var2,":","var2")
}else









