#pragma strict

var health : int = 50;

function Update ()
{
	if (health <= 0)
	{
		Destroy(gameObject);
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