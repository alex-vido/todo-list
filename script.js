  const body = document.querySelector('body');
  const ol = document.getElementById('lista-tarefas');
  const btn = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');

  const addList = () => {
    const li = document.createElement('li');
    li.innerText = input.value;
    ol.appendChild(li)
    input.value = '';
  }

  btn.addEventListener('click', addList);

