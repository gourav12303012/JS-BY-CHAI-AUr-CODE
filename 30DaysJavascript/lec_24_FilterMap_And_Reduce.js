const coding = ['js' , 'Ruby' , 'Python' , 'Java' , 'C++']
 // Ab jab variable me store karna chahe item ko tab kya ho 
 const value = coding.forEach((item)=>{console.log(item)
    return item
 })

//  console.log(value)

// Foreach koi bhi value return nahi karta hai


const myNums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

const newNums = myNums.filter((nums) => nums > 5)

// console.log(newNums) // Filter map is used for filtering the values pahle ek number ko nums se declare karna hai or phr wha par condition dena hai or ek variable me store karwana parta hai isse tab ye run karegi

const myArr = [1 , 2  , 3 , 4 , 5 , 6 , 7, 8 , 9, 10]

const filter = myArr.filter((num) => { return num > 5})

// console.log(filter) // Jab bhi scope open karte hai to return keyword likkhna parega warna ye run nahi karega means scope ke andar jab bhi likhege to return karna paregaaa<------------


const myNewNums = [] // Jab hamlog foreach loop chalayege tab hame pahle ek empty array declare karna hoga or pher usse if condition me lagakr chalana hota hai

myArr.forEach((nums) => {
    if(nums > 4)
        {
            myNewNums.push(nums)
        }
})

console.log(myNewNums)

const books = [{title : 'Book One' , genre : 'Fiction' , Publish : 1981 , edition : 2004} , {title : 'Book Two' , genre : 'Non-Fiction' , Publish : 1982 , edition : 2008} ,{title : 'Book Three' , genre : 'History' , Publish : 1981 , edition : 2017} ,{title : 'Book Four' , genre : 'Science' , Publish : 1981 , edition : 2014} ,{title : 'Book Five' , genre : 'Science' , Publish : 1982 , edition : 2010} ,{title : 'Book Six' , genre : 'History' , Publish : 1983 , edition : 2014} ,{title : 'Book Seven' , genre : 'Fiction' , Publish : 1981 , edition : 2014}  ]

let userBooks = books.filter((bk) =>bk.genre === 'History')

userBooks = books.filter((bk)=>{return bk.genre==='History' && bk.Publish==1982}) // doubt

console.log(userBooks)



// **************************Mapping******************

const NewlyNumbers = [ 1, 2, 3,4,5,6,7,8,9,10]

const myMapnums = NewlyNumbers.map((nums)=> nums + 10)

console.log(myMapnums)

// Chaining Method **************

const Chaining = [ 1, 2 ,3 ,4 ,5 , 6, 7,8 , 9,10 ]

const newChaining = Chaining.map((num)=> num*10).map((num)=>num+4).filter((num)=>num>=44)

console.log(newChaining)


//  **************Reduce Method***************


const Reduce = [1,2,3]

// const myTotal = Reduce.reduce(function (accumulator , currentvalue){
//     console.log(`accumulator ${accumulator} and currentvalue ${currentvalue}`)
//     return accumulator + currentvalue } , 0)

const myTotal = Reduce.reduce((accumulator , currentvalue)=>accumulator + currentvalue , 0)

console.log(myTotal)


const ShoppingCart = [{itemName:'Js Course' , price:299} , {itemName : 'Py Course' , price:399} , {itemName:'Data Science Course' , price : 799}]

const TotalPriceOfShoppingCart = ShoppingCart.reduce((acc ,item) => acc + item.price  , 0)

console.log(TotalPriceOfShoppingCart)