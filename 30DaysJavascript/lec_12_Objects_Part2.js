// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123@abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


console.log(tinderUser)

const regularUser = {
    email: "Some@gmail.com",
    fullname: {
        userfullname: {
            firstname : "gaurav",
            lastname : "Kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({} , obj1 , obj2)// assign is used for merging two objects  and we can assign it for objects 

const obj3 = {...obj1,...obj2} // spread method we can use for merging two or more values .....
console.log(obj3)


const users = [
    {
    id:1,
    email:"Gaurav@gmail.com",

    },
    {
        id:1,
        email:"Gaurav@gmail.com",
    
        },{
            id:1,
            email:"Gaurav@gmail.com",
        
            },{
                id:1,
                email:"Gaurav@gmail.com",
            
                },{
                    id:1,
                    email:"Gaurav@gmail.com",
                
                    },{
                        id:1,
                        email:"Gaurav@gmail.com",
                    
                        },
]
users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn')) 