#pragma strict

// ---------- KEY ----------
// u = universal
// uM = universal (melee)

// ---------- MISC ----------


var dead : boolean = false;
var controller : Transform;
var textColor : GUIStyle;
private var coolingDown : boolean = false;
var roundTimer : float;
var coolDown : int = 5;
var layerMask : LayerMask;
var spawner : GameObject[];

var zedcount : int = 6;

var damageindicator : Texture2D;

var Points : int;

var safeArea : Texture2D;

var speed : float;

var equipped = "";
var flashlight : Transform;
var animator : Animation;
var animator2 : Animation;
var timer : float;
var aimer : Transform;
var gunAudioSource : AudioSource;
var musicAudioSource : AudioSource;
var playerController : Transform;

// ---------- PLAYER VARIABLES/CLASSES ----------

var Round : int;

var healthtimer : float;
var DamageResist : float;
var Health : int = 100;
var labelHeight = Screen.height - (Screen.height / 114);
var labelHeight2 = Screen.height / 29;
var labelWidth = 0 + (Screen.width / 80);
var labelWidth2 = Screen.width - (Screen.width / 8);
var screenHeight = Screen.height;
var screenWidth = Screen.width;

// ---------- PHONE VARIABLES/CLASSES ----------

var phoneEquipped : boolean = false;
var isPlaying : boolean = false;
var songID : int;
var songSelected : int;

var accuracyMulti : float;
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

var phoneAnimator : Animation;

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

var uMName : String;
var uMDamage : float;
var uSpeedMultiplier : float;
var umType : Type;
public enum Type{OneHanded = 0, TwoHanded = 1};
var Distance : float;
var uMDrop : Rigidbody;
var uMTexture : Texture2D;
var uMTransform : Transform;
var uMDistance : float;

public class MeleeItem
{
	var ID : int;
	var MType : Type;
	var Name : String;
	var Damage : float;
	var SpeedMultiplier : float;
	var dropr : Rigidbody;
	var playert : Transform;
	var texture : Texture2D;
	var transform : Transform;
	var distance : float;
}

var MeleeList : MeleeItem[];

// ---------- GUN VARIABLES/CLASSES ----------

var reloading : boolean = false;

var uName : String;
var uAmmo : int = 0;
var uMaxClip : int = 0;
var uReserve : int;
var uReserveMax : int;
var uDamage : float = 0;
var uTimer : float = 0;
var uPellets : int = 0;
var uAccuracy : float = 0;
var uIsAutomatic : boolean;
var uSingleReload : boolean;
var uAudio : AudioClip;
var uMuzzle : Transform;
var uDrop : Rigidbody;
var uTexture : Texture2D;

var shot : Transform;

public class GunItem
{
	var ID : int;
	var Name : String;
	var Ammo : int;
	var Damage : float;
	var Reserve : int;
	var ReserveMax : int;
	var Timer : float;
	var Pellets : int;
	var Accuracy : float;
	var IsAutomatic : boolean;
	var SingleReload : boolean;
	var dropr : Rigidbody;
	var muzzleflash : Transform;
	var audio : AudioClip;
	var texture : Texture2D;
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
	gameObject.active = false;
	gameObject.active = true;
	Round = 1;
	zedcount = 6;
	coolingDown = true;
	spawner = GameObject.FindGameObjectsWithTag("Spawner");
}

