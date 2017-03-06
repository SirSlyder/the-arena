#pragma strict

var paused : boolean = false;
var gui : Transform;
var timescale : float;
var depthoffieldscript : MonoBehaviour;
var canPause : boolean = true;

function Update () {
	timescale = Time.timeScale;
	if(paused == true)
	{
		if(canPause)
		{
			Time.timeScale = 0;
		}
		Screen.lockCursor = false;
		gui.gameObject.active = false;
		depthoffieldscript.enabled = true;
	}
	else
	{
		Time.timeScale = 1;
		Screen.lockCursor = true;
		gui.gameObject.active = true;
		depthoffieldscript.enabled = false;
	}
	if(Input.GetKeyDown(KeyCode.Escape))
	{
		paused = !paused;
	}
}