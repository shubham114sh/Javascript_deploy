// This is a Javascript file for the Spy Project

console.log("Now I am working ");
f_name=prompt("Enter your First Name : ")
l_name=prompt("Enter your Last Name  : ")
var age= prompt("What is your age: ")
var height= prompt("What is your height: ")
var pet_name=prompt("What is your Pet Name: ")

alert("Thankyou so much for the information")

if (f_name[0]===l_name[0]){
	if (age>20 && age<30) {
		if(height>=170){
			if(pet_name[pet_name.length-1]==="y"){
				console.log("This is not a website")
			}else {
				console.log("Nothing is here")
			}
		}else {
			console.log("Nothing is here")
		}
	}else {
		console.log("Nothing is here")
	}

}else {
	console.log("Nothing is here")
}