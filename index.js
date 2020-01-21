document.addEventListener('D0MContentLoaded' function() {

var form = document.querySelector('form');

form.addEventListener('submit', function(event) {

  event.preventDefault();

  var todoInput = document.queryselector('.to-do-item');

  var todoValue = todoInput.value;

  var p = document.createElement('p');
  p.innerHTML = todoValue;

  var toDo = document.querySelector('.todolist');

  toDo.appendChild(p);
  });
  
});
