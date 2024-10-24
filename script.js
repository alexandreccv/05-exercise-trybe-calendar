
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

const daysList = document.querySelector('#days');

//  Será responsável por criar e adicionar os dias do mês ao elemento listaDeDias.
const createDaysOfMonth = () => {

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const day = decemberDaysList[index];
    const li = document.createElement('li');// criando a li
    li.innerText = day;
    li.classList.add('day');// atribuindo a classe day

//  Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter a classe holiday
    if (day === 24 || day === 25 || day === 31) {
      li.classList.add('holiday');
    }
//  Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      li.classList.add('friday');
    }
    daysList.appendChild(li);
  }
}
createDaysOfMonth();

//2

const btnHoliday = document.getElementById('btn-holiday');
const holiday = document.querySelectorAll('.holiday');
const backgroundColor = 'rgb(238,238,238)'; 
const newColor = 'yellowgreen'; 

const handleColorChange = () => {

  btnHoliday.addEventListener('click', () => {
    for (let i = 0; i < holiday.length; i += 1) {
      const currentElement = holiday[i];
      const newElementColor = currentElement.style.backgroundColor === newColor

      if (newElementColor) {
        holiday[i].style.backgroundColor = backgroundColor;
      } else {
        holiday[i].style.backgroundColor = newColor
      }
    }
  })
}

handleColorChange();

// 3

const fridayButton = document.querySelector('#btn-friday');
const friday = document.getElementsByClassName('friday');
const newPhraseFriday = 'SEXTOU!'

const modifyFridayText = (arrFriday) => {
  fridayButton.addEventListener('click', () => {
    for (let index = 0; index < friday.length; index += 1) {
      if (friday[index].innerHTML !== newPhraseFriday) {
          friday[index].innerHTML = newPhraseFriday;
      } else {

        friday[index].innerHTML = arrFriday[index];
      }
    }
  });
}

const arrFriday = [ 4, 11, 18, 25 ];
modifyFridayText(arrFriday);


// 4



const numbersMouseOver = () => {
  daysList.addEventListener('mouseover',(event) => {
    event.target.style.fontSize = '30px';
  });
}

const numbersMouseOut = () => {
  daysList.addEventListener('mouseout',(event) => {
    event.target.style.fontSize = '20px';
  });
}

numbersMouseOver();
numbersMouseOut();

//5 -  bonus

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

// 6 
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