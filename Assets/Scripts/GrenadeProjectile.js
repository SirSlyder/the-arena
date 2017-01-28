#pragma strict

import System.Collections.Generic;

var airtime : float;
var radius : float;
var damage : float;
var force : float;
var active : boolean = false;
var contactDamage : float;
var particle : Transform;
var material : Material;
var gtype : g2Type;
var gelement : g2Element;
var body : Transform;

public enum g2Type {Explosive = 1, Spread = 2}
public enum g2Element {Explosive = 1, Fire = 2, Shock = 3, Water = 4, Petrol = 5}

public class GrenadeType {
	var ID : int;
	var type : g2Type;
	var element : g2Element;
	var Colour : Color;
}

var grenadeTypes : List.<GrenadeType>;

function Awake () {
	particle = transform.Find("Explosion").GetComponent.<Transform>();
}

function Start () {
	active = true;
}

function Update () {
	airtime += Time.deltaTime;
	if(airtime >= 5)
	{
		var insideRadius : Collider[] = Physics.OverlapSphere(transform.position, radius);
		for(var hit : Collider in insideRadius)
		{
			var proximity : float = (transform.position - hit.transform.position).magnitude;
			var effect : float = 1 - (proximity / radius);
			hit.SendMessage("Launched", transform, SendMessageOptions.DontRequireReceiver);
			if(effect > 0)
			{
				hit.SendMessage("Explode", (damage * effect), SendMessageOptions.DontRequireReceiver);
			}
			//Debug.Log("Blown Up " + hit.transform.name);
			//Debug.Log("Effect was " + effect);
			var rb : Rigidbody = hit.GetComponent.<Rigidbody>();
			if(rb != null)
			{
				rb.AddExplosionForce(force, transform.position, radius, 2.0F);
			}
		}
		particle.gameObject.active = true;
		particle.parent = null;
		Destroy(gameObject);
	}
}

function GrenadeTime (time : float)
{
	airtime = time;
}

function Grenade (type : int) {
	for(var i : GrenadeType in grenadeTypes)
	{
		if(i.ID == type)
		{
			gtype = i.type;
			gelement = i.element;
			body.GetComponent.<MeshRenderer>().materials[1].color = i.Colour;
		}
	}
}