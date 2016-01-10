#pragma strict

var swingTimer : float = 0;
var animator : Transform;
var animator2 : Transform;
var bulletHole : Rigidbody;

var meleeSpeed : float = 1.0;

var songSelected : int = 1;
var songPlaying : int = 1;
private var playingSong : boolean = false;
var songBar : Transform;

var equipped = "none";
var equipped2 = "none";
var meleeweapon = "none";
var meleeweaponset = "none";
var firearm = "none";

var barricadeh : Transform;
var barricader : Rigidbody;
var barricade : Transform;
var holocade : Transform;
var placedcade : Rigidbody;

var prototypeflash : Transform;
var prototypewait : float = 0;
var prototypeh : Transform;
var prototyper : Rigidbody;
var prototype : Transform;
var prototypecharge : float = 0.2;
var prototypemagazines : int = 0;
var prototypecharger : Transform;
var prototypemagcount : Transform;
var prototypelaser : Transform;
var prototypemagcount2 : Transform;
var prototypemagcount3 : Transform;
var prototypemagcount4 : Transform;
var prototypemagcount5 : Transform;
var prototypemagcount6 : Transform;
var prototypemagcount7 : Transform;
var prototypemagcount8 : Transform;
var prototypemagcount9 : Transform;
var prototypemagcount10 : Transform;
var prototypemagcount11 : Transform;
var prototypemagcount12 : Transform;
var prototypemagcount13 : Transform;
var prototypemagcount14 : Transform;
var prototypemagcount15 : Transform;
var prototypemagcount16 : Transform;

var Distance : float;
var MaxDistance = 4;

var meleet : Transform;

var bath : Transform;
var cbath : Transform;
var faxeh : Transform;
var gclubh : Transform;
var katanah : Transform;
var pipeh : Transform;
var sledgeh : Transform;
var sbath : Transform;
var shotgunh : Transform;

var songstop1 : Transform;
var songstop2 : Transform;
var songstop3 : Transform;
var songstop4 : Transform;

var pistoltext1 : TextMesh;
var pistoltext2 : TextMesh;
var pistolammo : int = 8;
var pistolreserve : int = 0;
var pistolh : Transform;
var pistolr : Rigidbody;
var pistol : Transform;

var rifletext1 : TextMesh;
var rifletext2 : TextMesh;
var rifleammo : int = 8;
var riflereserve : int = 0;
var rifleh : Transform;
var rifler : Rigidbody;
var rifle : Transform;
var raim : Transform;

var Controller : Transform;

var reloadTimer : float = 0;
var shotgunreloadspeed : float;

var maxSpread : float = 0.1;
var minSpread : float = -0.1;
var shotgun : Transform;
var shotguntext1 : TextMesh;
var shotguntext2 : TextMesh;
var shotgunammo : int = 6;
var shotgunreserve : int = 0;
var shotgunshotsfired : int = 0;
var saim : Transform;
var saim2 : Transform;
var saim3 : Transform;
var saim4 : Transform;
var saim5 : Transform;
var saim6 : Transform;
var saim7 : Transform;
var saim8 : Transform;


var bat : Transform;
var cbat : Transform;
var faxe : Transform;
var gclub : Transform;
var katana : Transform;
var pipe : Transform;
var sledge : Transform;
var sbat : Transform;
var shotgunt : Transform;

var batr : Rigidbody;
var cbatr : Rigidbody;
var faxer : Rigidbody;
var gclubr : Rigidbody;
var katanar : Rigidbody;
var piper : Rigidbody;
var sledger : Rigidbody;
var sbatr : Rigidbody;
var shotgunr : Rigidbody;

