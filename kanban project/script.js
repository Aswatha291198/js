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
const allColors=document.querySelectorAll('.color')
let lockClose='fa-lock'
let lockOpen='fa-lock-open'
addbtn.addEventListener('click',()=>{
    addFlag=!addFlag
     
    modalCont.style.display=addFlag ?'flex':'none'
})

allColors.forEach((colorElement)=>{
   
   colorElement.addEventListener('click',()=>{
    selectedColor=colorElement.classList[0]
    
    
   }) 
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
            handleLock(ticketCont)
            handleColor(ticketCont)
            
           
}
function handleFilter(){
    allColors.forEach((element)=>{
        element.addEventListener('click',()=>{
            const getColor=element.classList[0]
          ;
            const allTickets=document.querySelectorAll('.ticket-cont')
          
            allTickets.forEach((ticket)=>{
                const ticketColorband=ticket.querySelector('.ticket-color')
                const ticketColor=ticketColorband.style.backgroundColor
               
                if(getColor===ticketColor){
                    ticket.style.display='flex'
                }
                else{
                    ticket.style.display='none'
                }
                
            })    
        })
         element.addEventListener('dblclick',()=>{
            let allTickets=document.querySelectorAll('.ticket-cont')
            allTickets.forEach((tickets)=>{
                tickets.style.display='flex'
            })
         })
    })
}

function handleLock(ticket){

let ticketLockElem = ticket.querySelector(".ticket-lock");
let ticketLockIcon = ticketLockElem.children[0];
let ticketTaskArea = ticket.querySelector(".task-area");
      ticketLockIcon.addEventListener('click',()=>{
        if(ticketLockIcon.classList.contains(lockClose)){
            ticketLockIcon.classList.remove(lockClose)
            ticketLockIcon.classList.add(lockOpen)
            ticketTaskArea.setAttribute('contenteditable','true')
        }
        else{
            ticketLockIcon.classList.remove(lockOpen)
            ticketLockIcon.classList.add(lockClose)
            ticketTaskArea.setAttribute('contenteditable','false')

        }
        
      })
        
    }
    function handleColor(ticket){
        const ticketColor=ticket.querySelector('.ticket-color')
      
        ticketColor.addEventListener('click',()=>{
            const selectedColor=ticketColor.style.backgroundColor
            
            const getColor=color.findIndex((item)=>{
                return selectedColor===item
            }) 
        let nextColorIdx=(getColor + 1) % color.length
        let nextColor=color[nextColorIdx]
        ticketColor.style.backgroundColor=nextColor
        })
        
    }
handleFilter()
modalCont.addEventListener('keydown',(e)=>{
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