function Update () {
	if(coolingDown == true)
	{
		roundTimer += Time.deltaTime;
		textColor.normal.textColor.a += Time.deltaTime;
		if(roundTimer >= 1)
		{
			coolDown -= 1;
			roundTimer = 0;
			textColor.normal.textColor.a = 0;
		}
		if(coolDown == 0)
		{
			for(var i : GameObject in spawner)
			{
				i.SendMessage("NewRound", zedcount, SendMessageOptions.DontRequireReceiver);
			}
			coolingDown = false;
		}
	}
	if(zedcount == 0)
	{
		coolDown = 5;
		Round += 1;
		zedcount = 6 + (3 * Round);
		coolingDown = true;
	}
	healthtimer += Time.deltaTime;
	if(Health < 100 && Health > 0)
	{
		if(healthtimer >= 0.4)
		{
			Health += 1;
			healthtimer = 0;
		}
	}
	if(Health <= 0)
	{
		if(dead == false)
		{
			healthtimer = 0;
			textColor.normal.textColor.a = 0;
		}
		dead = true;
		Health = 0;
		controller.SendMessage("Dead", SendMessageOptions.DontRequireReceiver);
		animator.gameObject.active = false;
		
	}
	if(dead == true)
	{
		textColor.normal.textColor.a += Time.deltaTime;
	}
	labelHeight2 = Screen.height / 80;
	labelHeight = Screen.height - (Screen.height / 14);
	labelWidth = 0 + (Screen.width / 80);
	labelWidth2 = Screen.width - (Screen.width / 8);
	screenWidth = Screen.width;
	screenHeight = Screen.height;
	timer += Time.deltaTime;
	if(Input.GetKeyDown(KeyCode.P))
	{
		phoneEquipped = !phoneEquipped;
		if(phoneEquipped == true)
		{
			animator["EquipPhone"].layer = 1;
			animator.Play("EquipPhone");
		}
		if(phoneEquipped == false)
		{
			animator["DequipPhone"].layer = 1;
			animator.Play("DequipPhone");
		}
	}
	if(Input.GetKeyDown(KeyCode.Q))
	{
		if(phoneEquipped == true)
		{
			StartCoroutine("PickSong");
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
							playerController.SendMessage("SpeedUp", speedMulti);
						}
						if(song.Effect == 2)
						{
							damageMulti = song.EffectMulti;
						}
						if(song.Effect == 3)
						{
							if(uPellets == 1)
							{
								accuracyMulti = song.EffectMulti;
							}
						}
						if(song.Effect == 4)
						{
							meleeSpeedMulti = song.EffectMulti;
						}
						if(song.Effect2 == 1)
						{
							playerController.SendMessage("SpeedUp", speedMulti);
						}
						if(song.Effect2 == 2)
						{
							damageMulti = song.Effect2Multi;
						}
						if(song.Effect2 == 3)
						{
							if(uPellets == 1)
							{
								accuracyMulti = song.Effect2Multi;
							}
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
				gunAudioSource.volume = 1;
				playerController.SendMessage("SpeedDown");
			}
		}
	}
	if(!Input.GetButton("Horizontal") && !Input.GetButton("Vertical"))
	{
		animator2["PlayerMove"].speed = 0;
	}
	if(Input.GetButton("Horizontal") || Input.GetButton("Vertical") && !Input.GetKey(KeyCode.LeftShift))
	{
		animator2.CrossFade("PlayerMove");
		animator2["PlayerMove"].speed = 1;
	}
	if(Input.GetButton("Horizontal") || Input.GetButton("Vertical") && Input.GetKey(KeyCode.LeftShift))
	{
		animator2.CrossFade("PlayerMove");
		animator2["PlayerMove"].speed = 1.25;
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
    			animator.Play("Dequip" + uName);
    		}
    		equipped = "melee";
    		if(umType == 0)
    		{
    			uMTransform.gameObject.active = true;
    			animator.PlayQueued("EquipOneHanded");
    			timer -= (uTimer - animator["EquipOneHanded"].length);
    		}
    		if(umType == 1)
    		{
    			uMTransform.gameObject.active = true;
    			animator.PlayQueued("EquipTwoHanded");
    			timer -= (uTimer - animator["EquipTwoHanded"].length);
    		}
    	}
    }
    if(Input.GetKeyDown(KeyCode.Alpha2))
    {
    	if(uName != "" && equipped != "gun")
    	{
    		if(equipped == "melee" && umType == 0)
    		{
    			animator.PlayQueued("DequipOneHanded");
    		}
    		if(equipped == "melee" && umType == 1)
    		{
    			animator.PlayQueued("DequipTwoHanded");
    		}
    		equipped = "gun";
    		animator.PlayQueued("Equip" + uName);
    		timer -= (uTimer - animator["Equip" + uName].length);
    	}
    }
    var ahit : RaycastHit;
	if (Physics.Raycast (aimer.position, aimer.TransformDirection (Vector3.forward), ahit, Mathf.Infinity, layerMask))
	{
		Distance = ahit.distance;
		Debug.Log("I'm aiming at " + ahit.transform);
		if(Input.GetKeyDown(KeyCode.Mouse0))
    	{
	    	if(equipped == "gun" && uIsAutomatic == false && Health != 0)
	    	{
	    		if(uAmmo != 0 && timer >= uTimer)
	    		{
	    			timer = (0 - animator["Fire" + uName].length);
	    			animator.Stop("Fire" + uName);
	    			gunAudioSource.clip = uAudio;
		    		gunAudioSource.Play();
	    			animator.Play("Fire" + uName);
	    			uAmmo -= 1;
	    			for(var i : int = 0; i < uPellets; i++)
					{
						aimer.localRotation.x = Random.Range((-uAccuracy - accuracyMulti), (uAccuracy + accuracyMulti));
						aimer.localRotation.y = Random.Range((-uAccuracy - accuracyMulti), (uAccuracy + accuracyMulti));	
						var hit : RaycastHit;
						Physics.Raycast (aimer.position, aimer.TransformDirection (Vector3.forward), hit, Mathf.Infinity, layerMask);
						hit.transform.SendMessage("Shot", uDamage, SendMessageOptions.DontRequireReceiver);
						var gspark = Instantiate(shot, hit.point, shot.rotation);
						gspark.gameObject.layer = 11;
						Debug.Log("Shot " + hit.transform.name);
					}
	    		}
	    	}
	    	if(equipped == "melee" && Health != 0)
	    	{
	    		if(timer >= 0.1)
	    		{
	    			StartCoroutine("SwingMelee");
	    		}
	    	}
    	}
    	if(Input.GetKey(KeyCode.Mouse0))
	    	{
		    	if(equipped == "gun" && uIsAutomatic == true && Health != 0)
		    	{
		    		if(uAmmo != 0 && timer >= uTimer)
		    		{
		    			timer = (0 - animator["Fire" + uName].length);
		    			animator.Stop("Fire" + uName);
		    			gunAudioSource.clip = uAudio;
		    			gunAudioSource.Play();
		    			animator.Play("Fire" + uName);
		    			uAmmo -= 1;
		    			for(var ai : int = 0; ai < uPellets; ai++)
						{
							aimer.localRotation.x = Random.Range((-uAccuracy - accuracyMulti), (uAccuracy + accuracyMulti));
							aimer.localRotation.y = Random.Range((-uAccuracy - accuracyMulti), (uAccuracy + accuracyMulti));
							var hit2 : RaycastHit;
							Physics.Raycast (aimer.position, aimer.TransformDirection (Vector3.forward), hit);
							hit.transform.SendMessage("Shot", uDamage, SendMessageOptions.DontRequireReceiver);
							var gspark2 = Instantiate(shot, hit.point, shot.rotation);
							gspark2.gameObject.layer = 11;
							Debug.Log("Shot " + hit.transform.name);
						}
		    		}
		    	}
	   		}
	}
    if(Input.GetKeyDown(KeyCode.R))
    {
    	if(uSingleReload == false && uAmmo != uMaxClip && uReserve != 0)
    	{
    		uMuzzle.gameObject.active = false;
    		timer = (0 - animator["Reload" + uName].length);
    		animator.Play("Reload" + uName);
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
    	}
    	if(uSingleReload == true && uAmmo != uMaxClip && uReserve != 0)
    	{
    		if(reloading == false)
    		{
	    		reloading = true;
	    		animator.Play("Reload" + uName);
				timer = 0 - animator["Reload" + uName].length;
	    		StartCoroutine("Reload");
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
			phoneAnimator.PlayQueued("ChooseSong");
			musicAudioSource.clip = song.musicAudio;
			if(isPlaying == true)
			{
				isPlaying = false;
				gunAudioSource.volume = 1;
				playerController.SendMessage("SpeedDown");
			}
			yield WaitForSeconds(phoneAnimator["ChooseSong"].length);
			usS2Name.text = usS1Name.text;
			usS2Effect.text = usS1Effect.text;
			usS2Effect2.text = usS1Effect2.text;
		}
	}
}

