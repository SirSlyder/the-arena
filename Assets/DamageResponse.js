#pragma strict

var player : Transform;
var script : MonoBehaviour;
private var dead : boolean = false;

function Dead () {
	Destroy(script);
	Destroy(GetComponent.<CharacterController>());
	GetComponent.<BoxCollider>().enabled = true;
	GetComponent.<Rigidbody>().isKinematic = false;
	dead = true;
}

function PlayerHit () {
	if(dead == false)
	{
		player.SendMessage("PlayerHit", SendMessageOptions.DontRequireReceiver);
	}
}