#pragma strict

var player : Transform;
private var dead : boolean = false;
var moveScript : MonoBehaviour;
var script2 : MonoBehaviour;
var fragiled : boolean = false;

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
	if(dead == false && fragiled == false)
	{
		player.SendMessage("PlayerHit", SendMessageOptions.DontRequireReceiver);
	}
	else if(fragiled == true){
		player.SendMessage("Dead", SendMessageOptions.DontRequireReceiver);
	}
}

function PlayerHitTank(){
	if(dead == false && fragiled == false)
	{
		player.SendMessage("PlayerHitTank", SendMessageOptions.DontRequireReceiver);
	} else if(fragiled == true){
		player.SendMessage("Dead", SendMessageOptions.DontRequireReceiver);
	}
}

function Fragile(){
	fragiled = true;
}

function Grenade (id : int) {
	player.SendMessage("Grenade", id, SendMessageOptions.DontRequireReceiver);
}