function Reload () {
	animator.Play("Reload" + uName);
	timer = 0 - animator["Reload" + uName].length;
	yield WaitForSeconds(animator["Reload" + uName].length);
	animator.Play("Reload" + uName + "2");
	timer = 0 - animator["Reload" + uName + "2"].length;
	yield WaitForSeconds(animator["Reload" + uName + "2"].length + 0.1);
	uAmmo += 1;
	uReserve -= 1;
	if(uAmmo == uMaxClip || uReserve == 0)
	{
		animator.Play("Reload" + uName + "3");
		timer = 0 - animator["Reload" + uName + "3"].length;
		reloading = false;
	}
	if(uAmmo != uMaxClip && uReserve != 0)
	{
		StartCoroutine("ContReload");
	}
}

function ContReload () {
	animator.Play("Reload" + uName + "2");
	timer = 0 - animator["Reload" + uName + "2"].length;
	yield WaitForSeconds(animator["Reload" + uName + "2"].length + 0.1);
	uAmmo += 1;
	uReserve -= 1;
	if(uAmmo == uMaxClip || uReserve == 0)
	{
		animator.Play("Reload" + uName + "3");
		timer = 0 - animator["Reload" + uName + "3"].length;
		reloading = false;
	}
	if(uAmmo != uMaxClip && uReserve != 0)
	{
		StartCoroutine("ContReload");
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
					animator.PlayQueued("DequipOneHanded");
					equipped = "";
					yield WaitForSeconds(animator["DequipOneHanded"].length);
					uMTransform.gameObject.active = false;
				}
				if(umType == 1)
				{
					animator.PlayQueued("DequipTwoHanded");
					equipped = "";
					yield WaitForSeconds(animator["DequipTwoHanded"].length);
					uMTransform.gameObject.active = false;
				}
			}
			if(uMDrop != null)
			{
				var clone = Instantiate(uMDrop, gameObject.transform.position, gameObject.transform.rotation);
				clone.gameObject.active = true;
				clone.velocity = (Vector3.right * 10);
			}
			uMName = melee.Name;
			umType = melee.MType;
			uSpeedMultiplier = melee.SpeedMultiplier;
			uMTransform = melee.playert;
			uMDrop = melee.dropr;
			uMDamage = melee.Damage;
			uMTexture = melee.texture;
			uMTransform = melee.transform;
			uMDistance = melee.distance;
		}
	}
}

