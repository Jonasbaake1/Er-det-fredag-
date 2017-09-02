window.onload = function() {
	var d = new Date();
	var ugedag;
	if (d.getDay() === 5) {
	ugedag = "Ja!";
	} else {
	ugedag = "Nej";
	}
document.getElementById("demo").innerHTML = ugedag;
}
