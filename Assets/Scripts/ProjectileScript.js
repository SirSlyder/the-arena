#pragma strict

var damage : int;

function OnTriggerEnter (other : Collider) {
	if(other.transform.tag != "Player" && transform.tag == "fireball")
	{
		other.SendMessage("FireBallBurn", damage, SendMessageOptions.DontRequireReceiver);
		Debug.Log("Burnt something");
		Destroy(gameObject);
	}
	else if(other.transform.tag != "Player" && transform.tag == "iceball")
	{
		other.SendMessage("IceBallFreeze", damage, SendMessageOptions.DontRequireReceiver);
		Debug.Log("I've frozen up someone!");
		Destroy(gameObject);
	}
	else if(other.transform.tag != "Player" && transform.tag == "shockball")
	{
		other.SendMessage("Shock", damage, SendMessageOptions.DontRequireReceiver);
		Debug.Log("I've shocked someone!");
		Destroy(gameObject);
	}
}