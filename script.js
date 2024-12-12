let result = 0
let a = 0
let operator
let b = 0

const displayresult =   document.querySelector(".result")

const reset =document.querySelector('.reset')

reset.addEventListener('click',()=>{
    a = 0
    b = 0
    result = 0
    displayresult.value=0
})

const num1 = document.querySelector('.num1')
num1.addEventListener("click",()=>{
    displayresult.value += '1'
})



