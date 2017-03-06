#pragma strict

import System.Collections.Generic;

var isTank : boolean = false;

var priorbag : Transform;

var gibsource : AudioSource;
var deathsounds : List.<AudioClip>;
var attacksounds : List.<AudioClip>;
var moansounds : List.<AudioClip>;
var moantimer : float;
var moantime : int;

var stalking : boolean;

var stopped : boolean;

var distance : float;

var stopdistance : float;

var grenadeDrop : Rigidbody;
var flareDrop : Rigidbody;
var grenadeChance : float;

var canGet : boolean;
var attacktimer : float;
var speed : float;
var target : Transform;
var moving : NavMeshAgent;
var decomposetimer : float;
var isJumping : boolean = false;
var fireEffect : Transform;
var burnTime : float;
var burnTimer : float;
var freezeTime : float;
var freezeEffect : Transform;
var shockTime : float;
var audios : AudioSource;

private var dead : boolean = false;
private var deaded : boolean = false;

var damagedfor : float;
var spawner : GameObject[];
var expectedMoveSpeed : float;

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

var child : Transform;

var pvalue : int;

var lasthit : Rigidbody = null;

var player : Transform;

var health : float = 100;
var faint : boolean = false;
var damagehead : boolean = false;
var damagemspine : boolean = false;
var damagelarm : boolean = false;
var damagerarm : boolean = false;
var damagelleg : boolean = false;
var damagerleg : boolean = false;
var damagepelvis : boolean = false;
var deadtimer : float = 0;

var location : Transform;
var moveSpeed : float = 1;
var rotationSpeed : float = 3;
var myTransform : Transform;
var anim2 : Animation;
var walkanimspeed : float;
var animspeed : float;

var touching : Transform;

function Awake () {
	player = FindClosestPlayer().transform;
	moantime = Random.Range(3, 6);
	myTransform = transform;
	anim2 = GetComponent.<Animation>();
	spawner = GameObject.FindGameObjectsWithTag("Spawner");
	moving = GetComponent.<NavMeshAgent>();
	target = player;
	anim2.wrapMode = WrapMode.Loop;
	anim2["recoil1"].layer = 1;
	anim2["recoil1"].wrapMode = WrapMode.Once;
	anim2["recoil2"].layer = 1;
	anim2["recoil2"].wrapMode = WrapMode.Once;
	anim2["attack1"].layer = 2;
	anim2["attack1"].wrapMode = WrapMode.Once;
	anim2["attack2"].layer = 2;
	anim2["attack2"].wrapMode = WrapMode.Once;
	head.isKinematic = true;
	mspine.isKinematic = true;
	larm.isKinematic = true;
	lelbow.isKinematic = true;
	rarm.isKinematic = true;
	relbow.isKinematic = true;
	pelvis.isKinematic = true;
	lhip.isKinematic = true;
	lknee.isKinematic = true;
	rhip.isKinematic = true;
	rknee.isKinematic = true;
	head.transform.tag = "Enemy";
	mspine.transform.tag = "Enemy";
	larm.transform.tag = "Enemy";
	lelbow.transform.tag = "Enemy";
	rarm.transform.tag = "Enemy";
	relbow.transform.tag = "Enemy";
	pelvis.transform.tag = "Enemy";
	lhip.transform.tag = "Enemy";
	lknee.transform.tag = "Enemy";
	rhip.transform.tag = "Enemy";
	rknee.transform.tag = "Enemy";
}


