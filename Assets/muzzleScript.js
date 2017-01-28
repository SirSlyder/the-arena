#pragma strict

var anims : String;
var anim : Animation;

function Start () {
	anim = GetComponent.<Animation>();
}

function Update () {
	if(!anim.IsPlaying("muzzlespin" + anims))
	{
		anim.Play("muzzlespin" + anims);
	}
}