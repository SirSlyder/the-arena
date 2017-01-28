#pragma strict

import System.Collections.Generic;

var images : List.<Sprite>;
var transforms : List.<gunitem>;
var equipcolour : Color;
var dequipcolour : Color;
var material : Material;
var equipped : boolean = false;
var startcolour : Color;

function Start () {
	if(transforms.Count != 0)
	{
		material.color = startcolour;
	}
}

public class gunitem {
	var id : int;
	var transform : Transform;
}

function GunImage (type : int) {
	if(transforms.Count == 0)
	{
		GetComponent.<UI.Image>().sprite = images[type - 1];
		GetComponent.<UI.Image>().enabled = true;
	}
	else
	{
		GetComponent.<UI.Image>().enabled = false;
		for(var i : gunitem in transforms)
		{
			if(i.id == type)
			{
				i.transform.gameObject.active = true;
			}
			else
			{
				i.transform.gameObject.active = false;
			}
		}
	}
}

function Equipped ()
{
	material.color = equipcolour;
	equipped = true;
}

function Dequipped ()
{
	material.color = dequipcolour;
	equipped = false;
}