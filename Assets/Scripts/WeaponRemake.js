#pragma strict

var aimright : Transform;
var aimleft : Transform;
var aimup : Transform;
var aimdown : Transform;

var animate : Animation;
var targetGun = "";
var equipped = "none";

var ammoaddition : int;

var rockets : int;
var rocketsmax : int;

var gauge12 : int;
var gauge12max : int;
var gauge20 : int;
var gauge20max : int;
var mm9 : int;
var mm9max : int;
var revolver357 : int;
var revolver357max : int;
var mm762 : int;
var mm762max : int;

var flashlight : GameObject;

var aimer : Transform;
var bloodobject : Rigidbody;

var dropper : Transform;
private var reloading : boolean = false;

var melee = null;
var firearm = null;

var attacking : boolean = false;
var attackpotential : boolean = false;

var timer : float = 0.0;

var aName = "";
var aprojectileType : int;
var alaserprojectile : Transform;
var alaserprojectiler : Rigidbody;
var aAmmoType = "";
var aAmmo : int;
var aMaxClip : int;
var aDamage : float;
var aReserve : int;
var aMaxAmmo : int;
var aTimer : float;
var aPellets : int;
var aSpread : float;
var aammocounter : TextMesh;
var areservecounter : TextMesh;
var aautomatic : boolean;
var adropr : Rigidbody;
var asingularreload : boolean;
var aaimreduce : float;
var aaimx : float = 0.0;
var amaxx : float;
var aaimy : float = 0.0;
var amaxy : float;

var mlhand : Transform;

var mName = "";
var mDamage : int;
var mInGameItem : Transform;
var manimMulti : float;
var mdropr : Rigidbody;

var aimSpread : float;

var aiming : boolean = false;

public enum Weapon{Pistol = 1, Shotgun = 2, Rifle = 3};
public enum UniqueType{Projectile = 1, Melee = 2, Other = 3}
public enum Melee{OneHand = 1, TwoHand = 2};
public enum laserType{Beam = 1, Ball = 2, Projectile = 3};

class Melee1 extends System.Object {
	var Name = "";
	var Type : Melee;
	var Damage : int;
	var animMulti : float;
	var inGameItem : Transform;
	var dropr : Rigidbody;
	var hotbar : Transform;
}

class Melee2 extends System.Object {
	var Name = "";
	var Type : Melee;
	var Damage : int;
	var animMulti : float;
	var inGameItem : Transform;
	var dropr : Rigidbody;
	var hotbar : Transform;
}

var MeleeNo1 = Melee1 ();
var MeleeNo2 = Melee2 ();

