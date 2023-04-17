  const body = document.querySelector('body');
  const ol = document.getElementById('lista-tarefas');
  const btn = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');
  const lis = document.getElementsByTagName('li');

  const changeColor = (e) => {
    for (li of lis) {
      li.style.backgroundColor = 'white';
    }
    e.target.style.backgroundColor = 'gray';
  }

  const scratch = (e) => {
    if (e.target.classList.contains('completed')) {
      e.target.classList.remove('completed')
      e.target.style.textDecoration = 'none';
    } else {
      e.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)'
      e.target.classList.add('completed')
    }
  }

  const addList = () => {
    const li = document.createElement('li');
    li.innerText = input.value;
    li.addEventListener('click', changeColor);
    li.addEventListener('dblclick', scratch)
    ol.appendChild(li)
    input.value = '';
  }

  btn.addEventListener('click', addList);

