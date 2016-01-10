#pragma strict

var health : int = 50;
var cube1 : Rigidbody;
var cube2 : Rigidbody;
var cube3 : Rigidbody;
var cube4 : Rigidbody;
var cube5 : Rigidbody;
var cube6 : Rigidbody;
var cube7 : Rigidbody;
var cube8 : Rigidbody;
var cube9 : Rigidbody;
var cube10 : Rigidbody;
var cube11 : Rigidbody;
var cube12 : Rigidbody;
private var launchedCubes : boolean = false;

function Update ()
{
	if (health <= 0)
	{
		gameObject.layer = 9;
		if(launchedCubes == false)
		{
			cube1.isKinematic = false;
			cube1.gameObject.layer = 9;
			cube2.isKinematic = false;
			cube2.gameObject.layer = 9;
			cube3.isKinematic = false;
			cube3.gameObject.layer = 9;
			cube4.isKinematic = false;
			cube4.gameObject.layer = 9;
			cube5.isKinematic = false;
			cube5.gameObject.layer = 9;
			cube6.isKinematic = false;
			cube6.gameObject.layer = 9;
			cube7.isKinematic = false;
			cube7.gameObject.layer = 9;
			cube8.isKinematic = false;
			cube8.gameObject.layer = 9;
			cube9.isKinematic = false;
			cube9.gameObject.layer = 9;
			cube10.isKinematic = false;
			cube10.gameObject.layer = 9;
			cube11.isKinematic = false;
			cube11.gameObject.layer = 9;
			cube12.isKinematic = false;
			cube12.gameObject.layer = 9;
			cube1.velocity.z = -1;
			cube1.velocity.x = -2;
			cube2.velocity.z = -1;
			cube3.velocity.z = -1;
			cube3.velocity.x = 2;
			cube4.velocity.z = -2;
			cube4.velocity.x = -2;
			cube5.velocity.z = -2;
			cube6.velocity.z = -2;
			cube6.velocity.x = 2;
			cube7.velocity.z = -3;
			cube7.velocity.x = -2;
			cube8.velocity.z = -3;
			cube9.velocity.z = -3;
			cube9.velocity.x = 2;
			cube10.velocity.z = -4;
			cube10.velocity.x = -2;
			cube11.velocity.z = -4;
			cube12.velocity.z = -4;
			cube12.velocity.x = 2;
			launchedCubes = true;
		}
	}
}

function HitLight () 
{
	health -= 10;
}

function HitLightPhone () 
{
	health -= 15;
}

function HitMedium () 
{
	health -= 13;
}

function HitMediumPhone () 
{
	health -= 19.5;
}

function HitHeavy () 
{
	health -= 16;
}

function HitHeavyPhone () 
{
	health -= 24;
}

function HitPistol () 
{
	health -= 12;
}

function HitPistolPhone () 
{
	health -= 18;
}

function HitShotgun () 
{
	health -= 5;
}

function HitShotgunPhone () 
{
	health -= 7.5;
}

function HitRifle () 
{
	health -= 10;
}

function HitRiflePhone () 
{
	health -= 15;
}