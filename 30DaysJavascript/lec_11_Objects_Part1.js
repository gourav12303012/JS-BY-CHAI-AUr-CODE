// We can declare object by two types (1) Literals (2) constructor
// Singleton means when we are creating objects from any constructor then it is called Singleton array
// When we are actually declare by literals then singleton Not Created\

// when objects actually declare by constructor then singleton will be created 

// Object Literals
const mySym = Symbol("Key1")
// Object.create()<---------constructor method
const jsuser = {
    name:"Hitesh",
    "Full Name" : "Gaurav",
    [mySym] : "mykey1",
    age: 18 , 
    Location:"Jaipur",
    email:"hitesh@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday" , "Saturday"]
}

console.log(jsuser.email)
console.log(jsuser["email", "Full Name"])
console.log(jsuser[mySym])

jsuser.email = "gaurav12303012@gmail.com"
console.log(jsuser.email)
// Object.freeze(jsuser)
jsuser.email = "gaurav@gmail.com"
console.log(jsuser.email)
console.log(typeof mySym)
console.log(jsuser)

jsuser.greeting = function(){
    console.log("Helllo Js user")
}

jsuser.greetingTwo = function(){
    console.log(`Helllo Js user , ${this.name}`)
}
console.log(jsuser.greeting())
console.log(jsuser.greeting)
console.log(jsuser.greetingTwo())