function Update () {
	if(expectedMoveSpeed == 0)
	{
		expectedMoveSpeed = Random.Range(2.5, 3.25);
	}
	if(dead == false)
	{
		moantimer += Time.deltaTime;
		if(moantimer >= moantime)
		{
			moantime = Random.Range(2, 5);
			moantimer = 0;
			audios.clip = moansounds[Random.Range(0, moansounds.Count)];
		}
		GetComponent.<NavMeshAgent>().speed = moveSpeed;
		if(target != player.parent && player.parent != null)
		{
			GetComponent(NavMeshAgent).stoppingDistance = 0;
		}
		else
		{
			GetComponent(NavMeshAgent).stoppingDistance = stopdistance;
		}
		if(shockTime > 0)
		{
			GetComponent(NavMeshAgent).Stop(true);
			freezeTime -= Time.deltaTime;
		}
		else
		{
			if(dead == false)
			{
				if(stalking == false)
				{
					GetComponent(NavMeshAgent).Resume();
				} else if(stalking && !child.GetComponent.<Renderer>().isVisible){
					GetComponent(NavMeshAgent).Resume();
				}
			}
		}
		if(stalking){
			if(child.GetComponent.<Renderer>().isVisible){
				Debug.Log("Visible.");
				anim2.Stop();
				GetComponent(NavMeshAgent).Stop(true);
			}
			else{
				GetComponent(NavMeshAgent).Resume();
			}
		}
	}
	if(freezeTime > 0)
	{
		moveSpeed = expectedMoveSpeed / 4;
		freezeEffect.gameObject.active = true;
		freezeTime -= Time.deltaTime;
	}
	else
	{
		freezeEffect.gameObject.active = false;
	}
	if(burnTime > 0)
	{
		fireEffect.gameObject.active = true;
		burnTime -= Time.deltaTime;
		burnTimer += Time.deltaTime;
	}
	else
	{
		fireEffect.gameObject.active = false;
	}
	if(burnTimer >= 0.2)
	{
		health -= 5;
		burnTimer = 0;
	}
	if(freezeTime <= 0)
	{
		moveSpeed = expectedMoveSpeed;
	}
	if(dead == true)
	{
		decomposetimer += Time.deltaTime;
		if(decomposetimer >= 10)
		{
			Destroy(gameObject);
		}
	}
	attacktimer += Time.deltaTime;
	if(attacktimer >= anim2["attack1"].length && dead == false)
	{
		if(touching == null && dead == false && isJumping == false)
		{
			if(!stalking)
			{
				GetComponent(NavMeshAgent).Resume();
			} else if(stalking && !child.GetComponent.<Renderer>().isVisible)
			{
				GetComponent(NavMeshAgent).Resume();
			}
		}
	}
	if(faint == true)
	{
		GetComponent(NavMeshAgent).Stop(true);
		faint = false;
		health -= 10;
		anim2.Stop("walk");
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
		anim2.Stop();
		grenadeChance = Random.Range(0, 10);
		if(grenadeChance >= 8 && grenadeChance < 9)
		{
			var gclone = Instantiate(grenadeDrop, transform.position, transform.rotation);
			gclone.gameObject.active = true;
			gclone.velocity = transform.TransformDirection(Vector3.up);
		}
		if(grenadeChance >= 9 && grenadeChance <= 10)
		{
			var g2clone = Instantiate(flareDrop, transform.position, transform.rotation);
			g2clone.gameObject.active = true;
			g2clone.velocity = transform.TransformDirection(Vector3.up);
		}
		if(GetComponent(NavMeshAgent).enabled == true)
		{
			GetComponent(NavMeshAgent).Stop(true);
		}
		if(isTank == false)
		{
			GameObject.Find("Host").GetComponent.<GameHost>().ZedDown();
		}
		if(lasthit != head && lasthit != null)
		{
			if(damagedfor != 0)
			{
				//lasthit.velocity = player.TransformDirection (Vector3.forward * damagedfor / 10);
			}
			else{
				//lasthit.velocity = player.TransformDirection (Vector3.forward * 1);
			}
		}
		Destroy(GetComponent.<NavMeshAgent>());
		Destroy(GetComponent.<BoxCollider>());
		Destroy(GetComponent.<CharacterController>());
		if(deaded == false)
		{
			audios.clip = deathsounds[Random.Range(0, deathsounds.Count)];
			audios.Play();
			deaded = true;
		}
		for(var i : GameObject in spawner)
		{
			i.GetComponent.<SpawnScript>().ZombieDown();
		}
	}
	if(!anim2.IsPlaying("death1") && dead == true){
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
	}
	if(health > 0 && isJumping == false)
	{
		var path : NavMeshPath = NavMeshPath();
		var path2 : NavMeshPath = NavMeshPath();
		//myTransform.Translate(Vector3.forward * Time.deltaTime);
		if(target != null)
		{
			GetComponent(NavMeshAgent).destination = target.position;
		}
		if(target != null)
		{
			moving.CalculatePath(target.position, path);
			if(player.parent != null)
			{
				moving.CalculatePath(player.parent.position, path2);
			}
		}
		if (path.status == NavMeshPathStatus.PathPartial) {
			//Debug.Log("I can't get to the target!");
			canGet = false;
			target = priorbag;
        } 
        else if(path2.status == NavMeshPathStatus.PathComplete)
        {
        	//Debug.Log("I can get to the player!");
        	canGet = true;
        	target = GameObject.FindGameObjectWithTag("Player").transform;
        } 
        if(GetComponent(NavMeshAgent).remainingDistance > 25){
        	var spawners : GameObject[];
        	spawners = GameObject.FindGameObjectsWithTag("Spawner");
        	for(var i : GameObject in spawners){
        		i.SendMessage("Despawn", SendMessageOptions.DontRequireReceiver);
        	}
        }
        if(expectedMoveSpeed < 4)
        {
        	anim2["walk"].speed = (moveSpeed * walkanimspeed);
			anim2.Play("walk");
		}
		else{
			anim2["run"].speed = (moveSpeed * walkanimspeed / 2);
			anim2.Play("run");
		}
	}
	if(isJumping == true)
	{
		myTransform.Translate(Vector3.forward * 2 * Time.deltaTime);
		GetComponent.<Rigidbody>().isKinematic = false;
		if(GetComponent(NavMeshAgent).enabled == true)
		{
			GetComponent(NavMeshAgent).Stop(true);
			GetComponent(NavMeshAgent).enabled = false;
		}
	}
}

