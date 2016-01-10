#pragma strict

var animate : Animation;
var animatetimer : float = 0.0;
private var dooropen : boolean = false;

function Awake () {
	animate = GetComponent.<Animation>();
}

function Update () {
	animatetimer += Time.deltaTime;
	if(animatetimer >= 1)
	{
		if(dooropen == false)
		{
			animate.Play("DoorOpen");
			dooropen = true;
		}
	}
}