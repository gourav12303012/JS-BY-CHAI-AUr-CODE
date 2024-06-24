// 1 -----> If Statement 

/* if(true)
{

}*/
// const isUserLOggedin = true
// const temprature = 61

// if(temprature === 40)
//     {
//         console.log("less than  50")
//     }
//     else
//     {
//         console.log("temprature is greater than 50")
//     }

// if(isUserLOggedin)
//     {
//         console.log("Hello User")
//     }

// if(2==="2")
//     {
//         console.log("Executed")
//     }

// const Score = 200

// if(Score > 100)
//     {
//         const power = "Fly"
//         console.log(`User can: ${power}`)
//     }
    
// const balance = 1000
// if(balance > 500) console.log("Test") ; // Implicit Scope will be executes in Single Line only 

// const balance = 1300

// if (balance < 500)
//     {
//         console.log("Balance is less than 500")
//     } else if (balance < 600)
//         {
//             console.log("balance is less than 600")
//         }else if (balance < 1300)
//             {
//                 console.log("balance is less than 1300")
//             }
//             else {
//                 console.log("Balance is zero")
//             }


/*const isUserLOggedin = true
const isDebitCard = false

if(isUserLOggedin && isDebitCard)
    {
        console.log("Allow user to buy Course")
    }
    else {
        console.log("User Cant buy the courses")
    }


const isUserLOggedinFromGoogle = true
const isUserLOggedinFromEmail = false

if(isUserLOggedinFromGoogle || isUserLOggedinFromEmail)
    {
        console.log("User can Logged in")
    } */





          // ****************Switch Case**************

        //   const month = 7
        // switch(month){
        //     case 1 :
        //         console.log("January")
        //         break;
        //     case 2:
        //         console.log("Feburary")
        //         break;
        //     case 3 :
        //         console.log("March")
        //         break;
        //     case 4 :
        //         console.log("April")
        //         break;
        //         default:
        //             console.log("Default Case Match")
        //             break
        // }

        // const day = "Sunday"
        // switch(day)
        // {
        //     case "Mon":
        //         console.log("Monday")
        //         break;
        //     case "Sunday" :
        //         console.log("Sunday")
        //         break;
        //         default:
        //             console.log("Not a dAY")
        //             break;
        // }


//  ******************Truethy OR Falsy 

const userEmail = "USer@gmail.com"

if(userEmail)
    {
        console.log("Got the user Email")
    }
    else{
        console.log("USer Dont have Email")
    }


    //   Falsy Values

    // false  , 0 , - 0 , BigInt 0n , "" , null , undefined , NaN 

     // Truthy Values  
 
//    [] , "0" , 'false' , " " , {} , function(){}
// false == 0 , false == '' , 0 == ''  

// const User = []

// if(User.length===0)
//     {
//         console.log("Array empty")
//     }

// const EmptyObj = {name : "Rohan"}

// if(Object.keys(EmptyObj).length === 0)
//     {
//         console.log("Object is Empty")
//     }
//     else{
//         console.log("Object is not empty")
//     }




 //  Nullish Coalescing Operator (??) : null Undefined

//  let val1 = 10 ?? 5
//  console.log(val1)

//  let val2 = null ?? 8
//  console.log(val2)

//   val2 = undefined ?? 15
//   console.log(val2)

//   val2 = undefined ?? 5 ?? 10

//   console.log(val2)

//  *****************Ternarry Operator*************

        //   condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80")