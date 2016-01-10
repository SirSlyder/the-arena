#pragma strict

var animate : Animation;
private var animatetrue : boolean = false;

function Awake () {
	animate = GetComponent.<Animation>();
}

function press () {
	if(animatetrue == false)
	{
		animatetrue = true;
		animate.Play("LowerLift");
	}
}
