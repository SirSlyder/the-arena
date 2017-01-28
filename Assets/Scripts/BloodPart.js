#pragma strict

var timer : float;

function Update () {
	timer += Time.deltaTime;
	if(timer >= 6)
	{
		Destroy(gameObject);
	}
}