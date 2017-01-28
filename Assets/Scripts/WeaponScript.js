#pragma strict
import System.Collections.Generic;
import UnityEngine.Networking;

// ---------- KEY ----------
// u = universal
// uM = universal (melee)

// ---------- UI ----------

var speedTest : float;
var speedTime : float;

@Header ("UI Related Variables")
var uiSlot1 : UI.Image;
var uiSlot2 : UI.Image;
var uiSlot2two : UI.Image;
var uiSlot31 : UI.Image;
var uiSlot32 : UI.Image;
var uiSlot33 : UI.Image;
var uiSlot34 : UI.Image;
var uiSlot4 : UI.Image;
var uiSlot42 : UI.Image;
var uiCarrier : Canvas;
var ammoCounter : UI.Text;
var healthCounter : UI.Text;
var damageIndicator : UI.Image;
var points : UI.Text;
var meleeIcon : UI.Image;
var uiPerk1 : UI.Image;
var uiPerk2 : UI.Image;
var uiPerk3 : UI.Image;
var uiPerk4 : UI.Image;

var uiRoundText : UI.Text;

var uiNotification : UI.Text;
var accLeft : UI.Image;
var accRight : UI.Image;
var accUp : UI.Image;
var accDown : UI.Image;

// ---------- MISC ----------

@Header ("Miscellaneous")

var spinnerhost : Transform;

var quittext : GameObject;
var paused : boolean = false;

var gamecontroller : GameObject;

var deadtimer : float;

var waveText : UI.Text;

var cam : Camera;
var cam2 : Camera;
var cam3 : Camera;

var bloodObj : Rigidbody;

var fireCool : float;
var realaccuracy : float;
var fireaccuracyinc : float;

var accuracyright : Texture2D;
var accuracyup : Texture2D;
var accuracyleft : Texture2D;
var accuracydown : Texture2D;

var aimyThing : Transform;

var canBuy : boolean = false;

var potentialInvulnerable : boolean = false;
var invincible : Transform;
var invulnerable : boolean = false;
var invincount : int = 5;
var invintimer : float;
var regenTimer : float;
var canSprint : boolean = true;
var Stamina : float = 10;

var PerkSyringe : Transform;

var buyprice : int;

var dead : boolean = false;
var controller : Transform;
var textColor : GUIStyle;
var coolingDown : boolean = false;
var roundTimer : float;
var coolDown : int = 5;
var layerMask : LayerMask;
var spawner : GameObject[];

var zedcount : int;

var Points : int;
var oldPoints : int;

var safeArea : Texture2D;

var speed : float;

var equipped = "";
var flashlight : Transform;

var timer : float;
var aimer : Transform;
var gunAudioSource : AudioSource;
var musicAudioSource : AudioSource;
var playerController : Transform;

@Header ("ANIMATION")
var animator1 : Animation;
var animator2 : Animation;
var animator3 : Animation;

// ---------- Slot 4 VARIABLES/CLASSES ----------

@Header ("Slot 4 Variables")

var slot4ID : int = 0;
var slot4Name : String;
var slot4Ammo : int;
var slot4AmmoConsume : int;
var slot4MaxAmmo : int;
var slot4ChargeTime : float;
var slot4Types : int;
var slot4Type : int;
var slot4Projectiles : List.<Rigidbody>;
var slot4Projectile : Rigidbody;

var slot4Weapons : List.<Slot4Gun>;

public class Slot4Gun {
	var ID : int;
	var name : String;
	var ammo : int;
	var ammoconsumption : int;
	var chargetime : float;
	var types : int;
	var projectiles : List.<Rigidbody>;
}

// ---------- SLOT 5 VARIABLES/CLASSES ----------

@Header ("Slot 5 Variables")

var slot5name : String;
var slot5equipped : boolean = false;
var slot5got : boolean = false;

// ---------- PLAYER VARIABLES/CLASSES ----------

@Header ("Player Related Variables")

var aimPause : float;

var sprinting : boolean = false;

var Round : int;

var healthtimer : float;
var healthcooldowntimer : float;
var DamageResist : float;
var Health : int = 100;

// ---------- GRENADE VARIABLES/CLASSES ----------

var grenadeS1 : UI.Image;
var grenadeS2 : UI.Image;
var grenadeS3 : UI.Image;
var grenadeS4 : UI.Image;

@Header ("Grenade Variables")

var grenadeExplode : GameObject;
var grenadeCook : float;
var grenadeCooking : boolean = false;
var cooktimer : float;
var grenadeProj : Rigidbody;
var PlayerGrenade : Transform;
var uColour : Color;
var isLoaded : boolean = false;
var SelectedGrenade : Texture2D;
public enum GType {Explosive = 1, Spread = 2}
public enum GElement {Explosive = 1, Fire = 2, Shock = 3, Water = 4, Petrol = 5}
var gName : String;
var grenadeModel : Material;

public class Grenade {
	var ID : int;
	var Name : String;
	var texture : Texture2D;
	var type : GType;
	var element : GElement;
	var Colour : Color;
	var model : Transform;
}

var Grenades : Grenade[];
var GrenadeList : List.<int>;

var grenadeEquipped : int = 1;

// ---------- PERK VARIABLES/CLASSES ----------

@Header ("Perk Variables")
var PerkMachines : GameObject[];
public enum PerkEffects{Revive = 1, Health = 2, FireSpeed = 3, ReloadSpeed = 4};

public class PerkType {
	var ID : int;
	var Effect : PerkEffects;
	var icon : Texture2D;
}

var Perks : PerkType[];
var PerkList : List.<int>;

// ---------- PHONE VARIABLES/CLASSES ----------

@Header ("Phone Variables")

var statusEffectMulti : float = 1;
var phonetimed : float;
var statusText : UI.Text;

var phoneEquipped : boolean = false;
var isPlaying : boolean = false;
var songID : int;
var songSelected : int;

var accuracyMulti : float = 0;
var damageMulti : float;
var speedMulti : float;
var meleeSpeedMulti : float;

var usName : String;

var usS1Name : TextMesh;
var usS1Effect : TextMesh;
var usS1Effect2 : TextMesh;
var usS2Name : TextMesh;
var usS2Effect : TextMesh;
var usS2Effect2 : TextMesh;

var phoneanimator1 : Animation;

public enum Effects{Back = 0, Speed = 1, Damage = 2, Accuracy = 3, MeleeSpeed = 4};

public class Song
{
	var ID : int;
	var Name : String;
	var Effect : Effects;
	var EffectMulti : float;
	var Effect2 : Effects;
	var Effect2Multi : float;
	var musicAudio : AudioClip;
}

public var Songs : Song[];

// ---------- MELEE VARIABLES/CLASSES ----------

@Header ("Melee Variables")
var uMID : int;
var uMName : String;
var uMDamage : float;
var uSpeedMultiplier : float;
var umType : Type;
public enum Type{OneHanded = 0, TwoHanded = 1};
var Distance : float;
var uMTexture : Texture2D;
var uMTransform : Transform;
var uMDistance : float;
var uMSound : AudioClip;

public class MeleeItem
{
	var ID : int;
	var MType : Type;
	var Name : String;
	var Damage : float;
	var SpeedMultiplier : float;
	var playert : Transform;
	var texture : Texture2D;
	var transform : Transform;
	var distance : float;
	var sound : AudioClip;
}

var MeleeList : MeleeItem[];

// ---------- GUN VARIABLES/CLASSES ----------

@Header ("Gun Variables")

var bulletProj : Rigidbody;

var fired : boolean = false;
var firing : boolean = false;

var gunequipped : int = 1;
var guns : int = 1;

var reloading : boolean = false;

var intendedPellets : int;
var intendedDamage : int;
var uID : int;
var uName : String;
var uAmmo : int = 0;
var uMaxClip : int = 0;
var uReserve : int;
var uReserveMax : int;
var uDamage : float = 0;
var uRPM : int = 0;
var uPellets : int = 0;
var uAccuracy : float = 0;
var uIsAutomatic : boolean;
var uSingleReload : boolean;
var uAudio : AudioClip;
var uAimReduce : float;
var reducingAim : float;
var uScoped : boolean;
var uFovZoom : int;
var uRSet : String;
var uRTime : int;
var uSPos : Vector3;
var uSRot : Vector3;

var intendedPellets2 : int;
var intendedDamage2: int;
var u2ID : int;
var u2Name : String;
var u2Ammo : int = 0;
var u2MaxClip : int = 0;
var u2Reserve : int;
var u2ReserveMax : int;
var u2Damage : float = 0;
var u2RPM : int = 0;
var u2Pellets : int = 0;
var u2Accuracy : float = 0;
var u2IsAutomatic : boolean;
var u2SingleReload : boolean;
var u2Audio : AudioClip;
var u2AimReduce : float;
var u2scoped : boolean;
var u2fovZoom : int;
var u2rSet : String;
var u2rTime : int;
var u2SPos : Vector3;
var u2SRot : Vector3;

var ammoTest : float;

var shot : Transform;

public class ReloadSound 
{
	var Sound : AudioClip;
	var animTime : float;
}

public class ReloadSet
{
	var Name : String;
	var Sounds : List.<ReloadSound>;
}


var reloadList : List.<ReloadSet>;

public class GunItem
{
	var ID : int;
	var Name : String;
	var Ammo : int;
	var Damage : float;
	var Reserve : int;
	var ReserveMax : int;
	var RPM : float;
	var Pellets : int;
	var Accuracy : float;
	var IsAutomatic : boolean;
	var SingleReload : boolean;
	var audio : AudioClip;
	var aimReduce : float;
	var scoped : boolean;
	var fovZoom : int;
	var reloadSet : String;
	var rTime : int;
	var sPos : Vector3;
	var sRot : Vector3;
}

var aimTransform : Transform;

public class AimMove
{
	var Name : String;
	var normal : Vector3;
	var aim : Vector3;
	var aimAttachment : Vector3;
}

public var FireArms : GunItem[];
public var AimTowards : AimMove[];

function Awake () {
	spinnerhost = GameObject.Find("Spinners").transform;
	uiRoundText = gameObject.Find("RoundText").GetComponent.<UI.Text>();
	GameObject.Find("Host").GetComponent.<GameHost>().FindPlayers();
	PerkMachines = GameObject.FindGameObjectsWithTag("PerkMachine"); 
	gameObject.active = false;
	gameObject.active = true;
	spawner = GameObject.FindGameObjectsWithTag("Spawner");
	animator3["Aim" + uName].layer = 1;
}

