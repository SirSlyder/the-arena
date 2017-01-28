#pragma strict

var duration : float;
var bring : boolean = false;
var enemies : GameObject[];
var flare : Transform;
var flare2 : Transform;

function Start () {
	bring = true;
	enemies = GameObject.FindGameObjectsWithTag("Enemy");
}

function Update () {
	if(bring == true)
	{
		duration += Time.deltaTime;
		if(duration < 10)
		{
			enemies = GameObject.FindGameObjectsWithTag("Enemy");
			for(var i : GameObject in enemies)
			{
				i.SendMessage("Flared", transform, SendMessageOptions.DontRequireReceiver);
			}
		}
		if(duration >= 10)
		{
			enemies = GameObject.FindGameObjectsWithTag("Enemy");
			for(var i : GameObject in enemies)
			{
				i.SendMessage("Player", transform, SendMessageOptions.DontRequireReceiver);
			}
		}
		if(duration >= 12)
		{
			Destroy(gameObject);
		}
	}
}