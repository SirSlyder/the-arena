#pragma strict

var childA:GameObject; //attach child A in editor
var childB:GameObject; // attach child B in editor

function Start()
{

	if(GetComponent.<NetworkView>().isMine)
	{
		Destroy(childB);

		// or u can use childB.renderer.enabled=false; if u just want to hide it
	}
	else
	{
		Destroy(childA);
		// or u can use childA.renderer.enabled=false; if u just want to hide it
	}

}
