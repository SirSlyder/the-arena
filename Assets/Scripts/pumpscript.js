#pragma strict

var anim : Animation;

function Update () {
	if(!anim.IsPlaying("PumpWater"))
	{
		anim.Play("PumpWater");
	}
}