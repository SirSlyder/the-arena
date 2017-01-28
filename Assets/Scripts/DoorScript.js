#pragma strict

var Style : GUIStyle;
var Box : Texture2D;
var destination : Vector3;
var speed: float;
private var guiShow : boolean = false;
var move : boolean = false;
var price : int;
var Self : Transform;
var spawnActivate : Transform[];
var anim : Animation;
var animname : String;

function Awake() {
	Self = transform;
	anim = GetComponent.<Animation>();
}

function LookAt() {
    guiShow = true;
}

function LookAway() {
    guiShow = false;
}

function  Hold(Player : Transform) {
	if(Player.GetComponent.<WeaponScript>().Points >= price){
		move = true;
		Player.GetComponent.<WeaponScript>().Points -= price;
		Destroy(GetComponent.<BoxCollider>());
		if(GetComponent.<Animation>() != null)
		{
			anim.Play(animname);
		}
		for(var i : Transform in spawnActivate)
		{
			i.SendMessage("Activate", SendMessageOptions.DontRequireReceiver);
			//Play.SendMessage("Door", SendMessageOptions.DontRequireReceiver);
		}
	}
	if(move == false)
	{
		//Player.SendMessage("BuyGun", price, SendMessageOptions.DontRequireReceiver);
		//Player.SendMessage("BuyFrom", Self, SendMessageOptions.DontRequireReceiver);
	}
}

function Update () {
	if(move == true)
	{
		var step = speed * Time.deltaTime;
		
		// Move our position a step closer to the target.
		transform.position = Vector3.MoveTowards(transform.position, destination, step);
	}
}

function OnGUI ()
{
    if (guiShow == true && move == false) {
        var message = "Hold E to Open Door : " + price + " Points";
        GUI.DrawTexture(Rect(Screen.width / 2 - 148, Screen.height / 2 + 32, 300, 25), Box);
		GUI.Label(Rect(Screen.width / 2 - 73, Screen.height / 2 + 32, 150, 25), message, Style);
    }
}