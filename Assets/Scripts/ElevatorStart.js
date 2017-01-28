#pragma strict

var anim : Animation;
var player : Transform;

function Start () {
	anim = GetComponent.<Animation>();
	anim.Play("ElevatorMove");
}

function Update () {
	if(!anim.IsPlaying("ElevatorMove") && player != null)
	{
		player.parent = null;
	}
}