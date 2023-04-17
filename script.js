  const ol = document.getElementById('lista-tarefas');
  const btnAdd = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');
  const lis = document.getElementsByTagName('li');
  const btnRemove = document.getElementById('apaga-tudo');
  const btnRemoveCompleted = document.getElementById('remover-finalizados');

  const changeColor = (e) => {
    for (let i = 0; i < lis.length; i += 1) {
      lis[i].style.backgroundColor = 'white';
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
      const concluded = document.getElementsByClassName('completed');
    }
  }
  const addList = () => {
    const li = document.createElement('li');
    li.innerText = input.value;
    li.addEventListener('click', changeColor);
    li.addEventListener('dblclick', scratch)
    ol.appendChild(li);
    input.value = '';
  }

  const cleanList = () => {
    for (let i = lis.length - 1; i >= 0; i -= 1) {
      ol.removeChild(lis[i]);
    }
  }

  btnAdd.addEventListener('click', addList);
  btnRemove.addEventListener('click', cleanList);


  const remove = () => {
    const concluded = document.getElementsByClassName('completed');
    for (let i = concluded.length - 1; i >= 0; i -= 1) {
      concluded[i].remove();
    }
  }

  btnRemoveCompleted.addEventListener('click', remove);

