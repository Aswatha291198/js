// const grandparent = document.querySelector('#grandparent');
// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
  

// grandparent.addEventListener('click',(e)=>{
//     console.log('grandparent clicked');

    
// })
// parent.addEventListener('click',(e)=>{
//     console.log('parent clicked');
    
    
// },true)
// child.addEventListener('click',(e)=>{
//     console.log('child clicked');    
    
// },true)
// const decrementBtn=document.querySelector('#decrement')
// const incrementBtn=document.querySelector('#increment')
// const resetBtn=document.querySelector('#reset')
// const CounterDisplay=document.querySelector('#counter')
// let counter =0
//  decrementBtn.addEventListener('click',(e)=>{
//     counter--
//     CounterDisplay.innerText=counter
//  })
//  incrementBtn.addEventListener('click',(e)=>{
//     counter++
//     CounterDisplay.innerText=counter
//  })
//  resetBtn.addEventListener('click',(e)=>{
//     counter=0;
//     CounterDisplay.innerText=counter
//  })
const stars=document.querySelectorAll('.stars')
const rating=document.querySelector('#rating')

stars.forEach(function(star){
    star.addEventListener('click',(e)=>{
        console.log(star,'clicked');
       const value= star.getAttribute('data-value')
        console.log(value);
       
        updateRating(value)
        
    })  
})
 function updateRating(value){
stars.forEach(function(star){
    const starvalue=star.getAttribute('data-value')
    star.classList.toggle('filled',starvalue<=value)
})
rating.textContent=value
}