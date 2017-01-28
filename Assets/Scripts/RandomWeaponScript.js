#pragma strict
import System.Collections.Generic;

private var spinning : boolean = false;
private var takeweapon : boolean = false;

var host : Transform;

var weaponinuse : int;
var taketimer : float;
var glitchchance : float;
var Box : Texture2D;
var Style : GUIStyle;
var chancerange : int;
var animate1 : Animation;
var animate2 : Animation;
var activated : boolean;
private var guiShow : boolean = false;
var spinTimes : int;
var Play : Transform;
var gunShow : int;
public enum Types {Melee = 1, Gun = 2, Special = 3}
var type : Types;

public class RWeapon
{
	var Type : Types;
	var ID : int;
	var object : Transform;
	var chancemin : int;
	var chancemax : int;
	var ammo : int;
	var inUse : boolean = false;
}

var Guns : List.<RWeapon>;
var Specials : List.<RWeapon>;
var Melees : List.<RWeapon>;

function Update () {
	if(takeweapon == true)
	{
		taketimer += Time.deltaTime;
		if(taketimer >= 5)
		{
			takeweapon = false;
			animate1.PlayQueued("WeaponSpinReturn");
			animate2.PlayQueued("SpinnerCloseDoor");
			spinning = false;
		}
	}
	if(spinTimes > 7)
	{
		spinTimes = 7;
	}
}

function InUse (show : int)
{
	for(var i : RWeapon in Guns)
	{
		if(i.ID == show && i.Type == 2)
		{
			i.inUse = true;
		}
	}
}

function MInUse (show : int)
{
	for(var i : RWeapon in Guns)
	{
		if(i.ID == show && i.Type == 1)
		{
			i.inUse = true;
		}
	}
}

function Awake () {
	host = transform.parent;
	animate1.Play("De-Activate");
}

function Activated () {
	activated = true;
	Debug.Log("Activating.");
	animate1.Play("Activate");
}

function LookAt () {
	if(activated == true)
	{
		guiShow = true;
	}
}

function LookAway () {
	if(activated == true)
	{
		guiShow = false;
	}
}

function Hold (Player : Transform) {
	if(activated == true)
	{
		if(spinning == false && takeweapon == false)
		{
			if(Player.GetComponent.<WeaponScript>().Points >= 950)
			{
				Player.GetComponent.<WeaponScript>().Points -= 950;
				spinTimes = 0;
				spinning = true;
				StartCoroutine("Spin");
			}
		}
		if(takeweapon == true)
		{
			if(gunShow != -1)
			{
				if(type == 2)
				{
					Player.SendMessage("Gun", gunShow , SendMessageOptions.DontRequireReceiver);
					weaponinuse = gunShow;
					for(var i : RWeapon in Guns)
					{
						if(i.ID == gunShow && i.Type == 2)
						{
							Player.SendMessage("CurrentAmmo", i.ammo, SendMessageOptions.DontRequireReceiver);
							host.SendMessage("GunUse", i.ID, SendMessageOptions.DontRequireReceiver);
						}
					}
					for(var i : RWeapon in Guns)
					{
						i.object.gameObject.active = false;
					}
					animate1.PlayQueued("WeaponSpinReturn");
					animate2.PlayQueued("SpinnerCloseDoor");
					takeweapon = false;
					spinning = false;
				}
				else if(type == 1)
				{
					Player.SendMessage("Melee", gunShow, SendMessageOptions.DontRequireReceiver);
					for(var i : RWeapon in Melees)
					{
						if(i.ID == gunShow && i.Type == 1)
						{
							host.SendMessage("MeleeUse", i.ID, SendMessageOptions.DontRequireReceiver);
						}
					}
					for(var i : RWeapon in Melees)
					{
						i.object.gameObject.active = false;
					}
					animate1.PlayQueued("WeaponSpinReturn");
					animate2.PlayQueued("SpinnerCloseDoor");
					takeweapon = false;
					spinning = false;
				}
				else if(type == 3)
				{
					for(var i : RWeapon in Specials)
					{	
						Player.SendMessage("Slot4", i.ID, SendMessageOptions.DontRequireReceiver);
						for(var i : RWeapon in Specials)
						{
							i.object.gameObject.active = false;
						}
						animate1.PlayQueued("WeaponSpinReturn");
						animate2.PlayQueued("SpinnerCloseDoor");
						takeweapon = false;
						spinning = false;
					}
				}
			}
			Play = null;
		}
	}
}