function Update () {
	animator.GetComponent.<Animation>()["Reload Shotgun2"].speed = 2;
	swingTimer += Time.deltaTime;
	prototypewait += Time.deltaTime;
	reloadTimer += Time.deltaTime;
	pistoltext1.text = pistolammo + "/8";
	shotguntext1.text = shotgunammo + "/6";
	rifletext1.text = rifleammo + "/8";
	prototypecharger.localScale = new Vector3(0.0006245889, prototypecharge, 0.02243537);
	if(prototypecharge < 0)
	{
		prototypecharge = 0;
	}
	if(prototypecharge > 16)
	{
		prototypemagazines = 16;
	}
	if(prototypemagazines == 0)
	{
		prototypemagcount.gameObject.active = false;
		prototypemagcount2.gameObject.active = false;
		prototypemagcount3.gameObject.active = false;
		prototypemagcount4.gameObject.active = false;
		prototypemagcount5.gameObject.active = false;
		prototypemagcount6.gameObject.active = false;
		prototypemagcount7.gameObject.active = false;
		prototypemagcount8.gameObject.active = false;
		prototypemagcount9.gameObject.active = false;
		prototypemagcount10.gameObject.active = false;
		prototypemagcount11.gameObject.active = false;
		prototypemagcount12.gameObject.active = false;
		prototypemagcount13.gameObject.active = false;
		prototypemagcount14.gameObject.active = false;
		prototypemagcount15.gameObject.active = false;
		prototypemagcount16.gameObject.active = false;
	}
	if(prototypemagazines == 1)
	{
		prototypemagcount.gameObject.active = true;
		prototypemagcount2.gameObject.active = false;
		prototypemagcount3.gameObject.active = false;
		prototypemagcount4.gameObject.active = false;
		prototypemagcount5.gameObject.active = false;
		prototypemagcount6.gameObject.active = false;
		prototypemagcount7.gameObject.active = false;
		prototypemagcount8.gameObject.active = false;
		prototypemagcount9.gameObject.active = false;
		prototypemagcount10.gameObject.active = false;
		prototypemagcount11.gameObject.active = false;
		prototypemagcount12.gameObject.active = false;
		prototypemagcount13.gameObject.active = false;
		prototypemagcount14.gameObject.active = false;
		prototypemagcount15.gameObject.active = false;
		prototypemagcount16.gameObject.active = false;
	}
	if(prototypemagazines == 2)
	{
		prototypemagcount.gameObject.active = true;
		prototypemagcount2.gameObject.active = true;
		prototypemagcount3.gameObject.active = false;
		prototypemagcount4.gameObject.active = false;
		prototypemagcount5.gameObject.active = false;
		prototypemagcount6.gameObject.active = false;
		prototypemagcount7.gameObject.active = false;
		prototypemagcount8.gameObject.active = false;
		prototypemagcount9.gameObject.active = false;
		prototypemagcount10.gameObject.active = false;
		prototypemagcount11.gameObject.active = false;
		prototypemagcount12.gameObject.active = false;
		prototypemagcount13.gameObject.active = false;
		prototypemagcount14.gameObject.active = false;
		prototypemagcount15.gameObject.active = false;
		prototypemagcount16.gameObject.active = false;
	}
	if(prototypemagazines == 3)
	{
		prototypemagcount.gameObject.active = true;
		prototypemagcount2.gameObject.active = true;
		prototypemagcount3.gameObject.active = true;
		prototypemagcount4.gameObject.active = false;
		prototypemagcount5.gameObject.active = false;
		prototypemagcount6.gameObject.active = false;
		prototypemagcount7.gameObject.active = false;
		prototypemagcount8.gameObject.active = false;
		prototypemagcount9.gameObject.active = false;
		prototypemagcount10.gameObject.active = false;
		prototypemagcount11.gameObject.active = false;
		prototypemagcount12.gameObject.active = false;
		prototypemagcount13.gameObject.active = false;
		prototypemagcount14.gameObject.active = false;
		prototypemagcount15.gameObject.active = false;
		prototypemagcount16.gameObject.active = false;
	}
	if(prototypemagazines == 4)
	{
		prototypemagcount.gameObject.active = true;
		prototypemagcount2.gameObject.active = true;
		prototypemagcount3.gameObject.active = true;
		prototypemagcount4.gameObject.active = true;
		prototypemagcount5.gameObject.active = false;
		prototypemagcount6.gameObject.active = false;
		prototypemagcount7.gameObject.active = false;
		prototypemagcount8.gameObject.active = false;
		prototypemagcount9.gameObject.active = false;
		prototypemagcount10.gameObject.active = false;
		prototypemagcount11.gameObject.active = false;
		prototypemagcount12.gameObject.active = false;
		prototypemagcount13.gameObject.active = false;
		prototypemagcount14.gameObject.active = false;
		prototypemagcount15.gameObject.active = false;
		prototypemagcount16.gameObject.active = false;
	}
	if(prototypemagazines == 5)
	{
		prototypemagcount.gameObject.active = true;
		prototypemagcount2.gameObject.active = true;
		prototypemagcount3.gameObject.active = true;
		prototypemagcount4.gameObject.active = true;
		prototypemagcount5.gameObject.active = true;
		prototypemagcount6.gameObject.active = false;
		prototypemagcount7.gameObject.active = false;
		prototypemagcount8.gameObject.active = false;
		prototypemagcount9.gameObject.active = false;
		prototypemagcount10.gameObject.active = false;
		prototypemagcount11.gameObject.active = false;
		prototypemagcount12.gameObject.active = false;
		prototypemagcount13.gameObject.active = false;
		prototypemagcount14.gameObject.active = false;
		prototypemagcount15.gameObject.active = false;
		prototypemagcount16.gameObject.active = false;
	}
	if(prototypemagazines == 6)
	{
		prototypemagcount.gameObject.active = true;
		prototypemagcount2.gameObject.active = true;
		prototypemagcount3.gameObject.active = true;
		prototypemagcount4.gameObject.active = true;
		prototypemagcount5.gameObject.active = true;
		prototypemagcount6.gameObject.active = true;
		prototypemagcount7.gameObject.active = false;
		prototypemagcount8.gameObject.active = false;
		prototypemagcount9.gameObject.active = false;
		prototypemagcount10.gameObject.active = false;
		prototypemagcount11.gameObject.active = false;
		prototypemagcount12.gameObject.active = false;
		prototypemagcount13.gameObject.active = false;
		prototypemagcount14.gameObject.active = false;
		prototypemagcount15.gameObject.active = false;
		prototypemagcount16.gameObject.active = false;
	}
	if(prototypemagazines == 7)
	{
		prototypemagcount.gameObject.active = true;
		prototypemagcount2.gameObject.active = true;
		prototypemagcount3.gameObject.active = true;
		prototypemagcount4.gameObject.active = true;
		prototypemagcount5.gameObject.active = true;
		prototypemagcount6.gameObject.active = true;
		prototypemagcount7.gameObject.active = true;
		prototypemagcount8.gameObject.active = false;
		prototypemagcount9.gameObject.active = false;
		prototypemagcount10.gameObject.active = false;
		prototypemagcount11.gameObject.active = false;
		prototypemagcount12.gameObject.active = false;
		prototypemagcount13.gameObject.active = false;
		prototypemagcount14.gameObject.active = false;
		prototypemagcount15.gameObject.active = false;
		prototypemagcount16.gameObject.active = false;
	}
	if(prototypemagazines == 8)
	{
		prototypemagcount.gameObject.active = true;
		prototypemagcount2.gameObject.active = true;
		prototypemagcount3.gameObject.active = true;
		prototypemagcount4.gameObject.active = true;
		prototypemagcount5.gameObject.active = true;
		prototypemagcount6.gameObject.active = true;
		prototypemagcount7.gameObject.active = true;
		prototypemagcount8.gameObject.active = true;
		prototypemagcount9.gameObject.active = false;
		prototypemagcount10.gameObject.active = false;
		prototypemagcount11.gameObject.active = false;
		prototypemagcount12.gameObject.active = false;
		prototypemagcount13.gameObject.active = false;
		prototypemagcount14.gameObject.active = false;
		prototypemagcount15.gameObject.active = false;
		prototypemagcount16.gameObject.active = false;
	}
	if(prototypemagazines == 9)
	{
		prototypemagcount.gameObject.active = true;
		prototypemagcount2.gameObject.active = true;
		prototypemagcount3.gameObject.active = true;
		prototypemagcount4.gameObject.active = true;
		prototypemagcount5.gameObject.active = true;
		prototypemagcount6.gameObject.active = true;
		prototypemagcount7.gameObject.active = true;
		prototypemagcount8.gameObject.active = true;
		prototypemagcount9.gameObject.active = true;
		prototypemagcount10.gameObject.active = false;
		prototypemagcount11.gameObject.active = false;
		prototypemagcount12.gameObject.active = false;
		prototypemagcount13.gameObject.active = false;
		prototypemagcount14.gameObject.active = false;
		prototypemagcount15.gameObject.active = false;
		prototypemagcount16.gameObject.active = false;
	}
	if(prototypemagazines == 10)
	{
		prototypemagcount.gameObject.active = true;
		prototypemagcount2.gameObject.active = true;
		prototypemagcount3.gameObject.active = true;
		prototypemagcount4.gameObject.active = true;
		prototypemagcount5.gameObject.active = true;
		prototypemagcount6.gameObject.active = true;
		prototypemagcount7.gameObject.active = true;
		prototypemagcount8.gameObject.active = true;
		prototypemagcount9.gameObject.active = true;
		prototypemagcount10.gameObject.active = true;
		prototypemagcount11.gameObject.active = false;
		prototypemagcount12.gameObject.active = false;
		prototypemagcount13.gameObject.active = false;
		prototypemagcount14.gameObject.active = false;
		prototypemagcount15.gameObject.active = false;
		prototypemagcount16.gameObject.active = false;
	}
	if(prototypemagazines == 11)
	{
		prototypemagcount.gameObject.active = true;
		prototypemagcount2.gameObject.active = true;
		prototypemagcount3.gameObject.active = true;
		prototypemagcount4.gameObject.active = true;
		prototypemagcount5.gameObject.active = true;
		prototypemagcount6.gameObject.active = true;
		prototypemagcount7.gameObject.active = true;
		prototypemagcount8.gameObject.active = true;
		prototypemagcount9.gameObject.active = true;
		prototypemagcount10.gameObject.active = true;
		prototypemagcount11.gameObject.active = true;
		prototypemagcount12.gameObject.active = false;
		prototypemagcount13.gameObject.active = false;
		prototypemagcount14.gameObject.active = false;
		prototypemagcount15.gameObject.active = false;
		prototypemagcount16.gameObject.active = false;
	}
	if(prototypemagazines == 12)
	{
		prototypemagcount.gameObject.active = true;
		prototypemagcount2.gameObject.active = true;
		prototypemagcount3.gameObject.active = true;
		prototypemagcount4.gameObject.active = true;
		prototypemagcount5.gameObject.active = true;
		prototypemagcount6.gameObject.active = true;
		prototypemagcount7.gameObject.active = true;
		prototypemagcount8.gameObject.active = true;
		prototypemagcount9.gameObject.active = true;
		prototypemagcount10.gameObject.active = true;
		prototypemagcount11.gameObject.active = true;
		prototypemagcount12.gameObject.active = true;
		prototypemagcount13.gameObject.active = false;
		prototypemagcount14.gameObject.active = false;
		prototypemagcount15.gameObject.active = false;
		prototypemagcount16.gameObject.active = false;
	}
	if(prototypemagazines == 13)
	{
		prototypemagcount.gameObject.active = true;
		prototypemagcount2.gameObject.active = true;
		prototypemagcount3.gameObject.active = true;
		prototypemagcount4.gameObject.active = true;
		prototypemagcount5.gameObject.active = true;
		prototypemagcount6.gameObject.active = true;
		prototypemagcount7.gameObject.active = true;
		prototypemagcount8.gameObject.active = true;
		prototypemagcount9.gameObject.active = true;
		prototypemagcount10.gameObject.active = true;
		prototypemagcount11.gameObject.active = true;
		prototypemagcount12.gameObject.active = true;
		prototypemagcount13.gameObject.active = true;
		prototypemagcount14.gameObject.active = false;
		prototypemagcount15.gameObject.active = false;
		prototypemagcount16.gameObject.active = false;
	}
	if(prototypemagazines == 14)
	{
		prototypemagcount.gameObject.active = true;
		prototypemagcount2.gameObject.active = true;
		prototypemagcount3.gameObject.active = true;
		prototypemagcount4.gameObject.active = true;
		prototypemagcount5.gameObject.active = true;
		prototypemagcount6.gameObject.active = true;
		prototypemagcount7.gameObject.active = true;
		prototypemagcount8.gameObject.active = true;
		prototypemagcount9.gameObject.active = true;
		prototypemagcount10.gameObject.active = true;
		prototypemagcount11.gameObject.active = true;
		prototypemagcount12.gameObject.active = true;
		prototypemagcount13.gameObject.active = true;
		prototypemagcount14.gameObject.active = true;
		prototypemagcount15.gameObject.active = false;
		prototypemagcount16.gameObject.active = false;
	}
	if(prototypemagazines == 15)
	{
		prototypemagcount.gameObject.active = true;
		prototypemagcount2.gameObject.active = true;
		prototypemagcount3.gameObject.active = true;
		prototypemagcount4.gameObject.active = true;
		prototypemagcount5.gameObject.active = true;
		prototypemagcount6.gameObject.active = true;
		prototypemagcount7.gameObject.active = true;
		prototypemagcount8.gameObject.active = true;
		prototypemagcount9.gameObject.active = true;
		prototypemagcount10.gameObject.active = true;
		prototypemagcount11.gameObject.active = true;
		prototypemagcount12.gameObject.active = true;
		prototypemagcount13.gameObject.active = true;
		prototypemagcount14.gameObject.active = true;
		prototypemagcount15.gameObject.active = true;
		prototypemagcount16.gameObject.active = false;
	}
	if(prototypemagazines == 16)
	{
		prototypemagcount.gameObject.active = true;
		prototypemagcount2.gameObject.active = true;
		prototypemagcount3.gameObject.active = true;
		prototypemagcount4.gameObject.active = true;
		prototypemagcount5.gameObject.active = true;
		prototypemagcount6.gameObject.active = true;
		prototypemagcount7.gameObject.active = true;
		prototypemagcount8.gameObject.active = true;
		prototypemagcount9.gameObject.active = true;
		prototypemagcount10.gameObject.active = true;
		prototypemagcount11.gameObject.active = true;
		prototypemagcount12.gameObject.active = true;
		prototypemagcount13.gameObject.active = true;
		prototypemagcount14.gameObject.active = true;
		prototypemagcount15.gameObject.active = true;
		prototypemagcount16.gameObject.active = true;
	}
	if(playingSong == true)
	{
		if(songPlaying == "2")
		{
			meleeSpeed = 1.35;
		}
		if(songPlaying == "3")
		{
			meleeSpeed = 1.15;
			Controller.SendMessage("MoveFast", SendMessageOptions.DontRequireReceiver);
		}
		if(songPlaying == "4")
		{
			meleeSpeed = 1.15;
			Controller.SendMessage("MoveFaster", SendMessageOptions.DontRequireReceiver);
		}
	}
	if(pistolreserve > 120)
	{
		pistolreserve = 120;
	}
	if(pistolreserve < 10)
	{
		pistoltext2.text = "00" + pistolreserve;
	}
	if(pistolreserve < 100 && pistolreserve >= 10)
	{
		pistoltext2.text = "0" + pistolreserve;
	}
	if(pistolreserve > 100)
	{
		pistoltext2.text = "" + pistolreserve;
	}
	if(shotgunreserve > 90)
	{
		shotgunreserve = 90;
	}
	if(shotgunreserve < 10)
	{
		shotguntext2.text = "0" + shotgunreserve;
	}
	if(shotgunreserve < 90 && shotgunreserve >= 10)
	{
		shotguntext2.text = "" + shotgunreserve;
	}
	if(riflereserve < 10)
	{
		rifletext2.text = "0" + riflereserve;
	}
	if(riflereserve >= 10)
	{
		rifletext2.text = "" + riflereserve;
	}
	if(riflereserve > 96)
	{
		riflereserve = 96;
	}
	if(equipped == "pistol" || equipped == "shotgun" || equipped == "rifle" || equipped == "prototype")
	{
		if(playingSong == true)
		{
			animator2.GetComponent.<Animation>().Play("CameraShake");
		}
	}
	if(meleeweapon == "bat")
	{
		meleeweaponset = "light";
		bath.gameObject.active = true;
		cbath.gameObject.active = false;
		faxeh.gameObject.active = false;
		gclubh.gameObject.active = false;
		katanah.gameObject.active = false;
		pipeh.gameObject.active = false;
		sledgeh.gameObject.active = false;
		sbath.gameObject.active = false;
	}
	if(meleeweapon == "cbat")
	{
		meleeweaponset = "light";
		bath.gameObject.active = false;
		cbath.gameObject.active = true;
		faxeh.gameObject.active = false;
		gclubh.gameObject.active = false;
		katanah.gameObject.active = false;
		pipeh.gameObject.active = false;
		sledgeh.gameObject.active = false;
		sbath.gameObject.active = false;
	}
	if(meleeweapon == "faxe")
	{
		meleeweaponset = "heavy";
		bath.gameObject.active = false;
		cbath.gameObject.active = false;
		faxeh.gameObject.active = true;
		gclubh.gameObject.active = false;
		katanah.gameObject.active = false;
		pipeh.gameObject.active = false;
		sledgeh.gameObject.active = false;
		sbath.gameObject.active = false;
	}
	if(meleeweapon == "gclub")
	{
		meleeweaponset = "medium";
		bath.gameObject.active = false;
		cbath.gameObject.active = false;
		faxeh.gameObject.active = false;
		gclubh.gameObject.active = true;
		katanah.gameObject.active = false;
		pipeh.gameObject.active = false;
		sledgeh.gameObject.active = false;
		sbath.gameObject.active = false;
	}
	if(meleeweapon == "katana")
	{
		meleeweaponset = "light";
		bath.gameObject.active = false;
		cbath.gameObject.active = false;
		faxeh.gameObject.active = false;
		gclubh.gameObject.active = false;
		katanah.gameObject.active = true;
		pipeh.gameObject.active = false;
		sledgeh.gameObject.active = false;
		sbath.gameObject.active = false;
	}
	if(meleeweapon == "pipe")
	{
		meleeweaponset = "medium";
		bath.gameObject.active = false;
		cbath.gameObject.active = false;
		faxeh.gameObject.active = false;
		gclubh.gameObject.active = false;
		katanah.gameObject.active = false;
		pipeh.gameObject.active = true;
		sledgeh.gameObject.active = false;
		sbath.gameObject.active = false;
	}
	if(meleeweapon == "sledge")
	{
		meleeweaponset = "heavy";
		bath.gameObject.active = false;
		cbath.gameObject.active = false;
		faxeh.gameObject.active = false;
		gclubh.gameObject.active = false;
		katanah.gameObject.active = false;
		pipeh.gameObject.active = false;
		sledgeh.gameObject.active = true;
		sbath.gameObject.active = false;
	}
	if(meleeweapon == "sbat")
	{
		meleeweaponset = "light";
		bath.gameObject.active = false;
		cbath.gameObject.active = false;
		faxeh.gameObject.active = false;
		gclubh.gameObject.active = false;
		katanah.gameObject.active = false;
		pipeh.gameObject.active = false;
		sledgeh.gameObject.active = false;
		sbath.gameObject.active = true;
	}
	if(firearm == "pistol")
	{
		pistolh.gameObject.active = true;
	}
	else 
	{
		pistolh.gameObject.active = false;
	}
	if(firearm == "shotgun")
	{
		shotgunh.gameObject.active = true;
	}
	else 
	{
		shotgunh.gameObject.active = false;
	}
	if(firearm == "rifle")
	{
		rifleh.gameObject.active = true;
	}
	if(firearm == "prototype")
	{
		prototypeh.gameObject.active = true;
	}
	else 
	{
		prototypeh.gameObject.active = false;
	}
	if(meleeweaponset == "light")
	{
		animator.GetComponent.<Animation>()["SwingTwoHanded"].speed = 1 * meleeSpeed;
	}
	if(meleeweaponset == "medium")
	{
		animator.GetComponent.<Animation>()["SwingTwoHanded"].speed = 0.875 * meleeSpeed;
	}
	if(meleeweaponset == "heavy")
	{
		animator.GetComponent.<Animation>()["SwingTwoHanded"].speed = 0.75 * meleeSpeed;
	}
	if(Input.GetKeyDown("1"))
	{
		if(meleeweapon != "none")
		{
			if(equipped == "pistol")
			{
				animator.GetComponent.<Animation>().PlayQueued("DequipPistol");
			}
			if(equipped == "shotgun")
			{
				animator.GetComponent.<Animation>().PlayQueued("DequipShotgun");
			}
			if(equipped == "rifle")
			{
				animator.GetComponent.<Animation>().PlayQueued("DequipRifle");
			}
			if(equipped == "prototype")
			{
				animator.GetComponent.<Animation>().PlayQueued("DequipPrototype");
			}
			if(equipped == "phone")
			{
				animator.GetComponent.<Animation>().PlayQueued("DequipPhone");
			}
			shotgunt.gameObject.active = false;
			if(meleeweapon == "bat")
			{
				bat.gameObject.active = true;
				cbat.gameObject.active = false;
				faxe.gameObject.active = false;
				gclub.gameObject.active = false;
				katana.gameObject.active = false;
				pipe.gameObject.active = false;
				sledge.gameObject.active = false;
				sbat.gameObject.active = false;
				pistol.gameObject.active = false;
				shotgun.gameObject.active = false;
				rifle.gameObject.active = false;
				prototype.gameObject.active = false;
			}
			if(meleeweapon == "cbat")
			{
				bat.gameObject.active = false;
				cbat.gameObject.active = true;
				faxe.gameObject.active = false;
				gclub.gameObject.active = false;
				katana.gameObject.active = false;
				pipe.gameObject.active = false;
				sledge.gameObject.active = false;
				sbat.gameObject.active = false;
				pistol.gameObject.active = false;
				shotgun.gameObject.active = false;
				rifle.gameObject.active = false;
				prototype.gameObject.active = false;
			}
			if(meleeweapon == "faxe")
			{
				bat.gameObject.active = false;
				cbat.gameObject.active = false;
				faxe.gameObject.active = true;
				gclub.gameObject.active = false;
				katana.gameObject.active = false;
				pipe.gameObject.active = false;
				sledge.gameObject.active = false;
				sbat.gameObject.active = false;
				pistol.gameObject.active = false;
				shotgun.gameObject.active = false;
				rifle.gameObject.active = false;
				prototype.gameObject.active = false;
			}
			if(meleeweapon == "gclub")
			{
				bat.gameObject.active = false;
				cbat.gameObject.active = false;
				faxe.gameObject.active = false;
				gclub.gameObject.active = true;
				katana.gameObject.active = false;
				pipe.gameObject.active = false;
				sledge.gameObject.active = false;
				sbat.gameObject.active = false;
				pistol.gameObject.active = false;
				shotgun.gameObject.active = false;
				rifle.gameObject.active = false;
				prototype.gameObject.active = false;
			}
			if(meleeweapon == "katana")
			{
				bat.gameObject.active = false;
				cbat.gameObject.active = false;
				faxe.gameObject.active = false;
				gclub.gameObject.active = false;
				katana.gameObject.active = true;
				pipe.gameObject.active = false;
				sledge.gameObject.active = false;
				sbat.gameObject.active = false;
				pistol.gameObject.active = false;
				shotgun.gameObject.active = false;
				rifle.gameObject.active = false;
				prototype.gameObject.active = false;
			}
			if(meleeweapon == "pipe")
			{
				bat.gameObject.active = false;
				cbat.gameObject.active = false;
				faxe.gameObject.active = false;
				gclub.gameObject.active = false;
				katana.gameObject.active = false;
				pipe.gameObject.active = true;
				sledge.gameObject.active = false;
				sbat.gameObject.active = false;
				pistol.gameObject.active = false;
				shotgun.gameObject.active = false;
				rifle.gameObject.active = false;
				prototype.gameObject.active = false;
			}
			if(meleeweapon == "sledge")
			{
				bat.gameObject.active = false;
				cbat.gameObject.active = false;
				faxe.gameObject.active = false;
				gclub.gameObject.active = false;
				katana.gameObject.active = false;
				pipe.gameObject.active = false;
				sledge.gameObject.active = true;
				sbat.gameObject.active = false;
				pistol.gameObject.active = false;
				shotgun.gameObject.active = false;
				rifle.gameObject.active = false;
				prototype.gameObject.active = false;
			}
			if(meleeweapon == "sbat")
			{
				bat.gameObject.active = false;
				cbat.gameObject.active = false;
				faxe.gameObject.active = false;
				gclub.gameObject.active = false;
				katana.gameObject.active = false;
				pipe.gameObject.active = false;
				sledge.gameObject.active = false;
				sbat.gameObject.active = true;
				pistol.gameObject.active = false;
				shotgun.gameObject.active = false;
				rifle.gameObject.active = false;
				prototype.gameObject.active = false;
			}
			equipped = "melee";
			animator.GetComponent.<Animation>().PlayQueued("EquipTwoHanded");
		}
	}
	if(Input.GetKeyDown("2"))
	{
		if(firearm == "pistol")
		{
			if(equipped == "none")
			{
				animator.GetComponent.<Animation>().PlayQueued("EquipPistol");
			}
			else if(equipped == "melee")
			{
				bat.gameObject.active = false;
				cbat.gameObject.active = false;
				faxe.gameObject.active = false;
				gclub.gameObject.active = false;
				katana.gameObject.active = false;
				pipe.gameObject.active = false;
				sledge.gameObject.active = false;
				sbat.gameObject.active = false;
				animator.GetComponent.<Animation>().PlayQueued("DequipTwoHanded");
				animator.GetComponent.<Animation>().PlayQueued("EquipPistol");
			}
			else if(equipped == "phone")
			{
				animator.GetComponent.<Animation>().PlayQueued("DequipPhone");
				animator.GetComponent.<Animation>().PlayQueued("EquipPistol");
			}
			equipped = "pistol";
		}
		if(firearm == "shotgun")
		{
			if(equipped == "none")
			{
				animator.GetComponent.<Animation>().PlayQueued("EquipShotgun");
			}
			else if(equipped == "melee")
			{
				bat.gameObject.active = false;
				cbat.gameObject.active = false;
				faxe.gameObject.active = false;
				gclub.gameObject.active = false;
				katana.gameObject.active = false;
				pipe.gameObject.active = false;
				sledge.gameObject.active = false;
				sbat.gameObject.active = false;
				animator.GetComponent.<Animation>().PlayQueued("DequipTwoHanded");
				animator.GetComponent.<Animation>().PlayQueued("EquipShotgun");
			}
			else if(equipped == "phone")
			{
				animator.GetComponent.<Animation>().PlayQueued("DequipPhone");
				animator.GetComponent.<Animation>().PlayQueued("EquipShotgun");
			}
			equipped = "shotgun";
		}
		if(firearm == "rifle")
		{
			if(equipped == "none")
			{
				animator.GetComponent.<Animation>().PlayQueued("EquipRifle");
			}
			else if(equipped == "melee")
			{
				bat.gameObject.active = false;
				cbat.gameObject.active = false;
				faxe.gameObject.active = false;
				gclub.gameObject.active = false;
				katana.gameObject.active = false;
				pipe.gameObject.active = false;
				sledge.gameObject.active = false;
				sbat.gameObject.active = false;
				animator.GetComponent.<Animation>().PlayQueued("DequipTwoHanded");
				animator.GetComponent.<Animation>().PlayQueued("EquipRifle");
			}
			else if(equipped == "phone")
			{
				animator.GetComponent.<Animation>().PlayQueued("DequipPhone");
				animator.GetComponent.<Animation>().PlayQueued("EquipRifle");
			}
			equipped = "rifle";
		}
		if(firearm == "prototype")
		{
			if(equipped == "none")
			{
				animator.GetComponent.<Animation>().PlayQueued("EquipPrototype");
			}
			else if(equipped == "melee")
			{
				bat.gameObject.active = false;
				cbat.gameObject.active = false;
				faxe.gameObject.active = false;
				gclub.gameObject.active = false;
				katana.gameObject.active = false;
				pipe.gameObject.active = false;
				sledge.gameObject.active = false;
				sbat.gameObject.active = false;
				animator.GetComponent.<Animation>().PlayQueued("DequipTwoHanded");
				animator.GetComponent.<Animation>().PlayQueued("EquipPrototype");
			}
			else if(equipped == "phone")
			{
				animator.GetComponent.<Animation>().PlayQueued("DequipPhone");
				animator.GetComponent.<Animation>().PlayQueued("EquipPrototype");
			}
			equipped = "prototype";
		}
	}
	if(Input.GetButtonDown("Fire1"))
	{
		if(equipped == "melee")
		{
			if(swingTimer >= ((animator.GetComponent.<Animation>()["SwingTwoHanded"].length) + 0.1))
			{
				Swing();
				swingTimer = 0;
			}
		}
		if(equipped == "pistol")
		{
			if(swingTimer >= 0.15)
			{
				if(reloadTimer >= 1.2)
				{
					if(pistolammo > 0)
					{
						animator.GetComponent.<Animation>().PlayQueued("FirePistol");
						swingTimer = 0;
						pistolammo -= 1;
						var hit : RaycastHit;
						if (Physics.Raycast (animator.position, animator.TransformDirection(Vector3.forward), hit))
						{
							Distance = hit.distance;
							Debug.Log("I've hit " + hit.transform);
							if(hit.transform.tag != "Enemy")
							{
								Instantiate( bulletHole, hit.point, hit.transform.rotation );
							}
							if(songPlaying == 1 && playingSong == true)
							{
								hit.transform.SendMessage("HitPistolPhone", SendMessageOptions.DontRequireReceiver);
							}
							else
							{
								hit.transform.SendMessage("HitPistol", SendMessageOptions.DontRequireReceiver);
							}
						} 
					}
				}
			}
		}
		if(equipped == "shotgun")
		{
			if(swingTimer >= 0.75)
			{
				if(reloadTimer >= shotgunreloadspeed)
				{
					if(shotgunammo > 0)
					{
						saim.localRotation.x = Random.Range(minSpread, maxSpread);
						saim.localRotation.y = Random.Range(minSpread, maxSpread);
						saim2.localRotation.x = Random.Range(minSpread, maxSpread);
						saim2.localRotation.y = Random.Range(minSpread, maxSpread);
						saim3.localRotation.x = Random.Range(minSpread, maxSpread);
						saim3.localRotation.y = Random.Range(minSpread, maxSpread);
						saim4.localRotation.x = Random.Range(minSpread, maxSpread);
						saim4.localRotation.y = Random.Range(minSpread, maxSpread);
						saim5.localRotation.x = Random.Range(minSpread, maxSpread);
						saim5.localRotation.y = Random.Range(minSpread, maxSpread);
						saim6.localRotation.x = Random.Range(minSpread, maxSpread);
						saim6.localRotation.y = Random.Range(minSpread, maxSpread);
						saim7.localRotation.x = Random.Range(minSpread, maxSpread);
						saim7.localRotation.y = Random.Range(minSpread, maxSpread);
						saim8.localRotation.x = Random.Range(minSpread, maxSpread);
						saim8.localRotation.y = Random.Range(minSpread, maxSpread);
						shotgunshotsfired += 1;
						animator.GetComponent.<Animation>().PlayQueued("FireShotgun");
						swingTimer = 0;
						shotgunammo -= 1; 
						var hit3 : RaycastHit;
						if (Physics.Raycast (animator.position, saim.TransformDirection(Vector3.back), hit3))
						{
							Distance = hit.distance;
							Debug.Log("I've hit " + hit3.transform);
							if(hit3.transform.tag != "Enemy")
							{
								Instantiate( bulletHole, hit3.point, hit3.transform.rotation );
							}
							if(songPlaying == 1 && playingSong == true)
							{
								hit3.transform.SendMessage("HitShotgunPhone", SendMessageOptions.DontRequireReceiver);
							}
							else
							{
								hit3.transform.SendMessage("HitShotgun", SendMessageOptions.DontRequireReceiver);
							}
						}
						var hit4 : RaycastHit;
						if (Physics.Raycast (animator.position, saim2.TransformDirection(Vector3.back), hit4))
						{
							Distance = hit.distance;
							Debug.Log("I've hit " + hit4.transform);
							if(hit4.transform.tag != "Enemy")
							{
								Instantiate( bulletHole, hit4.point, hit4.transform.rotation );
							}
							if(songPlaying == 1 && playingSong == true)
							{
								hit4.transform.SendMessage("HitShotgunPhone", SendMessageOptions.DontRequireReceiver);
							}
							else
							{
								hit4.transform.SendMessage("HitShotgun", SendMessageOptions.DontRequireReceiver);
							}
						} 
						var hit5 : RaycastHit;
						if (Physics.Raycast (animator.position, saim3.TransformDirection(Vector3.back), hit5))
						{
							Distance = hit.distance;
							Debug.Log("I've hit " + hit5.transform);
							if(hit5.transform.tag != "Enemy")
							{
								Instantiate( bulletHole, hit5.point, hit5.transform.rotation );
							}
							if(songPlaying == 1 && playingSong == true)
							{
								hit5.transform.SendMessage("HitShotgunPhone", SendMessageOptions.DontRequireReceiver);
							}
							else
							{
								hit5.transform.SendMessage("HitShotgun", SendMessageOptions.DontRequireReceiver);
							}
						}
						var hit6 : RaycastHit;
						if (Physics.Raycast (animator.position, saim4.TransformDirection(Vector3.back), hit6))
						{
							Distance = hit.distance;
							Debug.Log("I've hit " + hit5.transform);
							if(hit6.transform.tag != "Enemy")
							{
								Instantiate( bulletHole, hit6.point, hit6.transform.rotation );
							}
							if(songPlaying == 1 && playingSong == true)
							{
								hit6.transform.SendMessage("HitShotgunPhone", SendMessageOptions.DontRequireReceiver);
							}
							else
							{
								hit6.transform.SendMessage("HitShotgun", SendMessageOptions.DontRequireReceiver);
							}
						}
						var hit7 : RaycastHit;
						if (Physics.Raycast (animator.position, saim5.TransformDirection(Vector3.back), hit7))
						{
							Distance = hit.distance;
							Debug.Log("I've hit " + hit3.transform);
							if(hit7.transform.tag != "Enemy")
							{
								Instantiate( bulletHole, hit7.point, hit7.transform.rotation );
							}
							if(songPlaying == 1 && playingSong == true)
							{
								hit7.transform.SendMessage("HitShotgunPhone", SendMessageOptions.DontRequireReceiver);
							}
							else
							{
								hit7.transform.SendMessage("HitShotgun", SendMessageOptions.DontRequireReceiver);
							}
						}
						var hit8 : RaycastHit;
						if (Physics.Raycast (animator.position, saim6.TransformDirection(Vector3.back), hit8))
						{
							Distance = hit.distance;
							Debug.Log("I've hit " + hit8.transform);
							if(hit8.transform.tag != "Enemy")
							{
								Instantiate( bulletHole, hit8.point, hit8.transform.rotation );
							}
							if(songPlaying == 1 && playingSong == true)
							{
								hit8.transform.SendMessage("HitShotgunPhone", SendMessageOptions.DontRequireReceiver);
							}
							else
							{
								hit8.transform.SendMessage("HitShotgun", SendMessageOptions.DontRequireReceiver);
							}
						} 
						var hit9 : RaycastHit;
						if (Physics.Raycast (animator.position, saim7.TransformDirection(Vector3.back), hit9))
						{
							Distance = hit.distance;
							Debug.Log("I've hit " + hit9.transform);
							if(hit9.transform.tag != "Enemy")
							{
								Instantiate( bulletHole, hit9.point, hit9.transform.rotation );
							}
							if(songPlaying == 1 && playingSong == true)
							{
								hit9.transform.SendMessage("HitShotgunPhone", SendMessageOptions.DontRequireReceiver);
							}
							else
							{
								hit9.transform.SendMessage("HitShotgun", SendMessageOptions.DontRequireReceiver);
							}
						}
						var hit10 : RaycastHit;
						if (Physics.Raycast (animator.position, saim8.TransformDirection(Vector3.back), hit10))
						{
							Distance = hit.distance;
							Debug.Log("I've hit " + hit10.transform);
							if(hit10.transform.tag != "Enemy")
							{
								Instantiate( bulletHole, hit10.point, hit10.transform.rotation );
							}
							if(songPlaying == 1 && playingSong == true)
							{
								hit10.transform.SendMessage("HitShotgunPhone", SendMessageOptions.DontRequireReceiver);
							}
							else
							{
								hit10.transform.SendMessage("HitShotgun", SendMessageOptions.DontRequireReceiver);
							}
						}   
					}
				}
			}
		}
		if(equipped == "rifle")
		{
			if(swingTimer >= animator.GetComponent.<Animation>()["FireRifle"].length + 0.1)
			{
				if(reloadTimer >= (animator.GetComponent.<Animation>()["ReloadRifle"].length + 0.1))
				{
					if(rifleammo > 0)
					{
						animator.GetComponent.<Animation>().PlayQueued("FireRifle");
						swingTimer = 0;
						rifleammo -= 1;
						var hit11 : RaycastHit;
						if (Physics.Raycast (animator.position, raim.TransformDirection(Vector3.forward), hit11))
						{
							Distance = hit.distance;
							Debug.Log("I've hit " + hit.transform);
							if(hit11.transform.tag != "Enemy")
							{
								Instantiate( bulletHole, hit11.point, hit11.transform.rotation );
							}
							if(songPlaying == 1 && playingSong == true)
							{
								hit11.transform.SendMessage("HitRiflePhone", SendMessageOptions.DontRequireReceiver);
							}
							else
							{
								hit11.transform.SendMessage("HitRifle", SendMessageOptions.DontRequireReceiver);
							}
						} 
					}
				}
			}
		}
		if(equipped == "prototype")
		{
			if(prototypecharge != 0 && prototypewait >= 1)
			{
				StartCoroutine("PrepPrototype");
			}
		}
	}
	if(Input.GetKeyDown("p"))
	{
		if(equipped != "phone")
		{
			if(equipped == "melee")
			{
				animator.GetComponent.<Animation>().PlayQueued("DequipTwoHanded");
			}
			if(equipped == "pistol")
			{
				animator.GetComponent.<Animation>().PlayQueued("DequipPistol");
			}
			if(equipped == "shotgun")
			{
				animator.GetComponent.<Animation>().PlayQueued("DequipShotgun");
			}
			if(equipped == "rifle")
			{
				animator.GetComponent.<Animation>().PlayQueued("DequipRifle");
			}
			animator.GetComponent.<Animation>().PlayQueued("EquipPhone");
			equipped = "phone";
		}
		else if(equipped == "phone")
		{
			animator.GetComponent.<Animation>().PlayQueued("DequipPhone");
			equipped = "none";
		}
	}
	if(Input.GetKeyDown("q"))
	{
		if(equipped == "phone")
		{
			songSelected += 1;
			if(songSelected > 4)
			{
				songSelected = 1;
			}	
		}
	}
	if(Input.GetKeyDown("e"))
	{
		if(equipped == "phone")
		{
			if(songSelected == 1)
			{
				songPlaying = 1;
				playingSong = !playingSong;
				if(playingSong == true)
				{
					songstop1.gameObject.active = true;
					songstop2.gameObject.active = false;
					songstop3.gameObject.active = false;
					songstop4.gameObject.active = false;
				}
				if(playingSong == false)
				{
					songstop1.gameObject.active = false;
				}
			}
			if(songSelected == 2)
			{
				songPlaying = 2;
				playingSong = !playingSong;
				if(playingSong == true)
				{
					songstop1.gameObject.active = false;
					songstop2.gameObject.active = true;
					songstop3.gameObject.active = false;
					songstop4.gameObject.active = false;
				}
				if(playingSong == false)
				{
					songstop2.gameObject.active = false;
					meleeSpeed = 1;
				}
			}
			if(songSelected == 3)
			{
				songPlaying = 3;
				playingSong = !playingSong;
				if(playingSong == true)
				{
					songstop1.gameObject.active = false;
					songstop2.gameObject.active = false;
					songstop3.gameObject.active = true;
					songstop4.gameObject.active = false;
				}
				if(playingSong == false)
				{
					songstop3.gameObject.active = false;
					meleeSpeed = 1;
					Controller.SendMessage("StopMoveFast", SendMessageOptions.DontRequireReceiver);
				}
			}
			if(songSelected == 4)
			{
				songPlaying = 4;
				playingSong = !playingSong;
				if(playingSong == true)
				{
					songstop1.gameObject.active = false;
					songstop2.gameObject.active = false;
					songstop3.gameObject.active = false;
					songstop4.gameObject.active = true;
				}
				if(playingSong == false)
				{
					songstop4.gameObject.active = false;
					Controller.SendMessage("StopMoveFast", SendMessageOptions.DontRequireReceiver);
				}
			}	
		}
	}
	if(Input.GetKeyDown("r"))
	{
		if(equipped == "pistol")
		{
			if(pistolammo < 8 && pistolreserve > 0)
			{
				reloadTimer = 0;
				if(pistolammo + pistolreserve >= 8)
				{
					pistolreserve -= 8 - pistolammo;
					pistolammo = 8;
				}
				if(pistolammo + pistolreserve < 8)
				{
					pistolammo += pistolreserve;
					pistolreserve = 0;
				}
				animator.GetComponent.<Animation>().PlayQueued("ReloadPistol");
			}
		}
		if(equipped == "shotgun")
		{
			if(shotgunammo < 6 && shotgunreserve > 0)
			{
				reloadTimer = 0;
				StartCoroutine("ReloadShotgun");
				StartCoroutine("ReloadShotgun2");
				if(shotgunammo != 0)
				{
					shotgunreloadspeed = (0.5 + (shotgunshotsfired * 0.5));
				}
				shotgunshotsfired = 0;
			}
		}
		if(equipped == "rifle")
		{
			if(rifleammo < 8 && riflereserve > 0)
			{
				reloadTimer = 0;
				if(rifleammo + riflereserve >= 8)
				{
					riflereserve -= 8 - rifleammo;
					rifleammo = 8;
				}
				if(rifleammo + riflereserve < 8)
				{
					rifleammo += riflereserve;
					riflereserve = 0;
				}
				animator.GetComponent.<Animation>().PlayQueued("ReloadRifle");
			}
		}
		if(equipped == "prototype")
		{
			if(prototypecharge < 0.2 && prototypemagazines > 0 && prototypewait >= 2)
			{
				prototypemagazines -= 1;
				prototypewait = -1;
				prototypecharge = 0.2;
				animator.GetComponent.<Animation>().PlayQueued("ReloadPrototype");
			}
		}
	}
	if(songSelected == 1)
	{
		songBar.localPosition.x = 0.56;
	}
	if(songSelected == 2)
	{
		songBar.localPosition.x = 0.22;
	}
	if(songSelected == 3)
	{
		songBar.localPosition.x = -0.2101163;
	}
	if(songSelected == 4)
	{
		songBar.localPosition.x = -0.5907618;
	}
}

