#pragma strict

var speed : float;
var bones : Transform[];
var selectedBone : int = 0;

function Update () {
	transform.position = Vector3.MoveTowards(transform.position, bones[selectedBone].position, speed);
	if(transform.position == bones[selectedBone].position)
	{
		if(selectedBone != 4)
		{
			selectedBone += 1;
		}
		else
		{
			selectedBone = 0;
			transform.position = bones[0].position;
		}
	}
}