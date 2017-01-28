#pragma strict

var part : String;
var multiplier : float;
var parents : Transform;
var changedlayer : boolean = false;

function Shot (Damage : float)
{
	//Debug.Log("I got shot!");
	//Debug.Log("Shot " + transform.name);
	parents.SendMessage("Damage", part, SendMessageOptions.DontRequireReceiver);
	parents.SendMessage("Damaged", (Damage * multiplier), SendMessageOptions.DontRequireReceiver);
	//Debug.Log("Got shot for " + Damage * multiplier);
}

function Melee (Damage : float) {
	//Debug.Log("Damaged " + transform.name);
	parents.SendMessage("Damage", part, SendMessageOptions.DontRequireReceiver);
	parents.SendMessage("Damaged", (Damage * multiplier), SendMessageOptions.DontRequireReceiver);
	//Debug.Log("Got shot for " + Damage * multiplier);
}

function FireBallBurn (damage : int)
{
	parents.SendMessage("FireBallBurn", damage, SendMessageOptions.DontRequireReceiver);
}

function IceBallFreeze (damage : int)
{
	parents.SendMessage("IceBallFreeze", damage, SendMessageOptions.DontRequireReceiver);
}

function Update(){
	if(GetComponent.<Rigidbody>().isKinematic == false)
	{
		if(!changedlayer){
			gameObject.layer = 2;
			changedlayer = true;
		}
	}
}