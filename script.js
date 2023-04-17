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

  const addList = () => {
    const li = document.createElement('li');
    li.innerText = input.value;
    li.addEventListener('click', changeColor);
    ol.appendChild(li)
    input.value = '';
  }

  btn.addEventListener('click', addList);