class Gun1 extends System.Object {
	var Name = "";
	var Type : Weapon;
	var Ammo : int;
	var Damage : float;
	var Reserve : int;
	var Timer : float;
	var Pellets : int;
	var Spread : float;
	var ammocounter : TextMesh;
	var reservecounter : TextMesh;
	var automatic : boolean;
	var hotbar : Transform;
	var dropr : Rigidbody;
	var singularreload : boolean;
}
class Gun2 extends System.Object {
	var Name = "";
	var Type : Weapon;
	var Ammo : int;
	var MaxClip : int;
	var Damage : float;
	var Reserve : int;
	var Max : int;
	var Timer : float;
	var Pellets : int;
	var Spread : float;
	var ammocounter : TextMesh;
	var reservecounter : TextMesh;
	var automatic : boolean;
	var barrelAttachment = "";
	var sightsAttachment = "";
	var tacticalAttachment = "";
	var hotbar : Transform;
	var dropr : Rigidbody;
	var singularreload : boolean;
	var aimreduce : float;
}
class Gun3 extends System.Object {
	var Name = "";
	var Type : Weapon;
	var projectileType : laserType;
	var laserprojectile : Transform;
	var laserprojectiler : Rigidbody;
	var AmmoType = "";
	var Ammo : int;
	var MaxClip : int;
	var Damage : float;
	var Reserve : int;
	var Max : int;
	var Timer : float;
	var Pellets : int;
	var Spread : float;
	var ammocounter : TextMesh;
	var reservecounter : TextMesh;
	var automatic : boolean;
	var barrelAttachment = "";
	var sightsAttachment = "";
	var tacticalAttachment = "";
	var hotbar : Transform;
	var dropr : Rigidbody;
	var singularreload : boolean;
	var aimreduce : float;
}
class Gun4 extends System.Object {
	var Name = "";
	var Type : Weapon;
	var projectileType : laserType;
	var laserprojectile : Transform;
	var laserprojectiler : Rigidbody;
	var AmmoType = "";
	var Ammo : int;
	var MaxClip : int;
	var Damage : float;
	var Reserve : int;
	var Max : int;
	var Timer : float;
	var Pellets : int;
	var Spread : float;
	var ammocounter : TextMesh;
	var reservecounter : TextMesh;
	var automatic : boolean;
	var barrelAttachment = "";
	var sightsAttachment = "";
	var tacticalAttachment = "";
	var hotbar : Transform;
	var dropr : Rigidbody;
	var singularreload : boolean;
	var aimreduce : float;
}
class Gun5 extends System.Object {
	var Name = "";
	var Type : Weapon;
	var projectileType : laserType;
	var laserprojectile : Transform;
	var laserprojectiler : Rigidbody;
	var AmmoType = "";
	var Ammo : int;
	var MaxClip : int;
	var Damage : float;
	var Reserve : int;
	var Max : int;
	var Timer : float;
	var Pellets : int;
	var Spread : float;
	var ammocounter : TextMesh;
	var reservecounter : TextMesh;
	var automatic : boolean;
	var barrelAttachment = "";
	var sightsAttachment = "";
	var tacticalAttachment = "";
	var hotbar : Transform;
	var dropr : Rigidbody;
	var singularreload : boolean;
	var aimreduce : float;
}
class Gun6 extends System.Object {
	var Name = "";
	var Type : Weapon;
	var projectileType : laserType;
	var laserprojectile : Transform;
	var laserprojectiler : Rigidbody;
	var AmmoType = "";
	var Ammo : int;
	var MaxClip : int;
	var Damage : float;
	var Reserve : int;
	var Max : int;
	var Timer : float;
	var Pellets : int;
	var Spread : float;
	var ammocounter : TextMesh;
	var reservecounter : TextMesh;
	var automatic : boolean;
	var barrelAttachment = "";
	var sightsAttachment = "";
	var tacticalAttachment = "";
	var hotbar : Transform;
	var dropr : Rigidbody;
	var singularreload : boolean;
	var aimreduce : float;
}
class Gun7 extends System.Object {
	var Name = "";
	var Type : Weapon;
	var projectileType : laserType;
	var laserprojectile : Transform;
	var laserprojectiler : Rigidbody;
	var AmmoType = "";
	var Ammo : int;
	var MaxClip : int;
	var Damage : float;
	var Reserve : int;
	var Max : int;
	var Timer : float;
	var Pellets : int;
	var Spread : float;
	var ammocounter : TextMesh;
	var reservecounter : TextMesh;
	var automatic : boolean;
	var barrelAttachment = "";
	var sightsAttachment = "";
	var tacticalAttachment = "";
	var hotbar : Transform;
	var dropr : Rigidbody;
	var singularreload : boolean;
	var aimreduce : float;
}
class Gun8 extends System.Object {
	var Name = "";
	var Type : Weapon;
	var projectileType : laserType;
	var laserprojectile : Transform;
	var laserprojectiler : Rigidbody;
	var AmmoType = "";
	var Ammo : int;
	var MaxClip : int;
	var Damage : float;
	var Reserve : int;
	var Max : int;
	var Timer : float;
	var Pellets : int;
	var Spread : float;
	var ammocounter : TextMesh;
	var reservecounter : TextMesh;
	var automatic : boolean;
	var barrelAttachment = "";
	var sightsAttachment = "";
	var tacticalAttachment = "";
	var hotbar : Transform;
	var dropr : Rigidbody;
	var singularreload : boolean;
	var aimreduce : float;
}
class Gun9 extends System.Object {
	var Name = "";
	var Type : Weapon;
	var projectileType : laserType;
	var laserprojectile : Transform;
	var laserprojectiler : Rigidbody;
	var AmmoType = "";
	var Ammo : int;
	var MaxClip : int;
	var Damage : float;
	var Reserve : int;
	var Max : int;
	var Timer : float;
	var Pellets : int;
	var Spread : float;
	var ammocounter : TextMesh;
	var reservecounter : TextMesh;
	var automatic : boolean;
	var barrelAttachment = "";
	var sightsAttachment = "";
	var tacticalAttachment = "";
	var hotbar : Transform;
	var dropr : Rigidbody;
	var singularreload : boolean;
	var aimreduce : float;
}
var GunNo1 = Gun1 ();
var GunNo2 = Gun2 ();
var GunNo3 = Gun3 ();
var GunNo4 = Gun4 ();
var GunNo5 = Gun5 ();
var GunNo6 = Gun6 ();
var GunNo7 = Gun7 ();
var GunNo8 = Gun8 ();
var GunNo9 = Gun9 ();

