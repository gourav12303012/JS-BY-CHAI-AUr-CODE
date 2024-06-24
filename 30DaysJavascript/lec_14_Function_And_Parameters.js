function sayMyName()
{
    console.log("G");
    console.log("A");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("V");
}

sayMyName()

function addTwoNumbers(number1 , number2)
{
    // console.log( number1 + number2)
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3 , 5)
console.log("Result", result)

// function loginUserMessage(username)
// {
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Gaurav"))


function loginUserMessage2(username)
{
    if(username === undefined) //====as same (!username) 
        {
            console.log("Please enter your username")
            return
        }
    return `${username} Just logged in`
}

console.log(loginUserMessage2())