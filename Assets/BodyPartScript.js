#pragma strict

var part : String;
var multiplier : float;
var parent : Transform;

function Shot (Damage : float)
{
	Debug.Log("Shot " + transform.name);
	parent.SendMessage("Damage", part, SendMessageOptions.DontRequireReceiver);
	parent.SendMessage("Damaged", (Damage * multiplier), SendMessageOptions.DontRequireReceiver);
}

function Melee (Damage : float) {
	Debug.Log("Damaged " + transform.name);
	parent.SendMessage("Damage", part, SendMessageOptions.DontRequireReceiver);
	parent.SendMessage("Damaged", (Damage * multiplier), SendMessageOptions.DontRequireReceiver);
}