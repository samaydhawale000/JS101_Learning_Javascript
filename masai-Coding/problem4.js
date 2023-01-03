
// ******************** For loop and while loop **********************

// lets find  even and odd number by using loop

let a = 0;

while (a <= 10) {
  if (a % 2 !== 0) {
    console.log(a)
  }
  a++
}

// Second Problem

let i = 0;
let sum = 0

while (i <= 10) {
  if (i % 3 == 0) {
    sum = sum + i
  }
  i++
}
console.log(sum)



let n = 0;
while (n <= 20) {
  console.log(n)
  n++
}


let n2 = 10;

while (n2 <= 20) {
  if (n2 % 2 !== 0) {
    console.log(n2)
  }
  n2++
}


let n3 = 1;
let total = 1

while (n3 <= 5) {
  total = total + n3
  n3++
}




let n33 = 1;
let total11 = 0
let count = 0;

while (n33 <= 100) {
  if (n33 % 2 == 0) {
    total11 = total11 + n3
  }
  n33++;
  count++;
}
console.log(total1 / count);

console.log("-----------")

// **************************For loop***********************

for (let i = 1; i <= 5; i++) {
  console.log("Hello");
}

console.log("-----------")

let total1 = 0;
let count1 = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    total1 = total1 + i
  }
  i++;
  count1++;
}
console.log(total1 / count1)

console.log("-----------")

let sum1 = 0;

for (let i = 0; i <= 10; i++) {
  sum1 = sum1 + i
}
console.log(sum1)

console.log("-----------")
// horizontal number printing

let b = ""
for (let i = 0; i <= 10; i++) {
  b = b + i + " ";
}
console.log(b)

console.log("-----------")

let c = "";
for (let i = 0; i <= 5; i++) {
  c = c + i + "*"
}
console.log(c)

console.log("-----------")

let product = 1;

for (let i = 1; i <= 5; i++) {
  product = product * i
}
console.log(product)

console.log("-----------")

let sum2 = 0;

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0 && i % 5 == 0) {
    sum2 = sum2 + i
  }
}
console.log(sum2)


// break


let x = 27;
if (x ** (1 / 3) < 4 && x % 3 == 0) {
  console.log(true)
} else {
  console.log(false)
}