function Start () {
	gamecontroller = GameObject.Find("GameController");
	equipped = "gun";
	animator1.PlayQueued("Equip" + uName);
	timer = (0 - 60.0 / uRPM - animator1["Equip" + uName + ""].length);
}

function Update () {
	if(Input.GetKeyDown(KeyCode.Escape)){
		paused = !paused;
	}
	if(paused){
		quittext.active = true;
		AudioListener.pause = true;
	}
	else
	{
		quittext.active = false;
		AudioListener.pause = false;
	}
	if(!paused){
		if(oldPoints != Points){
			if(oldPoints > Points){
				uiCarrier.SendMessage("BoughtItem", Points - oldPoints, SendMessageOptions.DontRequireReceiver);
				oldPoints = Points;
			}
		}
		speedTest = animator1["Reload" + uName + ""].speed;
		if(animator1.IsPlaying("Reload" + uName + ""))
		{
			speedTime += Time.deltaTime;
		}
		aimPause += Time.deltaTime;
		if(uReserve > uReserveMax && reloading == false)
		{
			uReserve = uReserveMax;
		}
		if(u2Reserve > u2ReserveMax && reloading == false)
		{
			u2Reserve = u2ReserveMax;
		}
		ammoTest = uAmmo / uMaxClip;
		if(gunequipped == 1 && uAmmo == 0 && equipped == "gun" && uReserve != 0)
		{
			uiNotification.gameObject.active = true;
			uiNotification.text = "R to Reload";
		}
		else if(gunequipped == 2 && u2Ammo == 0 && equipped == "gun" && u2Reserve != 0)
		{
			uiNotification.gameObject.active = true;
			uiNotification.text = "R to Reload";
		}
		else if(gunequipped == 1 && uAmmo / uMaxClip == 0 && equipped == "gun" && uReserve == 0)
		{
			uiNotification.gameObject.active = true;
			uiNotification.text = "No Ammo";
		}
		else if(gunequipped == 2 && u2Ammo / u2MaxClip == 0 && equipped == "gun" && u2Reserve == 0)
		{
			uiNotification.gameObject.active = true;
			uiNotification.text = "No Ammo";
		}
		else
		{
			uiNotification.gameObject.active = false;
		}
		if(PerkList.Count >= 1)
		{
			uiPerk1.gameObject.active = true;
			uiPerk1.SendMessage("GunImage", PerkList[0], SendMessageOptions.DontRequireReceiver);
			if(PerkList.Count >= 2)
			{
				uiPerk2.gameObject.active = true;
				uiPerk2.SendMessage("GunImage", PerkList[1], SendMessageOptions.DontRequireReceiver);
				if(PerkList.Count >= 3)
				{
					uiPerk3.gameObject.active = true;
					uiPerk3.SendMessage("GunImage", PerkList[2], SendMessageOptions.DontRequireReceiver);
					if(PerkList.Count >= 4)
					{
						uiPerk4.gameObject.active = true;
						uiPerk4.SendMessage("GunImage", PerkList[3], SendMessageOptions.DontRequireReceiver);
					}
					else
					{
						uiPerk4.gameObject.active = false;
					}
				}
				else
				{
					uiPerk3.gameObject.active = false;
					uiPerk4.gameObject.active = false;
				}
			}
			else
			{
				uiPerk2.gameObject.active = false;
				uiPerk3.gameObject.active = false;
				uiPerk4.gameObject.active = false;
			}
		}
		else
		{
			uiPerk1.gameObject.active = false;
			uiPerk2.gameObject.active = false;
			uiPerk3.gameObject.active = false;
			uiPerk4.gameObject.active = false;
		}
		if(equipped == "gun" && !Input.GetButton("Fire2"))
		{
			accLeft.gameObject.active = true;
			accRight.gameObject.active = true;
			accDown.gameObject.active = true;
			accUp.gameObject.active = true;
			accLeft.rectTransform.localPosition.x = -realaccuracy * 500 - 20;
			accRight.rectTransform.localPosition.x = realaccuracy * 500 + 20;
			accDown.rectTransform.localPosition.y = -realaccuracy * 500 - 20;
			accUp.rectTransform.localPosition.y = realaccuracy * 500 + 20;
			meleeIcon.gameObject.active = false;
			if(cam.fieldOfView != 60)
			{
				cam.fieldOfView += 1;
				cam2.fieldOfView += 1;
				cam3.fieldOfView += 1;
			}
			else if(cam.fieldOfView >= 60)
			{
				cam.fieldOfView = 60;
				cam2.fieldOfView = 60;
				cam3.fieldOfView = 60;
			}
		}
		else if(equipped == "melee")
		{
			accLeft.gameObject.active = false;
			accRight.gameObject.active = false;
			accDown.gameObject.active = false;
			accUp.gameObject.active = false;
			meleeIcon.gameObject.active = true;
		}
		else if(equipped == "grenade")
		{
			accLeft.gameObject.active = false;
			accRight.gameObject.active = false;
			accDown.gameObject.active = false;
			accUp.gameObject.active = false;
			meleeIcon.gameObject.active = true;
		}
		uiSlot1.SendMessage("GunImage", uMID, SendMessageOptions.DontRequireReceiver);
		uiSlot2.SendMessage("GunImage", uID, SendMessageOptions.DontRequireReceiver);
		if(guns == 2)
		{
			uiSlot2two.gameObject.active = true;
			uiSlot2two.SendMessage("GunImage", u2ID, SendMessageOptions.DontRequireReceiver);
		}
		else
		{
			uiSlot2two.gameObject.active = false;
		}
		if(GrenadeList.Count >= 1)
		{
			uiSlot31.gameObject.active = true;
			uiSlot31.SendMessage("GunImage", GrenadeList[0], SendMessageOptions.DontRequireReceiver);
			if(GrenadeList.Count >= 2)
			{
				uiSlot32.gameObject.active = true;
				uiSlot32.SendMessage("GunImage", GrenadeList[1], SendMessageOptions.DontRequireReceiver);
				if(GrenadeList.Count >= 3)
				{
					uiSlot33.gameObject.active = true;
					uiSlot33.SendMessage("GunImage", GrenadeList[2], SendMessageOptions.DontRequireReceiver);
					if(GrenadeList.Count >= 4)
					{
						uiSlot34.gameObject.active = true;
						uiSlot34.SendMessage("GunImage", GrenadeList[3], SendMessageOptions.DontRequireReceiver);
					}
					else
					{
						uiSlot34.gameObject.active = false;
					}
				}
				else
				{
					uiSlot33.gameObject.active = false;
					uiSlot34.gameObject.active = false;
				}
			}
			else
			{
				uiSlot32.gameObject.active = false;
				uiSlot33.gameObject.active = false;
				uiSlot34.gameObject.active = false;
			}
		}
		if(equipped == "grenade")
		{
			uiSlot31.SendMessage("Amount", GrenadeList.Count, SendMessageOptions.DontRequireReceiver);
			uiSlot32.SendMessage("Amount", GrenadeList.Count, SendMessageOptions.DontRequireReceiver);
			uiSlot33.SendMessage("Amount", GrenadeList.Count, SendMessageOptions.DontRequireReceiver);
			uiSlot34.SendMessage("Amount", GrenadeList.Count, SendMessageOptions.DontRequireReceiver);
			if(grenadeEquipped == "1")
			{
				grenadeS1.gameObject.active = true;
				grenadeS2.gameObject.active = false;
				grenadeS3.gameObject.active = false;
				grenadeS4.gameObject.active = false;
			}
			else if(grenadeEquipped == "2")
			{
				grenadeS1.gameObject.active = false;
				grenadeS2.gameObject.active = true;
				grenadeS3.gameObject.active = false;
				grenadeS4.gameObject.active = false;
			}
			else if(grenadeEquipped == "3")
			{
				grenadeS1.gameObject.active = false;
				grenadeS2.gameObject.active = false;
				grenadeS3.gameObject.active = true;
				grenadeS4.gameObject.active = false;
			}
			else if(grenadeEquipped == "4")
			{
				grenadeS1.gameObject.active = false;
				grenadeS2.gameObject.active = false;
				grenadeS3.gameObject.active = false;
				grenadeS4.gameObject.active = true;
			}
		}
		else if(equipped != "grenade")
		{
			grenadeS1.gameObject.active = false;
			grenadeS2.gameObject.active = false;
			grenadeS3.gameObject.active = false;
			grenadeS4.gameObject.active = false;
		}
		if(slot4ID != 0)
		{
			uiSlot4.gameObject.active = true;
			uiSlot4.SendMessage("GunImage", slot4ID, SendMessageOptions.DontRequireReceiver);
		}
		else
		{
			uiSlot4.gameObject.active = false;
		}
		if(equipped == "Slot4")
		{
			uiSlot42.gameObject.active = true;
			uiSlot4.SendMessage("GunImage", slot4ID, SendMessageOptions.DontRequireReceiver);
			uiSlot42.SendMessage("GunImage", slot4Type, SendMessageOptions.DontRequireReceiver);
			uiSlot42.SendMessage("GunImageSet", slot4ID, SendMessageOptions.DontRequireReceiver);
		}
		else
		{
			uiSlot42.gameObject.active = false;
		}
		if(Health != 0)
		{
			var colored : float = ((100 - Health) * 2.55) / 255;
			damageIndicator.GetComponent.<UI.Image>().color = new Color(1f, 1f, 1f, colored);
		}
		else{
			damageIndicator.GetComponent.<UI.Image>().color.a = 1f;
		}
		points.text = Points + "";
		healthCounter.text = Health + "";
		if(equipped == "gun" && gunequipped == 1)
		{
			ammoCounter.text = uAmmo + "/" + uReserve;
		}
		else if(equipped == "gun" && gunequipped == 2)
		{
			ammoCounter.text = u2Ammo + "/" + u2Reserve;
		}
		else if(equipped == "Slot4")
		{
			ammoCounter.text = slot4Ammo + "/" + slot4MaxAmmo;
		}
		else if(equipped == "melee" || equipped == "grenade" || animator1.IsPlaying("Reload" + uName))
		{
			ammoCounter.text = "N/A";
		}
		fireCool += Time.deltaTime;
		if(fireaccuracyinc > 0)
		{
			if(fireCool >= 0.1)
			{
				fireaccuracyinc -= (Time.deltaTime / 15);
			}
		}
		if(fireaccuracyinc < 0)
		{
			fireaccuracyinc = 0;
		}
		if(fireaccuracyinc >= uAccuracy * 2)
		{
			fireaccuracyinc = uAccuracy * 2;
		}
		if(gunequipped == 1)
		{
			realaccuracy = (fireaccuracyinc + uAccuracy - reducingAim) * (accuracyMulti / statusEffectMulti);
		}
		else if(gunequipped == 2)
		{
			realaccuracy = (fireaccuracyinc + u2Accuracy - reducingAim) * (accuracyMulti / statusEffectMulti);
		}
		if(slot4Ammo != slot4MaxAmmo)
		{
			slot4ChargeTime += Time.deltaTime;
			if(slot4ChargeTime >= 0.2)
			{
				slot4ChargeTime = 0;
				slot4Ammo += 1;
			}
		}
		if(PerkList.Contains(4))
		{
			if(uName != "" || uName != null)
			{
				if(animator1.IsPlaying("Fire" + uName))
				{
					gunAudioSource.pitch = 1.2;
				}
				else
				{
					gunAudioSource.pitch = 1;
				}
				if(animator1.IsPlaying("Fire" + uName))
				{
					animator1["Fire" + uName + ""].speed = 1.2;
				}
				if(intendedPellets == 1)
				{
					uPellets = 2;
				}
				else
				{
					uPellets = intendedPellets;
				}
			}
			if(guns == 2)
			{
				if(u2Name != "" || u2Name != null)
				{
					if(animator1.IsPlaying("Fire" + u2Name))
					{
						gunAudioSource.pitch = 1.2;
					}
					else
					{
						gunAudioSource.pitch = 1;
					}
					if(animator1.IsPlaying("Fire" + u2Name))
					{	
						animator1["Fire" + u2Name].speed = 1.2;
					}
					if(intendedPellets2 == 1)
					{
						u2Pellets = 2;
					}
					else
					{
						u2Pellets = intendedPellets2;
					}
				}
			}
		}
		else
		{
			if(uName != "" || uName != null)
			{
				animator1["Fire" + uName + ""].speed = 1;
				if(intendedPellets == 1)
				{
					uPellets = 1;
				}
			}
			if(guns == 2)
			{
				if(u2Name != "" || u2Name != null)
				{
					animator1["Fire" + u2Name].speed = 1;
					if(intendedPellets2 == 1)
					{
						u2Pellets = 1;
					}
				}
			}
		}
		if(animator1.IsPlaying("Reload" + uName))
		{
			if(PerkList.Contains(3))
			{
				animator1["Reload" + uName].speed = 1.5;
				gunAudioSource.pitch = 1.5;
			}
			else
			{
				animator1["Reload" + uName].speed = 1;
				gunAudioSource.pitch = 1;
			}
		}
		else if(animator1.IsPlaying("Reload" + uName + "2"))
		{
			if(PerkList.Contains(3))
			{
				animator1["Reload" + uName + "2"].speed = 1.5;
				gunAudioSource.pitch = 1.5;
			}
			else
			{
				animator1["Reload" + uName + "2"].speed = 1;
				gunAudioSource.pitch = 1;
			}
		}
		else if(animator1.IsPlaying("Reload" + uName + "3"))
		{
			if(PerkList.Contains(3))
			{
				animator1["Reload" + uName + "3"].speed = 1.5;
				gunAudioSource.pitch = 1.5;
			}
			else
			{
				animator1["Reload" + uName + "3"].speed = 1;
				gunAudioSource.pitch = 1;
			}
		}
		else if(animator1.IsPlaying("Reload" + u2Name))
		{
			if(PerkList.Contains(3))
			{
				animator1["Reload" + u2Name].speed = 1.5;
				gunAudioSource.pitch = 1.5;
			}
			else
			{
				animator1["Reload" + u2Name].speed = 1;
				gunAudioSource.pitch = 1;
			}
		}
		else if(animator1.IsPlaying("Reload" + u2Name + "2"))
		{
			if(PerkList.Contains(3))
			{
				animator1["Reload" + u2Name + "2"].speed = 1.5;
				gunAudioSource.pitch = 1.5;
			}
			else
			{
				animator1["Reload" + u2Name + "2"].speed = 1;
				gunAudioSource.pitch = 1;
			}
		}
		else if(animator1.IsPlaying("Reload" + u2Name + "3"))
		{
			if(PerkList.Contains(3))
			{
				animator1["Reload" + u2Name + "3"].speed = 1.5;
				gunAudioSource.pitch = 1.5;
			}
			else
			{
				animator1["Reload" + u2Name + "3"].speed = 1;
				gunAudioSource.pitch = 1;
			}
		}
		else
		{
			gunAudioSource.pitch = 1;
		}
		if(PerkList.Contains(1))
		{
			potentialInvulnerable = true;
		}
		else
		{
			potentialInvulnerable = false;
		}
		if(PerkList.Contains(2))
		{
			DamageResist = 2;
		}
		else
		{
			DamageResist = 1;
		}
		invintimer += Time.deltaTime;
		regenTimer += Time.deltaTime;
		if(canSprint == false)
		{
			if(controller != null)
			{
				controller.SendMessage("CantSprint", SendMessageOptions.DontRequireReceiver);
			}
		}
		if(!Input.GetKey(KeyCode.LeftShift) && Stamina != 10)
		{
			if(regenTimer >= 0.05)
			{
				Stamina += 0.2;
				regenTimer = 0;
			}
		}
		if(Stamina > 10)
		{
			Stamina = 10;
		}
		if(Stamina > 0)
		{
			canSprint = true;
			if(controller != null)
			{
				controller.SendMessage("CanSprint", SendMessageOptions.DontRequireReceiver);
			}
		}
		if(uAmmo > uMaxClip)
		{
			uAmmo = uMaxClip;
		}
		if(coolingDown == true)
		{
			waveText.text = "Wave " + Round + " Beginning in " + coolDown + "";
			waveText.color.a += Time.deltaTime;
			roundTimer += Time.deltaTime;
			textColor.normal.textColor.a += Time.deltaTime;
			if(roundTimer >= 1)
			{
				coolDown -= 1;
				roundTimer = 0;
				textColor.normal.textColor.a = 0;
				waveText.color.a = 0;
			}
			if(coolDown == 0){
				uiRoundText.text = "" + Round;
				roundTimer = 0;
				textColor.normal.textColor.a = 0;
				waveText.color.a = 0;
				coolingDown = false;
			}
		}
		healthtimer += Time.deltaTime;
		healthcooldowntimer += Time.deltaTime;
		if(healthcooldowntimer >= 5)
		{
			if(Health < 100 && Health > 0)
			{
				if(healthtimer >= 0.1)
				{
					Health += 1;
					healthtimer = 0;
				}
			}
		}
		if(Health <= 0 && !PerkList.Contains(1) && dead == false)
		{
			if(dead == false)
			{
				healthtimer = 0;
				textColor.normal.textColor.a = 0;
			}
			deadtimer += Time.deltaTime;
			dead = true;
			Health = 0;
			if(gamecontroller != null)
			{
				gamecontroller.SendMessage("Dead", Round, SendMessageOptions.DontRequireReceiver);
			}
			transform.SendMessage("Dead", SendMessageOptions.DontRequireReceiver);
			if(controller != null)
			{
				controller.SendMessage("Dead", SendMessageOptions.DontRequireReceiver);
			}
			animator1.gameObject.active = false;
			PerkList.Clear();
			if(deadtimer >= 3)
			{
				Application.LoadLevel("Menu");
			}
			
		}
		else if(Health <= 0 && PerkList.Contains(1))
		{
			invulnerable = true;
			Health = 1;
			PerkList.Clear();
			invincount = 5;
			for(var i : GameObject in PerkMachines)
			{
				i.SendMessage("CanUse", SendMessageOptions.DontRequireReceiver);
			}
			invincible.gameObject.active = true;
			invintimer = 0;
		}
		if(invulnerable == true)
		{
			textColor.normal.textColor.a += Time.deltaTime;
			if(invincount == 0)
			{
				invulnerable = false;
				invincible.gameObject.active = false;
			}
			if(invintimer >= 1)
			{
				invincount -= 1;
				invintimer = 0;
				textColor.normal.textColor.a = 0;
			}
		}
		if(dead == true)
		{
			textColor.normal.textColor.a += Time.deltaTime;
		}
		timer += Time.deltaTime;
		if(Input.GetKeyDown(KeyCode.P))
		{
			phoneEquipped = !phoneEquipped;
			if(phoneEquipped == true)
			{
				animator1["EquipPhone"].layer = 1;
				animator1.Play("EquipPhone");
			}
			if(phoneEquipped == false)
			{
				animator1["DequipPhone"].layer = 1;
				animator1.Play("DequipPhone");
			}
		}
		if(Input.GetKeyDown(KeyCode.Q))
		{
			if(phoneEquipped == true)
			{
				StartCoroutine("PickSong");
			}
		}
		if(isPlaying == true && !musicAudioSource.isPlaying)
		{
			phonetimed += Time.deltaTime;
			musicAudioSource.Play();
			if(phonetimed >= 75 && phonetimed < 125)
			{
				statusEffectMulti = 0.5;
				statusText.gameObject.active = true;
				statusText.text = "You are getting bored of this song, song effect -50%";
			}
			if(phonetimed >= 125)
			{
				phonetimed = 125;
				statusEffectMulti = 0.25;
				statusText.gameObject.active = true;
				statusText.text = "Your ears are starting to hurt, song effect -75%";
			}
		}
		else if(isPlaying == false)
		{
			statusText.gameObject.active = false;
			statusEffectMulti = 1;
			if(phonetimed > 0)
			{
				phonetimed -= Time.deltaTime * 2;
			}
			else
			{
				phonetimed = 0;
			}
		}
		if(Input.GetKeyDown(KeyCode.E))
		{
			if(phoneEquipped == true)
			{
				if(isPlaying == false)
				{
					for (var song : Song in Songs)
					{
						if(song.ID == songSelected)
						{
							isPlaying = true;
							musicAudioSource.Play();
							gunAudioSource.volume = 0.25;
							if(song.Effect == 1)
							{
								playerController.SendMessage("SpeedUp", speedMulti * statusEffectMulti);
							}
							if(song.Effect == 2)
							{
								damageMulti = song.EffectMulti;
							}
							if(song.Effect == 3)
							{
								accuracyMulti = song.EffectMulti;
							}
							if(song.Effect == 4)
							{
								meleeSpeedMulti = song.EffectMulti;
							}
							if(song.Effect2 == 1)
							{
								playerController.SendMessage("SpeedUp", speedMulti / statusEffectMulti);
							}
							if(song.Effect2 == 2)
							{
								damageMulti = song.Effect2Multi;
							}
							if(song.Effect2 == 3)
							{
								accuracyMulti = song.Effect2Multi;
							}
							if(song.Effect2 == 4)
							{
								meleeSpeedMulti = song.Effect2Multi;
							}
							if(!musicAudioSource.isPlaying)
							{
								musicAudioSource.Play();
							}
						}
					}
				}
				else if(isPlaying == true)
				{
					isPlaying = false;
					musicAudioSource.Stop();
					accuracyMulti = 1;
					meleeSpeedMulti = 1;
					damageMulti = 1;
					gunAudioSource.volume = 1;
					playerController.SendMessage("SpeedDown");
				}
			}
		}
		if(!Input.GetButton("Horizontal") && !Input.GetButton("Vertical") && controller != null)
		{
			sprinting = false;
			controller.SendMessage("NoSprint", SendMessageOptions.DontRequireReceiver);
			animator2.CrossFade("PlayerIdle");
		}
		if(Input.GetButton("Fire2") && controller != null)
		{
			sprinting = false;
			if(controller != null)
			{
				controller.SendMessage("NoSprint", SendMessageOptions.DontRequireReceiver);
			}
			animator2.CrossFade("PlayerIdle");
		}
		if(Input.GetButton("Horizontal") || Input.GetButton("Vertical") && !Input.GetKey(KeyCode.LeftShift) && controller != null)
		{
			sprinting = false;
			animator2.Play("PlayerMove");
			animator2["PlayerMove"].speed = 1;
			if(controller != null)
			{
				controller.SendMessage("NoSprint", SendMessageOptions.DontRequireReceiver);
			}
		}
		if(!Input.GetButton("Horizontal") && Input.GetButton("Vertical") && Input.GetKey(KeyCode.LeftShift) && canSprint == true && !Input.GetButton("Fire2") && controller != null)
		{
			sprinting = true;
			animator2.Play("PlayerMove");
			animator2["PlayerMove"].speed = 1.25;
			controller.SendMessage("Sprint", SendMessageOptions.DontRequireReceiver);
			if(regenTimer >= 0.05)
			{
				Stamina -= 0.1;
				regenTimer = 0;
			}
			if(Stamina <= 0.1)
			{
				Stamina = -5;
				canSprint = false;	
			}
		}
		if(Input.GetKey(KeyCode.LeftShift) && canSprint == false && !Input.GetButton("Fire2") && controller != null)
		{
			sprinting = false;
			controller.SendMessage("NoSprint", SendMessageOptions.DontRequireReceiver);
			animator2.Play("PlayerMove");
			animator2["PlayerMove"].speed = 1;
		}
		if(sprinting == true)
		{
			if(gunequipped == 1)
			{
				aimPause = -0.25;
				aimyThing.localPosition = uSPos;
				aimyThing.localEulerAngles = uSRot;
				aimTransform.rotation = Quaternion.RotateTowards(aimTransform.rotation, aimyThing.rotation, 15);
				aimTransform.position = Vector3.MoveTowards(aimTransform.position, aimyThing.position, 1);
				//Debug.Log("I'm sprinting.");
			}
			else if(gunequipped == 2)
			{
				aimPause = -0.5;
				aimyThing.localPosition = u2SPos;
				aimyThing.localEulerAngles = u2SRot;
				aimTransform.rotation = Quaternion.RotateTowards(aimTransform.rotation, aimyThing.rotation, 15);
				aimTransform.position = Vector3.MoveTowards(aimTransform.position, aimyThing.position, 1);
				//Debug.Log("I'm sprinting.");
			}
		}
		else if(sprinting == false && !Input.GetButton("Fire2"))
		{
			aimyThing.localPosition = Vector3(0, 0, 0);
			aimyThing.localEulerAngles = Vector3(0, 0, 0);
			aimTransform.localEulerAngles = Vector3(0, 0, 0);
			aimTransform.position = Vector3.MoveTowards(aimTransform.position, aimyThing.position, 5);
			//Debug.Log("I'm sprinting.");
		}
	    if(Input.GetKeyDown(KeyCode.F))
	    {
	        flashlight.gameObject.active = !flashlight.gameObject.active;
	    }
	    if(Input.GetKeyDown(KeyCode.Alpha1))
	    {
	    	if(uMName != "" && equipped != "melee")
	    	{
	    		if(equipped == "gun")
	    		{
	    			if(gunequipped == 1)
	    			{
	    				animator1.Play("Dequip" + uName);
	    			}
	    			else if(gunequipped == 2)
	    			{
	    				animator1.Play("Dequip" + u2Name);
	    			}
	    		}
	    		if(equipped == "grenade")
	    		{
	    			animator1.PlayQueued("Dequip" + gName);
	    		}
	    		if(equipped == "Slot4")
				{
					animator1.Play("Dequip" + slot4Name);
				}
				if(equipped == "Slot5")
				{
					animator1.Play("Dequip" + slot5name);
				}
	    		equipped = "melee";
	    		if(umType == 0)
	    		{
	    			uMTransform.gameObject.active = true;
	    			animator1.PlayQueued("EquipOneHanded");
	    			timer = (0 - 60.0 / uRPM - animator1["EquipOneHanded"].length);
	    		}
	    		if(umType == 1)
	    		{
	    			uMTransform.gameObject.active = true;
	    			animator1.PlayQueued("EquipTwoHanded");
	    			timer = (0 - 60.0 / uRPM - animator1["EquipTwoHanded"].length);
	    		}
	    	}
	    }
	    if(Input.GetKeyDown(KeyCode.Alpha2))
	    {
	    	if(uName != "" && equipped != "gun" && !animator1.IsPlaying("Reload" + u2Name) && !animator1.IsPlaying("Reload" + u2Name + "2") && !animator1.IsPlaying("Reload" + u2Name + "3") && !animator1.IsPlaying("Reload" + uName) && !animator1.IsPlaying("Reload" + uName + "2") && !animator1.IsPlaying("Reload" + uName + "3"))
	    	{
	    		if(equipped == "melee" && umType == 0)
	    		{
	    			animator1.PlayQueued("DequipOneHanded");
	    		}
	    		if(equipped == "melee" && umType == 1)
	    		{
	    			animator1.PlayQueued("DequipTwoHanded");
	    		}
	    		if(equipped == "grenade")
	    		{
	    			animator1.PlayQueued("Dequip" + gName);
	    		}
	    		if(equipped == "Slot4")
				{
					animator1.Play("Dequip" + slot4Name);
				}
				if(equipped == "Slot5")
				{
					animator1.Play("Dequip" + slot5name);
				}
				gunequipped = 1;
	    		equipped = "gun";
	    		animator1.PlayQueued("Equip" + uName);
	    		timer = (0 - 60.0 / uRPM - animator1["Equip" + uName + ""].length);
	    		uiSlot2.SendMessage("Equipped", SendMessageOptions.DontRequireReceiver);
	    		uiSlot2two.SendMessage("Dequipped", SendMessageOptions.DontRequireReceiver);
	    	}
	    	else if(equipped == "gun" && guns == 2 && !animator1.IsPlaying("Reload" + uName) && !animator1.IsPlaying("Reload" + uName + "2") && !animator1.IsPlaying("Reload" + uName + "3") && !animator1.IsPlaying("Reload" + u2Name) && !animator1.IsPlaying("Reload" + u2Name + "2") && !animator1.IsPlaying("Reload" + u2Name + "3"))
	    	{
	    		gunequipped += 1;
	    		if(gunequipped > 2)
	    		{
	    			gunequipped = 1;
	    		}
	    		if(gunequipped == 1)
	    		{
	    			equipped = "gun";
	    			animator1.PlayQueued("Dequip" + u2Name);
	    			
	    			animator1.PlayQueued("Equip" + uName);
	    			timer = (0 - 60.0 / uRPM - (animator1["Equip" + uName + ""].length + animator1["Dequip" + u2Name].length));
	    			uiSlot2.SendMessage("Equipped", SendMessageOptions.DontRequireReceiver);
	    			uiSlot2two.SendMessage("Dequipped", SendMessageOptions.DontRequireReceiver);
	    		}
	    		else if(gunequipped == 2)
	    		{
	    			equipped = "gun";
	    			animator1.PlayQueued("Dequip" + uName);
	    			
	    			animator1.PlayQueued("Equip" + u2Name);
	    			timer = (0 - 60.0 / u2RPM - (animator1["Equip" + u2Name].length + animator1["Dequip" + uName + ""].length));
	    			uiSlot2two.SendMessage("Equipped", SendMessageOptions.DontRequireReceiver);
	    			uiSlot2.SendMessage("Dequipped", SendMessageOptions.DontRequireReceiver);
	    		}
	    	}
	    }
	    if(Input.GetKeyDown(KeyCode.Alpha3) && GrenadeList.Count != 0)
	    {
	    	if(equipped == "melee" && umType == 0)
			{
				animator1.PlayQueued("DequipOneHanded");
				grenadeEquipped = 1;
			}
			if(equipped == "melee" && umType == 1)
			{
				animator1.PlayQueued("DequipTwoHanded");
				grenadeEquipped = 1;
			}
			if(equipped == "gun")
			{
				if(gunequipped == 1)
				{
					animator1.PlayQueued("Dequip" + uName);
					
				}
				if(gunequipped == 2)
				{
					animator1.PlayQueued("Dequip" + u2Name);
					
				}
				grenadeEquipped = 1;
			}
			if(equipped == "Slot4")
			{
				animator1.PlayQueued("Dequip" + slot4Name);
			}
			if(equipped == "Slot5")
			{
				animator1.Play("Dequip" + slot5name);
			}
			if(isLoaded == false)
	    	{
	    		isLoaded = true;
	    	}
	    	if(equipped == "grenade")
	    	{
	    		animator1.PlayQueued("Dequip" + gName);
	    		timer = (0 - animator1["Dequip" + gName].length);
	    		grenadeEquipped += 1;
	    		if(grenadeEquipped > 4 || grenadeEquipped > GrenadeList.Count)
	    		{
	    			grenadeEquipped = 1;
	    		}
	    	}
	    	equipped = "grenade";
			gName = Grenades[GrenadeList[grenadeEquipped - 1] - 1].Name;
			if(gName == "Grenade")
			{
				PlayerGrenade.GetComponent.<MeshRenderer>().materials[1].color = Grenades[GrenadeList[grenadeEquipped - 1] - 1].Colour;
			}
	    	animator1.PlayQueued("Equip" + gName);
	    	timer = (0 - animator1["Equip" + gName].length);
	    }
	    if(Input.GetKeyDown(KeyCode.Alpha4) && slot4ID != null)
	    {
	    	if(equipped != "Slot4")
	    	{
		    	if(equipped == "melee" && umType == 0)
				{
					animator1.PlayQueued("DequipOneHanded");
				}
				if(equipped == "melee" && umType == 1)
				{
					animator1.PlayQueued("DequipTwoHanded");
				}
				if(equipped == "gun")
				{
					if(gunequipped == 1)
					{
						animator1.Play("Dequip" + uName);
						
					}
					else
					{
						animator1.Play("Dequip" + u2Name);
						
					}
				}
				if(equipped == "grenade")
				{
					animator1.Play("Dequip" + gName);
				}
				if(equipped == "Slot4")
				{
					animator1.PlayQueued("Dequip" + slot4Name);
				}
				if(equipped == "Slot5")
				{
					animator1.Play("Dequip" + slot5name);
				}
				slot4Type = 1;
			}
			else
			{
				if(slot4Type != slot4Types)
				{
					slot4Type += 1;
				}
				else
				{
					slot4Type = 1;
				}
			}
			equipped = "Slot4";
	    	animator1.PlayQueued("Equip" + slot4Name);
	    	timer = (0 - animator1["Equip" + slot4Name].length);
	    }
	    if(Input.GetKeyDown(KeyCode.Alpha5))
	    {
	    	if(equipped != "Slot5" && slot5got == true && firing == false && timer >= 0.05)
	    	{
	    		if(equipped == "melee" && umType == 0)
				{
					animator1.PlayQueued("DequipOneHanded");
				}
				if(equipped == "melee" && umType == 1)
				{
					animator1.PlayQueued("DequipTwoHanded");
				}
				if(equipped == "gun")
				{
					if(gunequipped == 1)
					{
						animator1.Play("Dequip" + uName);
						
					}
					else
					{
						animator1.Play("Dequip" + u2Name);
						
					}
				}
				if(equipped == "grenade")
				{
					animator1.Play("Dequip" + gName);
				}
				if(equipped == "Slot4")
				{
					animator1.PlayQueued("Dequip" + slot4Name);
				}
	    		animator1.PlayQueued("Equip" + slot5name);
	    		equipped = "Slot5";
	    		uiSlot2.SendMessage("Dequipped", SendMessageOptions.DontRequireReceiver);
	    		uiSlot2two.SendMessage("Dequipped", SendMessageOptions.DontRequireReceiver);
	    	}
	    }
	    var mhit : RaycastHit;
		if (Physics.Raycast (aimer.position, aimer.TransformDirection (Vector3.forward), mhit, 500, layerMask))
		{
			if(Input.GetButtonDown("Fire1") && sprinting == false)
			{
				Distance = mhit.distance;
				//Debug.Log("I'm aiming at " + mhit.transform);
				if(equipped == "melee" && Health != 0)
		    	{
		    		if(timer >= 0.1)
		    		{
		    			StartCoroutine("SwingMelee");
		    		}
		    	}
	    	}
		}
		if(Input.GetButton("Fire1") && sprinting == false)
		{
			if(equipped == "Slot4" && Health != 0 && timer >= 0.2)
			{
				if(slot4Ammo >= slot4AmmoConsume)
				{
					timer = 0;
					//Debug.Log("Fired Wand");
					slot4Ammo -= slot4AmmoConsume;
					animator1.Play("Fire" + slot4Name);
					var Wclone = Instantiate(slot4Projectiles[slot4Type - 1], transform.position, transform.rotation);
					Wclone.gameObject.active = true;
					Wclone.velocity = transform.TransformDirection(Vector3.forward * 25);
				}
			}
	    	if(equipped == "gun" && Health != 0 && timer >= 0.05)
	    	{
	    		if(fired == false)
	    		{
	    			if(firing == false)
	    			{
	    				if(gunequipped == 1 && uAmmo != 0)
	    				{
	    					StartCoroutine("FireGun");
	    					//Debug.Log("Firing Gun.");
	    				}
	    				else if(gunequipped == 2 && u2Ammo != 0)
	    				{
	    					StartCoroutine("FireGun");
	    					//Debug.Log("Firing Gun.");
	    				}
			    	}
		    	}
	    	}
		}
		if(!Input.GetButton("Fire1"))
		{
			fired = false;
		}
		if(equipped == "grenade" && isLoaded == false && GrenadeList.Count != 0)
		{
			if(timer >= 0.1)
			{
				equipped = "grenade";
				gName = Grenades[GrenadeList[grenadeEquipped - 1] - 1].Name;
				if(gName == "Grenade")
				{
					PlayerGrenade.GetComponent.<MeshRenderer>().materials[1].color = Grenades[GrenadeList[grenadeEquipped - 1] - 1].Colour;
				}
		    	animator1.PlayQueued("Equip" + gName);
		    	timer = (0 - animator1["Equip" + gName].length);
				isLoaded = true;
			}
		}
		if(Input.GetButtonDown("Fire1") && sprinting == false)
		{
			if(equipped == "grenade" && isLoaded == true && timer >= 0)
	    	{
	    		cooktimer = 0;
	    		grenadeCook = 0;
	    		grenadeCooking = true;
	    		animator1.Play("Fire" + gName);
	    	}
		}
		if(Input.GetButton("Fire1") && grenadeCooking == true)
		{
			if(Grenades[GrenadeList[grenadeEquipped - 1] - 1].type == 1)
			{
				cooktimer += Time.deltaTime;
				grenadeCook += Time.deltaTime;
				if(cooktimer >= 1)
				{
					cooktimer = 0;
					meleeIcon.transform.localScale.x = 0.25;
					meleeIcon.transform.localScale.y = 0.25;
				}
				if(grenadeCook >= 5)
				{
					grenadeExplode.active = true;
					Health = 0;
				}
			}
		}
		if(meleeIcon.transform.localScale.x > 0.1)
		{
			meleeIcon.transform.localScale.x -= 0.01;
			meleeIcon.transform.localScale.y -= 0.01;
		}
		if(meleeIcon.transform.localScale.x < 0.1)
		{
			meleeIcon.transform.localScale.x = 0.1;
			meleeIcon.transform.localScale.y = 0.1;
		}
		if(!Input.GetButton("Fire1") && grenadeCooking == true)
		{
			grenadeCooking = false;
			timer = 0 - animator1["Fire" + gName + "2"].length;
			animator1.Play("Fire" + gName + "2");
			StartCoroutine("GrenadeThrow");
		}
		if(Input.GetButtonDown("Fire2") && equipped == "gun" && sprinting == false && aimPause >= 0)
		{
			if(gunequipped == 1 && !animator1.IsPlaying("Reload" + uName) && !animator1.IsPlaying("Reload" + uName + "2") && !animator1.IsPlaying("Reload" + uName + "3"))
			{
				canSprint = false;
				animator3["Aim" + uName].layer = 2;
				animator3["Aim" + uName].speed = 1;
				animator3.Play("Aim" + uName);
				reducingAim = uAimReduce;
				fireaccuracyinc = 0;
				//Debug.Log("I'm aiming.");
				accLeft.gameObject.active = false;
				accRight.gameObject.active = false;
				accDown.gameObject.active = false;
				accUp.gameObject.active = false;
			}
			else if(gunequipped == 2 && !animator1.IsPlaying("Reload" + u2Name + "2") && !animator1.IsPlaying("Reload" + u2Name) && !animator1.IsPlaying("Reload" + u2Name + "3"))
			{
				canSprint = false;
				animator3["Aim" + u2Name].layer = 2;
				animator3["Aim" + u2Name].speed = 1;
				animator3.Play("Aim" + u2Name);
				reducingAim = u2AimReduce;
				fireaccuracyinc = 0;
				//Debug.Log("I'm aiming.");
				accLeft.gameObject.active = false;
				accRight.gameObject.active = false;
				accDown.gameObject.active = false;
				accUp.gameObject.active = false;
			}
		}
		else if(Input.GetButtonUp("Fire2") && sprinting == false)
		{
			canSprint = true;
			if(gunequipped == 1 && !animator1.IsPlaying("Reload" + uName) && !animator1.IsPlaying("Reload" + uName + "2") && !animator1.IsPlaying("Reload" + uName + "3")){
				animator3["Aim" + uName].layer = 2;
				animator3["Aim" + uName].speed = -1;
				animator3["Aim" + uName].time = animator3["Aim" + uName].length;
				animator3.Play("Aim" + uName);
			}
			else if(gunequipped == 2 && !animator1.IsPlaying("Reload" + u2Name + "2") && !animator1.IsPlaying("Reload" + u2Name) && !animator1.IsPlaying("Reload" + u2Name + "3")){
				animator3["Aim" + u2Name].layer = 2;
				animator3["Aim" + u2Name].speed = -1;
				animator3["Aim" + u2Name].time = animator3["Aim" + u2Name].length;
				animator3.Play("Aim" + u2Name);
			}
			reducingAim = 0;
		}
	    if(Input.GetKeyDown(KeyCode.R) && !Input.GetButton("Fire2") && sprinting == false)
	    {
	    	if(gunequipped == 1 && !animator1.IsPlaying("Fire" + uName))
	    	{
	    		firing = false;
		    	if(uSingleReload == false && uAmmo != uMaxClip && uReserve != 0)
		    	{
		    		animator1.Play("Reload" + uName);
					timer = (0 - (animator1["Reload" + uName + ""].length / animator1["Reload" + uName + ""].speed));
		    		if(uAmmo + uReserve >= uMaxClip)
		    		{
		    			uReserve -= (uMaxClip - uAmmo);
		    			uAmmo = uMaxClip;
		    		}
		    		else
		    		{
		    			uAmmo += uReserve;
		    			uReserve = 0;
		    		}
		    		StartCoroutine("ReloadSounds");
		    	}
		    	if(uSingleReload == true && uAmmo != uMaxClip && uReserve != 0)
		    	{
		    		if(reloading == false)
		    		{
		    			reloading = true;
		    			if(uRTime != 1)
		    			{
		    				uReserve += uAmmo;
		    				uAmmo = 0;
		    			}
			    		animator1.Play("Reload" + uName);
			    		StartCoroutine("Reload");
		    		}
		    	}
	    	}
	    	if(gunequipped == 2 && !animator1.IsPlaying("Fire" + u2Name))
	    	{
	    		firing = false;
		    	if(u2SingleReload == false && u2Ammo != u2MaxClip && u2Reserve != 0)
		    	{
		    		animator1.Play("Reload" + u2Name);
					timer = (0 - (animator1["Reload" + u2Name].length / animator1["Reload" + u2Name + ""].speed));
		    		if(u2Ammo + u2Reserve >= u2MaxClip)
		    		{
		    			u2Reserve -= (u2MaxClip - u2Ammo);
		    			u2Ammo = u2MaxClip;
		    		}
		    		else
		    		{
		    			u2Ammo += u2Reserve;
		    			u2Reserve = 0;
		    		}
		    		StartCoroutine("ReloadSounds");
		    	}
		    	if(u2SingleReload == true && u2Ammo != u2MaxClip && u2Reserve != 0)
		    	{
		    		if(reloading == false)
		    		{
			    		reloading = true;
		    			if(u2rTime != 1)
		    			{
		    				u2Reserve += u2Ammo;
		    				u2Ammo = 0;
		    			}
			    		animator1.Play("Reload" + u2Name);
			    		StartCoroutine("Reload");
		    		}
		    	}
	    	}
	    }
	}
}

