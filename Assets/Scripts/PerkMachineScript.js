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
var decalholder : Transform;
var lights : Light;
var lcolor : Color;
var play : Transform;
var moddisabled : boolean = false;
var infinite : boolean = false;

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
	Self = transform;
	for(var i : Perk in Perks)
	{
		if(i.id == uid)
		{
			uname = i.name;
			uprice = i.price;
			ucontents = i.contents;
			if(decalholder != null)
			{
				udecal = decalholder.GetComponent.<Renderer>();
				udecal.material = i.decal;
			}
			isLimited = i.limited;
			lcolor = i.contents;
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

function Infinite () {
	if(uid == 1)
	{
		infinite = true;
		isLimited = false;
		uprice = uprice * 2;
	}
}

function Update () {
	if(lights != null)
	{
		lights.color = lcolor;
		if(activated == true && !moddisabled)
		{
			lights.gameObject.active = true;
			if(lights.intensity < 1)
			{
				lights.intensity += Time.deltaTime;
			}
			else if(lights.intensity >= 1)
			{
				lights.intensity = 1;
			}
		}
		else
		{
			lights.gameObject.active = false;
		}
	}
}

function Disable(){
	moddisabled = true;
}

function LookAt () {
	if(!moddisabled){
		guiShow = true;
	}
}

function LookAway () {
	if(!moddisabled){
		guiShow = false;
	}
}

function Hold (Player : Transform) {
	if(inUse == false && Player.GetComponent.<WeaponScript>().Points >= uprice && activated == true && !moddisabled)
	{
		Player.GetComponent.<WeaponScript>().Points -= uprice;
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
		if(infinite){
			uprice += 500;
		}
	}
}

function CanUse () {
	inUse = false;
}

function PowerUp () {
	if(!moddisabled){
		activated = true;
	}
}

function Buy () {
	
}

function OnGUI ()
{
	if (guiShow == true && activated == true) {
		var message = "Hold E For " + uname + " : " + uprice + " Points";
		GUI.DrawTexture(Rect(Screen.width / 2 - 148, Screen.height / 2 + 32, 300, 25), Box);
		GUI.Label(Rect(Screen.width / 2 - 73, Screen.height / 2 + 32, 150, 25), message, Style);
	}
}