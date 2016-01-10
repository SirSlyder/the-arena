#pragma strict

var player : Transform;

function Shot (force : int) {
	gameObject.layer = 11;
	GetComponent.<Rigidbody>().isKinematic = false;
	GetComponent.<Rigidbody>().velocity = player.TransformDirection (Vector3.forward * force);
}