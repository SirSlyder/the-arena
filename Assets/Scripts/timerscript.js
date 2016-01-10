#pragma strict

var timer : float;
var textm : TextMesh;
var racing : boolean = false;
var player : Transform;
var racestart : Transform;
var phonehint : Transform;
var door : Animation;

function Update () {
	if(racing == true)
	{
		timer += Time.deltaTime;
		textm.text = "TIME : " + timer;
	}
}

function BeginTime () {
	timer = 0;
	racing = true;
}

function EndTime () {
	if(timer >= 1.9)
	{
		racestart.SendMessage("Reset", SendMessageOptions.DontRequireReceiver);
		player.position = new Vector3(55.25, 0, 7);
		phonehint.gameObject.active = true;
	}
	racing = false;
}