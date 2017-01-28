#pragma strict

import System.Collections.Generic;

var weaponset : int;
var type : int;
var imagesets : List.<imageset>;

public class imageset
{
	var images : List.<Sprite>;
}

function GunImageSet (type : int) {
	weaponset = type - 1;
}

function GunImage (typed : int)
{
	type = typed - 1;
	GetComponent.<UI.Image>().sprite = imagesets[weaponset].images[typed - 1];
}