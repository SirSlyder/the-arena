#pragma strict

var Player : Transform;

private var guiShow : boolean = false;

function LookAt() {
	guiShow = true;
}

function LookAway() {
	guiShow = false;
}

function Execute() {
	Player.SendMessage("Shotgun", SendMessageOptions.DontRequireReceiver);
	Destroy(gameObject);
}

function OnGUI ()
{
	if (guiShow == true) {
		var message = "E to Take Shotgun";
		GUI.Box(Rect(Screen.width / 2 - 79, Screen.height / 2 + 32, 175, 25), message);
	}
}