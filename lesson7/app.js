const input = document.querySelector("input")
const createButton = document.querySelector('#create_to_do')
const todoList = document.querySelector('.todo_list')

const createTodo = () =>{
    if(input.value.trim() === ''){
        return alert('Error ')
    }

    const div = document.createElement("div")
    const divButton = document.createElement("div")

    const text = document.createElement('h3')
    const deleteButton = document.createElement('button')
    const editButton = document.createElement('button')

    div.setAttribute('class' , 'block_text')
    divButton.setAttribute('class', 'div_button')
    deleteButton.setAttribute('class', 'delete_button')
    editButton.setAttribute('class', 'edit_button')

    deleteButton.innerText = 'delete'
    editButton.innerText = 'edit'
    text.innerText = input.value

    deleteButton.onclick = () => div.remove()
    editButton.onclick  = () => {
        const newInput = prompt(`Edited: ${text.innerText}`).trim()
        newInput === '' ? alert('Нельзя вводить пустое значение или пробелы') : text.innerText = newInput
    }

    text.onclick = () => text.classList.toggle('toggle')

    divButton.append(deleteButton, editButton)
    div.append(text, divButton)

    todoList.prepend(div)
    input.value = ''

}

createButton.onclick = () => createTodo()


window.onkeydown = (event) => {
    if(event.code === 'Enter') {
        createTodo()
    }
}