function Slot5 () {
	slot5got = true;
}

function GrenadeThrow () {
	yield WaitForSeconds(animator1["Fire" + gName + "2"].length);
	var gclone : Rigidbody;
	if(Grenades[GrenadeList[grenadeEquipped - 1] - 1].model == null)
	{
		gclone = Instantiate(grenadeProj, transform.position, transform.rotation);
		gclone.SendMessage("Grenade", GrenadeList[GrenadeList.Count - 1], SendMessageOptions.DontRequireReceiver);
	}
	else
	{
		gclone = Instantiate(Grenades[GrenadeList[grenadeEquipped - 1] - 1].model.GetComponent.<Rigidbody>(), transform.position, transform.rotation);
	}
	gclone.gameObject.active = true;
	gclone.velocity = transform.TransformDirection(Vector3.forward * 12.5);
	if(grenadeCook < 5 && Grenades[GrenadeList[grenadeEquipped - 1] - 1].type == 1)
	{
		gclone.SendMessage("GrenadeTime", grenadeCook, SendMessageOptions.DontRequireReceiver);
		grenadeCook = 0;
	}
	GrenadeList.RemoveAt(grenadeEquipped - 1);
	if(grenadeEquipped != 1)
	{
		grenadeEquipped -= 1;
	}
	if(GrenadeList.Count == 0)
	{
		equipped = "gun";
		gunequipped = 1;
		animator1.Play("Equip" + uName);
	}
	timer = -0.3;
	isLoaded = false;
}

