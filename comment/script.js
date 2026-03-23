const input = document.querySelector('#add-comment')
const btn = document.querySelector('.add-btn')
const comment = document.querySelector('.comment-section')

btn.addEventListener('click', () => {

    if (input.value.trim() === '') return

    const commentBox = document.createElement('div')
    commentBox.setAttribute('class', 'comment-box')

    const p = document.createElement('p')
    p.innerText = input.value

    const replyBtn = document.createElement('button')
    replyBtn.innerText = 'Reply'

    const showBtn = document.createElement('button')
    showBtn.innerText = 'Show'

    commentBox.appendChild(p)
    commentBox.appendChild(replyBtn)
    commentBox.appendChild(showBtn)

    comment.appendChild(commentBox)

    replyBtn.addEventListener('click', () => {

        const newInput = document.createElement('input')

        const addReply = document.createElement('button')
        addReply.innerText = 'Add Reply'

        commentBox.appendChild(newInput)
        commentBox.appendChild(addReply)

    })

    input.value = ''

})