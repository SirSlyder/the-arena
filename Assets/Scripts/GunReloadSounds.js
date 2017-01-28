#pragma strict

import System.Collections.Generic;

var currentguntype : GunType;

public enum GunType {Pistol = 1, Rifle = 2, Shotgun = 3, Revolver = 4};

private class GunSound {
	var Type : GunType;
	var Sounds : List.<AudioClip>;
	var Intervals : List.<float>;
}
var types : List.<GunSound>;


function Update () {

}