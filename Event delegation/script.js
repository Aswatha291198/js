document.addEventListener('DOMContentLoaded',function(e){
    const submitBtn = document.querySelector('#submitComment');
    const commentInput = document.querySelector('#commentInput');
    const commentsContainer = document.querySelector('#commentsContainer');
    
    submitBtn.addEventListener('click',function(){
        const commentText=commentInput.value
        addComment(commentText)


        commentInput.value=''

    })
    commentsContainer.addEventListener('click',(e)=>{
        if(e.target.className.includes('replyBtn')){
            const parentComment=e.target.parentElement
            const replyInputElement=parentComment.querySelector('.replyInput')
            const replyText=replyInputElement.value
            if(replyText){
                addReply(parentComment, replyText)
            }
            replyInputElement.value=''
        }

    })
    function addComment(commentText) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('repliesContainer');
        commentElement.innerHTML = `
        <p>${commentText}</p>
        <button class='replyBtn'>Reply</button>
        <textarea class="replyInput" placeholder="Write a reply...."></textarea>
        `

        commentsContainer.appendChild(commentElement);

    }
    function addReply(parentComment, replyText) {
        const replyElement = document.createElement('div');
        // replyElement.classList.add('repliesContainer');
        replyElement.className = 'repliesContainer';
        replyElement.innerHTML = `<p>${replyText}</p>`
        const btn = document.createElement('button');
        btn.classList.add('replyBtn');
        btn.innerText = 'Reply';
        replyElement.appendChild(btn);
        const replyInput = document.createElement('textarea');
        replyInput.className = 'replyBtn';
        replyInput.placeholder = 'Write a Reply....';
        replyElement.appendChild(replyInput);
        
        parentComment.appendChild(replyElement)
    }

})