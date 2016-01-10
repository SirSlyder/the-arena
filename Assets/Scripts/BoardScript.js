#pragma strict

var health = 30;

function Update () {
	if(health <= 0)
	{
		GetComponent.<Rigidbody>().isKinematic = false;
		gameObject.layer = 8;
	}
}

function Melee (Damage : int) {
	health -= Damage;
}
