var width=0;

function barValue(){
		$(".progress-bar").attr('style', `width:` + width +`%`);
		$(".progress-bar").text(width + '%');
}

function progress1() {
	if (width < 100){
		width += 1;
		barValue()
	}
}

function progress3() {
	if (width < 97){
		width += 3;
		barValue()
	}
	else {	
		width=100;
		barValue()
	}
}

function progress7() {
	if (width < 93){
		width += 7;
		barValue()
	}
	else {	
		width=100;
		barValue()
	}
}

function restart(){
	width = 0;
	barValue()
}

$(".j-button1").click(progress1);
$(".j-button3").click(progress3);
$(".j-button7").click(progress7);
// $(".j-button-restart").click(restart);


