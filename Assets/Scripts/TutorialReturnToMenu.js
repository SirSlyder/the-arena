#pragma strict

var Style : GUIStyle;
var Box : Texture2D;
private var guiShow : boolean = false;

function LookAt() {
    guiShow = true;
}

function LookAway() {
    guiShow = false;
}

function Execute() {
	Application.LoadLevel("Menu");
}

function OnGUI ()
{
    if (guiShow == true) {
        var message = "E to Return To Menu";
        GUI.DrawTexture(Rect(Screen.width / 2 - 98, Screen.height / 2 + 32, 200, 25), Box);
		GUI.Label(Rect(Screen.width / 2 - 73, Screen.height / 2 + 32, 150, 25), message, Style);
    }
}