// fetching value from index.html by using query selector
const billInput = document.querySelector('#bill-value'); 
const peopleInput = document.querySelector('#sharing');
const percentageInput = document.querySelector('#dropdown');

document.querySelector('#calculate').addEventListener('click', function () {
  const billValue = Number(billInput.value);
  const people = Number(peopleInput.value);
  const percentage = Number(percentageInput.value);

  // if the values are empty then it will alert with the given colors in textbox
  if (billValue == '' || people == '' || percentage == '') {
    if (billValue == '') {
      billInput.style.background = 'red';
    } else if (people == '') {
      peopleInput.style.background = 'blue';
    } else if (percentage == '') {
      percentageInput.style.background = 'green';
    }
  } else {
    billInput.style.background = '#fff';
    peopleInput.style.background = '#fff';
    percentageInput.style.background = '#fff';
    const tip = billValue * (percentage / 100);
    const total = tip + billValue;
    const owes = total / people;
    document.querySelector('.result');

    document.querySelector('#tip').textContent = tip;
    document.querySelector('#total').textContent = total;
    document.querySelector('#owes').textContent = owes;
  }
});

//NEW BUTTON

document.querySelector('#btn-new').addEventListener('click', function () {
  document.querySelector('.result');
  billInput.value = '';
  peopleInput.value = '';
  percentageInput.value = '';
});