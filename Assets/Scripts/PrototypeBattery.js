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
	Player.SendMessage("PrototypeAmmo", SendMessageOptions.DontRequireReceiver);
	Destroy(gameObject);
}

function OnGUI ()
{
	if (guiShow == true) {
		var message = "E to Take Prototype Battery";
		GUI.Box(Rect(Screen.width / 2 - 103, Screen.height / 2 + 32, 200, 25), message);
	}
}