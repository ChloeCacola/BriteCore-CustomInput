//General vanilla javascript

//when Cancel is selected, clear the form
document.getElementById("cancel").onclick = clearForm;

function clearForm() {
	document.getElementById("field-D-inputs").reset();
}

//when Delete is selected, do something
document.getElementById("delete").onclick = deleteInput;

function deleteInput() {
	//do something if input exists
	alert("Input to be deleted if existing.");
	document.getElementById("field-D-inputs").reset();
}

//when Save is selected, check if a field group is selected to save the input there; also allow option to save individually (?)
document.getElementById("save").onclick = saveChanges;

function saveChanges() {
	//do stuff!
	alert("Changes to be saved.");
}

//when selecting a field type, change the selected type to be 'active' (styled so it shows as selected)
var test = document.getElementsByClassName("test");


var fieldTypeSelected = function() {
	//First, if 'test' field type contains the class 'active', remove it!
	for (var i=0; i < test.length; i++) {
		if (test[i].classList.contains("active")) {
		test[i].classList.remove("active");
		}
	}
	this.classList.add("active");

	//Next, change the names and types of inputs based on what FIELD TYPE (ID) was selected
	alert("Names, types and other mods to Field Detail Inputs will change now");
}

for (var i=0; i < test.length; i++) {
	test[i].addEventListener('click', fieldTypeSelected);
}