#pragma strict

var animate : Animation;
var Player : Transform;
private var guiShow : boolean = false;

function Awake () {
	animate = GetComponent.<Animation>();
}

function LookAt() {
	guiShow = true;
}

function LookAway() {
	guiShow = false;
}

function Execute() {
	Player.SendMessage("press", SendMessageOptions.DontRequireReceiver);
	animate.Play("PressButton");
}

function OnGUI ()
{
	if (guiShow == true) {
		var message = "E to Press Button";
		GUI.Box(Rect(Screen.width / 2 - 73, Screen.height / 2 + 32, 150, 25), message);
	}
}