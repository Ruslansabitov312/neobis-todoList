window.addEventListener('load', () => {
  const form = document.querySelector('.header__new-todo-form')
  const input = document.querySelector('.header__new-todo-input')
  const listEl = document.querySelector('.todo-list__tasks')

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const task = input.value

    if (!task) {
      alert('Todo must be filled out!')
      return
    }

    const taskEl = document.createElement('div')
    taskEl.classList.add('todo-list__task')

    const taskContentEl = document.createElement('div')
    taskContentEl.classList.add('todo-list__content')

    taskEl.appendChild(taskContentEl)

    const taskInputEl = document.createElement('input')
    taskInputEl.type = 'text'
    taskInputEl.classList.add('todo-list__text')
    taskInputEl.value = task
    taskInputEl.setAttribute('readonly', 'readonly')

    taskContentEl.appendChild(taskInputEl)

    const taskActionsEl = document.createElement('div')
    taskActionsEl.classList.add('todo-list__actions')

    const taskDoneEl = document.createElement('button')
    taskDoneEl.classList.add('todo-list__done-btn')
    taskDoneEl.innerHTML = 'Done'

    const taskEditEl = document.createElement('button')
    taskEditEl.classList.add('todo-list__edit-btn')
    taskEditEl.innerHTML = 'Edit'

    const taskDeleteEl = document.createElement('button')
    taskDeleteEl.classList.add('todo-list__delete-btn')
    taskDeleteEl.innerHTML = 'Delete'

    taskActionsEl.appendChild(taskDoneEl)
    taskActionsEl.appendChild(taskEditEl)
    taskActionsEl.appendChild(taskDeleteEl)

    taskEl.appendChild(taskActionsEl)

    listEl.appendChild(taskEl)

    input.value = ''

    taskDoneEl.addEventListener('click', () => {
      taskInputEl.classList.toggle('todo-list__text_completed')
      taskEl.classList.toggle('todo-list__task_completed')
    })

    taskEditEl.addEventListener('click', () => {
      if (taskEditEl.innerText.toLowerCase() === 'edit') {
        taskInputEl.removeAttribute('readonly')
        taskInputEl.focus()
        taskEditEl.innerHTML = 'Save'
      } else {
        taskInputEl.setAttribute('readonly', 'readonly')
        taskEditEl.innerText = 'Edit'
      }
    })

    taskDeleteEl.addEventListener('click', () => {
      listEl.removeChild(taskEl)
    })
  })
})
