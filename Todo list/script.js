const taskcontainer = document.getElementById("tasklistcontainer")
const addTaskBtn = document.getElementById("add-btn")
const taskInput = document.getElementById("todo")

// required functions

const uiUpdate = (updatevalue) => {
  const childtasklist = document.createElement("li")
  childtasklist.setAttribute("class", "childtask")
  const deletebtn = document.createElement("button")
  deletebtn.setAttribute("class", "delete");
  taskcontainer.appendChild(childtasklist)
  deletebtn.innerText = "X"
  childtasklist.innerText = updatevalue

  childtasklist.appendChild(deletebtn)
  taskInput.value = ""
}

const updatadata = (deletedTodo) => {
  const indexOfDeletedTodo = Number(taskList.indexOf(deletedTodo))
  taskList.splice(indexOfDeletedTodo, 1)
  localStorage.setItem("dataoftodoalsdkjfsdfcyiusdfyiushsdhfh", taskList)
}

const taskchecker = () => {
  const allChildTask = document.querySelectorAll(".childtask")
  allChildTask.forEach(childtaskelement => {

    childtaskelement.onclick = () => {
      if (childtaskelement.style.textDecoration == "none") {
        childtaskelement.style.textDecoration = "line-through";
      } else {
        childtaskelement.style.textDecoration = "none";
      }
    };

  })
}

const deletebtnfunction = () => {
  const alldeletebtn = document.querySelectorAll(".delete")
  alldeletebtn.forEach(deletebtn => {
    deletebtn.onclick = () => {
      updatadata(deletebtn.parentElement.innerHTML.split("<")[0])
      deletebtn.parentElement.remove();
    }
  })
}



// data


if (localStorage.getItem("dataoftodoalsdkjfsdfcyiusdfyiushsdhfh") == null) {
  localStorage.setItem("dataoftodoalsdkjfsdfcyiusdfyiushsdhfh", "Mohit")
} else {
  let taskList = localStorage.getItem("dataoftodoalsdkjfsdfcyiusdfyiushsdhfh").split(",")
}

let taskList = localStorage.getItem("dataoftodoalsdkjfsdfcyiusdfyiushsdhfh").split(",")



// load the avaliable data in ui
taskList.forEach(task => {
  uiUpdate(task)
})


const addValueToArray = () => {
  taskList.push(taskInput.value)
  localStorage.setItem("dataoftodoalsdkjfsdfcyiusdfyiushsdhfh", taskList)
}

// adding functionality to btn
// adding new task in ui
addTaskBtn.onclick = () => {
  // getting the input
  if ((taskInput.value).length != 0) {
    addValueToArray()
    console.log(taskList)
    uiUpdate(taskInput.value)
  }

  taskchecker()
  deletebtnfunction()


}
taskchecker()
deletebtnfunction()

console.log(localStorage.getItem("dataoftodoalsdkjfsdfcyiusdfyiushsdhfh"))