function PrepPrototype () {
	animator.GetComponent.<Animation>().Play("ChargePrototype");
	yield WaitForSeconds(animator.GetComponent.<Animation>()["ChargePrototype"].length);
	animator.GetComponent.<Animation>().Play("FirePrototype");
	StartCoroutine("FirePrototype");
	prototypelaser.localScale = new Vector3 (1, 1, 3.0F);
}

function FirePrototype () {
	prototypelaser.localScale += new Vector3 (0, 0, 3.0F);
	animator.GetComponent.<Animation>().PlayQueued("FiringPrototype");
	prototypewait = 0;
	prototypecharge -= 0.0025;
	yield WaitForSeconds(0.05);
	prototypelaser.localScale += new Vector3 (0, 0, 3.0F);
	animator.GetComponent.<Animation>().PlayQueued("FiringPrototype");
	prototypewait = 0;
	prototypecharge -= 0.0025;
	yield WaitForSeconds(0.05);
	if(!Input.GetButton("Fire1") || prototypecharge <= 0)
	{
		StartCoroutine("EndFiring");
		prototypeflash.gameObject.active = false;
	}
	else
	{
		StartCoroutine("FirePrototype");
	}
}

function EndFiring () {
	prototypelaser.localScale = new Vector3 (0.8, 0.8, prototypelaser.localScale.z);
	animator.GetComponent.<Animation>().Stop("FiringPrototype");
	yield WaitForSeconds(0.01);
	prototypelaser.localScale = new Vector3 (0.7, 0.7, prototypelaser.localScale.z);
	yield WaitForSeconds(0.01);
	prototypelaser.localScale = new Vector3 (0.6, 0.6, prototypelaser.localScale.z);
	yield WaitForSeconds(0.01);
	prototypelaser.localScale = new Vector3 (0.5, 0.5, prototypelaser.localScale.z);
	yield WaitForSeconds(0.01);
	prototypelaser.localScale = new Vector3 (0.4, 0.4, prototypelaser.localScale.z);
	prototypeflash.gameObject.active = false;
	yield WaitForSeconds(0.01);
	prototypelaser.localScale = new Vector3 (0.3, 0.3, prototypelaser.localScale.z);
	prototypeflash.gameObject.active = false;
	yield WaitForSeconds(0.01);
	prototypelaser.localScale = new Vector3 (0.2, 0.2, prototypelaser.localScale.z);
	prototypeflash.gameObject.active = false;
	yield WaitForSeconds(0.01);
	prototypelaser.localScale = new Vector3 (0.1, 0.1, prototypelaser.localScale.z);
	prototypeflash.gameObject.active = false;
	yield WaitForSeconds(0.01);
	prototypelaser.localScale = new Vector3 (0, 0, 0);
	prototypewait = 1;
	prototypeflash.gameObject.active = false;
	
}

