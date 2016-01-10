#pragma strict

var attacktimer : float;
var speed : float;
var target : Transform;
var moving : NavMeshAgent;

private var dead : boolean = false;

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

var pvalue : int;

var lasthit : Rigidbody = null;

var player : Transform;

var health : float = 10;
var faint : boolean = false;
var damagehead : boolean = false;
var damagemspine : boolean = false;
var damagelarm : boolean = false;
var damagerarm : boolean = false;
var damagelleg : boolean = false;
var damagerleg : boolean = false;
var damagepelvis : boolean = false;

var location : Transform;
var moveSpeed : float = 1;
var rotationSpeed : float = 3;
var myTransform : Transform;
var anim2 : Animation;

var touching : Transform;

function Awake () {
	myTransform = transform;
	anim2 = GetComponent.<Animation>();
	target = GameObject.FindGameObjectWithTag("Player").transform;
}


function Update () {
	attacktimer += Time.deltaTime;
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
	if(health <= 0 && dead == false)
	{
		dead = true;
		anim2.Stop("EnemyWalk1");
		anim2.Stop("EnemyAttack1");
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
		GetComponent(NavMeshAgent).Stop(true);
		health = -1;
		player.SendMessage("ZedDown", SendMessageOptions.DontRequireReceiver);
	}
	if(health > 0)
	{
		myTransform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
		GetComponent(NavMeshAgent).destination = target.position;
		var path : NavMeshPath = NavMeshPath();
		moving.CalculatePath(target.position, path);
		if (path.status == NavMeshPathStatus.PathPartial) {
			Debug.Log("I can't get to the player!");
			FindClosestEnemy();
        } 
        else if(path.status == NavMeshPathStatus.PathComplete)
        {
        	Debug.Log("I can get to the player!");
        	target = GameObject.FindGameObjectWithTag("Player").transform;
        } 
		anim2.PlayQueued("EnemyWalk1", QueueMode.CompleteOthers);
	}
}

function FindClosestEnemy () : GameObject {
		// Find all game objects with tag Enemy
		var gos : GameObject[];
		gos = GameObject.FindGameObjectsWithTag("Sandbag"); 
		var closest : GameObject; 
		var distance = Mathf.Infinity; 
		var position = transform.position; 
		// Iterate through them and find the closest one
		for (var go : GameObject in gos)  { 
			var diff = (go.transform.position - position);
			var curDistance = diff.sqrMagnitude; 
			if (curDistance < distance) { 
				closest = go; 
				distance = curDistance; 
			} 
		} 
		target = closest.transform;
		return closest;
	}

function Damaged (damage : float)
{
	if(health > 0)
	{
		health -= damage;
		if(health > 0)
		{
			player.SendMessage("HitPoints", SendMessageOptions.DontRequireReceiver);
		}
		if(health <= 0)
		{
			player.SendMessage("KillPoints", pvalue, SendMessageOptions.DontRequireReceiver);
		}
	}
}

function OnTriggerStay (other : Collider)
{
	if(health > 0 && attacktimer >= anim2["EnemyAttack1"].length / 0.75)
	{
		if(other.tag != "Enemy")
		{
			attacktimer = 0;
			touching = other.transform;
			Debug.Log("I'm Touching " + other.name);
			if(target.tag == "Sandbag")
			{
				if(other.tag == "SandbagComponents")
				{
					moveSpeed = 0;
					StartCoroutine("Attack");
				}
			}
			if(other.transform == target.transform)
			{
				moveSpeed = 0;
				StartCoroutine("Attack");
				Debug.Log("I'm Attacking " + other.name);
			}
		}
	}
}

function OnTriggerExit (other : Collider) {
	if(health > 0)
	{
		if(other.name == target.name)
		{
			touching = null;
			moveSpeed = 0.75;
		}
	}
}

function Attack ()
{
	anim2.Stop("EnemyWalk1");
	anim2.CrossFade("EnemyAttack1");
	GetComponent(NavMeshAgent).Stop(true);
	yield WaitForSeconds(anim2["EnemyAttack1"].length / 2);
	if(touching != null && health > 0)
	{
		touching.SendMessage("PlayerHit", SendMessageOptions.DontRequireReceiver);
		Debug.Log("Hit " + touching.name);
	}
	yield WaitForSeconds(anim2["EnemyAttack1"].length / 2);
	GetComponent(NavMeshAgent).Resume();
	moveSpeed = 0.75;
}

function Health (heal : int)
{
	health = 15 * heal;
}

function Damage (part : String)
{
	Debug.Log("Damaged!");
	if(part == "head")
	{
		lasthit = head;
		pvalue = 100;
	}
	if(part == "mspine")
	{
		lasthit = mspine;
		pvalue = 70;
	}
	if(part == "pelvis")
	{
		lasthit = mspine;
		pvalue = 70;
	}
	if(part == "larm")
	{
		lasthit = larm;
		pvalue = 50;
	}
	if(part == "rarm")
	{
		lasthit = rarm;
		pvalue = 50;
	}
	if(part == "lleg")
	{
		lasthit = lknee;
		pvalue = 50;
	}
	if(part == "rleg")
	{
		lasthit = rknee;
		pvalue = 50;
	}
}
