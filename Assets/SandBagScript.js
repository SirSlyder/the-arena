#pragma strict

var Box : Texture2D;
var Style : GUIStyle;
var health : int = 6;
var repairing : Transform;
var targety : float;
var repairtimer : float;
private var guiShow : boolean = false;
private var repair : boolean = false;

public class Sandbag
{
	var ID : int;
	var Bag : Rigidbody;
	var Destination : Vector3;
	var roty : float;
	var rotx : float;
	var rotz : float;
}

var Sandbags : Sandbag[];

function Update () {
	for(var i : Sandbag in Sandbags)
	{
		if(i.ID > health)
		{
			if(i.Bag.isKinematic == true)
			{
				i.Bag.isKinematic = false;
				i.Bag.GetComponent.<Collider>().enabled = true;
			}
		}
	}
	if(health < 0)
	{
		health = 0;
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

function Hold () {
	if(health != 4)
	{
		GetComponent.<Animation>().PlayQueued("SandBagRepair" + health);
		health = 4;
	}
}

function PlayerHit () {
	health -= 1;
}

function OnGUI () {
	if (guiShow == true) {
		if(health != 4)
		{
			var message = "Hold E to Repair";
			GUI.DrawTexture(Rect(Screen.width / 2 - 98, Screen.height / 2 + 32, 200, 25), Box);
			GUI.Label(Rect(Screen.width / 2 - 73, Screen.height / 2 + 32, 150, 25), message, Style);
		}
	}
}