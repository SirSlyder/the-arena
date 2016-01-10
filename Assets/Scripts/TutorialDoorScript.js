#pragma strict

var Style : GUIStyle;
var Box : Texture2D;
var destination : Vector3;
var speed: float;
private var guiShow : boolean = false;
var move : boolean = false;

function LookAt() {
    guiShow = true;
}

function LookAway() {
    guiShow = false;
}

function Execute() {
	move = true;
}

function Update () {
	if(move == true)
	{
		var step = speed * Time.deltaTime;
		
		// Move our position a step closer to the target.
		transform.position = Vector3.MoveTowards(transform.position, destination, step);
	}
}

function OnGUI ()
{
    if (guiShow == true) {
        var message = "E to Open Door";
        GUI.DrawTexture(Rect(Screen.width / 2 - 98, Screen.height / 2 + 32, 200, 25), Box);
		GUI.Label(Rect(Screen.width / 2 - 73, Screen.height / 2 + 32, 150, 25), message, Style);
    }
}