function form(form) {
	var fName = form.first_name_field.value;
	var lName = form.last_name_field.value;
	var userPhone = form.phone_field.value;
	var userEmail = form.email_field.value;
	var filled = 1;

	if(!fName) {
		filled =0;
	}
	if(!lName) {
		filled =0;
	}
	if(!userPhone) {
		filled = 0;
	}
	if(!userEmail) {
		filled = 0;
	}
	if(!filled) {
		alert("Looks Like you don't do this OFTEN");
		return false;
	}
	else{
		alert("Mix that with the OVO and that XO");
		return true;
	}
}