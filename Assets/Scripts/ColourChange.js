#pragma strict

var colour : Color;
var rend : MeshRenderer;

function Start () {
	rend = GetComponent.<MeshRenderer>();
}

function Update () {
	rend.material.color = colour;
}