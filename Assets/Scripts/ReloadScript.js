#pragma strict

function Update () {
	if(GetComponent.<AudioSource>().isPlaying == false)
	{
		GetComponent.<AudioSource>().Play();
	}
}