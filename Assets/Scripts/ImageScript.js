﻿#pragma strict

function OnMouseDown () {
	var Selector : Transform = GameObject.FindGameObjectWithTag("LevelSelect").transform;
	Selector.SendMessage("StartLevel", SendMessageOptions.DontRequireReceiver);
}