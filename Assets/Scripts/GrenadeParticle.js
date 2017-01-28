#pragma strict

function Start () {
	yield WaitForSeconds(1.5);
	Destroy(gameObject);
}