function HitPoints () {
	Points += 10;
}

function KillPoints (points : int) {
	Points += points;
}

function Gun (Item : int)
{
	for (var gun : GunItem in FireArms)
	{
		if(gun.Name == uName)
		{
			gun.Reserve = uReserve;
		}
	}
	for (var gun : GunItem in FireArms)
	{
		if(gun.ID == Item)
		{
			if(uName != "")
			{
				if(equipped == "gun")
				{
					animator.PlayQueued("Dequip" + uName);
					equipped = "";
				}
				var clone = Instantiate(uDrop, gameObject.transform.position, gameObject.transform.rotation);
				clone.gameObject.active = true;
				clone.velocity = (Vector3.right * 10);
				clone.SendMessage("AmmoCount", uAmmo, SendMessageOptions.DontRequireReceiver);
			}
			uName = gun.Name;
			uDamage = gun.Damage;
			uMaxClip = gun.Ammo;
			uReserve = gun.Reserve;
			uReserveMax = gun.ReserveMax;
			uTimer = gun.Timer;
			uPellets = gun.Pellets;
			uAccuracy = gun.Accuracy;
			uIsAutomatic = gun.IsAutomatic;
			uSingleReload = gun.SingleReload;
			uAudio = gun.audio;
			uMuzzle = gun.muzzleflash;
			uDrop = gun.dropr;
			uTexture = gun.texture;
		}
	}
}

