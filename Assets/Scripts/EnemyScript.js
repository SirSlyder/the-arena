#pragma strict

var head : Rigidbody;
var mspine : Rigidbody;
var larm : Rigidbody;
var lelbow : Rigidbody;
var rarm : Rigidbody;
var relbow : Rigidbody;
var pelvis : Rigidbody;
var lhip : Rigidbody;
var lknee : Rigidbody;
var rhip : Rigidbody;
var rknee : Rigidbody;

var lasthit : Rigidbody = null;

var player : Transform;
var dead : boolean = false;

var health : int = 10;
var faint : boolean = false;
var damagehead : boolean = false;
var damagemspine : boolean = false;
var damagelarm : boolean = false;
var damagerarm : boolean = false;
var damagelleg : boolean = false;
var damagerleg : boolean = false;
var damagepelvis : boolean = false;

var location : Transform;
var target : Transform;
var moveSpeed : float = 1;
var rotationSpeed : float = 3;
var myTransform : Transform;
var anim2 : Animation;

function Awake () {
	myTransform = transform;
	anim2 = GetComponent.<Animation>();
}

function Start () {
	target = GameObject.FindWithTag("Player").transform;
}


function Update () {
	if(faint == true)
	{
		GetComponent(NavMeshAgent).Stop(true);
		faint = false;
		health -= 10;
		anim2.Stop("EnemyWalk");
	}
	if(damagehead == true)
	{
		damagehead = false;
		health -= 10;
		lasthit = head;
	}
	if(damagemspine == true)
	{
		damagemspine = false;
		health -= 5;
		lasthit = mspine;
	}
	if(damagelarm == true)
	{
		damagelarm = false;
		health -= 3;
		lasthit = larm;
	}
	if(damagerarm == true)
	{
		damagerarm = false;
		health -= 3;
		lasthit = rarm;
	}
	if(damagepelvis == true)
	{
		damagepelvis = false;
		health -= 6;
		lasthit = mspine;
	}
	if(damagelleg == true)
	{
		damagelleg = false;
		health -= 3;
		lasthit = lknee;
	}
	if(damagerleg == true)
	{
		damagerleg = false;
		health -= 2;
		lasthit = rknee;
	}
	if(health == 0 && dead == false)
	{
		anim2.Stop("EnemyWalk");
		dead = true;	
		head.isKinematic = false;
		mspine.isKinematic = false;
		larm.isKinematic = false;
		lelbow.isKinematic = false;
		rarm.isKinematic = false;
		relbow.isKinematic = false;
		pelvis.isKinematic = false;
		lhip.isKinematic = false;
		lknee.isKinematic = false;
		rhip.isKinematic = false;
		rknee.isKinematic = false;
		if(lasthit != "larm" || lasthit != "rarm" || lasthit != "lknee" || lasthit != "rknee")
		{
			lasthit.velocity = player.TransformDirection (Vector3.forward * 5);
		}
		else
		{
			lasthit.velocity = player.TransformDirection (Vector3.forward * 2);
		}
		GetComponent(NavMeshAgent).Stop(true);
		target = null;
		health = -1;
	}
	if(health > 1)
	{
		myTransform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
		GetComponent(NavMeshAgent).destination = target.position;
		anim2.PlayQueued("EnemyWalk", QueueMode.CompleteOthers);
	}
}

function Damaged (damage : float)
{
	health -= damage;
}

function Damage (part : String)
{
	Debug.Log("Damaged!");
	if(part == "head")
	{
		lasthit = head;
	}
	if(part == "mspine")
	{
		lasthit = mspine;
	}
	if(part == "pelvis")
	{
		lasthit = mspine;
	}
	if(part == "larm")
	{
		lasthit = larm;
	}
	if(part == "rarm")
	{
		lasthit = rarm;
	}
	if(part == "lleg")
	{
		lasthit = lknee;
	}
	if(part == "rleg")
	{
		lasthit = rknee;
	}
}
