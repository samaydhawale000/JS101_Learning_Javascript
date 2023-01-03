let details = {
  name : "Samay",
  sur_name : "Dhawale",
  adderess : "Yavatmal",
  phone : 123456,
  education: "Diploma"
}

console.log(details.name)
console.log(details["education"])

details.hobbies = "Drawing"
details["father_name"] = "Subodh"

details.name = "Ansh"
details["phone"] = 22334455

console.log(details)



let details2 = {
  name : "Samay",
  sur_name : "Dhawale",
  adderess : "Yavatmal",
  phone : 123456,
  education: "Diploma"
}

delete details2.education

delete details2["phone"]

console.log(details2)



