#pragma strict

var timer : float;

function Update () {
	if(gameObject.layer == 11)
	{
		timer += Time.deltaTime;
		if(timer >= 2)
		{
			Destroy(gameObject);
		}
	}
}