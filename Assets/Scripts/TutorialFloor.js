#pragma strict

function OnTriggerEnter (other : Collider) {
	if(other.gameObject.tag == "GameController")
	{
		other.transform.position = Vector3(1, 43, 0);
	}
	if(other.gameObject.tag == "Item")
	{
		Destroy(other);	
	}
}