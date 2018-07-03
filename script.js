"use strict";

/* 
  JavaScript WA120
	  Capstone Project
      Author: nick
      Date:   7/3/18

      Filename: toolbox.htm*/



//global variables
var i = 1;
var listItem = "";

//event listeners
document.getElementById("button").addEventListener('click', processInput);

//main function
function processInput() {
	if(i <= 5) {
		listItem = "item" + [i];
		document.getElementById(listItem).innerHTML = document.getElementById("toolBox").value;
		i++;
		} //checks i, concatenate the item number, increase increment
	if(i > 5) {
		document.getElementById("resultsFin").innerHTML = "Thanks for your suggestions"
		} //displays the list is complete with a message
		document.getElementById("toolBox").value = ""; //resets the input field for the next tool
}

