document.addEventListener('DOMContentLoaded', function() {

  var form = document.querySelector('form');

  form.addEventListener('submit', function(event) {

    event.preventDefault();

  var todoInput = document.querySelector('.to-do-item');

  var todoValue = todoInput.value;

  var p = document.createElement('p');
  p.innerHTML = todoValue;

  var toDo = document.querySelector('.todolist');

  toDo.appendChild(p);

  });

document.addEventListener('DOMContentLoaded', function() {

  var todos = ['Do Laundry', 'Cook Dinner'];

  todos.forEach(function(todos, index) {
    var number = index + 1;
    var textForPage = number + '. ' + todos;
    var p = document.createElement('p');
    p.innerHTML = textForPage;
    var container = document.querySelector('.todolist');
    container.appendChild(p);
  });

});
