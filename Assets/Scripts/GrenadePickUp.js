#pragma strict

var type : int;
var duration : float;

function Update () {
	duration += Time.deltaTime;
	if(duration >= 15 && duration < 25)
	{
		var flashduration1 : float;
		flashduration1 += Time.deltaTime;
		if(flashduration1 >= 0.5)
		{
			var meshes : MeshRenderer[];
			meshes = GetComponentsInChildren.<MeshRenderer>();
			for(var i : MeshRenderer in meshes)
			{
				i.enabled = false;
			}
		}
		if(flashduration1 >= 1)
		{
			flashduration1 = 0;
			meshes = GetComponentsInChildren.<MeshRenderer>();
			for(var i : MeshRenderer in meshes)
			{
				i.enabled = true;
			}
		}
	}
	if(duration >= 25)
	{
		var flashduration2 : float;
		flashduration2 += Time.deltaTime;
		if(flashduration2 >= 0.25)
		{
			meshes = GetComponentsInChildren.<MeshRenderer>();
			for(var i : MeshRenderer in meshes)
			{
				i.enabled = false;
			}
		}
		if(flashduration2 >= 0.5)
		{
			flashduration1 = 0;
			meshes = GetComponentsInChildren.<MeshRenderer>();
			for(var i : MeshRenderer in meshes)
			{
				i.enabled = true;
			}
		}
	}
	if(duration >= 30)
	{
		Destroy(gameObject);
	}
}

function OnTriggerEnter (other : Collider) {
	if(other.transform.tag == "Player")
	{
		other.gameObject.SendMessage("Grenade", type, SendMessageOptions.DontRequireReceiver);
		Destroy(gameObject);
	}
}