// let button = document.getElementById('changeBackground');

// button.addEventListener('click', () => {
//   document.body.style.backgroundColor = 'pink';

// function Contact(first_name, second_name, phone_number, email,){ 
//   this.first_name = first_name;
//   this.second_name = second_name;
//   this.phone_number = phone_number;
//   this.email = email;
// }
//creates an array to store the contacts.
var contacts =[];
//get the input from the form and save it to contacts array.
var saveContact=() => {
	var first_name=document.querySelector("#FirstName").value;
	var second_name=document.querySelector("#SecondName").value;
	var phone_number=document.querySelector("#PhoneNumber").value;
	var email=document.querySelector("#EmailAddress").value;
//create a contact object using the constructor
var newcontact = [first_name,second_name,phone_number,email];
//save the contacts
contacts.push(newcontact);
//print an array of contacts.
//console.log(contacts);
console.log("saved successfully");
}

// console.log(contacts[0].phone_number);}
//console.log(contacts[0].first_name)
function search_function()

{
	var phrase = document.querySelector("#search_phrase").value;

	for (var i = 0; i<contacts.length; i++)
	{
		var contact = contacts[i];
		if(contact[0].includes(phrase)){
		 // console.log(contacts);

		 document.getElementById("result").innerHTML= contact[0];
		}
	    
        else
	    
	    {
      	console.log("Oops not found");
	}
}
};