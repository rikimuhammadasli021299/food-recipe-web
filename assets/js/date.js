let date;
let month;
let year;

const today = new Date();

month = today.getMonth();
date = today.getDate();
year = today.getFullYear();

switch (month) {
  case 0:
    month = 'January';
    break;
  case 1:
    month = 'February';
    break;
  case 2:
    month = 'March';
    break;
  case 3:
    month = 'April';
    break;
  case 4:
    month = 'Mei';
    break;
  case 5:
    month = 'June';
    break;
  case 6:
    month = 'July';
    break;
  case 7:
    month = 'August';
    break;
  case 8:
    month = 'September';
    break;
  case 9:
    month = 'October';
    break;
  case 10:
    month = 'November';
    break;
  case 11:
    month = 'December';
    break;
}

function showDate() {
  document.getElementById('date').innerHTML = `${date} ${month} ${year}`;
}

showDate();
