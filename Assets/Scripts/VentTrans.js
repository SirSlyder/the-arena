#pragma strict

var trans : float;
var self : GameObject;

function Update () {
	self.GetComponent.<Renderer>().material.color.a = trans;
}