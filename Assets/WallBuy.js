#pragma strict

var Box : Texture2D;
var Name : String;
var ID : int;
var Price : int;
var Player : Transform;
var Self : Transform;
var Style : GUIStyle;
var Ammo : int;
private var guiShow : boolean = false;

function Awake () {
	Player = GameObject.FindGameObjectWithTag("MainCamera").transform;
	Self = gameObject.transform;
}

function LookAt () {
	guiShow = true;
}

function LookAway () {
	guiShow = false;
}

function Hold () {
	Player.SendMessage("BuyGun", Price, SendMessageOptions.DontRequireReceiver);
	Player.SendMessage("GunBuying", ID, SendMessageOptions.DontRequireReceiver);
	Player.SendMessage("CurrentAmmo", Ammo, SendMessageOptions.DontRequireReceiver);
}

function OnGUI ()
{
	if (guiShow == true) {
		var message = "Hold E For " + Name + " : " + Price + " Points";
		GUI.DrawTexture(Rect(Screen.width / 2 - 148, Screen.height / 2 + 32, 300, 25), Box);
		GUI.Label(Rect(Screen.width / 2 - 73, Screen.height / 2 + 32, 150, 25), message, Style);
	}
}