function Grenade (ID : int) {
	if(GrenadeList.Count != 4)
	{
		for(var i : Grenade in Grenades)
		{
			if(i.ID == ID)
			{
				GrenadeList.Add(i.ID);
			}
		}
	}
}

// This function cycles through songs.
function PickSong () {
	if(songSelected != Songs.length)
	{
		songSelected += 1;
	}
	else if(songSelected == Songs.length)
	{
		songSelected = 1;
	}
	for (var song : Song in Songs)
	{
		if(song.ID == songSelected)
		{
			usS1Name.text = song.Name;
			if(song.Effect == 1)
			{
				usS1Effect.text = "Speed+";
				speedMulti = song.EffectMulti;
			}
			if(song.Effect == 2)
			{
				usS1Effect.text = "Damage+";
			}
			if(song.Effect == 3)
			{
				usS1Effect.text = "Accuracy+";
			}
			if(song.Effect == 4)
			{
				usS1Effect.text = "MeleeSpeed+";
				meleeSpeedMulti = song.EffectMulti;
			}
			if(song.Effect2 == 1)
			{
				usS1Effect2.text = "Speed-";
				speedMulti = song.Effect2Multi;
			}
			if(song.Effect2 == 2)
			{
				usS1Effect2.text = "Damage-";
			}
			if(song.Effect2 == 3)
			{
				usS1Effect2.text = "Accuracy-";
			}
			if(song.Effect2 == 4)
			{
				usS1Effect2.text = "MeleeSpeed-";
				meleeSpeedMulti = song.Effect2Multi;
			}
			phoneanimator1.PlayQueued("ChooseSong");
			musicAudioSource.clip = song.musicAudio;
			if(isPlaying == true)
			{
				isPlaying = false;
				gunAudioSource.volume = 1;
				playerController.SendMessage("SpeedDown");
			}
			yield WaitForSeconds(phoneanimator1["ChooseSong"].length);
			usS2Name.text = usS1Name.text;
			usS2Effect.text = usS1Effect.text;
			usS2Effect2.text = usS1Effect2.text;
		}
	}
}

