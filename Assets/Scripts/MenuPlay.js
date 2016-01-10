#pragma strict

var Controller : Animation;
var Selected : boolean = false;
var Other : Transform;
var Other2 : Transform;
var timer : float;
var levelselect : Transform;

function OnMouseDown() {
	if(Input.GetKeyDown(KeyCode.Mouse0))
	{
		Selected = !Selected;
		if(Selected == true)
		{
			timer = 0;
			Controller.Play("Play");
			Other.SendMessage("DeSelect", SendMessageOptions.DontRequireReceiver);
			Other2.SendMessage("DeSelect", SendMessageOptions.DontRequireReceiver);
		}
	}
}

function Update () {
	timer += Time.deltaTime;
	if(timer >= Controller["Play"].length && Selected == true)
	{
		levelselect.gameObject.active = true;
	}
}

function DeSelect () {
	Selected = false;
	levelselect.gameObject.active = false;
}