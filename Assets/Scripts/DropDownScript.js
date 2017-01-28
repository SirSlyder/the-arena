#pragma strict

var DropDown : UI.Dropdown;
var levelplay : GameObject;
var stats : GameObject;
var credits : GameObject;

function Update () {
	if(DropDown.value == 1)
	{
		levelplay.active = true;
		credits.active = false;
		stats.active = false;
	}
	if(DropDown.value == 2)
	{
		credits.active = false;
		levelplay.active = false;
		stats.active = true;
	}
	if(DropDown.value == 3)
	{
		credits.active = true;
		levelplay.active = false;
		stats.active = false;
	}
}