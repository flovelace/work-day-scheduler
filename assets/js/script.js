//checking to see date
const today = moment();
console.log(today.format());

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

    var thisHour = moment().format("HH");
    var tenAm = localStorage.getItem("10am");
    var tenAmInput = document.getElementById("10am");
    tenAmInput.textContent = tenAm;

    var thisHour = moment().format("HH");
    var elevenAm = localStorage.getItem("11am");
    var elevenAmInput = document.getElementById("11am");
    elevenAmInput.textContent = elevenAm;

    var thisHour = moment().format("HH");
    var twelvePm = localStorage.getItem("12pm");
    var twelvePmInput = document.getElementById("12pm");
    twelvePmInput.textContent = twelvePm;

    var thisHour = moment().format("HH");
    var onePm = localStorage.getItem("1pm");
    var onePmInput = document.getElementById("1pm");
    onePmInput.textContent = onePm;

    var thisHour = moment().format("HH");
    var twoPm = localStorage.getItem("2pm");
    var twoPmInput = document.getElementById("2pm");
    twoPmInput.textContent = twoPm;

    var thisHour = moment().format("HH");
    var threePm = localStorage.getItem("3pm");
    var threePmInput = document.getElementById("3pm");
    threePmInput.textContent = threePm;

    var thisHour = moment().format("HH");
    var fourPm = localStorage.getItem("4pm");
    var fourPmInput = document.getElementById("4pm");
    fourPmInput.textContent = fourPm;

    var thisHour = moment().format("HH");
    var fivePm = localStorage.getItem("5pm");
    var fivePmInput = document.getElementById("5pm");
    fivePmInput.textContent = fivePm;

    var thisHour = moment().format("HH");
    var sixPm = localStorage.getItem("6pm");
    var sixPmInput = document.getElementById("6pm");
    sixPmInput.textContent = sixPm;
    
    //variable for save button
    var saveButton = document.querySelector(".saveBtn");
    
    //sets
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

    saveButton.addEventListener('click', function(event) {
        event.preventDefault();
        console.log(saveButton, "hello");
    
        var userTasks = {
           // task: document.getElementsByClassName("description").val()
           task: document.getElementById("9am").value
        }
    
        console.log(userTasks);
    
        var userInput = localStorage.getItem("9am");
        console.log(userInput);
     //   var JSONInput = JSON.parse(userInput);
     //   console.log(JSONInput);
     //   JSONInput.push(userTasks);
    
        localStorage.setItem('9am', JSON.stringify(userTasks.task));
    });

    
