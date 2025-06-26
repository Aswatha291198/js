const menuBar=document.querySelector('.menubar')
let menuFlag=false
const menu=document.querySelector('.menu')
menuBar.addEventListener('click',(e)=>{
    menuFlag=!menuFlag
    if(menuFlag){
        menu.style.display='flex'
    }
    else{
        menu.style.display='none'
    }
})
