const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const list_el = document.querySelector("#tasks");

form.addEventListener('submit', e => {
  e.preventDefault(); //stops page refreshing

  const task = input.value;
  if (task == "") {
    alert("please input your task");
    return;
  }
  //create where the task are to be
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task");
  list_el.appendChild(taskContainer);

  //create content container
  const taskList = document.createElement("div");
  taskList.classList.add("content");
  // taskList.innerText = task;
  taskContainer.appendChild(taskList);

  const task_input = document.createElement("input");
  task_input.classList.add("text");
  task_input.type = "text";
  task_input.value = task;
  task_input.setAttribute("readonly", "readonly");
  taskList.appendChild(task_input);

  //create button container
  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("actions");
  taskContainer.appendChild(buttonsContainer);

  const edit = document.createElement("button");
  edit.classList.add("edit");
  edit.innerHTML = "Edit";
  buttonsContainer.appendChild(edit);

  const deletebtn = document.createElement("button");
  deletebtn.classList.add("delete");
  deletebtn.innerHTML = "Delete";
  buttonsContainer.appendChild(deletebtn);

  const completebtn = document.createElement("button");
  completebtn.classList.add("complete");
  completebtn.innerHTML = "Complete";
  buttonsContainer.appendChild(completebtn);

  input.value = "";

  //create update functionality
  edit.addEventListener("click", (e) => {
    if (edit.innerText.toLowerCase() == "edit") {
      edit.innerText = "Save";
      task_input.removeAttribute("readonly");
      task_input.focus();
    } else {
      edit.innerText = "Edit";
      task_input.setAttribute("readonly", "readonly");
    }
  });

  //create delete functionality
  deletebtn.addEventListener("click", (e) => {
    list_el.removeChild(taskContainer);
  });
    
 completebtn.addEventListener("click", (e) => {
   if (completebtn.innerText.toLowerCase() == "complete") {
       task_input.style.textDecoration = "line-through";
       task_input.style.textDecorationThickness = "20%";
       completebtn.innerText = "Uncomplete";
   } else {
       task_input.style.textDecoration = "none";
       completebtn.innerText = "Complete";
   }
 });
    
})

