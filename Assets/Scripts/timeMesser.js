#pragma strict

@Range (0.0f, 2.0f)
var timeSlider : float;

function Update () {
	Time.timeScale = timeSlider;
}