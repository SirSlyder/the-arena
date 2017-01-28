#pragma strict

var self : Rigidbody;
var bloodclone : Rigidbody;
var splat : boolean = false;
var cloned : boolean = false;
var timer2 : float;

function Start () {
	if(!cloned)
	{
		GetComponent.<Rigidbody>().velocity = transform.TransformDirection(Random.Range(-0.5, 0.5), 0, -5);
	}
}

function Update () {
	self.transform.rotation.x = 0;
	self.transform.rotation.y = 0;
	self.transform.rotation.z = 0;
	if(cloned == false)
	{
		var timer : float;
		timer += Time.deltaTime;
		var clone : Rigidbody;
		if(self.transform.tag == "Blood" && splat == false && timer >= 0.01)
		{
			timer = 0;
			clone = Instantiate( bloodclone, transform.position, transform.rotation );
			clone.gameObject.active = true;
		}
	}
	timer2 += Time.deltaTime;
	if(timer2 >= 5)
	{
		Destroy(gameObject);
	}
}

function OnTriggerEnter (other : Collider)
{
	if(other.transform.tag == "World")
	{
		if(self.transform.tag == "Blood")
		{
			splat = true;
			self.isKinematic = true;
			Destroy (gameObject);
		}
		else
		{
			splat = true;
			self.transform.localScale.x = 0.1;
			self.transform.rotation.x = 0;
			self.transform.rotation.y = 0;
			self.transform.rotation.z = 0;
			self.transform.localScale.y = Random.Range(0.01, 0.025);
			self.transform.localScale.z = 0.1;
			GetComponent.<SphereCollider>().isTrigger = false;
		}
	}
}