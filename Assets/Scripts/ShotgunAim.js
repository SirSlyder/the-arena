#pragma strict

var xrot : float;
var yrot : float;

function Update () {
	transform.localRotation.z = 0;
}

function Aim () {
	xrot = Random.Range(-15.0, 15.0);
	yrot = Random.Range(-15.0, 15.0);
	transform.localRotation.x = xrot;
	transform.localRotation.y = yrot;
}