const toDoTaskApp = (() => {
  const a = "Inside to do app code";

  let tasks = [];

  let getTasks = document.getElementById("add");

  let getTasksList = document.getElementById("list");

  const getTasksCount = document.getElementById("task-counter");

  // fetching data from API

  async function fetchTODO() {
    // console.log("Iam here");
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   // getting the response of the request and storing it in a variable called "response"
    //   .then((response) => response.json())
    //   .then((data) => {
    //     tasks = data.slice(0, 10);
    //     renderTasks();
    //   })
    //   .catch((error) => console.log("error", error));

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      tasks = data.slice(0, 10);
      renderTasks();
    } catch (error) {
      console.log(error);
    }
  }

  // function to add the list to the app;

  function addTaskToDom(task) {
    const li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox" id = "${task.id}" ${
      task.complete ? "checked" : ""
    } class = "custom-checkbox">
        <label for="${task.id}">${task.title}</label>
        <img src="https://static.vecteezy.com/system/resources/previews/008/325/704/original/black-trash-icon-logo-clipart-isolated-in-white-background-image-free-vector.jpg" class="delete" data-id = "${
          task.id
        }" />`;
    getTasksList.append(li);
  }

  // function to render all data

  function renderTasks() {
    getTasksList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
      addTaskToDom(tasks[i]);
    }
    getTasksCount.innerHTML = tasks.length;
  }

  // function to add the tasks

  function addTasks(task) {
    if (task) {
      tasks.push(task);
      renderTasks();
      showNotificationAlert("Task added successfully");
      return;
    }
    showNotificationAlert("Task cannot be added");
  }

  // function to toggle the tasks

  function toggleTask(taskid) {
    let task = tasks.filter(function (task) {
      return task.id === Number(taskid);
    });
    console.log(task);
    if (task.length > 0) {
      const currTask = task[0];

      currTask.complete = !currTask.complete;
      renderTasks();
      showNotificationAlert("Toggled successfully");
      return;
    }

    showNotificationAlert("No such Task");
  }

  // function to delete the task

  function deleteTasks(taskid) {
    let newTasks = tasks.filter(function (task) {
      return task.id !== Number(taskid);
    });
    tasks = newTasks;
    renderTasks();
    showNotificationAlert("task deleted Succesfully");
  }

  // function to show the alerts

  function showNotificationAlert(task) {
    alert(task);
  }

  // if we press Enter what will happen???;

  function handleInputKeypress(e) {
    if (e.key === "Enter") {
      let inputValue = e.target.value;

      if (!inputValue) {
        showNotificationAlert("Task text cannot be Empty");
      }
      let task = {
        title: inputValue,
        id: Date.now(),
        complete: false,
      };
      e.target.value = "";
      addTasks(task);
    }
  }

  //  delete click event

  function handleClickEvent(e) {
    let target = e.target;
    if (target.className === "delete") {
      let getId = target.dataset.id;
      deleteTasks(getId);
      return;
    } else if (target.className === "custom-checkbox") {
      const taskid = target.id;
      toggleTask(taskid);
      return;
    }
  }
  function initializeApp() {
    getTasks.addEventListener("keyup", handleInputKeypress);
    document.addEventListener("click", handleClickEvent);
    fetchTODO();
  }
  initializeApp();
  return {
    initialize: initializeApp(),
    a: a,
  };
})();
