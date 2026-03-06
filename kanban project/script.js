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
let ticketArr=[]

if(localStorage.getItem('tickets')){
    ticketArr=JSON.parse(localStorage.getItem('tickets'))
    ticketArr.forEach((ticket)=>{
        const{ticketId,ticketTask,ticketColor}=ticket
        createTicket(ticketId,ticketColor,ticketTask)
    })
}

function addTickets(id,ticketColor,ticketTask){
    ticketArr.push({
        ticketId:id,
        ticketColor,
        ticketTask
    })
   updateLocalStorage()
   createTicket(id,ticketColor,ticketTask)
}
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

function handleRemove(ticket,id){
    ticket.addEventListener('click',()=>{
        if(deleteFlag)
            ticket.remove()
        let idx=getIndex(id)
        ticketArr.splice(idx,1)
        updateLocalStorage()    
        
    })
}


function getIndex(id){
const idx = ticketArr.findIndex((ticket) => ticket.ticketId === id)
return idx
}

function createTicket(id,color,text){
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
            handleRemove(ticketCont,id)
            handleLock(ticketCont,id)
            handleColor(ticketCont,id)
            handleFilter() 
}
function updateLocalStorage(){
    console.log('inisde local');
    
    localStorage.setItem('tickets',JSON.stringify(ticketArr))
}

function handleFilter(){
    console.log('handleFilter');
    
    allColors.forEach((element)=>{
        
        element.addEventListener('click',()=>{
           
            const getColor=element.classList[0]
       
          
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
            console.log('inside the double clicj');
            
            let allTickets=document.querySelectorAll('.ticket-cont')
            allTickets.forEach((tickets)=>{
                tickets.style.display='block'
            })
         })
    })
}

function handleLock(ticket,id){

let ticketLockElem = ticket.querySelector(".ticket-lock");
let ticketLockIcon = ticketLockElem.children[0];
let ticketTaskArea = ticket.querySelector(".task-area");

      ticketLockIcon.addEventListener('click',()=>{
        const index=getIndex(id)
        console.log(index);
        
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
        console.log(localStorage.length);
        
         ticketArr[index].ticketTask=ticketTaskArea.innerText
      localStorage.setItem("tickets",JSON.stringify(ticketArr))
       
        
      })
        
    }
function handleColor(ticket,id){
        const ticketColor=ticket.querySelector('.ticket-color')

        ticketColor.addEventListener('click',()=>{
             const index=getIndex(id)
            const selectedColor=ticketColor.style.backgroundColor
            
            const getColor=color.findIndex((item)=>{
                return selectedColor===item
            }) 
        let nextColorIdx=(getColor + 1) % color.length
        let nextColor=color[nextColorIdx]
        ticketColor.style.backgroundColor=nextColor    
        ticketArr[index].ticketColor=nextColor
              updateLocalStorage()

        })
        
    }

modalCont.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        const text=textAreaCont.value.trim()
        if(text===''){
            alert('please enter a task')
            return 
        }
        const id=Math.random().toString(36).substring(2)
        const color=modalPriorityColor
        addTickets(id,color,text)
        textAreaCont.value=''
        addFlag=false
        modalCont.style.display='none'

    }
})
