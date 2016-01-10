#pragma strict

var Controller : Transform;

function OnMouseDown() {
	if(Input.GetKeyDown(KeyCode.Mouse0))
	{
		Controller.SendMessage("Save", SendMessageOptions.DontRequireReceiver);
		Application.Quit();
	}
}