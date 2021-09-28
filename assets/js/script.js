//checking to see date
const today = moment();
console.log(today.format());

// Initalize a DATABASE using Local Storage
if(localStorage.getItem("9am") == "") {
    localStorage.setItem("9am", "");
}

//sets the current day and date in the header
const todaysDate = document.querySelector("#currentDay");
var currentTime = moment();
todaysDate.textContent = currentTime.format("dddd, MMMM Do, YYYY");

//variable to hold current hour we are in
var thisHour = moment().format("HH");

//variable for save button
var saveButton = document.querySelector(".saveBtn");

//
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


    
}

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


