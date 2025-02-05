function getTodos() {
  return decodeURIComponent(document.cookie.split('; ').find(row => row.startsWith('todos='))?.split('=')[1] || '');
}

function saveTodos() {
  let todos = $('.todo').map(function() {
    return $(this).text();
  }).get();
  document.cookie = `todos=${encodeURIComponent(todos.join('|'))};expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}

function insertList() {
  // get data
  let text = prompt("Enter a new TO DO list:");
  if (text) {
      // Create box containing the todo list
      let div = $('<div></div>', {
        class: 'todo',
        text: text,
        click: function() { removeList(div); }
      });
      $('#ft_list').prepend(div);
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
      savedTodos.split('|').forEach(function(text) {
          let div = $('<div></div>', {
            class: 'todo',
            text: text,
            click: function() { removeList(div); }
          });
          $('#ft_list').append(div);
      });
  }
}

$(document).ready(function() {
  loadTodos();
});
