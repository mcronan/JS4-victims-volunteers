/**************************  Victim Prompt    *****************************/


// var getVictims = prompt("How many disaster victims are there?");



/**************************   Victim Info Prompt   ***************************/
//  var vicNam = [];  
// 	var vicNum = [];
// 	var vicStreet = [];

// for(var i = 0; i < getVictims; i ++ ) { 
 
//  	// this wouldn't work when the array was below the 'for' loop
// 	vicNam.push(prompt("Enter the NAME of victim number: " + i + " here: ") );
// 	vicNum.push(prompt("Enter the NUMBER of victim number: " + i + " here: ") );
// 	vicStreet.push(prompt("Enter the STREET of victim number: " + i + " here: ") );
		// };



/**************************  Volunteer Prompt   ****************************/

// var getVolunteers = prompt("How many volunteers are there?");


/**************************   Volunteer Info Prompt    *************************/
// 	var volNam = [];
// 	var volNum = [];
// 	var volStreet = [];



// for(var i = 0; i < getVolunteers; i ++ ) { 
 
//  	volNam.push(prompt("Enter the NAME of volunteer number: " + i + " here: ") );
// 	volNum.push(prompt("Enter the NUMBER of volunteer number: " + i + " here: ") );
// 	volStreet.push(prompt("Enter the STREET of volunteer number: " + i + " here: ") );
    	
// 		};


	
/*******************************  End Alert   ***********************************/

// var endAlert = alert( "Victim count: " + getVictims + "\n" + "Volunteer count: " + getVolunteers +
//  "\n" + "The victim names are: " + vicNam + "\n" + "The volunteer names are: " + volNam );


/*******************************  Bonus I  *********************************/

// prompt users to input information of the victims right away
// ask them if they want to continue
// use while loop, confirm button, and the prompt button to achieve this

var vicNam = [];  
var vicNum = [];
var vicStreet = [];
var vicLoop = function() {

var i = 1;

// this works because confirm button is not defined before the loop, which means it is undefined. 
// undefined does not equal true, which is why it won't work when confirm === true. 
// but it does not equal to false either, so it will run when confirm !== false
// keeping this here for future reference

// while (confirmButton !== false ) {

// 	vicNam.push(prompt("Enter the NAME of victim number: " + i + " here: ") );
// 	vicNum.push(prompt("Enter the NUMBER of victim number: " + i + " here: ") );
// 	vicStreet.push(prompt("Enter the STREET of victim number: " + i + " here: ") );
// 	var confirmButton = confirm("Would you like to continue?"); 

// 	i += 1;
		
// 	}	

// 	return vicLoop; 
// }

// vicLoop(); 

/*******************************  Bonus I Working Version  *********************************/
// we must define confirmButton first, so that the loop can recognise it
var confirmButton = true;

while (confirmButton) {

	vicNam.push(prompt("Enter the NAME of victim number: " + i + " here: ") );
	vicNum.push(prompt("Enter the NUMBER of victim number: " + i + " here: ") );
	vicStreet.push(prompt("Enter the STREET of victim number: " + i + " here: ") );
	var confirmButton = confirm("Would you like to continue?"); 

	i += 1;
		
	}	

	return vicLoop; 
}

vicLoop(); 



// /*******************************  Bonus II  *********************************/
// // use objects for the data this time, not arrays 
// // create an array 
// var volunteers = [];

// // create and empty object literal 

// 	var newVolunteer = {}; 

// 	//make new propty for each piece of info, and add the value
// 		newVolunteer.name = prompt("What is the NAME?");
// 		newVolunteer.street = prompt("What is the STREET?");

// // push to array volunteers
// 		volunteers.push(newVolunteer);
	
// console.log(volunteers[0].street);




