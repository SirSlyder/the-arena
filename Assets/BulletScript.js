#pragma strict

var Damage : float;
var moving : boolean = false;
var lastTarget : Transform;
var sparkt : Transform;

function Awake () {
	moving = true;
}

function Update () {
	if(moving == true)
	{
		GetComponent.<Rigidbody>().velocity = transform.TransformDirection (Vector3.forward * 50);
	}
}

function Damager (damage : float)
{
	Damage = damage;
}

function OnTriggerEnter (other : Collider)
{
	if(other.transform != lastTarget)
	{
		other.transform.SendMessage("Shot", Damage, SendMessageOptions.DontRequireReceiver);
	}
	if(other.gameObject.layer == 9)
	{
		var spark = Instantiate(sparkt, transform.position, sparkt.rotation);
		spark.gameObject.layer = 11;
		Destroy(gameObject);
	}
	lastTarget = other.transform;
}