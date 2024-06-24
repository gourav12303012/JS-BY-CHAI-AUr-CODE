const user = {
    username : "Hitesh",
    LoginCount : 8 ,
    SignedIn : true,
    getUserDetails : function()
    {
        // console.log("Got user details from database")
        // console.log(`username : ${this.username}`)

        console.log(this)
    }
}

console.log(user.username)
console.log(user.getUserDetails())
console.log(this)

// Constructtor function 

function User(username , LoginCount , isLoggedIn)
{
      this.username = username
      this.LoginCount = LoginCount
      this.isLoggedIn = isLoggedIn


      return this 
}

const useOne =new User("Hitesh", 12 , true)
const useTwo = new User("Gaurav" , 12 , false)

console.log(useOne)
console.log(useTwo)