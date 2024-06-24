// for Loop

//  for(let index = 0 ; index <= 10 ; index++)
//     {
//         const element = index
//         if(element == 5)
//             {
//                 console.log(" 5 is best number")
//             }
//             console.log(element)
//     }

//     for (let i = 0; i <= 10; i++) {
//         console.log(`Outer Loop Value : ${i}`)
//         for (let j = 0; j <= 10; j++) {
//             //console.log(`Inner Loop Value ${j} and inner loop ${i}`);

//             console.log(i + '*' + j + '=' + i*j)
            
//         }
        
//     }

// let myArray = ["flash" , "batman" , "Superman"]

// for (let index = 0 ; index <= myArray.length; index++)
//     {
//         const element = myArray[index];
//         console.log(element);
//     }


    //    Break And Continue


    for (let index = 1; index <= 20; index++) {
        if(index == 5)
            {
                console.log("5 is Detected")
                break;
            }
        console.log(`value of index is ${index}`)
        
    }
    for (let index = 1; index <= 20; index++) {
        if(index == 5)
            {
                console.log("5 is Detected")
                continue;
            }
        console.log(`value of index is ${index}`)
        
    }
