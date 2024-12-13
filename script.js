import { add, multiply, minus, divide } from "./fonctions.js"

let a = 0
let b = 0
let func = null

const displayresult =   document.querySelector(".result")
const label = document.querySelector('.label')
const reset =document.querySelector('.reset')

function resetdisplay(){
    displayresult.value=0
}

function resetAll(){
    a = 0
    b = 0
    func = null
    label.textContent =''
    resetdisplay()
}

reset.addEventListener('click',()=>{
   resetAll()
})

const numbers = document.querySelectorAll('.num')

numbers.forEach((num)=>{
   
        num.addEventListener("click",()=>{
            //Remove the 0 before the input
            if(displayresult.value===0 || displayresult.value ==="0"){
                displayresult.value =""
            }
            // initialise a
            if(func ==null){
            displayresult.value += num.textContent
            a = displayresult.value
            console.log('a quand 1er chiffre = ' + a)
            }
            //intialise b
            else{
                displayresult.value += num.textContent
            b = displayresult.value
            console.log('a quand 2ieme chiffre = ' + a)

            }
        })
    
})

const operator = document.querySelectorAll(".operator")
operator.forEach((op)=>{
    op.addEventListener('click',()=>{
        //intiailise operator
        func = op.textContent
        label.textContent = (a + func) 
        console.log(func)
        console.log('a quand appuye sur operator = ' + a)
        resetdisplay()
    })
})

const equal = document.querySelector('.equal')
equal.addEventListener('click', ()=>{
    console.log('a quand appuye sur egale = ' + a)
    a = parseFloat(a)
    b = parseFloat(b)
    switch(func){
        case "+":displayresult.value= add(a,b);
            break;
        case "-":displayresult.value= minus(a,b)
            break;
        case "*":displayresult.value= multiply(a,b)
            break;
        case "/":if (b!==0){
            displayresult.value= divide(a,b)
            break;
            }
            else{
                displayresult.value="impossible de diviser par zéro" 
            }
    }   
    label.textContent += (b +'=' )  
    a=parseInt(displayresult.value)
})










