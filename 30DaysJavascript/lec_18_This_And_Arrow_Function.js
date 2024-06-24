 // This keyword defines the current context 

 const user = 
 {
    username : "Hitesh",
    price : 999,

     welcomeMessage : function(){
        console.log(`${this.username} , Welcome to website`)
        console.log(this)  // defines the current context
     }

    
    }
//    user.welcomeMessage()

//    user.username = "Gaurav"

//    user.welcomeMessage()

console.log(this) // here it context is empty because we are in Node enviroment In global there is no any context
// jab browser ke andar jab v wo engiine run karta h to sabse jyada jo global object hai wo window object hai ...

// function chai()
// {
//     let username = "hitesh"
//     console.log(this.username)  //  here it is undefined we use this with object 
// }
// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username) 
// }

// Arrow function 
const chai = ()=>{
    let username = "hitesh"
    console.log(this.username) 
}

// chai()

// const addTwo = (num1 , num2) =>
//     {
//         return num1 + num2 // when we write return then it is known as explicit
//     }

    // console.log(addTwo(3,4))

    const addTwo = (num1 , num2)=>(num1 + num2) // implicit return // when we write in curly brace then we need to write return keyword but if we write in paranthesis then we need not to write return keyword
        
    console.log(addTwo(3,4))

    const objectReturn = ({username : "gaurav"})

    console.log(objectReturn.username) // object return karwane ke leye hame parenthesis me dalna hoga curly braces ko