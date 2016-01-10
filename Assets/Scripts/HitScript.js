#pragma strict

var Wall : Transform;

function HitLight () 
{
	Wall.SendMessage("HitLight", SendMessageOptions.DontRequireReceiver);
}

function HitLightPhone () 
{
	Wall.SendMessage("HitLightPhone", SendMessageOptions.DontRequireReceiver);
}

function HitMedium () 
{
	Wall.SendMessage("HitMedium", SendMessageOptions.DontRequireReceiver);
}

function HitMediumPhone () 
{
	Wall.SendMessage("HitMediumPhone", SendMessageOptions.DontRequireReceiver);
}

function HitHeavy () 
{
	Wall.SendMessage("HitHeavy", SendMessageOptions.DontRequireReceiver);
}

function HitHeavyPhone () 
{
	Wall.SendMessage("HitHeavyPhone", SendMessageOptions.DontRequireReceiver);
}

function HitPistol () 
{
	Wall.SendMessage("HitPistol", SendMessageOptions.DontRequireReceiver);
}

function HitPistolPhone () 
{
	Wall.SendMessage("HitPistolPhone", SendMessageOptions.DontRequireReceiver);
}

function HitShotgun () 
{
	Wall.SendMessage("HitShotgun", SendMessageOptions.DontRequireReceiver);
}

function HitShotgunPhone () 
{
	Wall.SendMessage("HitShotgunPhone", SendMessageOptions.DontRequireReceiver);
	Debug.Log("ShotgunPhone!");
}

function HitRifle () 
{
	Wall.SendMessage("HitRifle", SendMessageOptions.DontRequireReceiver);
}

function HitRiflePhone () 
{
	Wall.SendMessage("HitRiflePhone", SendMessageOptions.DontRequireReceiver);
}