function ShotgunAim () {
	StartCoroutine("ShotgunAim2");
	animator.GetComponent.<Animation>().Play("ShotgunAim");
	animator.GetComponent.<Animation>().Play("ShotgunAim2");
	animator.GetComponent.<Animation>().Play("ShotgunAim3");
	animator.GetComponent.<Animation>().Play("ShotgunAim4");
}
function ShotgunAim2 () {
	yield WaitForSeconds(animator.GetComponent.<Animation>()["ShotgunAim"].length);
	StartCoroutine("ShotgunAim");
}

function ReloadShotgun () {
	if(shotgunammo != 6 && shotgunreserve >= 6)
	{
		animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun");
		if(shotgunammo == 0)
		{
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun4");
			shotgunreloadspeed = 4;
		}
		else if(shotgunammo == 1)
		{
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun3");
		}
		else if(shotgunammo == 2)
		{
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun3");
		}
		else if(shotgunammo == 3)
		{
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun3");
		}
		else if(shotgunammo == 4)
		{
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun3");
		}
		else if(shotgunammo == 5)
		{
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun3");
		}
	}
	if(shotgunammo + shotgunreserve == 5)
	{
		animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun");
		if(shotgunammo == 0)
		{
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun4");
			shotgunreloadspeed = 3.5;
		}
		else if(shotgunammo == 1)
		{
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun3");
		}
		else if(shotgunammo == 2)
		{
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun3");
		}
		else if(shotgunammo == 3)
		{
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun3");
		}
		else if(shotgunammo == 4)
		{
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun3");
		}
	}
	if(shotgunammo + shotgunreserve == 4)
	{
		animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun");
		if(shotgunammo == 0)
		{
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun4");
			shotgunreloadspeed = 3;
		}
		else if(shotgunammo == 1)
		{
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun3");
		}
		else if(shotgunammo == 2)
		{
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun3");
		}
		else if(shotgunammo == 3)
		{
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun3");
		}
	}
	if(shotgunammo + shotgunreserve == 3)
	{
		animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun");
		if(shotgunammo == 0)
		{
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun4");
			shotgunreloadspeed = 2.5;
		}
		else if(shotgunammo == 1)
		{
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun3");
		}
		else if(shotgunammo == 2)
		{
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun3");
		}
	}
	if(shotgunammo + shotgunreserve == 2)
	{
		animator.GetComponent.<Animation>().Play("Reload Shotgun");
		if(shotgunammo == 0)
		{
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun4");
			shotgunreloadspeed = 2;
		}
		else if(shotgunammo == 1)
		{
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun3");
		}
	}
	if(shotgunammo == 0 && shotgunreserve == 1)
	{
		animator.GetComponent.<Animation>().Play("Reload Shotgun");
		if(shotgunammo == 0)
		{
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun2");
			animator.GetComponent.<Animation>().PlayQueued("Reload Shotgun4");
			shotgunreloadspeed = 1.5;
		}
	}
}

