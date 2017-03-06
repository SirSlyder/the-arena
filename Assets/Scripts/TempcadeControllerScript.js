#pragma strict

var Box : Texture2D;
var Style : GUIStyle;
private var guiShow : boolean = false;
var names : String;

function LookAt () {
	guiShow = true;
}

function LookAway () {
	guiShow = false;
}

function Hold (player : Transform) {
	Debug.Log("Taken Slot5 Weapon!");
	player.SendMessage("Slot5", SendMessageOptions.DontRequireReceiver);
	Destroy(gameObject);
}

function OnGUI ()
{
	if (guiShow == true) {
		var message = "Hold E To Take " + names + "";
		GUI.DrawTexture(Rect(Screen.width / 2 - 198, Screen.height / 2 + 32, 400, 25), Box);
		GUI.Label(Rect(Screen.width / 2 - 73, Screen.height / 2 + 32, 150, 25), message, Style);
	}
}