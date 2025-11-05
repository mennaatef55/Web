const addButton = document.querySelector('.addButton');
const inputElement = document.querySelector('.inputElement');
const list = document.querySelector('.todoItems');
const filters = document.querySelectorAll('.filter');
const clearAllBtn = document.querySelector('.clearAll');

let todoItemsArray = [];
let currentFilter = 'all';


addButton.addEventListener('click', addtodoItems);
inputElement.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addtodoItems();
});

function render() {
  list.innerHTML = '';

  const filteredItems = todoItemsArray.filter(item => {
    if (currentFilter === 'active') return !item.done;
    if (currentFilter === 'completed') return item.done;
    return true;
  });

  filteredItems.forEach((item) => {
    const divElement = document.createElement('div');
    const listElement = document.createElement('li');
    listElement.textContent = item.input;
    listElement.className = item.done ? 'done' : '';

  
    const doneButton = document.createElement('button');
    doneButton.textContent = item.done ? 'Undo' : 'Done';
    doneButton.className = 'doneButton';
    doneButton.onclick = () => {
      item.done = !item.done;
      render();
    };


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    deleteButton.onclick = () => {
      todoItemsArray.splice(todoItemsArray.indexOf(item), 1);
      render();
    };

    divElement.appendChild(listElement);
    divElement.appendChild(doneButton);
    divElement.appendChild(deleteButton);
    list.appendChild(divElement);
  });
}


function addtodoItems() {
  const input = inputElement.value.trim();
  if (input === '') return;

  todoItemsArray.push({ input, done: false });
  inputElement.value = '';
  render();
}


filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    currentFilter = button.getAttribute('data-filter');
    render();
  });
});


clearAllBtn.addEventListener('click', () => {
  todoItemsArray = [];
  render();
});


render();