function Awake () {
	animate = GetComponent.<Animation>();
}



function Bat () {
	if(melee != null)
	{
		var clone : Rigidbody;
		clone = Instantiate(mdropr, dropper.position, dropper.rotation);
		clone.velocity = transform.TransformDirection (Vector3.forward * 10);
	}
	MeleeNo1.hotbar.gameObject.active = true;
	MeleeNo2.hotbar.gameObject.active = false;
	mName = MeleeNo1.Name;
	mDamage = MeleeNo1.Damage;
	manimMulti = MeleeNo1.animMulti;
	mdropr = MeleeNo1.dropr;
	melee = mName;
	mInGameItem = MeleeNo1.inGameItem;
	mInGameItem.gameObject.active = true;
}

function RPG () {
	if(firearm != null)
	{
		var uclone : Rigidbody;
		uclone = Instantiate(adropr, dropper.position, dropper.rotation);
		uclone.velocity = transform.TransformDirection (Vector3.forward * 10);
		aReserve += aAmmo;
		aAmmo = 0;
	}
		if(firearm == "Pistol")
		{
			aReserve = GunNo1.Reserve;
			aAmmo = GunNo1.Ammo;
		}
		if(firearm == "Revolver")
		{
			aReserve = GunNo2.Reserve;
			aAmmo = GunNo2.Ammo;
		}
		if(firearm == "Shotgun")
		{
			aReserve = GunNo3.Reserve;
			aAmmo = GunNo3.Ammo;
		}
		if(firearm == "AutoShotgun")
		{
			aReserve = GunNo4.Reserve;
			aAmmo = GunNo4.Ammo;
		}
		if(firearm == "Rifle")
		{
			aReserve = GunNo5.Reserve;
			aAmmo = GunNo5.Ammo;
		}
		if(firearm == "SniperRifle")
		{
			aReserve = GunNo6.Reserve;
			aAmmo = GunNo6.Ammo;
		}
		if(firearm == "AssaultRifle")
		{
			aReserve = GunNo7.Reserve;
			aAmmo = GunNo7.Ammo;
		}
		if(firearm == "SuperShotgun")
		{
			aReserve = GunNo8.Reserve;
			aAmmo = GunNo8.Ammo;
		}
		if(firearm == "TommyGun")
		{
			aReserve = GunNo9.Reserve;
			aAmmo = GunNo9.Ammo;
		}
		if(equipped == "gun")
		{
			animate.PlayQueued("Dequip" + aName);
		}
	GunNo1.hotbar.gameObject.active = true;
	GunNo2.hotbar.gameObject.active = false;
	GunNo3.hotbar.gameObject.active = false;
	GunNo4.hotbar.gameObject.active = false;
	GunNo5.hotbar.gameObject.active = false;
	GunNo6.hotbar.gameObject.active = false;
	GunNo7.hotbar.gameObject.active = false;
	GunNo8.hotbar.gameObject.active = false;
	GunNo9.hotbar.gameObject.active = false;
	//Unique1.hotbar.gameObject.active = false;
	aName = GunNo1.Name;
	aAmmo = GunNo1.Ammo;
	aDamage = GunNo1.Damage;
	aReserve = GunNo1.Reserve;
	aTimer = GunNo1.Timer;
	aPellets = GunNo1.Pellets;
	aSpread = GunNo1.Spread;
	aammocounter = GunNo1.ammocounter;
	areservecounter = GunNo1.reservecounter;
	aautomatic = GunNo1.automatic;
	adropr = GunNo1.dropr;
	asingularreload = GunNo1.singularreload;
	firearm = aName;
}



