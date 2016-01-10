#pragma strict

import System.Collections;

var Controller : Animation;
var Selected : boolean = false;
var Other : Transform;
var Other2 : Transform;
var gameControl : Transform;
var stattext : TextMesh;
var timer : float;

function OnMouseDown() {
	if(Input.GetKeyDown(KeyCode.Mouse0))
	{
		Selected = !Selected;
		if(Selected == true)
		{
			timer = 0;
			Controller.Play("Stats");
			Other.SendMessage("DeSelect", SendMessageOptions.DontRequireReceiver);
			Other2.SendMessage("DeSelect", SendMessageOptions.DontRequireReceiver);
		}
	}
}

function Awake () {
	gameControl = GameObject.FindGameObjectWithTag("GameController").transform;
}

function Update () {
	var control : GameSave = gameControl.GetComponent(GameSave); 
	stattext.text = control.Kills + " Kills \n Level " + control.Level + " \n " + control.XP + " XP";
	timer += Time.deltaTime;
	if(Selected == true && timer >= Controller["Stats"].length)
	{
		stattext.gameObject.active = true;
	}
}

function DeSelect () {
	stattext.gameObject.active = false;
	Selected = false;
}