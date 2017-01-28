#pragma strict

var BagObject : Transform;

function PlayerHit () {
	BagObject.SendMessage("Damage", SendMessageOptions.DontRequireReceiver);
}