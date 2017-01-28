#pragma strict

var player : Transform;
private var dead : boolean = false;
var moveScript : MonoBehaviour;
var script2 : MonoBehaviour;

function Dead () {
	player.GetComponent.<BoxCollider>().enabled = true;
	player.parent = null;
	gameObject.active = false;
	player.GetComponent.<Rigidbody>().isKinematic = false;
	dead = true;
}

function Explode (dam : float)
{
	player.SendMessage("Explode", dam, SendMessageOptions.DontRequireReceiver);
}

function PlayerHit () {
	if(dead == false)
	{
		player.SendMessage("PlayerHit", SendMessageOptions.DontRequireReceiver);
	}
}

function Grenade (id : int) {
	player.SendMessage("Grenade", id, SendMessageOptions.DontRequireReceiver);
}