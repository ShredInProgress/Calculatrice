let result = 0
let a = 0
let b = 0
let func = null

const displayresult =   document.querySelector(".result")
const reset =document.querySelector('.reset')

function resetdisplay(){
    displayresult.value=0
}

reset.addEventListener('click',()=>{
    a = 0
    b = 0
    result = 0
    resetdisplay()
})

const numbers = document.querySelectorAll('.num')

numbers.forEach((num)=>{
   
        num.addEventListener("click",()=>{
            if(displayresult.value===0 || displayresult.value ==="0"){
                displayresult.value =""
            }
            if(func ==null){
            displayresult.value += num.textContent
            a = displayresult.value
            console.log(a)
            }
            else{
                displayresult.value += num.textContent
            b = displayresult.value
            console.log(b)

            }
        })
    
})

const operator = document.querySelectorAll(".operator")

operator.forEach((op)=>{
    op.addEventListener('click',()=>{
        func = op.textContent
        console.log(func)
        resetdisplay()
    })
})










