#pragma strict

var anim : Animation;

function Awake () {
	anim = GetComponent.<Animation>();
}

function PowerUp () {
	anim.Play("PedastalOpen");
}