function SwingMelee () {	
	if(umType == 0)
	{
		animator["SwingOneHanded"].speed = uSpeedMultiplier + meleeSpeedMulti; 
		timer = (0 - animator["SwingOneHanded"].length);
		animator.Play("SwingOneHanded");
		yield WaitForSeconds(animator["SwingOneHanded"].length / 2);
		var hit : RaycastHit;
		Physics.Raycast (aimer.position, transform.TransformDirection (Vector3.forward), hit, Mathf.Infinity, layerMask);
		Distance = hit.distance;
		if(Distance <= uMDistance && hit != null)
		{
			var spark = Instantiate(shot, hit.point, shot.rotation);
			spark.gameObject.layer = 11;
			hit.transform.SendMessage("Melee", uMDamage, SendMessageOptions.DontRequireReceiver);
		}
	}
	if(umType == 1)
	{
		animator["SwingTwoHanded1"].speed = uSpeedMultiplier + meleeSpeedMulti; 
		timer = (0 - animator["SwingTwoHanded1"].length);
		animator.Play("SwingTwoHanded1");
		yield WaitForSeconds(animator["SwingTwoHanded1"].length / 2);
		var hit2 : RaycastHit;
		Physics.Raycast (aimer.position, transform.TransformDirection (Vector3.forward), hit2, Mathf.Infinity, layerMask);
		Distance = hit2.distance;
		if(Distance <= uMDistance && hit2 != null)
		{
			var spark2 = Instantiate(shot, hit2.point, shot.rotation);
			spark2.gameObject.layer = 11;
			hit2.transform.SendMessage("Melee", uMDamage, SendMessageOptions.DontRequireReceiver);
		}
	}
}

var style : GUIStyle;
var style2 : GUIStyle;
var style3 : GUIStyle;
var style4 : GUIStyle;
var adjusterx : float;
var adjustery : float;

function OnGUI () {
	style.fontSize = 16 * (Screen.width / 570);
	style2.fontSize = 16 * (Screen.width / 570);
	style3.fontSize = 16 * (Screen.width / 570);
	style4.fontSize = 16 * (Screen.width / 570);
	textColor.fontSize = 16 * (Screen.width / 570);
 	GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), safeArea);
	GUI.DrawTexture(Rect(0 - (Health * 36), 0 - (Health * 36), (Screen.width + (Health * 72)), (Screen.height + (Health * 72))), damageindicator);
 	if(uMTexture != null)
	{
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), uMTexture);
	}
 	if(uTexture != null)
	{
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), uTexture);
	}
	if(dead == false)
	{
		GUI.Label (Rect (Screen.height / 2, Screen.height / 2 - 100, (Screen.width / 1.8125), (Screen.height / 19)), ("Wave " + Round + " Beginning In " + coolDown), textColor);
	}
	if(dead == true)
	{
		GUI.Label (Rect (Screen.height / 2, Screen.height / 2 - 100, (Screen.width / 1.8125), (Screen.height / 19)), "Game Over", textColor);
		GUI.Label (Rect (Screen.height / 2, Screen.height / 2 - 65, (Screen.width / 1.8125), (Screen.height / 19)), ("You Survived For " + Round + " Rounds"), textColor);
	}
	GUI.Label (Rect (0, 0, 100, 100), (Screen.width + "/" + Screen.height + "/" + style.fontSize));
	GUI.Label (Rect (labelWidth, labelHeight2, (Screen.width / 1.8125), (Screen.height / 19)), (Round + ""), style3);
	GUI.Label (Rect (labelWidth, labelHeight, (Screen.width / 1.8125), (Screen.height / 19)), (Health + ""), style);
	GUI.Label (Rect (labelWidth, (Screen.height / 2), (Screen.width / 1.8125), (Screen.height / 19)), (Points + ""), style4);
	GUI.Label (Rect (labelWidth2, labelHeight, (Screen.width / 1.8125), (Screen.height / 19)), (uAmmo + "/" + uReserve), style2);
}

function ZedDown () {
	zedcount -= 1;
}

function PlayerHit () {
	Health -= 55 / DamageResist;
	healthtimer = -1;
}

function CurrentAmmo (Ammo : int)
{
	uAmmo = Ammo;
}