function ReloadSounds () {
	if(gunequipped == 1)
	{
		for(var sounds : ReloadSet in reloadList)
		{
			if(uRSet == sounds.Name)
			{
				for(var sound : ReloadSound in sounds.Sounds)
				{
					if(uSingleReload == false)
					{
						yield WaitForSeconds((animator1["Reload" + uName + ""].length / sound.animTime) / animator1["Reload" + uName + ""].speed);
						gunAudioSource.Stop();
						gunAudioSource.clip = sound.Sound;
						gunAudioSource.Play();
					}
					else
					{
						yield WaitForSeconds((animator1["Reload" + uName + "2"].length / sound.animTime) / animator1["Reload" + uName + "2"].speed);
						gunAudioSource.Stop();
						gunAudioSource.clip = sound.Sound;
						gunAudioSource.Play();
					}
				}
			}
		}
	}
	else if(gunequipped == 2)
	{
		for(var sounds : ReloadSet in reloadList)
		{
			if(u2rSet == sounds.Name)
			{
				for(var sound : ReloadSound in sounds.Sounds)
				{
					if(u2SingleReload == false)
					{
						yield WaitForSeconds((animator1["Reload" + u2Name].length / sound.animTime) / animator1["Reload" + u2Name + ""].speed);
						gunAudioSource.Stop();
						gunAudioSource.clip = sound.Sound;
						gunAudioSource.Play();
					}
					else
					{
						yield WaitForSeconds((animator1["Reload" + u2Name + "2"].length / sound.animTime) / animator1["Reload" + u2Name + "2"].speed);
						gunAudioSource.Stop();
						gunAudioSource.clip = sound.Sound;
						gunAudioSource.Play();
					}
				}
			}
		}
	}
}