function ReloadShotgun2 () {
	if(shotgunammo != 6 && shotgunreserve >= 6)
	{
		if(shotgunammo == 0)
		{
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
		}
		else if(shotgunammo == 1)
		{
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
		}
		else if(shotgunammo == 2)
		{
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
		}
		else if(shotgunammo == 3)
		{
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
		}
		else if(shotgunammo == 4)
		{
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
		}
		else if(shotgunammo == 5)
		{
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
		}
	}
	if(shotgunammo + shotgunreserve == 5)
	{
		if(shotgunammo == 0)
		{
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
		}
		else if(shotgunammo == 1)
		{
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
		}
		else if(shotgunammo == 2)
		{
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
		}
		else if(shotgunammo == 3)
		{
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
		}
		else if(shotgunammo == 4)
		{
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
		}
	}
	if(shotgunammo + shotgunreserve == 4)
	{
		if(shotgunammo == 0)
		{
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
		}
		else if(shotgunammo == 1)
		{
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
		}
		else if(shotgunammo == 2)
		{
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
		}
		else if(shotgunammo == 3)
		{
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
		}
	}
	if(shotgunammo + shotgunreserve == 3)
	{
		if(shotgunammo == 0)
		{
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
		}
		else if(shotgunammo == 1)
		{
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
		}
		else if(shotgunammo == 2)
		{
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
		}
	}
	if(shotgunammo + shotgunreserve == 2)
	{
		if(shotgunammo == 0)
		{
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
		}
		else if(shotgunammo == 1)
		{
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
		}
	}
	if(shotgunammo == 0 && shotgunreserve == 1)
	{
		if(shotgunammo == 0)
		{
			yield WaitForSeconds(animator.GetComponent.<Animation>()["Reload Shotgun2"].length);
			shotgunammo += 1;
			shotgunreserve -= 1;
		}
	}
}

