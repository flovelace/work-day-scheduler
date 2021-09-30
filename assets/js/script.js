//checking to see date
const today = moment();
console.log(today.format());
checkTime();

//set event bubbling for btn
var wrapper = document.querySelector('.container');
wrapper.addEventListener('click', (event) => {
    event.stopPropagation();

    // Grab the USER input
    var task = event.target.parentNode.previousElementSibling.value;
    console.log(`Task: ${task}`);

    // set our new data
    let timeTask = event.target.parentNode.previousElementSibling.getAttribute('id');
    console.log(timeTask);

    localStorage.setItem(timeTask, JSON.stringify(task));
})

//sets the current day and date in the header
function checkTime () {
    const todaysDate = document.querySelector("#currentDay");
    var currentTime = moment();
    todaysDate.textContent = currentTime.format("dddd, MMMM Do, YYYY");

    };
    
    //variable to hold current hour we are in
    var thisHour = moment().format("HH");
    var nineAm = localStorage.getItem("9am");
    var nineAmInput = document.getElementById("9am");
    nineAmInput.textContent = nineAm;

    var tenAm = localStorage.getItem("10am");
    var tenAmInput = document.getElementById("10am");
    tenAmInput.textContent = tenAm;

    var elevenAm = localStorage.getItem("11am");
    var elevenAmInput = document.getElementById("11am");
    elevenAmInput.textContent = elevenAm;

    var twelvePm = localStorage.getItem("12pm");
    var twelvePmInput = document.getElementById("12pm");
    twelvePmInput.textContent = twelvePm;

    var onePm = localStorage.getItem("1pm");
    var onePmInput = document.getElementById("1pm");
    onePmInput.textContent = onePm;

    var twoPm = localStorage.getItem("2pm");
    var twoPmInput = document.getElementById("2pm");
    twoPmInput.textContent = twoPm;

    var threePm = localStorage.getItem("3pm");
    var threePmInput = document.getElementById("3pm");
    threePmInput.textContent = threePm;

    var fourPm = localStorage.getItem("4pm");
    var fourPmInput = document.getElementById("4pm");
    fourPmInput.textContent = fourPm;

    var fivePm = localStorage.getItem("5pm");
    var fivePmInput = document.getElementById("5pm");
    fivePmInput.textContent = fivePm;

    var sixPm = localStorage.getItem("6pm");
    var sixPmInput = document.getElementById("6pm");
    sixPmInput.textContent = sixPm;
    
    //variable for save button
    var saveButton = document.querySelector(".saveBtn");
    
    //sets the colours depending on the time
    var userTextInput = document.querySelectorAll("textarea");
    var timeArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"]
    for(i=0; i< userTextInput.length; i++) {
    
        if(i+9 < thisHour) {
            userTextInput[i].setAttribute("class", "col-lg-10 past")
        } else if (i+9 == thisHour) {
            userTextInput[i].setAttribute("class", "col-lg-10 present")
        } else {
            userTextInput[i].setAttribute("class", "col-lg-10 future")
        }
           
    };
    
