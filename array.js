// add: will then create a prompt for a student name request. Then add this name to the student to the array of student names in the .js file
// remove: will create a prompt for a student name request. Then remove this name from the roster array
// display: will print out the roster using console.log
// quit:will end the while loop of prompts.

var roster = []

// ADD A NEW STUDENT
function addNew(name){
	roster.push(name)
}

// REMOVE STUDENT
function remove(name) {
	// body...
	roster.pop(name)
}

// DISPLAY ROSTER
function display() {
	// body...
	console.log(roster)
}

var select=prompt("Hello, you want to use the web app? (y/n)")

if (select==="y") {
	codn=true //
	while(codn===true){
		
		var opt=prompt("Enter the option you want to use(add, remove, display, quit) : ")
		
		codn=true
		if (opt==="add") {
			// adding the name to directory 
			addNew(prompt("Enter the name you want to add: "))
			codn=true
		} else if(opt==="remove"){
			// removing the name 
			remove(prompt("Enter the name you want to remove: "))
			codn=true
		}else if(opt==="display"){
			// displaying the name 
			display()
			codn=true
		}else{
			// quit the whole
			codn=false
		}
	}
}





