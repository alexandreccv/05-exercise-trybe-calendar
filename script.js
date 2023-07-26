
const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Escreva seu código abaixo.

//  A tag ul deve conter o id 'days'. 
//  Seleciona um elemento com o ID "days" no documento HTML e o armazena na variável listaDeDias  
const listaDeDias = document.querySelector('#days');

//  Será responsável por criar e adicionar os dias do mês ao elemento listaDeDias.
const criandoDiasDoMes = () => {
  
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const day = decemberDaysList[index];
    const dayItem = document.createElement('li');// criando a li
    dayItem.innerText = day;
    dayItem.classList.add('day');// atribuindo a classe day

//  Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter a classe holiday
    if (day === 24 || day === 25 || day === 31) {
      dayItem.classList.add('holiday');
    }
//  Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayItem.classList.add('friday');
    }
    listaDeDias.appendChild(dayItem);
  }
}
criandoDiasDoMes();

// Exercício 2 – Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday"
const feriadoButton = document.getElementById('btn-holiday');
const feriado = document.querySelectorAll('.holiday');
const backgroundColor = 'rgb(238,238,238)'; 
const novaCor = 'yellow'; 

//  Esta funcao sera responsável por mudar a cor de fundo dos elementos com a classe "holiday" quando o botão for clicado.
const mudaCor = () => {
  //  E adicionado um ouvinte de eventos para o botão, o código dentro do bloco {} será executado toda vez que o botão for clicado.
  feriadoButton.addEventListener('click', () => {
    for (let index = 0; index < feriado.length; index += 1) {
      const elementoAtual = feriado[index]
      const novaCorElemento = elementoAtual.style.backgroundColor === novaCor

      if (novaCorElemento) {
        feriado[index].style.backgroundColor = backgroundColor;
      } else {
        feriado[index].style.backgroundColor = novaCor;
      }
    }
  });
}
mudaCor();

//  Exercício 3 – Implemente uma função que modifica o texto exibido nos dias que são sextas-feiras.

const sextaButton = document.querySelector('#btn-friday');
const sextas = document.getElementsByClassName('friday');
const novaFraseSexta = 'SEXTOU ';

//  Essa função recebe um parâmetro arraySexta, um array de números representando os dias de sexta-feira de dezembro.
const displayFridays = (arraySexta) => {

  sextaButton.addEventListener('click', () => {
  for (let index = 0; index < sextas.length; index += 1) {
    if (sextas[index].innerHTML !== novaFraseSexta) {
        sextas[index].innerHTML = novaFraseSexta;
      
    } else {
        sextas[index].innerHTML = arraySexta[index];        
      }
    }
  });
}
const decemberSextas = [ 4, 11, 18, 25 ];
displayFridays(decemberSextas);

//  Exercício 4 – Implemente duas funções que criem um efeito de "zoom"
//  Este elemento contem os dias do mês que serão afetados pelos eventos de mouseover e mouseout.
const days = document.querySelector('#days');

const dayMouseOver = () => {
  days.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px'; 
  });
}
const dayMouseOut = () => {
  days.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px'; 
  });
}

dayMouseOver();
dayMouseOut();

//  Exercício 5 - Implemente uma função que seleciona uma tarefa e atribua a cor da tarefa ao dia do calendário
//  A primeira para selecionar e desmarcar a tarefa, 

const setTaskClass = () => {
  let tasks = document.getElementsByClassName('task');
  for (const task of tasks) {
    task.addEventListener('click', (event) => {
      let isSelectedPrevious = document.querySelector('.selected');

      event.target.classList.add('selected');

      // verifica se existe uma tarefa que estava selecionada previamente ao clique
      if (isSelectedPrevious !== null) {
        isSelectedPrevious.classList.remove('selected');
      }

    });
  }
};

setTaskClass();

//  a segunda funcao pra mudar a cor do texto do calendário de acordo com a cor referente a tarefa.

const setDayColor = () => {

  let days = document.querySelector('#days');

  days.addEventListener('click', (event) => {

    let selectedTask = document.querySelector('.selected');
    if (selectedTask === null || 
      event.target.style.color === selectedTask.style.backgroundColor) {
      // Se não houver tarefa selecionada
      // ou se o dia clicado já é da cor selecionada
      // aplicaremos a cor padrão
      event.target.style.color = 'rgb(119,119,119)';
    } else {
      // Se o dia clicado é de cor diferente da selecionada
      // aplica a cor selecionada ao dia
      event.target.style.color = selectedTask.style.backgroundColor;
    }
  });
};

setDayColor();

//  6

const addNewTask = () => {
  const getInputField = document.querySelector('#task-input');
  const addInputButton = document.querySelector('#btn-add');
  const getTaskList = document.getElementById('task-list');

  addInputButton.addEventListener('click', () => {
    if (getInputField.value.length > 0) {
      const newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  });

  getInputField.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      const newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
}

addNewTask();

