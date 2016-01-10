#pragma strict

var multiplier : float = 1.0;
var master : Transform;
var bodypart : int;

function Shot (damage : float) {
	master.SendMessage("Damage", bodypart);
	master.SendMessage("Damaged", (damage * multiplier));
}