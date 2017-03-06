#pragma strict

var trans : float;
var self : GameObject;

function Awake () {
 	self = gameObject;
}

function Update () {
	self.GetComponent.<Renderer>().material.color.a = trans;
}