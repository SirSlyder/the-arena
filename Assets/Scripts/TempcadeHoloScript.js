#pragma strict

var anim : Animation;

function Awake () {
	anim = GetComponent.<Animation>();
}

function DeployTempcade () {
	anim.Play("TempcadeDeploy");
}