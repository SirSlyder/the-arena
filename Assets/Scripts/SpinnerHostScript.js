#pragma strict

import System.Collections.Generic;

var SpinnerList : GameObject[];
var Spinners : List.<GameObject>;
var weapon1 : int;
var initialweapon1 : int;
var weapon2 : int;
var initialweapon2 : int;

function Start () {
	SpinnerList = GameObject.FindGameObjectsWithTag("Spinner");
	for(var i : GameObject in SpinnerList)
	{
		Spinners.Capacity += 1;
		Spinners.Add(i);
	}
	Spinners[Random.Range(0, (Spinners.Count - 1))].SendMessage("Activated", SendMessageOptions.DontRequireReceiver);
}

function MeleeUse (type : int) {
	for(var i : GameObject in Spinners)
	{
		i.SendMessage("MInUse", type, SendMessageOptions.DontRequireReceiver);
	}
}

function NewSpinner (type : Transform)
{
	var select : int;
	select = Random.Range(0, (Spinners.Count - 1));
	if(Spinners[select].transform != type)
	{
		Spinners[select].SendMessage("Activated", SendMessageOptions.DontRequireReceiver);
	}
	else
	{
		transform.SendMessage("NewSpinner");
	}
}

function Update(){
	if(weapon1 != initialweapon1)
	{
		initialweapon1 = weapon1;
		for(var i : GameObject in Spinners)
		{
			i.SendMessage("InUse2", weapon2, SendMessageOptions.DontRequireReceiver);
		}
	}
	if(weapon2 != initialweapon2)
	{
		initialweapon2 = weapon2;
		for(var i : GameObject in Spinners)
		{
			i.SendMessage("InUse2", weapon2, SendMessageOptions.DontRequireReceiver);
		}
	}
}