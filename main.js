/**************************  Victim Prompt    *****************************/


var getVictims = prompt("How many disaster victims are there?");



/**************************   Victim Infp Prompt   ***************************/
    var vicNam = [];  
	var vicNum = [];
	var vicStreet = [];

for(var i = 0; i < getVictims; i ++ ) { 
 
 	//this wouldn't work when the array was below the 'for' loop
	vicNam.push(prompt("Enter the NAME of victim number: " + i + " here: ") );
	vicNum.push(prompt("Enter the NUMBER of victim number: " + i + " here: ") );
	vicStreet.push(prompt("Enter the STREET of victim number: " + i + " here: ") );
		};



/**************************  Volunteer Prompt   ******************************/

var getVolunteers = prompt("How many volunteers are there?");


/**************************   Volunteer Info Prompt    *************************/
	var volNam = [];
	var volNum = [];
	var volStreet = [];



for(var i = 0; i < getVolunteers; i ++ ) { 
 
 	volNam.push(prompt("Enter the NAME of volunteer number: " + i + " here: ") );
	volNum.push(prompt("Enter the NUMBER of volunteer number: " + i + " here: ") );
	volStreet.push(prompt("Enter the STREET of volunteer number: " + i + " here: ") );
    	
		};


	
/*******************************  Alert   ***********************************/

var endAlert = alert( "Victim count: " + getVictims + "\n" + "Volunteers count: " + getVolunteers +
 "\n" + "The victim names are: " + vicNam + "\n" + "The volunteer names are: " + volNam );


/*******************************  Bonus Prompt  *********************************/

// var vicNamPrompt = prompt("Enter the NAME of any victim");

// if( vicNamPrompt = )