#pragma strict

var self : Rigidbody;
var bloodclone : Rigidbody;
var splat : boolean = false;
var cloned : boolean = false;

function Update () {
	if(cloned == false)
	{
		var clone : Rigidbody;
		if(splat == false && self.transform.tag == "Blood")
		{
			clone = Instantiate( bloodclone, transform.position, transform.rotation );
			clone.transform.tag = "Blood";
		}
	}
}

function OnTriggerEnter (other : Collider)
{
	if(other.gameObject.layer == 9)
	{
		if(self.transform.tag == "Blood")
		{
			splat = true;
			self.isKinematic = true;
			Destroy (gameObject);
		}
	}
}