#pragma strict

var Box : Texture2D;
var Style : GUIStyle;
private var guiShow : boolean = false;
private var isOpen : boolean = false;
var animate : Animation;

function LookAt() {
    guiShow = true;
}

function LookAway() {
    guiShow = false;
}

function Execute() {
    isOpen = !isOpen;
    if(isOpen == true)
    {
        animate.Play("Door1Open");
    }
    if(isOpen == false)
    {
        animate.Play("Door1Close");
    }
}

function OnGUI ()
{
    if (guiShow == true) {
        var message = "E to Open/Close Door";
        GUI.DrawTexture(Rect(Screen.width / 2 - 98, Screen.height / 2 + 32, 200, 25), Box);
		GUI.Label(Rect(Screen.width / 2 - 73, Screen.height / 2 + 32, 150, 25), message, Style);
    }
}