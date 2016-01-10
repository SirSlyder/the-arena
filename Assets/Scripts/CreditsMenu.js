#pragma strict

var Controller : Animation;
var Selected : boolean = false;
var Other : Transform;
var Other2 : Transform;
var credittext : TextMesh;
var timer : float;

function OnMouseDown() {
	if(Input.GetKeyDown(KeyCode.Mouse0))
	{
		timer = 0;
		Selected = !Selected;
		if(Selected == true)
		{
			Controller.Play("Credits");
			Other.SendMessage("DeSelect", SendMessageOptions.DontRequireReceiver);
			Other2.SendMessage("DeSelect", SendMessageOptions.DontRequireReceiver);
		}
	}
}

function Update () {
	timer += Time.deltaTime;
	if(Selected == true && timer >= Controller["Credits"].length)
	{
		credittext.gameObject.active = true;
	}
}

function DeSelect () {
	Selected = false;
	credittext.gameObject.active = false;
}