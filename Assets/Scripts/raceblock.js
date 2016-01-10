#pragma strict

var timer : Transform;
var racing : boolean = false;

function OnTriggerEnter () {
	if(racing == false)
	{
		racing = true;
		timer.SendMessage("BeginTime", SendMessageOptions.DontRequireReceiver);
	}
}

function Reset () {
	racing = false;
}