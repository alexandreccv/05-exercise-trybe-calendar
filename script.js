//1

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

const criandoDiasDoMes = () => {
  const listaDeDias = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const day = decemberDaysList[index];
    const dayItem = document.createElement('li');
    dayItem.innerHTML = day;
    dayItem.classList.add('day');

    if (day === 24 || day === 25 || day === 31) {
      dayItem.classList.add('holiday');
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayItem.classList.add('friday');
    }
    listaDeDias.appendChild(dayItem);
  }
}
criandoDiasDoMes();

//2

const displayHolidays = () => {
  const holidayButton = document.querySelector('#btn-holiday'); 
  const holidays = document.querySelectorAll('.holiday')
  const backgroundColor = 'rgb(238,238,238)'; 
  const novaCor = 'yellow'; 

  holidayButton.addEventListener('click', () => {
    for (let index = 0; index < holidays.length; index += 1) {
      const currentElement = holidays[index]
      const elementHaveNewColor = currentElement.style.backgroundColor === novaCor
      if (elementHaveNewColor) {
        holidays[index].style.backgroundColor = backgroundColor;
      } else {
        holidays[index].style.backgroundColor = novaCor;
      }
    }
  });
}
displayHolidays();

//3
const displayFridays = (fridaysArray) => {
  const getFridayButton = document.querySelector('#btn-friday');
  const sextas = document.getElementsByClassName('friday');
  const novaFraseSexta = 'SEXTA NOVO ';

  getFridayButton.addEventListener('click', () => {
  for (let index = 0; index < sextas.length; index += 1) {
    if (sextas[index].innerHTML !== novaFraseSexta) {
        sextas[index].innerHTML = novaFraseSexta;
      
    } else {
        sextas[index].innerHTML = fridaysArray[index];        
      }
    }
  });
}
const decemberFridays = [ 4, 11, 18, 25 ];
displayFridays(decemberFridays);

//4

const dayMouseOver = () => {
  const days = document.querySelector('#days');
  days.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px'; 
  });
}

const dayMouseOut = () => {
  const days = document.querySelector('#days');
  days.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px'; 
  });
}

dayMouseOver();
dayMouseOut();

//5
