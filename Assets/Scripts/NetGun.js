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
	Player.SendMessage("NetGun", SendMessageOptions.DontRequireReceiver);
	Destroy(gameObject);
}

function OnGUI ()
{
	if (guiShow == true) {
		var message = "E to Take NetGun";
		GUI.Box(Rect(Screen.width / 2 - 73, Screen.height / 2 + 32, 150, 25), message);
	}
}