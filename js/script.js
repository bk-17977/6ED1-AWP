const formInputs = document.querySelectorAll("input");
const formTextArea = document.querySelectorAll("textarea");
const form = document.getElementById("registrationForm");
const themeBtn = document.querySelector(".theme-btn");
const uidHelper = document.querySelectorAll(".uidHelper");
const error = document.querySelectorAll(".error");

//Generate Automatic UserId
uidHelper.forEach((element) => {
	element.addEventListener("keyup", (e) => {
		var firstname = uidHelper[0].value != "" ? uidHelper[0].value : "";
		var divider =
			uidHelper[0].value != "" && uidHelper[1].value != "" ? "_" : "";
		var lastname = uidHelper[1].value != "" ? uidHelper[1].value : "";
		document
			.getElementById("userIdInp")
			.setAttribute("value", (firstname + divider + lastname).toLowerCase());
	});
});

//Radio validate
formInputs.forEach((element) => {
	element.addEventListener("blur", (e) => {
		if (e.target.type != "radio") {
			let errBoard = e.target.nextElementSibling;
			if (e.target.value == "") errBoard.style.display = "block";
			else errBoard.style.display = "none";
		}
	});
});

//TextArea Validation
formTextArea.forEach((element) => {
	element.addEventListener("blur", (e) => {
		let errBoard = e.target.nextElementSibling;
		if (e.target.value == "") errBoard.style.display = "block";
		else errBoard.style.display = "none";
	});
});

//Form Submit
form.addEventListener("submit", (e) => {
	e.preventDefault();

	//Radio Validation
	const formRadio = document.getElementsByName("gender");
	let validRadio = false;
	formRadio.forEach((ele) => {
		if (ele.checked) validRadio = true;
	});
	let errBoard = document.getElementById("genderErr");
	if (validRadio == true) errBoard.style.display = "none";
	else errBoard.style.display = "block";

	//error checks
	if (verifyAllFields()) {
		window.location = "/home.html";
	} else {
		alert("Please fill form properly");
	}
});

//Verify all form fields
const verifyAllFields = () => {
	var flag = true;
	error.forEach((err) => {
		if (err.style.display == "block") {
			flag = false;
		}
	})
	return flag;
}