function Swing () {
	animator.GetComponent.<Animation>().Play("SwingTwoHanded");
	yield WaitForSeconds(animator.GetComponent.<Animation>()["SwingTwoHanded"].length / 2);
	var hit : RaycastHit;
	if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit))
	{
		Distance = hit.distance;
		if (Distance < MaxDistance)
		{
			Debug.Log("I've hit " + hit.transform);
			if(meleeweaponset == "light")
			{
				hit.transform.SendMessage("HitLight", SendMessageOptions.DontRequireReceiver);
			}
			if(meleeweaponset == "light" && songPlaying == 1 && playingSong == true)
			{
				hit.transform.SendMessage("HitLightPhone", SendMessageOptions.DontRequireReceiver);
			}
			if(meleeweaponset == "medium")
			{
				hit.transform.SendMessage("HitMedium", SendMessageOptions.DontRequireReceiver);
			}
			if(meleeweaponset == "medium" && songPlaying == 1 && playingSong == true)
			{
				hit.transform.SendMessage("HitMediumPhone", SendMessageOptions.DontRequireReceiver);
			}
			if(meleeweaponset == "heavy")
			{
				hit.transform.SendMessage("HitHeavy", SendMessageOptions.DontRequireReceiver);
			}
			if(meleeweaponset == "heavy" && songPlaying == 1 && playingSong == true)
			{
				hit.transform.SendMessage("HitHeavyPhone", SendMessageOptions.DontRequireReceiver);
			}
		}
	} 
}

