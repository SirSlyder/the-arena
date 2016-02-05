#pragma strict

var content : Color;
var rend : Renderer;

function Awake () {
	var child = transform.Find("Contents");
	rend = child.GetComponent.<Renderer>();
}

function Update () {
	rend.material.color = content;
}

function ChangeColour (Colour : Color) {
	content = Colour;
	Debug.Log("I've Changed Colour");
}