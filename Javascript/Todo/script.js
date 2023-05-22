// const todoInput = document.getElementById('todoInput');
// const btn = document.getElementById("addButton");

// const todoList = document.getElementById("todoList");
// btn.addEventListener('click', () => {
    
//     todoList.innerHTML = '';
//     const list = document.createElement('li');
//     const tasks = todoInput.value;
//     list.innerHTML += tasks;

//     todoList.appendChild(list);
//     todoInput.value = '';
// })


    const todoInput = document.getElementById('todoInput');
    
    const todoList = document.getElementById("todoList");
    const btn = document.getElementById("addButton");
    btn.addEventListener('click', () => {
        const para = todoInput.value;
        console.log("text is ", para);

        const list = document.createElement('p');
        list.innerHTML = para;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('click', () => {
            list.style.fontStyle = "italic";
        })
        const deletePara = document.createElement('button');
        deletePara.innerText = "Delete"
        deletePara.addEventListener('click', () => {
            list.remove();
        });
        list.appendChild(checkbox);

        list.appendChild(deletePara);

        todoList.appendChild(list);


        todoInput.value = '';

    })
    

