#pragma strict

var inUse : boolean = false;
var Box : Texture2D;
var Style : GUIStyle;
private var guiShow : boolean = false;
var activated : boolean = false;
var uses : int;
var uid : int;
var uname : String;
var uprice : int;
var ucontents : Color;
var udecal : Renderer;
var isLimited : boolean;
var Self : Transform;
var Player : Transform;
var emitter : Light;
var decalholder : Transform;

public class Perk {
	var id : int;
	var name : String;
	var price : int;
	var decal : Material;
	var contents : Color;
	var limited : boolean;
}

var Perks : Perk[];
private var children : Transform[];

function Awake () {
	Player = GameObject.FindGameObjectWithTag("MainCamera").transform;
	Self = transform;
	emitter = transform.Find("Emitter").GetComponent.<Light>();
	for(var i : Perk in Perks)
	{
		if(i.id == uid)
		{
			uname = i.name;
			uprice = i.price;
			ucontents = i.contents;
			udecal = decalholder.GetComponent.<Renderer>();
			udecal.material = i.decal;
			isLimited = i.limited;
			emitter.color = ucontents;
		}
	}
	for (var t : Transform in transform)
 	{
	    if(t.name == "Syringe")
	    {
	    	t.SendMessage("ChangeColour", ucontents, SendMessageOptions.DontRequireReceiver);
	    }
 	}
}

function LookAt () {
	guiShow = true;
}

function LookAway () {
	guiShow = false;
}

function Hold () {
	if(inUse == false && activated == true)
	{
		Debug.Log("Bought Perk");
		Player.SendMessage("BuyPerk", uprice, SendMessageOptions.DontRequireReceiver);
		Player.SendMessage("BuyFrom", Self, SendMessageOptions.DontRequireReceiver);
	}
}

function CanUse () {
	inUse = false;
}

function Update () {
	if(activated == false)
	{
		emitter.intensity = 0;
	}
	else
	{
		emitter.intensity = 1;
	}
}

function Buy () {
	inUse = true;
	uses += 1;
	Player.SendMessage("PerkColour", ucontents, SendMessageOptions.DontRequireReceiver);
	Player.SendMessage("Perk", uid, SendMessageOptions.DontRequireReceiver);
	if(uses == 3 && isLimited == true)
	{
		yield WaitForSeconds(2);
		GetComponent.<Animation>().Play("DeActivate");
		yield WaitForSeconds(GetComponent.<Animation>()["DeActivate"].length);
		activated = false;
	}	
}

function OnGUI ()
{
	if (guiShow == true && activated == true) {
		var message = "Hold E For " + uname + " : " + uprice + " Points";
		GUI.DrawTexture(Rect(Screen.width / 2 - 148, Screen.height / 2 + 32, 300, 25), Box);
		GUI.Label(Rect(Screen.width / 2 - 73, Screen.height / 2 + 32, 150, 25), message, Style);
	}
}