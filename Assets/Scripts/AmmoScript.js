#pragma strict

var ammoType = "";
var ammoQuantity : int;
var Player : Transform;

private var guiShow : boolean = false;

function LookAt() {
	guiShow = true;
}

function LookAway() {
	guiShow = false;
}

function Execute() {
	Player.SendMessage("AmmoQuantity", ammoQuantity);
	Player.SendMessage((ammoType + "ammo"));
}

function OnGUI ()
{
	if (guiShow == true) {
		var message = "E to Take " + (ammoType);
		GUI.Box(Rect(Screen.width / 2 - 73, Screen.height / 2 + 32, 150, 25), message);
	}
}