#pragma strict

var Box : Texture2D;
var MeleeType : int;
var MeleeString = "";
var Player : Transform;
var Style : GUIStyle;

private var guiShow : boolean = false;

function LookAt() {
	guiShow = true;
}

function LookAway() {
	guiShow = false;
}

function Awake() {
	Player = GameObject.FindGameObjectWithTag("MainCamera").transform;
}

function Execute() {
	Player.SendMessage("Melee", MeleeType);
	Destroy(gameObject);
}

function OnGUI ()
{
	if (guiShow == true) {
		var message = "E to Take " + (MeleeString);
		GUI.DrawTexture(Rect(Screen.width / 2 - 98, Screen.height / 2 + 32, 200, 25), Box);
		GUI.Label(Rect(Screen.width / 2 - 73, Screen.height / 2 + 32, 150, 25), message, Style);
	}
}