function Reload () {
	if(gunequipped == 1)
	{
		animator1.Play("Reload" + uName);
		yield WaitForSeconds(animator1["Reload" + uName + ""].length);
		StartCoroutine("ReloadSounds");
		animator1.Play("Reload" + uName + "2");
		yield WaitForSeconds(((animator1["Reload" + uName + "2"].length + 0.1) / uRTime) / animator1["Reload" + uName + "2"].speed);
		uAmmo += 1;
		uReserve -= 1;
		if(uAmmo == uMaxClip || uReserve == 0)
		{
			animator1.Play("Reload" + uName + "3");
			reloading = false;
		}
		if(uAmmo != uMaxClip && uReserve != 0)
		{
			StartCoroutine("ContReload");
		}
	}
	if(gunequipped == 2)
	{
		animator1.Play("Reload" + u2Name);
		yield WaitForSeconds(animator1["Reload" + u2Name].length);
		StartCoroutine("ReloadSounds");
		animator1.Play("Reload" + u2Name + "2");
		yield WaitForSeconds(((animator1["Reload" + u2Name + "2"].length + 0.1) / u2rTime) / animator1["Reload" + u2Name + "2"].speed);
		u2Ammo += 1;
		u2Reserve -= 1;
		if(u2Ammo == u2MaxClip || u2Reserve == 0)
		{
			animator1.Play("Reload" + u2Name + "3");
			reloading = false;
		}
		if(u2Ammo != u2MaxClip && u2Reserve != 0)
		{
			StartCoroutine("ContReload");
		}
	}
}

function ContReload () {
	if(gunequipped == 1)
	{
		StartCoroutine("ReloadSounds");
		if(!animator1.IsPlaying("Reload" + uName + "2"))
		{
			animator1.Play("Reload" + uName + "2");
		}
		yield WaitForSeconds(((animator1["Reload" + uName + "2"].length + 0.1) / uRTime) / animator1["Reload" + uName + "2"].speed);
		uAmmo += 1;
		uReserve -= 1;
		if(uAmmo == uMaxClip || uReserve == 0)
		{
			animator1.Play("Reload" + uName + "3");
			reloading = false;
		}
		if(uAmmo != uMaxClip && uReserve != 0)
		{
			StartCoroutine("ContReload");
		}
	}
	if(gunequipped == 2)
	{
		StartCoroutine("ReloadSounds");
		if(!animator1.IsPlaying("Reload" + u2Name + "2"))
		{
			animator1.Play("Reload" + u2Name + "2");
		}
		yield WaitForSeconds(((animator1["Reload" + u2Name + "2"].length + 0.1) / u2rTime) / animator1["Reload" + u2Name + "2"].speed);
		u2Ammo += 1;
		u2Reserve -= 1;
		if(u2Ammo == u2MaxClip || u2Reserve == 0)
		{
			animator1.Play("Reload" + u2Name + "3");
			reloading = false;
		}
		if(u2Ammo != u2MaxClip && u2Reserve != 0)
		{
			StartCoroutine("ContReload");
		}
	}
}

function Melee (Item : int)
{
	for (var melee : MeleeItem in MeleeList)
	{
		if(melee.ID == Item)
		{
			if(equipped == "melee")
			{
				if(umType == 0)
				{
					animator1.PlayQueued("DequipOneHanded");
					equipped = "";
					yield WaitForSeconds(animator1["DequipOneHanded"].length);
				}
				if(umType == 1)
				{
					animator1.PlayQueued("DequipTwoHanded");
					equipped = "";
					yield WaitForSeconds(animator1["DequipTwoHanded"].length);
				}
			}
			uMID = melee.ID;
			uMTransform.gameObject.active = false;
			uMName = melee.Name;
			umType = melee.MType;
			uSpeedMultiplier = melee.SpeedMultiplier;
			uMTransform = melee.playert;
			uMDamage = melee.Damage;
			uMTexture = melee.texture;
			uMTransform = melee.transform;
			uMDistance = melee.distance;
			uMSound = melee.sound;
		}
	}
}

function HitPoints () {
	Points += 10;
	uiCarrier.SendMessage("GainPoints", 10, SendMessageOptions.DontRequireReceiver);
}

function RepairPoints () {
	Points += 10;
	uiCarrier.SendMessage("GainPoints", 10, SendMessageOptions.DontRequireReceiver);
}

function KillPoints (points : int) {
	Points += points;
	if(gamecontroller != null)
	{
		gamecontroller.SendMessage("Kill", SendMessageOptions.DontRequireReceiver);
	}
	uiCarrier.SendMessage("GainPoints", points, SendMessageOptions.DontRequireReceiver);
}

