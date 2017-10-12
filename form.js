var registration_form = document.getElementByID("registration_form");

function handleSubmission(event){
	var username = registration_form.elements.username;
	var password = registration_form.elements.password;
	var confirm = registration_form.elements.confirm;
	var hobbies = registration_form.elements.hobbies;

	var hobbieArray = [];

	for(var i=0; i < hobbies.length; i++){
		if (hobbies[i].checked){
			hobbieArray.push(hobbies[i].value);
		}
	}

	if(username.value.length < 3){
		alert("Please make sure your username has more than 3 letters");
		event.preventDefault();

		return false;
	}
}

registration_form.addEventListener("submit", handleSubmission)