function gauge12ammo ()
{
	gauge12 += ammoaddition;
}

function gauge20ammo ()
{
	gauge20 += ammoaddition;
}

function AmmoQuantity (addition : int)
{
	ammoaddition = addition;
}

function Update () {
	if(equipped == "gun" && aiming == false)
	{
		aimright.gameObject.active = true;
		//aimright.position.x = (aimSpread / 5);
		aimleft.gameObject.active = true;
	//	aimleft.position.x = (aimSpread / 5 - ((aimSpread / 5) * 2));
		aimup.gameObject.active = true;
	//	aimup.position.y = (aimSpread / 5);
		aimdown.gameObject.active = true;
	//	aimdown.position.y = (aimSpread / 5 - ((aimSpread / 5) * 2));
	}
	else
	{
		aimright.gameObject.active = false;
		aimleft.gameObject.active = false;
		aimup.gameObject.active = false;
		aimdown.gameObject.active = false;
	}
	if(Input.GetKeyDown(KeyCode.F))
	{
		if(flashlight.active == false)
		{
			flashlight.active = true;
		}
		else
		{
			flashlight.active = false;
		}
	}
	aimSpread = aSpread - aaimreduce;
	if(reloading == false)
	{
		aammocounter.text = (aAmmo + "/" + aMaxClip);
		areservecounter.text = ("" + aReserve);
	}
	timer += Time.deltaTime;
	if(aReserve >= aMaxAmmo)
	{
		aReserve = aMaxAmmo;
	}
	//if(Input.GetKeyDown(KeyCode.Mouse1))
//	{
//		if(equipped == "gun")
//		{
//			aiming = !aiming;
//			if(aiming == true)
//			{
//				animate.PlayQueued("Aim" + aName);
//			}
//			if(aiming == false)
//			{
//				animate.PlayQueued("Aim" + aName + "No");
//			}
//		}
//	}
	if(Input.GetKeyDown(KeyCode.Alpha1))
	{
		if(mName != "")
		{
			timer = 0.0;
			if(equipped == "gun")
			{
				animate.PlayQueued("Dequip" + aName);
			}
			equipped = "melee";
			animate.PlayQueued("EquipMelee");
		}
	}
	if(Input.GetKeyDown(KeyCode.Alpha2))
	{
		if(aName != "")
		{
			timer = 0.0;
			if(equipped == "melee")
			{
				animate.PlayQueued("DequipMelee");
			}
			equipped = "gun";
			animate.PlayQueued("Equip" + aName);
		}
	}
	if(Input.GetKeyDown(KeyCode.Mouse0))
	{
		if(equipped == "gun" && firearm != "NetGun")
		{
			if(timer >= (animate["Fire" + aName].length + aTimer) && aAmmo != 0)
			{
				StartCoroutine("Fire");
				timer = 0.0;
				animate.PlayQueued("Fire" + aName);
				aAmmo -= 1;
				for(var i : int = 0; i < aPellets; i++)
				{
					aimer.localRotation.x = Random.Range(-aimSpread, aimSpread);
					aimer.localRotation.y = Random.Range(-aimSpread, aimSpread);
					var hit : RaycastHit;
					if (Physics.Raycast (aimer.position, aimer.TransformDirection(Vector3.forward), hit))
					{
						Debug.Log("I've hit " + hit.transform);
						if(hit.transform.tag != "Enemy")
						{
							//Instantiate( bulletHole, hit.point, hit.transform.rotation );
						}
						else
						{
							//var bclone : Rigidbody;
							//bclone = Instantiate( bloodobject, hit.point, hit.transform.rotation );
							//bclone.velocity = transform.TransformDirection (0, 5, -10);
							//bclone.transform.tag = "Blood";
						}
						hit.transform.SendMessage("Shot", aDamage);
					} 
				}
			}
		}
		if(equipped == "melee")
		{
			if(timer >= animate["SwingMelee1"].length)
			{
				timer = 0.0;
				animate.PlayQueued("SwingMelee1");
			}
		}
	}
	if(Input.GetKeyDown(KeyCode.R))
	{
		if(equipped == "gun")
		{
			if(timer >= (animate["Fire" + aName].length + aTimer) && aReserve != 0)
			{
				if(aAmmo != aMaxClip)
				{
					if(aiming == true)
					{
						aiming = false;
						animate.PlayQueued("Aim" + aName + "No");
					}
					if(firearm == "Shotgun")
					{
						animate.PlayQueued("ReloadShotgun");
					}
					StartCoroutine("Reload");
				}
			}
		}
	}
}

