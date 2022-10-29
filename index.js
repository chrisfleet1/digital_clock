let date = new Date();

const dateDisplay = document.querySelector('.date');
const timeDisplay = document.querySelector('.time');

console.log(date);

function changeDate() {
    let updatedDate = '';
    let day = date.getDay();
    let newDate = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    // Display the day

    switch (day) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
      default:
        console.log("Error");
    }

    // Display the month

    switch (month) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
      default:
        console.log("Error");
      }

        updatedDate = `${day} ${newDate} ${month} ${year}`;
        dateDisplay.textContent = updatedDate;
};
    
function changeTime(){
	let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let timeOfDay = "PM";
  
  if(hour >= 0 && hour < 12) {
    timeOfDay = 'AM';
  } else {
    timeOfDay = 'PM';
  };
  
  hour = (hour < 10) ? "0" + hour : hour;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  
  var updatedTime = hour + ":" + minutes + ":" + seconds + " " + timeOfDay;
  timeDisplay.textContent = updatedTime;
  
  setTimeout(changeTime, 1000);
  console.log(updatedTime);
  
};

changeDate();
changeTime();