function getTodos() {
  return document.cookie.split('; ').find(row => row.startsWith('todos='))?.split('=')[1] || '';
}

function saveTodos() {
  let todos = Array.from(document.querySelectorAll('.todo')).map(todo => todo.innerText);
  document.cookie = `todos=${encodeURIComponent('Test Todo')};expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}

function insertList() {
  // get data
  let text = prompt("Enter a new TO DO list:");
  if (text) {
      // Create box contain to do list
      let div = document.createElement("div");
      div.className = "todo";
      div.innerText = text;
      div.onclick = function() { removeList(div); };
      let list = document.getElementById("ft_list");
      list.insertBefore(div, list.firstChild);
      saveTodos();
  }
}

function removeList(todo) {
  if (confirm("Do you want to remove this TO DO?")) {
      todo.remove();
      saveTodos();
  }
}

function loadTodos() {
  let savedTodos = getTodos();
  if (savedTodos) {
      savedTodos.split('|').forEach(text => {
          let div = document.createElement("div");
          div.className = "todo";
          div.innerText = text;
          div.onclick = function() { removeList(div); };
          document.getElementById("ft_list").appendChild(div);
      });
  }
}

window.onload = loadTodos;