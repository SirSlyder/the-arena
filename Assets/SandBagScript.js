#pragma strict
import System.Collections.Generic;

var Box : Texture2D;
var Style : GUIStyle;
var health : int = 6;
var repairing : Transform;
var targety : float;
var repairtimer : float;
private var guiShow : boolean = false;
private var repair : boolean = false;
var SandBagID : List.<int>;
var SandBagPos : List.<Vector3>;
var SandBagRot : List.<Vector3>;
var SandBags : List.<Transform>;
var itemshowing : int;
var step : float;
var Player : Transform;

function Awake () {
	for(var i : Transform in transform)
	{
		if(i.name == "SandBagActual")
		{
			SandBagID.Add(itemshowing);
			itemshowing += 1;
			SandBagPos.Add(i.position);
			SandBagRot.Add(i.localEulerAngles);
			SandBags.Add(i);
		}
	}
}

function Update () {
	for(var i : int in SandBagID)
	{
		if(i < 6 - health)
		{
			SandBags[i].GetComponent.<Rigidbody>().isKinematic = false;
			SandBags[i].GetComponent.<Rigidbody>().GetComponent.<Collider>().enabled = true;
		}
		else
		{
			SandBags[i].GetComponent.<Rigidbody>().isKinematic = true;
			SandBags[i].position = Vector3.MoveTowards(SandBags[i].position, SandBagPos[i], step);
			SandBags[i].localEulerAngles = SandBagRot[i];
		}
	}
	if(health <= 0)
	{
		health = 0;
		gameObject.tag = "DestroyedSandBag";
	}
	else
	{
		gameObject.tag = "Sandbag";
	}
}

function Damage () {
	health -= 1;
}

function LookAt () {
	guiShow = true;
}

function LookAway () {
	guiShow = false;
}

function Hold (play : Transform) {
	Player = play;
	if(health != 6)
	{
		health += 1;
		Player.SendMessage("RepairPoints", SendMessageOptions.DontRequireReceiver);
	}
}

function PlayerHit () {
	health -= 1;
}

function OnGUI () {
	if (guiShow == true) {
		if(health != 6)
		{
			var message = "Hold E to Repair";
			GUI.DrawTexture(Rect(Screen.width / 2 - 98, Screen.height / 2 + 32, 200, 25), Box);
			GUI.Label(Rect(Screen.width / 2 - 73, Screen.height / 2 + 32, 150, 25), message, Style);
		}
	}
}