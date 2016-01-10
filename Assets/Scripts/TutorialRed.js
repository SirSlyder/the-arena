#pragma strict

function OnTriggerEnter (other : Collider) {
	if(other.gameObject.tag == "GameController")
	{
		other.transform.position = Vector3(-5.83, 43, -21.54);
	}
}