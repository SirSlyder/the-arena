#pragma strict

var shot : boolean = false;
var barricade : Animation;

function Shot () {
	if(shot == false)
	{
		barricade.Play("tutorialblockdown");
		shot = true;
	}
}