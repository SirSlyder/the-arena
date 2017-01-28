#pragma strict

var mat : Material;
var grenades : int;
var type : int;

function Update () {
	if(grenades == type)
	{
		GetComponent.<UI.Image>().material = mat;
	}
}

function Amount (amount : int) {
	grenades = amount;
}