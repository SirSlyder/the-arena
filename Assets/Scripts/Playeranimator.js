#pragma strict

var animate : Animation;

function Awake () {
	animate = GetComponent.<Animation>();
}

function Update () {
	if(Input.GetAxis("Horizontal") || Input.GetAxis("Vertical"))
	{
		animate.Play("PlayerWalk");
	}
	else
	{
		animate.Play("PlayerStopWalk");
	}
}