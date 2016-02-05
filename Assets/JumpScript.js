#pragma strict

var touching : Transform;

function OnTriggerEnter (other : Collider) {
	other.SendMessage("Jump", SendMessageOptions.DontRequireReceiver);
	touching == other.transform;
	other.transform.eulerAngles = transform.eulerAngles;
}

function OnTriggerExit (other : Collider)
{
	other.SendMessage("StopJump", SendMessageOptions.DontRequireReceiver);
}