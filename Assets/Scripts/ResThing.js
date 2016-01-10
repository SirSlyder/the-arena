#pragma strict

var resolution = "";
var restext : TextMesh;
var hotbar1 : Transform;
var hotbar2 : Transform;
var targettxt1 : TextMesh;
var targettxt2 : TextMesh;
var screenWidth : int;
var screenHeight : int;

function Update () {
	resolution = ("CurrentRes = " + screenWidth + "x" + screenHeight);
	restext.text = resolution;
	var screenPos : Vector3 = GetComponent.<Camera>().WorldToScreenPoint(hotbar1.position);
	targettxt1.text = ("target is " + screenPos.x + " pixels from the left and " + screenPos.y + " pixels from the bottom");
	var screenPos2 : Vector3 = GetComponent.<Camera>().WorldToScreenPoint(hotbar2.position);
	targettxt2.text = ("target is " + screenPos2.x + " pixels from the left and " + screenPos2.y + " pixels from the bottom");
	screenWidth = GetComponent.<Camera>().pixelWidth;
	screenHeight = GetComponent.<Camera>().pixelHeight;
}