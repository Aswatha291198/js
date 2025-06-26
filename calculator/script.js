const calc=document.querySelector('.calculator')
console.log(calc);
const input=document.querySelector('.display')
const buttons=document.querySelector('.buttons')
buttons.addEventListener('click',function(e){
    if(e.key>= 0 || e.key <=9){
        console.log(e.key);
        
    }
})
