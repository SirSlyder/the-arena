#pragma strict

import System.Collections.Generic;

var anim : Animation;
var targets : List.<Transform>;
var Box : Texture2D;
var Style : GUIStyle;
private var activated : boolean = false;
private var guiShow : boolean = false;

function Awake () {
	anim = GetComponent.<Animation>();
}

function LookAt () {
	guiShow = true;
}

function LookAway () {
	guiShow = false;
}

function Hold () {
	if(activated == false)
	{
		Debug.Log("Turned on power");
		activated = true;
		anim.Play("TurnOnPower");
		for(var i : Transform in targets)
		{
			i.SendMessage("PowerUp", SendMessageOptions.DontRequireReceiver);
		}
	}
}

function OnGUI ()
{
	if (guiShow == true && activated == false) {
		var message = "Hold E To Enable Power";
		GUI.DrawTexture(Rect(Screen.width / 2 - 148, Screen.height / 2 + 32, 300, 25), Box);
		GUI.Label(Rect(Screen.width / 2 - 73, Screen.height / 2 + 32, 150, 25), message, Style);
	}
}