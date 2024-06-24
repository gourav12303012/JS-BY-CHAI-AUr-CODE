
// Generate Random Color 

const randomColor = function()
{
    const hex = "0123456789ABCDEF"
    let color = "#"

    for(let i = 0 ; i < 6 ; i++)
        {
           color += hex[Math.floor(Math.random() * 16)]
        }
        return color
    }


        let interValId

      const  startChangingColor = function()
        {
           
    if(!interValId){
        interValId =  setInterval(changeBgColor , 1000)    }

              function changeBgColor(){
                const ChangeBgColor = document.body.style.backgroundColor = randomColor()

              }
        }
    const    stopChangingColor = function(){
        clearInterval(interValId)
    }

        document.querySelector('#start').addEventListener('click', startChangingColor)
        document.getElementById('stop').addEventListener('click',stopChangingColor)
