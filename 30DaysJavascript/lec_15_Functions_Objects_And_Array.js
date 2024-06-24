function calculatePrice(val1 , val2,  ...num1) // rest operator 
{
    return num1
}
// console.log(calculatePrice(200 , 300 , 4000))

const user = 
{
    username:"gaurav",
    price: 399
}

function handleObjects(anyObjects)
{
    console.log(`username is ${anyObjects.username} and the price is ${anyObjects.price}`)
}

// handleObjects(user)

handleObjects({
    username:"sam" , 
    price:399
})

const mynewArray = [200 , 400  , 100 , 600 ]

function returnSecondvalue(getArray)
{
    return getArray[2]
}

// console.log(returnSecondvalue(mynewArray))
console.log(returnSecondvalue([200,400,500,1000]))