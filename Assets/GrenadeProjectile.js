#pragma strict

var airtime : float;
var radius : float;
var damage : float;
var force : float;
var active : boolean = false;
var contactDamage : float;
var particle : Transform;

function Awake () {
	particle = transform.Find("Small explosion").GetComponent.<Transform>();
}

function Update () {
	if(active == true)
	{
		airtime += Time.deltaTime;
	}
}

function OnTriggerEnter (other : Collider) {
	if(active == true)
	{
		if(airtime >= 0.2)
		{
			var insideRadius : Collider[] = Physics.OverlapSphere(transform.position, radius);
			for(var hit : Collider in insideRadius)
			{
				var proximity : float = (transform.position - hit.transform.position).magnitude;
				var effect : float = 1 - (proximity / radius);
				hit.SendMessage("Launched", transform, SendMessageOptions.DontRequireReceiver);
				hit.SendMessage("Explode", (damage * effect), SendMessageOptions.DontRequireReceiver);
			}
			yield WaitForSeconds(0.05);
			particle.gameObject.active = true;
			particle.parent = null;
			Destroy(gameObject);
		}
		else
		{
			other.SendMessage("Shot", contactDamage, SendMessageOptions.DontRequireReceiver);
			Destroy(gameObject);
		}
	}
}

function Push () {
	var insideRadius : Collider[] = Physics.OverlapSphere(transform.position, radius);
	for(var hit : Collider in insideRadius)
	{
		var rb : Rigidbody = hit.GetComponent.<Rigidbody>();
		if(rb != null)
		{
			rb.AddExplosionForce(force, transform.position, radius, 2.0F);
		}
	}
}

function Grenade (type : int)
{
	active = true;
}