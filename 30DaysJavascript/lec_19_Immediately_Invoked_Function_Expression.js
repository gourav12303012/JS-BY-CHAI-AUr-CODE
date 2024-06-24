// Immediately Invoked Function Expression (IIFE)

(function chai() // Named IIFE
{
     console.log('DB CONNECTED')
})(); // WE  NEED TO PUT SEMICOLON MANDATORY OTHERWISE IT SHOWS ERROR AFTER EXECUTION OF NEXT FUNCTION

(function code()
{
     console.log('DB CONNECTED TWO')
})();


((name)=>
{
     console.log(`DB CONNECTED TWO ${name}`)
})('hitesh')

// DO IFFE LIKHNE KE LYE SEICOLON PASS KARTE HAI