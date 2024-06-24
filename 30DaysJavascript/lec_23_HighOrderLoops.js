 // For of

 const arr = [1,2,3,4,5] // Arrays ke pass for of loop lagate hai

 for(const num of arr)
    {
        console.log(`value of arr is ${num}`)
    }

    const greeting = "Hello World"

    for (const greet of greeting)
        {
            console.log(` Each char is ${greet}`)
        }


        // Maps  

        // const map = new Map() // Maps Objects are the collection of Key-Value Pair // Duolicate value nahi hoti hai
        // map.set('IN', "India")
        // map.set('FR', "France")
        // map.set('USA', "UNITED STATES OF AMERICA")

        // console.log(map)

        // for (const [key , value] of map)
        //     {
        //         console.log(key , ':-' , value)
        //     }

    const myObject = 
    {
        'game1' : 'NFS',
        'game2' : 'Spiderman'
    }

    for(const key in myObject)
        {
            console.log(`${key} shortcut is for ${myObject[key]}`)
        }

        const map = new Map()
        map.set('br' , 'Bihar')
        map.set ('hr' , 'Haryana')
        map.set ('pb' , 'Pujab')
        map.set ('Hp' , 'Himachal Pradesh')
        console.log(map)

        for(const [key , value] of map)
            {
                // console.log(key , ':-' , value)
            }


const MyObj = 
{
    'Nfs' : 'game1',
    'Spiderman' : 'game2'
}

for (const key in MyObj) // Object me for in loop lagate hai
    {
        // console.log(`${key} is shortcut for my ${MyObj[key]} `)
    }


    const programming = ['js' , 'HTML' , 'CSS' , "java" , 'C++']

    for(const key in programming)
        {
            console.log(programming[key])
        }

  
        const coding = ['js' , 'ruby' , 'python' , 'cpp']

        coding.forEach(  function (item) {
            // console.log(item)
        } ) // Q ki ye Callback function hai to function ki name nahi hongi

       // coding.forEach( (item) => {console.log(item)}) // Arrow function

        function printme(item)
        {
            console.log(item)
        }

        coding.forEach(printme)

        coding.forEach((item , index , arr) => {console.log(item , index , arr)})


        // Jab array me se object ko nikalna ho tabb kya karna chahiye


        const ArrayMEObject = [{Filename : 'java' , 
            FileCode : 'Python' ,
            FileAccess : 'Javascript'
        } , 
        {FileList : 'java' , 
            LanguageName : 'mdn' ,
            LanguageScript : 'C++'
        } ,
        { Language : 'abc' , 
          Languagereader : 'No' ,
          LanguageSoucrce : 'dds'
        }
    
       
    
    
    ]
    
    ArrayMEObject.forEach((item) => {
        console.log(item.LanguageSoucrce)
    })
    
       