function Headshot(){
	if(gamecontroller != null)
	{
		gamecontroller.SendMessage("Headshot", SendMessageOptions.DontRequireReceiver);
	}
}

function Gun (Item : int)
{
	if(guns == 2)
	{
		animator1.Stop();
		StopCoroutine("Reload");
		StopCoroutine("ContReload");
		if(gunequipped == 1)
		{
			for (var gun : GunItem in FireArms)
			{
				if(gun.ID == Item)
				{
					if(uName != "" && gun.ID != uID)
					{
						if(equipped == "gun")
						{
							animator1.PlayQueued("Dequip" + uName);
							
						}
					}
					uID = gun.ID;
					uName = gun.Name;
					uDamage = gun.Damage;
					uAmmo = gun.Ammo;
					uMaxClip = gun.Ammo;
					uReserve = gun.Reserve;
					uReserveMax = gun.ReserveMax;
					uRPM = gun.RPM;
					intendedPellets = gun.Pellets;
					uPellets = intendedPellets;
					uAccuracy = gun.Accuracy;
					uIsAutomatic = gun.IsAutomatic;
					uSingleReload = gun.SingleReload;
					uAudio = gun.audio;
					uAimReduce = gun.aimReduce;
					uFovZoom = gun.fovZoom;
					uScoped = gun.scoped;
					uRSet = gun.reloadSet;
					uRTime = gun.rTime;
					uSPos = gun.sPos;
					uSRot = gun.sRot;
					if(equipped == "gun")
					{
						animator1.PlayQueued("Equip" + uName);
						equipped = "gun";
						timer = (0 - 60.0 / uRPM - (animator1["Equip" + uName].length + animator1["Dequip" + uName].length));
					}
					animator3["Aim" + uName].layer = 1;
				}
			}
		}
		if(gunequipped == 2)
		{
			for (var gun : GunItem in FireArms)
			{
				if(gun.ID == Item)
				{
					if(u2Name != "" && gun.ID != u2ID)
					{
						if(equipped == "gun")
						{
							animator1.PlayQueued("Dequip" + u2Name);
						}
					}
					u2ID = gun.ID;
					u2Name = gun.Name;
					u2Damage = gun.Damage;
					u2Ammo = gun.Ammo;
					u2MaxClip = gun.Ammo;
					u2Reserve = gun.Reserve;
					u2ReserveMax = gun.ReserveMax;
					u2RPM = gun.RPM;
					intendedPellets2 = gun.Pellets;
					u2Pellets = intendedPellets2;
					u2Accuracy = gun.Accuracy;
					u2IsAutomatic = gun.IsAutomatic;
					u2SingleReload = gun.SingleReload;
					u2Audio = gun.audio;
					u2AimReduce = gun.aimReduce;
					u2fovZoom = gun.fovZoom;
					u2scoped = gun.scoped;
					u2rSet = gun.reloadSet;
					u2rTime = gun.rTime;
					u2SPos = gun.sPos;
					u2SRot = gun.sRot;
					if(equipped == "gun")
					{
						animator1.PlayQueued("Equip" + u2Name);
						equipped = "gun";
						timer = (0 - 60.0 / u2RPM - (animator1["Equip" + u2Name].length + animator1["Dequip" + u2Name].length));
					}
					animator3["Aim" + u2Name].layer = 1;
				}
			}
		}
	}
	if(guns == 1)
	{
		for (var gun : GunItem in FireArms)
		{
			if(gun.ID == Item)
			{
				guns = 2;
				u2ID = gun.ID;
				u2Name = gun.Name;
				u2Damage = gun.Damage;
				u2Ammo = gun.Ammo;
				u2MaxClip = gun.Ammo;
				u2Reserve = gun.Reserve;
				u2ReserveMax = gun.ReserveMax;
				u2RPM = gun.RPM;
				intendedPellets2 = gun.Pellets;
				u2Pellets = intendedPellets2;
				u2Accuracy = gun.Accuracy;
				u2IsAutomatic = gun.IsAutomatic;
				u2SingleReload = gun.SingleReload;
				u2Audio = gun.audio;
				u2AimReduce = gun.aimReduce;
				u2fovZoom = gun.fovZoom;
				u2scoped = gun.scoped;
				u2rSet = gun.reloadSet;
				u2rTime = gun.rTime;
				u2SPos = gun.sPos;
				u2SRot = gun.sRot;
			}
		}
	}
	buyprice = 0;
	spinnerhost.GetComponent.<SpinnerHostScript>().weapon1 = uID;
	spinnerhost.GetComponent.<SpinnerHostScript>().weapon2 = u2ID;
}

function SwingMelee () {	
	if(umType == 0)
	{
		animator1["SwingOneHanded"].speed = uSpeedMultiplier * (meleeSpeedMulti * statusEffectMulti); 
		timer = (0 - animator1["SwingOneHanded"].length);
		animator1.Play("SwingOneHanded");
		yield WaitForSeconds(animator1["SwingOneHanded"].length / 2);
		var hit : RaycastHit;
		Physics.Raycast (aimer.position, transform.TransformDirection (Vector3.forward), hit, 500, layerMask);
		Distance = hit.distance;
		if(Distance <= uMDistance && hit != null)
		{
			gunAudioSource.clip = uMSound;
			gunAudioSource.Play();
			//var spark = Instantiate(shot, hit.point, shot.rotation);
			//spark.gameObject.layer = 11;
			hit.transform.SendMessage("Melee", uMDamage, SendMessageOptions.DontRequireReceiver);
		}
	}
	if(umType == 1)
	{
		animator1["SwingTwoHanded"].speed = uSpeedMultiplier * (meleeSpeedMulti * statusEffectMulti); 
		timer = (0 - animator1["SwingTwoHanded"].length);
		animator1.Play("SwingTwoHanded");
		yield WaitForSeconds(animator1["SwingTwoHanded"].length / 2);
		var hit2 : RaycastHit;
		Physics.Raycast (aimer.position, transform.TransformDirection (Vector3.forward), hit2, 500, layerMask);
		Distance = hit2.distance;
		if(Distance <= uMDistance && hit2 != null)
		{
			gunAudioSource.clip = uMSound;
			gunAudioSource.Play();
			//var spark2 = Instantiate(shot, hit2.point, shot.rotation);
			//spark2.gameObject.layer = 11;
			hit2.transform.SendMessage("Melee", uMDamage, SendMessageOptions.DontRequireReceiver);
		}
	}
}

function BuyGun (price : int)
{
	buyprice = price;
}

function BuyPerk (price : int)
{
	if(PerkList.Count != 4)
	{
		buyprice = price;
	}
	else
	{
		buyprice = 0;
	}
}

function BuyFrom (purchase : Transform)
{
	if(Points >= buyprice)
	{
		uiCarrier.SendMessage("BoughtItem", buyprice, SendMessageOptions.DontRequireReceiver);
		Points -= buyprice;
		purchase.SendMessage("Buy", SendMessageOptions.DontRequireReceiver);
	}
}

function Explode (damage : int)
{
	//Debug.Log("Player explodededed");
	Health -= damage / 10;
	healthcooldowntimer = 0;
}

function GunBuying (type : int){
	if(guns == 2)
	{
		if(gunequipped == 1)
		{
			for (var gun : GunItem in FireArms)
			{
				if(gun.ID == uID && uReserve != gun.ReserveMax)
				{
					buyprice = buyprice / 2;
					if(Points >= buyprice){
						uReserve = gun.ReserveMax;
						Points -= buyprice;
						uiCarrier.SendMessage("BoughtItem", buyprice, SendMessageOptions.DontRequireReceiver);
					}
				}
				else if(gun.ID == type && type != uID)
				{
					if(Points >= buyprice){
						uiCarrier.SendMessage("BoughtItem", buyprice, SendMessageOptions.DontRequireReceiver);
						Points -= buyprice;
						transform.SendMessage("Gun", type, SendMessageOptions.DontRequireReceiver);
					}
				}
			}
		}
		if(gunequipped == 2)
		{
			for (var gun : GunItem in FireArms)
			{
				if(gun.ID == u2ID && u2Reserve != gun.ReserveMax)
				{
					buyprice = buyprice / 2;
					if(Points >= buyprice)
					{
						u2Reserve = gun.ReserveMax;
						Points -= buyprice;
						uiCarrier.SendMessage("BoughtItem", buyprice, SendMessageOptions.DontRequireReceiver);
					}
				}
				else if(gun.ID == type && type != u2ID)
				{
					if(Points >= buyprice)
					{
						uiCarrier.SendMessage("BoughtItem", buyprice, SendMessageOptions.DontRequireReceiver);
						Points -= buyprice;
						transform.SendMessage("Gun", type, SendMessageOptions.DontRequireReceiver);
					}
				}
			}
		}
	}
	else if(guns == 1)
	{
		if(Points >= buyprice)
		{
			uiCarrier.SendMessage("BoughtItem", buyprice, SendMessageOptions.DontRequireReceiver);
			Points -= buyprice;
			transform.SendMessage("Gun", type, SendMessageOptions.DontRequireReceiver);
		}
	}
}

function PerkColour (content : Color)
{
	PerkSyringe.gameObject.active = true;
	PerkSyringe.SendMessage("ChangeColour", content, SendMessageOptions.DontRequireReceiver);
}

