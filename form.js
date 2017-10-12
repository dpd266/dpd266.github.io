var registration_form = document.getElementById("registration_form");

function handleSubmission(event){
	var username = registration_form.elements.username;
	var password = registration_form.elements.password;
	var confirm = registration_form.elements.confirm;
	var hobbies = registration_form.elements.hobbies;
	var gender = registration_form.elements.gender;

	var hobbieArray = [];

	for(var i=0; i < hobbies.length; i++){
		if (hobbies[i].checked){
			hobbieArray.push(hobbies[i].value);
		}
	}

	if(username.value.length < 3){
		alert("Please make sure your username has more than 3 letters");
		event.preventDefault();
		username.focus();

		return false;
	}

	if(password.value.length < 3){
		alert("Please make sure your password has more than 3 letters");
		event.preventDefault();
		password.focus();

		return false;
	}


}

registration_form.addEventListener("submit", handleSubmission)