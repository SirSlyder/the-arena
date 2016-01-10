#pragma strict

var Style : GUIStyle;
var BoxTexture : Texture2D;

function Start () {

}

function Update () {

}

function OnGUI () {
	Style.fontSize = 16 * (Screen.width / 570);
	GUI.DrawTexture(Rect(Screen.width / 2, Screen.height / 2, 200, 25), BoxTexture);
	GUI.Button (new Rect (Screen.width / 2, Screen.height / 2, 100, 20), "Play", Style);
}