#pragma strict

var Damage : float;
var moving : boolean = false;
var lastTarget : Transform;
var hits : int = 0;
var lifeSpan : float;

function Start () {
	moving = true;
}

function Update(){
	lifeSpan += Time.deltaTime;
	if(lifeSpan >= 5)
	{
		Destroy(gameObject);
	}
}

function Damager (damage : float)
{
	Damage = damage;
}

function OnTriggerEnter (other : Collider)
{
	if(other.transform != lastTarget && other.gameObject.layer == 15)
	{
		other.transform.SendMessage("Shot", Damage / (hits + 1), SendMessageOptions.DontRequireReceiver);
		hits += 1;
		//Debug.Log("I hit an object!");
		//Debug.Log("Damaged for " + Damage / (hits + 1));
		if(hits == 3)
		{
			Destroy(gameObject);
		}
	}
	else if(other.gameObject.layer != 15)
	{
		//Debug.Log("I hit " + other.transform.name);
		//Debug.Log("Destroying Self.");
		Destroy(gameObject);
	}
	lastTarget = other.transform;
}