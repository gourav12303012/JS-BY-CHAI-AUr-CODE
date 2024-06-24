function one()
{
    const username = "Gaurav"

    function two(){
        const website = "youtube"
        console.log(username)
    }// child function can access the parent function
    // console.log(website) // since its scope is locally defined so we can't define it globally so it is not working

    two()
}
one()

if (true)
    {
        const username = "gaurav"
        if(username === "gaurav")
        {
            const website = " Youtube "
            console.log(username + website)
        }
    }


    // ------------------interesting----------------

    function addone(num)
    {
        return num + 1 
    }
    
    console.log(addone(5))

    const addTwo = function(num)
    {
        return num + 2
    }
    console.log(addTwo(6)) // Hoisting we can't declare it before function declaration