function Bat () {
	if(meleeweapon == "none" && equipped != "melee")
	{
		meleeweapon = "bat";
	}
	else if(meleeweapon != "none")
	{
		var clone : Rigidbody;
		if(meleeweapon == "bat")
		{
			clone = Instantiate(batr, meleet.position, meleet.rotation);
			meleeweaponset = "light";
			clone.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "cbat")
		{
			clone = Instantiate(cbatr, meleet.position, meleet.rotation);
			meleeweaponset = "light";
			clone.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "faxe")
		{
			clone = Instantiate(faxer, meleet.position, meleet.rotation);
			clone.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "gclub")
		{
			clone = Instantiate(gclubr, meleet.position, meleet.rotation);
			clone.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "katana")
		{
			clone = Instantiate(katanar, meleet.position, meleet.rotation);
			clone.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "pipe")
		{
			clone = Instantiate(piper, meleet.position, meleet.rotation);
			clone.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "sledge")
		{
			clone = Instantiate(sledger, meleet.position, meleet.rotation);
			clone.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "sbat")
		{
			clone = Instantiate(sbatr, meleet.position, meleet.rotation);
			clone.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(equipped == "melee")
		{
			animator.GetComponent.<Animation>().Play("DequipTwoHanded");
			meleeweapon = "bat";
		}
		else 
		{
			meleeweapon = "bat";
		}
	}
}

function CBat () {
	if(meleeweapon == "none" && equipped != "melee")
	{
		meleeweapon = "cbat";
	}
	else if(meleeweapon != "none")
	{
		var clone2 : Rigidbody;
		if(meleeweapon == "bat")
		{
			clone2 = Instantiate(batr, meleet.position, meleet.rotation);
			clone2.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "cbat")
		{
			clone2 = Instantiate(cbatr, meleet.position, meleet.rotation);
			clone2.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "faxe")
		{
			clone2 = Instantiate(faxer, meleet.position, meleet.rotation);
			clone2.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "gclub")
		{
			clone2 = Instantiate(gclubr, meleet.position, meleet.rotation);
			clone2.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "katana")
		{
			clone2 = Instantiate(katanar, meleet.position, meleet.rotation);
			clone2.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "pipe")
		{
			clone2 = Instantiate(piper, meleet.position, meleet.rotation);
			clone2.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "sledge")
		{
			clone2 = Instantiate(sledger, meleet.position, meleet.rotation);
			clone2.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "sbat")
		{
			clone2 = Instantiate(sbatr, meleet.position, meleet.rotation);
			clone2.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(equipped == "melee")
		{
			animator.GetComponent.<Animation>().Play("DequipTwoHanded");
			meleeweapon = "cbat";
		}
		else 
		{
			meleeweapon = "cbat";
		}
	}
}

function Faxe () {
	if(meleeweapon == "none" && equipped != "melee")
	{
		meleeweapon = "faxe";
	}
	else if(meleeweapon != "none")
	{
		var clone3 : Rigidbody;
		if(meleeweapon == "bat")
		{
			clone3 = Instantiate(batr, meleet.position, meleet.rotation);
			clone3.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "cbat")
		{
			clone3 = Instantiate(cbatr, meleet.position, meleet.rotation);
			clone3.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "faxe")
		{
			clone3 = Instantiate(faxer, meleet.position, meleet.rotation);
			clone3.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "gclub")
		{
			clone3 = Instantiate(gclubr, meleet.position, meleet.rotation);
			clone3.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "katana")
		{
			clone3 = Instantiate(katanar, meleet.position, meleet.rotation);
			clone3.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "pipe")
		{
			clone3 = Instantiate(piper, meleet.position, meleet.rotation);
			clone3.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "sledge")
		{
			clone3 = Instantiate(sledger, meleet.position, meleet.rotation);
			clone3.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "sbat")
		{
			clone3 = Instantiate(sbatr, meleet.position, meleet.rotation);
			clone3.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(equipped == "melee")
		{
			animator.GetComponent.<Animation>().Play("DequipTwoHanded");
			meleeweapon = "faxe";
		}
		else 
		{
			meleeweapon = "faxe";
		}
	}
}

function GClub () {
	if(meleeweapon == "none" && equipped != "melee")
	{
		meleeweapon = "gclub";
	}
	else if(meleeweapon != "none")
	{
		var clone4 : Rigidbody;
		if(meleeweapon == "bat")
		{
			clone4 = Instantiate(batr, meleet.position, meleet.rotation);
			clone4.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "cbat")
		{
			clone4 = Instantiate(cbatr, meleet.position, meleet.rotation);
			clone4.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "faxe")
		{
			clone4 = Instantiate(faxer, meleet.position, meleet.rotation);
			clone4.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "gclub")
		{
			clone4 = Instantiate(gclubr, meleet.position, meleet.rotation);
			clone4.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "katana")
		{
			clone4 = Instantiate(katanar, meleet.position, meleet.rotation);
			clone4.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "pipe")
		{
			clone4 = Instantiate(piper, meleet.position, meleet.rotation);
			clone4.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "sledge")
		{
			clone4 = Instantiate(sledger, meleet.position, meleet.rotation);
			clone4.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "sbat")
		{
			clone4 = Instantiate(sbatr, meleet.position, meleet.rotation);
			clone4.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(equipped == "melee")
		{
			animator.GetComponent.<Animation>().Play("DequipTwoHanded");
			meleeweapon = "gclub";
		}
		else 
		{
			meleeweapon = "gclub";
		}
	}
}

function Katana () {
	if(meleeweapon == "none" && equipped != "melee")
	{
		meleeweapon = "katana";
	}
	else if(meleeweapon != "none")
	{
		var clone5 : Rigidbody;
		if(meleeweapon == "bat")
		{
			clone5 = Instantiate(batr, meleet.position, meleet.rotation);
			clone5.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "cbat")
		{
			clone5 = Instantiate(cbatr, meleet.position, meleet.rotation);
			clone5.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "faxe")
		{
			clone5 = Instantiate(faxer, meleet.position, meleet.rotation);
			clone5.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "gclub")
		{
			clone5 = Instantiate(gclubr, meleet.position, meleet.rotation);
			clone5.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "katana")
		{
			clone5 = Instantiate(katanar, meleet.position, meleet.rotation);
			clone5.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "pipe")
		{
			clone5 = Instantiate(piper, meleet.position, meleet.rotation);
			clone5.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "sledge")
		{
			clone5 = Instantiate(sledger, meleet.position, meleet.rotation);
			clone5.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "sbat")
		{
			clone5 = Instantiate(sbatr, meleet.position, meleet.rotation);
			clone5.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(equipped == "melee")
		{
			animator.GetComponent.<Animation>().Play("DequipTwoHanded");
			meleeweapon = "katana";
		}
		else 
		{
			meleeweapon = "katana";
		}
	}
}

function Pipe () {
	if(meleeweapon == "none" && equipped != "melee")
	{
		meleeweapon = "pipe";
	}
	else if(meleeweapon != "none")
	{
		var clone6 : Rigidbody;
		if(meleeweapon == "bat")
		{
			clone6 = Instantiate(batr, meleet.position, meleet.rotation);
			clone6.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "cbat")
		{
			clone6 = Instantiate(cbatr, meleet.position, meleet.rotation);
			clone6.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "faxe")
		{
			clone6 = Instantiate(faxer, meleet.position, meleet.rotation);
			clone6.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "gclub")
		{
			clone6 = Instantiate(gclubr, meleet.position, meleet.rotation);
			clone6.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "katana")
		{
			clone6 = Instantiate(katanar, meleet.position, meleet.rotation);
			clone6.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "pipe")
		{
			clone6 = Instantiate(piper, meleet.position, meleet.rotation);
			clone6.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "sledge")
		{
			clone6 = Instantiate(sledger, meleet.position, meleet.rotation);
			clone6.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "sbat")
		{
			clone6 = Instantiate(sbatr, meleet.position, meleet.rotation);
			clone6.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(equipped == "melee")
		{
			animator.GetComponent.<Animation>().Play("DequipTwoHanded");
			meleeweapon = "pipe";
		}
		else 
		{
			meleeweapon = "pipe";
		}
	}
}

function Sledge () {
	if(meleeweapon == "none" && equipped != "melee")
	{
		meleeweapon = "sledge";
	}
	else if(meleeweapon != "none")
	{
		var clone7 : Rigidbody;
		if(meleeweapon == "bat")
		{
			clone7 = Instantiate(batr, meleet.position, meleet.rotation);
			clone7.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "cbat")
		{
			clone7 = Instantiate(cbatr, meleet.position, meleet.rotation);
			clone7.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "faxe")
		{
			clone7 = Instantiate(faxer, meleet.position, meleet.rotation);
			clone7.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "gclub")
		{
			clone7 = Instantiate(gclubr, meleet.position, meleet.rotation);
			clone7.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "katana")
		{
			clone7 = Instantiate(katanar, meleet.position, meleet.rotation);
			clone7.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "pipe")
		{
			clone7 = Instantiate(piper, meleet.position, meleet.rotation);
			clone7.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "sledge")
		{
			clone7 = Instantiate(sledger, meleet.position, meleet.rotation);
			clone7.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "sbat")
		{
			clone7 = Instantiate(sbatr, meleet.position, meleet.rotation);
			clone7.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(equipped == "melee")
		{
			animator.GetComponent.<Animation>().Play("DequipTwoHanded");
			meleeweapon = "sledge";
		}
		else 
		{
			meleeweapon = "sledge";
		}
	}
}

function SBat () {
	if(meleeweapon == "none" && equipped != "melee")
	{
		meleeweapon = "sbat";
	}
	else if(meleeweapon != "none")
	{
		var clone8 : Rigidbody;
		if(meleeweapon == "bat")
		{
			clone8 = Instantiate(batr, meleet.position, meleet.rotation);
			clone8.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "cbat")
		{
			clone8 = Instantiate(cbatr, meleet.position, meleet.rotation);
			clone8.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "faxe")
		{
			clone8 = Instantiate(faxer, meleet.position, meleet.rotation);
			clone8.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "gclub")
		{
			clone8 = Instantiate(gclubr, meleet.position, meleet.rotation);
			clone8.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "katana")
		{
			clone8 = Instantiate(katanar, meleet.position, meleet.rotation);
			clone8.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "pipe")
		{
			clone8 = Instantiate(piper, meleet.position, meleet.rotation);
			clone8.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "sledge")
		{
			clone8 = Instantiate(sledger, meleet.position, meleet.rotation);
			clone8.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(meleeweapon == "sbat")
		{
			clone8 = Instantiate(sbatr, meleet.position, meleet.rotation);
			clone8.velocity = transform.TransformDirection (Vector3.forward * 10);
		}
		if(equipped == "melee")
		{
			animator.GetComponent.<Animation>().Play("DequipTwoHanded");
			meleeweapon = "sbat";
		}
		else 
		{
			meleeweapon = "sbat";
		}
	}
}

function Pistol () {
	var clone9 : Rigidbody;
	if(firearm == "none")
	{
		firearm = "pistol";
	}
	else if(firearm == "pistol")
	{
		clone9 = Instantiate(pistolr, meleet.position, meleet.rotation);
		clone9.velocity = transform.TransformDirection (Vector3.forward * 10);
	}
	else if(firearm == "shotgun")
	{
		clone9 = Instantiate(shotgunr, meleet.position, meleet.rotation);
		clone9.velocity = transform.TransformDirection (Vector3.forward * 10);
	}
	else if(firearm == "rifle")
	{
		clone9 = Instantiate(rifler, meleet.position, meleet.rotation);
		clone9.velocity = transform.TransformDirection (Vector3.forward * 10);
	}
	else if(firearm == "prototype")
	{
		clone9 = Instantiate(prototyper, meleet.position, meleet.rotation);
		clone9.velocity = transform.TransformDirection (Vector3.forward * 10);
	}
	if(equipped == "pistol")
	{
		animator.GetComponent.<Animation>().PlayQueued("DequipPistol");
		equipped = "none";
	}
	if(equipped == "shotgun")
	{
		animator.GetComponent.<Animation>().PlayQueued("DequipShotgun");
		equipped = "none";
	}
	if(equipped == "rifle")
	{
		animator.GetComponent.<Animation>().PlayQueued("DequipRifle");
		equipped = "none";
	}
	if(equipped == "prototype")
	{
		animator.GetComponent.<Animation>().PlayQueued("DequipPrototype");
		equipped = "none";
	}
	firearm = "pistol";
}

function Shotgun () {
	var clone10 : Rigidbody;
	if(firearm == "none")
	{
		firearm = "shotgun";
	}
	else if(firearm == "pistol")
	{
		clone10 = Instantiate(pistolr, meleet.position, meleet.rotation);
		clone10.velocity = transform.TransformDirection (Vector3.forward * 10);
	}
	else if(firearm == "shotgun")
	{
		clone10 = Instantiate(shotgunr, meleet.position, meleet.rotation);
		clone10.velocity = transform.TransformDirection (Vector3.forward * 10);
	}
	else if(firearm == "rifle")
	{
		clone10 = Instantiate(rifler, meleet.position, meleet.rotation);
		clone10.velocity = transform.TransformDirection (Vector3.forward * 10);
	}
	else if(firearm == "prototype")
	{
		clone10 = Instantiate(prototyper, meleet.position, meleet.rotation);
		clone10.velocity = transform.TransformDirection (Vector3.forward * 10);
	}
	if(equipped == "shotgun")
	{
		animator.GetComponent.<Animation>().PlayQueued("DequipShotgun");
		equipped = "none";
	}
	if(equipped == "pistol")
	{
		animator.GetComponent.<Animation>().PlayQueued("DequipPistol");
		equipped = "none";
	}
	if(equipped == "rifle")
	{
		animator.GetComponent.<Animation>().PlayQueued("DequipRifle");
		equipped = "none";
	}
	if(equipped == "prototype")
	{
		animator.GetComponent.<Animation>().PlayQueued("DequipPrototype");
		equipped = "none";
	}
	firearm = "shotgun";
}

function Rifle () {
	var clone10 : Rigidbody;
	if(firearm == "none")
	{
		firearm = "rifle";
	}
	else if(firearm == "pistol")
	{
		clone10 = Instantiate(pistolr, meleet.position, meleet.rotation);
		clone10.velocity = transform.TransformDirection (Vector3.forward * 10);
	}
	else if(firearm == "shotgun")
	{
		clone10 = Instantiate(shotgunr, meleet.position, meleet.rotation);
		clone10.velocity = transform.TransformDirection (Vector3.forward * 10);
	}
	else if(firearm == "rifle")
	{
		clone10 = Instantiate(rifler, meleet.position, meleet.rotation);
		clone10.velocity = transform.TransformDirection (Vector3.forward * 10);
	}
	else if(firearm == "prototype")
	{
		clone10 = Instantiate(prototyper, meleet.position, meleet.rotation);
		clone10.velocity = transform.TransformDirection (Vector3.forward * 10);
	}
	if(equipped == "pistol")
	{
		animator.GetComponent.<Animation>().PlayQueued("DequipPistol");
		equipped = "none";
	}
	if(equipped == "shotgun")
	{
		animator.GetComponent.<Animation>().PlayQueued("DequipShotgun");
		equipped = "none";
	}
	if(equipped == "rifle")
	{
		animator.GetComponent.<Animation>().PlayQueued("DequipRifle");
		equipped = "none";
	}
	if(equipped == "prototype")
	{
		animator.GetComponent.<Animation>().PlayQueued("DequipPrototype");
		equipped = "none";
	}
	firearm = "rifle";
}

function Prototype () {
	var clone11 : Rigidbody;
	if(firearm == "none")
	{
		firearm = "prototype";
	}
	else if(firearm == "pistol")
	{
		clone11 = Instantiate(pistolr, meleet.position, meleet.rotation);
		clone11.velocity = transform.TransformDirection (Vector3.forward * 10);
	}
	else if(firearm == "shotgun")
	{
		clone11 = Instantiate(shotgunr, meleet.position, meleet.rotation);
		clone11.velocity = transform.TransformDirection (Vector3.forward * 10);
	}
	else if(firearm == "rifle")
	{
		clone11 = Instantiate(rifler, meleet.position, meleet.rotation);
		clone11.velocity = transform.TransformDirection (Vector3.forward * 10);
	}
	else if(firearm == "prototype")
	{
		clone11 = Instantiate(prototyper, meleet.position, meleet.rotation);
		clone11.velocity = transform.TransformDirection (Vector3.forward * 10);
	}
	if(equipped == "pistol")
	{
		animator.GetComponent.<Animation>().PlayQueued("DequipPistol");
		equipped = "none";
	}
	if(equipped == "shotgun")
	{
		animator.GetComponent.<Animation>().PlayQueued("DequipShotgun");
		equipped = "none";
	}
	if(equipped == "rifle")
	{
		animator.GetComponent.<Animation>().PlayQueued("DequipRifle");
		equipped = "none";
	}
	if(equipped == "prototype")
	{
		animator.GetComponent.<Animation>().PlayQueued("DequipPrototype");
		equipped = "none";
	}
	firearm = "prototype";
}

function PrototypeAmmo () {
	prototypemagazines += 1;
}

function PistolAmmo () {
	pistolreserve += 8;
}

function RifleAmmo () {
	riflereserve += 8;
}

function ShotgunAmmo () {
	shotgunreserve += 6;
}