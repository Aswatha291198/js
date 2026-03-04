const addbtn=document.querySelector('.add-btn')
const removeBtn=document.querySelector('.close-btn')
let addFlag=false
let deleteFlag=false
const mainCont=document.querySelector('.main-cont')
const modalCont=document.querySelector('.modal-cont')
const textAreaCont=document.querySelector('textarea')
const color=['lightgreen',"lightblue",'lightpink',"black"]
const priorityColor=document.querySelectorAll('.priority')
let modalPriorityColor=color[color.length-1]
console.log(modalPriorityColor,'color');

addbtn.addEventListener('click',()=>{
    addFlag=!addFlag
    console.log(addFlag); 
    modalCont.style.display=addFlag ?'flex':'none'
})
removeBtn.addEventListener('click',()=>{
    deleteFlag=!deleteFlag
    if(deleteFlag){
        alert('are you sure')
        removeBtn.style.color='red'
    }
    else{
        removeBtn.style.color='rgb(0,189,78)'
    }
})
priorityColor.forEach((color)=>{
    color.addEventListener('click',()=>{
        priorityColor.forEach((element)=>{
            element.classList.remove('active')
        })
        color.classList.add('active')
        modalPriorityColor=color.classList[0]
    })
})

function handleRemove(ticket){
    ticket.addEventListener('click',()=>{
        if(deleteFlag){
            ticket.remove()
        }
    })
}
function createTicket(text,id,color){
    const ticketCont=document.createElement('div')
    ticketCont.setAttribute('class','ticket-cont')
    ticketCont.innerHTML=` 
            <div class="ticket-color" style="background-color:${color}"></div>
            <div class="ticket-id">${id}</div>
            <div class="task-area" >${text}</div>
            <div class="ticket-lock">
                <i class="fa-solid fa-lock"></i>
            </div>`

            mainCont.appendChild(ticketCont)
            handleRemove(ticketCont)
}

modalCont.addEventListener('keydown',(e)=>{
    console.log(e.key)
    if(e.key==='Enter'){
        const text=textAreaCont.value.trim()
        if(text===''){
            alert('please enter a task')
            return 
        }
        const id=Math.random().toString(36).substring(2)
        const color=modalPriorityColor
        createTicket(text,id,color)
        textAreaCont.value=''
        addFlag=false
        modalCont.style.display='none'

    }
})
