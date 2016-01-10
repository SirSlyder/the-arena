#pragma strict

var timer : Transform;

function OnTriggerEnter () {
	timer.SendMessage("EndTime", SendMessageOptions.DontRequireReceiver);
}