function FindClosestEnemy () : GameObject {
	// Find all game objects with tag Enemy
	var candidates : GameObject[];
	candidates = GameObject.FindGameObjectsWithTag("Sandbag");
	var closest : GameObject; 
	var distance = Mathf.Infinity; 
	var position = transform.position; 
	// Iterate through them and find the closest one
	for (var go : GameObject in candidates)  { 
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

function Stalk () {
	stalking = true;
	GetComponent.<AudioSource>().volume = 0;
}

function FindClosestPlayer () : GameObject {
	// Find all game objects with tag Enemy
	var candidates : GameObject[];
	candidates = GameObject.FindGameObjectsWithTag("MainCamera");
	var closest : GameObject; 
	var distance = Mathf.Infinity; 
	var position = transform.position; 
	// Iterate through them and find the closest one
	for (var go : GameObject in candidates)  { 
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
		damagedfor = damage / 10;
		health -= damage;
		if(isTank == false)
		{
			if(health > 0)
			{
				player.GetComponent.<WeaponScript>().HitPoints();
			}
			if(health <= 0)
			{
				player.GetComponent.<WeaponScript>().KillPoints(pvalue);
				if(lasthit == head){
					player.GetComponent.<WeaponScript>().Headshot();
				}
			}
		}
		else{
			if(health <= 0)
			{
				player.GetComponent.<WeaponScript>().KillPoints(500);
				if(lasthit == head){
					player.GetComponent.<WeaponScript>().Headshot();
				}
			}
		}
	}
}

function TankSpeed () {
	expectedMoveSpeed = Random.Range(1.5, 1.75);
	isTank = true;
}

function Normal () {
	expectedMoveSpeed = Random.Range(2.3, 2.8);
}

function MehFast () {
	expectedMoveSpeed = Random.Range(2.95, 3.05);
}

function Fast () {
	expectedMoveSpeed = Random.Range(4, 4.25);
}

function Jump () {
	if(dead == false)
	{
		isJumping = true;
		GetComponent(NavMeshAgent).enabled = false;
	}
}

function StopJump () {
	yield WaitForSeconds(anim2["EnemyLand"].length);
	isJumping = false;
	GetComponent(NavMeshAgent).enabled = true;
	GetComponent(NavMeshAgent).ResetPath();
	GetComponent.<Rigidbody>().isKinematic = true;
	target = GameObject.FindGameObjectWithTag("Player").transform;
}

function OnTriggerStay (other : Collider)
{
	if(health > 0 && attacktimer >= anim2["attack1"].length / 0.75 && player != null && target != null)
	{
		if(other.tag != "Enemy" && other.gameObject.layer != 9)
		{
			attacktimer = 0;
			touching = other.transform;
			//Debug.Log("I'm Touching " + other.name);
			if(target.tag == "Sandbag")
			{
				if(other.tag == "SandbagComponents")
				{
					StartCoroutine("Attack");
				}
			}
			else if(other.transform == target.transform)
			{
				StartCoroutine("Attack");
				//Debug.Log("I'm Attacking " + other.name);
			}
		}
	}
	if(other.transform == target.transform)
	{
		GetComponent.<NavMeshAgent>().Stop(true);
	}
}

function OnTriggerExit (other : Collider) {
	if(health > 0 && Vector3.Distance(transform.position, player.position) != stopdistance)
	{
		touching = null;
		moveSpeed = expectedMoveSpeed;
	}
}

function Attack ()
{
	var attackchoice : int = Random.Range(1, 3);
	attacktimer = 0;
	//anim2.Stop("walk");
	anim2.CrossFade("attack" + attackchoice);
	audios.clip = attacksounds[Random.Range(0, attacksounds.Count)];
	audios.Play();
	if(GetComponent(NavMeshAgent).enabled == true)
	{
		GetComponent(NavMeshAgent).Stop(true);
	}
	if(attackchoice == 1)
	{
		yield WaitForSeconds(anim2["attack1"].length / 2);
		if(touching != null && health > 0)
		{
			if(isTank == false)
			{
				touching.SendMessage("PlayerHit", SendMessageOptions.DontRequireReceiver);
				//Debug.Log("Hit " + touching.name);
			}
			else if(isTank == true)
			{
				touching.SendMessage("PlayerHitTank", SendMessageOptions.DontRequireReceiver);
				//Debug.Log("Hit " + touching.name);
			}
		}
		yield WaitForSeconds(anim2["attack1"].length / 2);
		if(dead == false && touching == null && isJumping == false && distance > 1)
		{
			GetComponent(NavMeshAgent).Resume();
			moveSpeed = expectedMoveSpeed;
		}
	}
	else{
		yield WaitForSeconds(anim2["attack2"].length / 2);
		if(touching != null && health > 0)
		{
			touching.SendMessage("PlayerHit", SendMessageOptions.DontRequireReceiver);
			//Debug.Log("Hit " + touching.name);
		}
		else if(isTank == true)
		{
			touching.SendMessage("PlayerHitTank", SendMessageOptions.DontRequireReceiver);
			//Debug.Log("Hit " + touching.name);
		}
		if(dead == false && touching == null && isJumping == false && distance > 1)
		{
			GetComponent(NavMeshAgent).Resume();
			moveSpeed = expectedMoveSpeed;
		}
	}
}

function Health (heal : float)
{
	health = 100 + (50 * (heal - 1));
}

function HealthWeak(){
	health = 1;
}

function Explode (damage : float)
{
	health -= damage;
}

function Launched (launched : Transform)
{
	if(health <= 0)
	{
		yield WaitForSeconds(0.01);
		if(launched != null)
		{
			launched.SendMessage("Push", GetComponent.<Rigidbody>(), SendMessageOptions.DontRequireReceiver);
		}
	}
}

function Modify (hp : float){
	health = health * hp;
}

function Damage (part : String)
{
	//Debug.Log("Damaged!");
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
	if(!anim2.IsPlaying("recoil1") && !anim2.IsPlaying("recoil2") && dead == false)
	{
		var recoilchoice : int;
		recoilchoice = Random.Range(1, 3);
		anim2.CrossFade("recoil" + recoilchoice);
	}
}

function FireBallBurn (Instant : int)
{
	health -= Instant;
	burnTime = 5;
}

function IceBallFreeze (Instant : int)
{
	health -= Instant;
	freezeTime = 5;
}

function Shock (Instant : int)
{
	health -= Instant;
}

function Flared (trans : Transform)
{
	var path2 : NavMeshPath = NavMeshPath();
	if (path2.status == NavMeshPathStatus.PathPartial) {
		//Debug.Log("I can't get to the player!");
		canGet = false;
		FindClosestEnemy();
    } 
    else
    {
		target = trans;
	}
}

function Player ()
{
	target = GameObject.FindGameObjectWithTag("Player").transform;
}

function Target (targ : Transform) {
	target = targ;
	priorbag = targ;
}