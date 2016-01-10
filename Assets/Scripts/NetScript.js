#pragma strict

var xtarget : float;
var ytarget : float;
var flying : boolean = false;
var self : Transform;
var self2 : Rigidbody;

function Update () {
	if(flying == true)
	{
		self2.isKinematic = false;
		self2.velocity = transform.TransformDirection (Vector3.forward * 25);
		self.localScale.x = xtarget;
		self.localScale.z = ytarget;
	}
}

function X (other : float)
{
	xtarget = other;
	flying = true;
}

function Y (other : float)
{
	ytarget = other;
	flying = true;
}