let details = {
  name: "Samay",
  age : 20,
  location: "Yavatmal",
  driving : false,
  lanch : false
}
console.log(details)

details.fathername = "Subodh"
details.bestfried = "Raj"
details.brother = "Ansh"

console.log(details)

details.age = 21
details.driving = true
console.log(details)


delete details.bestfriend
delete details["lanch"]
console.log(details)


details.hobbies = ["Music", "drawing","cricket"]

console.log(details.hobbies[0])