function Spin () {
	if(spinTimes != 7)
	{
		for(var i : RWeapon in Guns)
		{
			i.object.gameObject.active = false;
		}
		var weaponPicked : float;
		weaponPicked = Random.Range(0, Guns[Guns.Count - 1].chancemax);
		for(var i : RWeapon in Guns)
		{
			if(weaponPicked < i.chancemax && weaponPicked >= i.chancemin)
			{
				i.object.gameObject.active = true;
				gunShow = i.ID;
				type = i.Type;
			}
		}
		animate1.Play("WeaponSpin");
		spinTimes += 1;
		yield WaitForSeconds(animate1["WeaponSpin"].length);
		StartCoroutine("Spin");
	}
	else if(spinTimes == 7)
	{
		for(var i : RWeapon in Guns)
		{
			i.object.gameObject.active = false;
		}
		var weaponType : float = Random.Range(0, 100);
		if(weaponType < 65)
		{
			weaponPicked = Random.Range(0, Guns[Guns.Count - 1].chancemax);
			for(var i : RWeapon in Guns)
			{
				if(weaponPicked < i.chancemax && weaponPicked >= i.chancemin)
				{
					i.object.gameObject.active = true;
					gunShow = i.ID;
					type = i.Type;
				}
			}
		}
		else if(weaponType < 95 && weaponType >= 65)
		{
			var weaponPicked2 : float = Random.Range(0, Melees[Melees.Count - 1].chancemax);
			for(var i : RWeapon in Melees)
			{
				if(weaponPicked2 < i.chancemax && weaponPicked2 >= i.chancemin)
				{
					i.object.gameObject.active = true;
					gunShow = i.ID;
					type = i.Type;
				}
			}
		}
		else if(weaponType >= 95)
		{
			var weaponPicked3 : float = Random.Range(0, Specials[Specials.Count - 1].chancemax);
			for(var i : RWeapon in Specials)
			{
				if(weaponPicked3 < i.chancemax && weaponPicked3 >= i.chancemin)
				{
					i.object.gameObject.active = true;
					gunShow = i.ID;
					type = i.Type;
				}	
			}
		}
		animate1.Play("WeaponStopSpin");
		yield WaitForSeconds(animate1["WeaponStopSpin"].length);
		glitchchance = Random.Range(0, 10);
		if(glitchchance > 9)
		{
			takeweapon = false;
			animate2.Play("SpinnerDoorGlitch");
			yield WaitForSeconds(animate2["SpinnerDoorGlitch"].length);
			animate1.Play("WeaponSpinReturn");
			spinning = false;
			host.SendMessage("NewSpinner");
			animate2.Play("De-Activate");
			StopCoroutine("Spin");
		}
		else
		{
			animate2.PlayQueued("SpinnerOpenDoor");
			yield WaitForSeconds(animate2["SpinnerOpenDoor"].length);
			taketimer = 0;
			takeweapon = true;
			StopCoroutine("Spin");
		}
	}
}

function OnGUI () {
	if (guiShow == true) {
		if(spinning == false)
		{
			var message = "Hold E for Random Weapon : 950 Points";
			GUI.DrawTexture(Rect(Screen.width / 2 - 148, Screen.height / 2 + 32, 300, 25), Box);
		GUI.Label(Rect(Screen.width / 2 - 73, Screen.height / 2 + 32, 150, 25), message, Style);
		}
		if(takeweapon == true)
		{
			var message2 = "Hold E to Take";
			GUI.DrawTexture(Rect(Screen.width / 2 - 148, Screen.height / 2 + 32, 300, 25), Box);
		GUI.Label(Rect(Screen.width / 2 - 73, Screen.height / 2 + 32, 150, 25), message2, Style);
		}
	}
}