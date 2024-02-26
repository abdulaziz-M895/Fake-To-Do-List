let list = document.querySelector(".list");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let add = document.querySelector("button");
    add.onclick = function () {
      addRandomTodo(data);
    };
    addTodo(data, 6);
  });

function addRandomTodo(data) {
  // Filter todos where completed is false
  let incompleteTodos = data.filter((todo) => !todo.completed);

  if (incompleteTodos.length === 0) {
    console.log("No incomplete todos available.");
    return;
  }

  let randomNum = Math.floor(Math.random() * incompleteTodos.length);

  // Create todo item based on randomly selected incomplete todo
  let div = document.createElement("div");
  div.classList.add("todo");

  let divText = document.createTextNode(`${incompleteTodos[randomNum].title}`);
  div.append(divText);

  let status = document.createElement("div");
  let notDone = document.createElement("span");
  notDone.classList.add("not-done");
  notDone.innerHTML = "Not Finished";
  status.append(notDone);

  let remove = document.createElement("span");
  remove.classList.add("remove");
  remove.innerHTML = "X";
  remove.onclick = function () {
    div.remove();
  };

  status.append(remove);
  div.append(status);
  list.prepend(div);
}

function addTodo(data, numberOfTodos) {
  for (let i = 0; i < numberOfTodos; i++) {
    let randomNum = Math.floor(Math.random() * data.length); // Generate random number within data length
    let div = document.createElement("div");
    div.classList.add("todo");

    let divText = document.createTextNode(`${data[randomNum].title}`);
    div.append(divText);

    let status = document.createElement("div");
    if (data[randomNum].completed == false) {
      let notDone = document.createElement("span");
      notDone.classList.add("not-done");
      notDone.innerHTML = "Not Finished";
      status.append(notDone);
    } else {
      let Done = document.createElement("span");
      Done.classList.add("done");
      Done.innerHTML = "Done";
      status.append(Done);
    }

    let remove = document.createElement("span");
    remove.classList.add("remove");
    remove.innerHTML = "X";
    remove.onclick = function () {
      div.remove();
    };

    status.append(remove);
    div.append(status);
    list.append(div);
  }
}
