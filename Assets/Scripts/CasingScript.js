#pragma strict

var duration : float = 0;

function Update () {
	if(tag == "bulletcasing")
	{
		duration += Time.deltaTime;
		if(duration >= 5)
		{
			Destroy(gameObject);
		}
	}
}