#pragma strict

var Controller : Transform;

function Quit() {
	Controller.SendMessage("Save", SendMessageOptions.DontRequireReceiver);
	Debug.Log("Quit game.");
	Application.Quit();
}