#pragma strict

var Player : Transform;
private var guiShow : boolean = false;

function Awake () {
	Player = GameObject.FindGameObjectWithTag("MainCamera").transform;
}

function LookAt() {
	guiShow = true;
}

function LookAway() {
	guiShow = false;
}

function Execute() {
	Player.SendMessage("Grenade", 1, SendMessageOptions.DontRequireReceiver);
}

function OnGUI ()
{
	if (guiShow == true) {
		var message = "E for a Grenade";
		GUI.Box(Rect(Screen.width / 2 - 85, Screen.height / 2 + 32, 175, 25), message);
	}
}