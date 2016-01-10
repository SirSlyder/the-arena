#pragma strict

function OnMouseDown () {
	var Selector : Transform = GameObject.FindGameObjectWithTag("LevelSelect").transform;
	Selector.SendMessage("CycleFore", SendMessageOptions.DontRequireReceiver);
}