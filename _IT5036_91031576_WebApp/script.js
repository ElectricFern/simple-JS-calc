function insert(num) {
	document.form.displaybox.value = document.form.displaybox.value+num;
}

function equal() {
	var sum = document.form.displaybox.value;
	if(sum){
		document.form.displaybox.value = eval(sum);
	}
}

function clearall() {
	document.form.displaybox.value = "";
}

function clearentry() {
	var sum = document.form.displaybox.value;
	document.form.displaybox.value = sum.substring(0,sum.length-1);
}
