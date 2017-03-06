#pragma strict

var tempcades : GameObject[];
var equipped : boolean = false;
var uitransform : Transform;
var uitransformmaterial : Material;
var uitransformmat : Color;
var uitransformmat2 : Color;
var got : boolean = false;
var ammo : int = 100;
var chargetimer : float;
var firetimer : float;
var animations : Animation;
var ammotext : UI.Text;

function Awake () {
	tempcades = GameObject.FindGameObjectsWithTag("TempcadeHolo");
}

function Update () {
	if(equipped == true)
	{
		firetimer += Time.deltaTime;
		ammotext.text = ammo + "%";
	}
	if(Input.GetKeyDown(KeyCode.Alpha1) || Input.GetKeyDown(KeyCode.Alpha2) || Input.GetKeyDown(KeyCode.Alpha3) || Input.GetKeyDown(KeyCode.Alpha4))
	{
		equipped = false;
	}
	if(equipped == true)
	{
		uitransformmaterial.color = uitransformmat2;
		for(var i : GameObject in tempcades)
		{
			i.active = true;
		}
	}
	else
	{
		uitransformmaterial.color = uitransformmat;
		if(equipped == false || ammo != 100)
		{
			for(var i : GameObject in tempcades)
			{
				i.active = false;
			}
		}
	}
	if(ammo != 100)
	{
		chargetimer += Time.deltaTime;
		if(chargetimer >= 1)
		{
			chargetimer = 0;
			ammo += 5;
		}
	}
	if(equipped == false && Input.GetKeyDown(KeyCode.Alpha5) && got == true)
	{
		equipped = true;
		firetimer = (0 - ((animations["DequipPistol"].length) + (animations["EquipTempcade"].length)));
	}
	if(firetimer >= 0 && equipped == true && ammo == 100)
	{
		if(Input.GetButtonDown("Fire1"))
		{
			var hit : RaycastHit;
			if(Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit, Mathf.Infinity))
			{
				Debug.Log("I've hit " + hit.transform.name);
				if(hit.transform.tag == "Tempcade")
				{
					ammo = 0;
					animations.Play("FireTempcade");
					hit.transform.SendMessage("DeployTempcade", SendMessageOptions.DontRequireReceiver);
				}
			}
		}
	}
}

function Slot5 () {
	got = true;
	uitransform.gameObject.active = true;
}

function TemporarilyDisable () {
	firetimer = 0 - (animations["DequipTempcade"].length + animations["InjectSyringe"].length + animations["EquipTempcade"].length);
}