function Perk (Type : int)
{
	if(gamecontroller != null)
	{
		gamecontroller.SendMessage("Perk", SendMessageOptions.DontRequireReceiver);
	}
	transform.SendMessage("DisableTemporarily", SendMessageOptions.DontRequireReceiver);
	var prevequip : String;
	if(equipped == "grenade")
	{
		animator1.PlayQueued("Dequip" + gName);
		prevequip = "grenade";
		yield WaitForSeconds(animator1["Dequip" + gName].length);
	}
	if(equipped == "gun")
	{
		if(gunequipped == 1)
		{
			animator1.PlayQueued("Dequip" + uName);
			
			prevequip = "gun";
			timer = 0 - animator1["Dequip" + uName + ""].length;
			yield WaitForSeconds(animator1["Dequip" + uName + ""].length);
		}
		else if(gunequipped == 2)
		{
			animator1.PlayQueued("Dequip" + u2Name);
			
			prevequip = "gun";
			timer = 0 - animator1["Dequip" + u2Name + ""].length;
			yield WaitForSeconds(animator1["Dequip" + u2Name].length);
		}
	}
	if(equipped == "Slot4")
	{
		animator1.PlayQueued("Dequip" + slot4Name);
		prevequip = "Slot4";
		timer = 0 - animator1["Dequip" + slot4Name + ""].length;
		yield WaitForSeconds(animator1["Dequip" + slot4Name].length);
	}
	if(equipped == "Slot5")
	{
		animator1.PlayQueued("Dequip" + slot5name);
		prevequip = "Slot5";
		timer = 0 - animator1["Dequip" + slot5name + ""].length;
		yield WaitForSeconds(animator1["Dequip" + slot5name].length);
	}
	if(equipped == "melee")
	{
		if(umType == 0)
		{
			animator1.PlayQueued("DequipOneHanded");
			timer = 0 - animator1["DequipOneHanded"].length;
			yield WaitForSeconds(animator1["DequipOneHanded"].length);
		}
		if(umType == 1)
		{
			animator1.PlayQueued("DequipTwoHanded");
			timer = 0 - animator1["DequipTwoHanded"].length; //happy birthday leify spuds, love you lots and lots and lots and lots xxxx
			yield WaitForSeconds(animator1["DequipTwoHanded"].length);
		}
		prevequip = "melee";
	}
	animator1.PlayQueued("InjectSyringe");
	timer = 0 - animator1["InjectSyringe"].length;
	yield WaitForSeconds(animator1["InjectSyringe"].length);
	for(var i : PerkType in Perks)
	{
		if(i.ID == Type)
		{
			PerkList.Add(Type);
		}
	}
	if(prevequip == "grenade")
	{
		animator1.PlayQueued("Equip" + gName);
		equipped = "grenade";
		timer = 0 - animator1["Equip" + gName].length;	
	}
	if(prevequip == "gun")
	{
		if(gunequipped == 1)
		{
			animator1.PlayQueued("Equip" + uName);
			equipped = "gun";
			timer = 0 - animator1["Equip" + uName + ""].length;
		}
		if(gunequipped == 2)
		{
			animator1.PlayQueued("Equip" + u2Name);
			equipped = "gun";
			timer = 0 - animator1["Equip" + u2Name].length;
		}
	}
	if(prevequip == "melee")
	{
		if(umType == 0)
		{
			animator1.PlayQueued("EquipOneHanded");
			timer = 0 - animator1["EquipOneHanded"].length;
		}
		if(umType == 1)
		{
			animator1.PlayQueued("EquipTwoHanded");
			timer = 0 - animator1["EquipTwoHanded"].length;
		}
		equipped = "melee";
	}
	if(prevequip == "Slot4")
	{
		animator1.PlayQueued("Equip" + slot4Name);
		timer = 0 - animator1["Equip" + slot4Name].length;
	}
	if(prevequip == "Slot5")
	{
		animator1.PlayQueued("Equip" + slot5name);
		timer = 0 - animator1["Equip" + slot5name].length;
	}
}

function Door () {
	if(gamecontroller != null)
	{
		gamecontroller.SendMessage("Door", SendMessageOptions.DontRequireReceiver);
	}
}

var style : GUIStyle;
var style2 : GUIStyle;
var style3 : GUIStyle;
var style4 : GUIStyle;
var adjusterx : float;
var adjustery : float;

function Slot4 (id : int) {
	for(var i : Slot4Gun in slot4Weapons)
	{
		if(i.ID == id)
		{
			slot4ID = id;
			slot4Name = i.name;
			slot4Ammo = i.ammo;
			slot4MaxAmmo = i.ammo;
			slot4AmmoConsume = i.ammoconsumption;
			slot4ChargeTime = i.chargetime;
			slot4Types = i.types;
			slot4Projectiles = i.projectiles;
		}
	}
}

function PlayerHit () {
	if(invulnerable == false)
	{
		Health -= 55 / DamageResist;
		healthtimer = -1;
		if(Health < 0)
		{
			Health = 0;
		}
		healthcooldowntimer = 0;
	}
}

function FireGun () {
	firing = true;
	if(gunequipped == 1)
	{
		gunAudioSource.clip = uAudio;
	}
	if(gunequipped == 2)
	{
		gunAudioSource.clip = u2Audio;
	}
	if(gunequipped == 1)
	{
		if(!animator1.IsPlaying("Reload" + uName) && !animator1.IsPlaying("Reload" + uName + "2") && !animator1.IsPlaying("Reload" + uName + "3"))
		{
			animator1.Stop("Fire" + uName);
			gunAudioSource.Play();
			animator1.Play("Fire" + uName);
			uAmmo -= 1;
			var iP : int;
			if(gunequipped == 1)
			{
				iP = uPellets;
			}
			if(gunequipped == 2)
			{
				iP = u2Pellets;
			}
			if(!uIsAutomatic)
			{
				fired = true;
			}
			for(var i : int = 0; i < iP; i++)
			{
				aimer.localRotation.x = Random.Range(-realaccuracy, realaccuracy);
				aimer.localRotation.y = Random.Range(-realaccuracy, realaccuracy);
				//var clone = Instantiate(bulletProj, transform.position, aimer.rotation);
				//clone.gameObject.active = true;
				//clone.SendMessage("Damager", uDamage * damageMulti * statusEffectMulti, SendMessageOptions.DontRequireReceiver);
				//clone.velocity = aimer.transform.TransformDirection(Vector3.forward) * 50;
				var hit : RaycastHit;
				var hits : int = 1;
				if(intendedPellets > 1){
					hits = 2;
				}
				var rotate : Quaternion = aimer.rotation;
				var lasthit : Transform = null;
				var pos : Vector3 = aimer.position;
				while(hits != 3)
				{
					if(Physics.Raycast (pos, rotate * Vector3.forward, hit, 500, layerMask))
					{
						if(lasthit != null){
							lasthit.gameObject.layer = 15;
						}
						//Debug.Log("I've hit " + hit.transform.name);
						if(hit.transform.tag == "Enemy")
						{
							lasthit = hit.transform;
							pos = lasthit.position;
							lasthit.gameObject.layer = 16;
							//Debug.Log("Blood");
							var bClone = Instantiate(bloodObj, hit.transform.position, transform.rotation);
							bClone.gameObject.active = true;
							//hit.transform.SendMessage("Shot", uDamage * damageMulti * statusEffectMulti, SendMessageOptions.DontRequireReceiver);
							hit.transform.GetComponent.<BodyPartScript>().Shot((uDamage * damageMulti * statusEffectMulti) / (1 + (hits / 5)));
							hits += 1;
						}
						else if(hit.transform.tag == "Target")
						{
							lasthit = hit.transform;
							pos = lasthit.position;
							lasthit.gameObject.layer = 16;
							//Debug.Log("Blood");
							var bClone3 = Instantiate(bloodObj, hit.transform.position, transform.rotation);
							bClone3.gameObject.active = true;
							//hit.transform.SendMessage("Shot", uDamage * damageMulti * statusEffectMulti, SendMessageOptions.DontRequireReceiver);
							hit.transform.GetComponent.<TargetScript>().Shot();
							hits += 1;
						}
						//var spark = Instantiate(shot, hit.point, shot.rotation);
						//spark.gameObject.layer = 11;
						else{
							hits = 3;
							if(lasthit != null)
							{
								lasthit.gameObject.layer = 15;
								lasthit = null;
							}
						}
					}
					else
					{
					}
				}
				if(lasthit != null){
					lasthit.gameObject.layer = 15;
				}
			}
			fireaccuracyinc += realaccuracy / 3;
			fireCool = 0;
			yield WaitForSeconds (60.0 / uRPM);
			firing = false;
		}
	}
	else if(gunequipped == 2)
	{
		if(!animator1.IsPlaying("Reload" + u2Name) && !animator1.IsPlaying("Reload" + u2Name + "2") && !animator1.IsPlaying("Reload" + u2Name + "3"))
		{
			animator1.Stop("Fire" + u2Name);
			gunAudioSource.Play();
			animator1.Play("Fire" + u2Name);
			u2Ammo -= 1;
			var iP2 : int;
			if(gunequipped == 1)
			{
				iP2 = uPellets;
			}
			if(gunequipped == 2)
			{
				iP2 = u2Pellets;
			}
			if(!u2IsAutomatic)
			{
				fired = true;
			}
			var hitted2 : boolean = false;
			for(var i2 : int = 0; i2 < iP2; i2++)
			{
				aimer.localRotation.x = Random.Range(-realaccuracy, realaccuracy);
				aimer.localRotation.y = Random.Range(-realaccuracy, realaccuracy);
				//var clone2 = Instantiate(bulletProj, transform.position, aimer.rotation);
				//clone2.rotation = aimer.localRotation;
				//clone2.gameObject.active = true;
				//clone2.SendMessage("Damager", uDamage * damageMulti * statusEffectMulti, SendMessageOptions.DontRequireReceiver);
				//clone2.velocity = aimer.transform.TransformDirection(Vector3.forward) * 50;
				var hit2 : RaycastHit;
				var rotate2 : Quaternion = aimer.rotation;
				var ip2 : int = 1;
				var lasthit2 : Transform;
				var pos2 : Vector3 = aimer.position;
				var hits2 : int = 0;
				if(intendedPellets2 > 1){
					hits2 = 2;
				}
				while(hits2 != 3)
				{
					if(Physics.Raycast (pos2, rotate2 * Vector3.forward, hit2, 500, layerMask))
					{
						if(lasthit2 != null){
							lasthit2.gameObject.layer = 15;
						}
						//Debug.Log("I've hit " + hit2.transform.name);
						if(hit2.transform.tag == "Enemy")
						{
							lasthit2 = hit2.transform;
							pos2 = lasthit2.position;
							lasthit2.gameObject.layer = 16;
							//Debug.Log("Blood");
							var bClone2 = Instantiate(bloodObj, hit2.transform.position, transform.rotation);
							bClone2.gameObject.active = true;
							hit2.transform.GetComponent.<BodyPartScript>().Shot((u2Damage * damageMulti * statusEffectMulti) / (1 + (hits2 / 5)));
						}
						else{
							hits2 = 3;
							if(lasthit2 != null){
								lasthit2.gameObject.layer = 15;
								lasthit2 = null;
							}
						}
					}
					else
					{

					}
				}
				if(lasthit2 != null){
					lasthit2.gameObject.layer = 15;
				}
			}
			fireaccuracyinc += realaccuracy / 3;
			fireCool = 0;
			yield WaitForSeconds (60.0 / u2RPM);
			firing = false;
		}
	}
	firing = false;
}

function NewRound(round : int){
	coolDown = 5;
	coolingDown = true;
	Round = round;
}

function Rounds(round : int){
	Round = round;
}