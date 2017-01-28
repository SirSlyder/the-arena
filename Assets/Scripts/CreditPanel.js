#pragma strict

var pos : int;

function Update () {
	GetComponent.<RectTransform>().position.y = pos;
}