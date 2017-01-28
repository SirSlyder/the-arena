#pragma strict

private var guiShow : boolean = false;
var ID : int;
var Box : Texture2D;
var Name : String;
var Style : GUIStyle;
var Player : Transform;

function Awake () {
	Player = GameObject.FindGameObjectWithTag("MainCamera").transform;
}

function LookAt() {
    guiShow = true;
}

function LookAway() {
    guiShow = false;
}

function Execute () {
	Player.SendMessage("TakenFrom", gameObject.GetComponent.<Rigidbody>(), SendMessageOptions.DontRequireReceiver);
	Player.SendMessage("Grenade", ID, SendMessageOptions.DontRequireReceiver);
	Destroy(gameObject);
}

function OnGUI ()
{
    if (guiShow == true) {
        var message = "E to take " + Name;
        GUI.DrawTexture(Rect(Screen.width / 2 - 148, Screen.height / 2 + 32, 300, 25), Box);
		GUI.Label(Rect(Screen.width / 2 - 73, Screen.height / 2 + 32, 150, 25), message, Style);
    }
}