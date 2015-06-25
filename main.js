/**************************  Victim Prompt    *****************************/


// var getVictims = prompt("How many disaster victims are there?");



/**************************   Victim Inf Prompt   ***************************/
//  var vicNam = [];  
// 	var vicNum = [];
// 	var vicStreet = [];

// for(var i = 0; i < getVictims; i ++ ) { 
 
 	//this wouldn't work when the array was below the 'for' loop
	// vicNam.push(prompt("Enter the NAME of victim number: " + i + " here: ") );
	// vicNum.push(prompt("Enter the NUMBER of victim number: " + i + " here: ") );
	// vicStreet.push(prompt("Enter the STREET of victim number: " + i + " here: ") );
	// 	};



/**************************  Volunteer Prompt   ******************************/

// var getVolunteers = prompt("How many volunteers are there?");


/**************************   Volunteer Info Prompt    *************************/
// 	var volNam = [];
// 	var volNum = [];
// 	var volStreet = [];



// for(var i = 0; i < getVolunteers; i ++ ) { 
 
 // 	volNam.push(prompt("Enter the NAME of volunteer number: " + i + " here: ") );
	// volNum.push(prompt("Enter the NUMBER of volunteer number: " + i + " here: ") );
	// volStreet.push(prompt("Enter the STREET of volunteer number: " + i + " here: ") );
    	
	// 	};


	
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
// when this is the only condition (!== true), the loops ends when this condition changes
// this works, but why not when set to ==true?
while (confirmButton !== false ) {
	

	vicNam.push(prompt("Enter the NAME of victim number: " + i + " here: ") );
	vicNum.push(prompt("Enter the NUMBER of victim number: " + i + " here: ") );
	vicStreet.push(prompt("Enter the STREET of victim number: " + i + " here: ") );
	var confirmButton = confirm("Would you like to continue?"); 
// when this is the second condition (and first condition !==true), the loop continues when confirming and cancelling
	// confirmButton = false;

	i += 1;
		
	}	

	return vicLoop; 
}

vicLoop(); 






