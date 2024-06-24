const marvel_heros = ["thor" , "Ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// console.log(marvel_heros[3][1]) 

const allHero =marvel_heros.concat(dc_heros)
console.log(allHero)

const all_new_Heros = [...marvel_heros , ...dc_heros] // ... is called Spread operator  
console.log(all_new_Heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) //flat converts the  multiple array into single array and infinity is the depth of the array
console.log(real_another_array)

console.log(Array.isArray("gaurav"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name : "Gaurav"})) // it will gives the empty array // interesting

let score1 = 100 
let score2 = 200
let score3 = 300 

console.log(Array.of(score1 , score2 , score3))