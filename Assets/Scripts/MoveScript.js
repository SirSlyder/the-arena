#pragma strict

function Update () {
	if(Input.GetButton("Horizontal") || Input.GetButton("Vertical"))
	{
		//GetComponent.<Animation>().CrossFade("PlayerMove", QueueMode.);
	}
	if(Input.GetButtonUp("Horizontal") || Input.GetButtonUp("Vertical"))
	{
		//GetComponent.<Animation>().Play("PlayerStopMove");
	}
}