function Fire () {
	if(aautomatic == true)
	{
		animate.Play("Fire" + aName);
		timer = 0.0;
		animate.PlayQueued("Fire" + aName);
		aAmmo -= 1;
		for(var i : int = 0; i < aPellets; i++)
		{
			aimer.localRotation.x = Random.Range(-aimSpread, aimSpread);
			aimer.localRotation.y = Random.Range(-aimSpread, aimSpread);
			var hit : RaycastHit;
			if (Physics.Raycast (aimer.position, aimer.TransformDirection(Vector3.forward), hit))
			{
				Debug.Log("I've hit " + hit.transform);
				if(hit.transform.tag != "Enemy")
				{
					//Instantiate( bulletHole, hit.point, hit.transform.rotation );
				}
				else
				{
					//var bclone : Rigidbody;
					//bclone = Instantiate( bloodobject, hit.point, hit.transform.rotation );
					//bclone.velocity = transform.TransformDirection (0, 5, -10);
					//bclone.transform.tag = "Blood";
				}
				hit.transform.SendMessage("Shot", aDamage);
			} 
		}
		yield WaitForSeconds(animate["Fire" + aName].length);
		if(Input.GetKey(KeyCode.Mouse0))
		{
			StartCoroutine("Fire");
		}
	}
}

function Reload () {
	reloading = true;
	if(asingularreload == false)
	{
		timer = (animate["Fire" + aName].length - animate["Reload" + aName].length);
		animate.Play("Reload" + aName);
		aammocounter.text = "N/A";
		yield WaitForSeconds(animate["Reload" + aName].length);
		if(aAmmo + aReserve >= aMaxClip)
		{
			aReserve -= (aMaxClip - aAmmo);
			aAmmo = aMaxClip;
		}
		else
		{
			aAmmo = (aAmmo + aReserve);
			aReserve = 0;
		}
		reloading = false;
	}
	if(asingularreload == true)
	{
		timer = (animate["Fire" + aName].length - animate["Reload" + aName].length);
		aammocounter.text = "N/A";
		animate.PlayQueued("Reload" + aName + "2");
		yield WaitForSeconds(animate["Reload" + aName].length);
		aAmmo += 1;
		aReserve -= 1;
		if(aAmmo == aMaxClip || aReserve == 0)
		{
			animate.Play("Reload" + aName + "3");
			StopCoroutine("Reload");
			reloading = false;
		}
		else
		{
			StartCoroutine("Reload");
		}
	}
}