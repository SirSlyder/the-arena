#pragma strict

var uID : int;
var LevelText : TextMesh;
var uTextName : String;
var uLevelName : String;
var uImage : Transform;

public class Level {
	var ID : int;
	var TextName : String;
	var LevelName : String;
	var LevelImage : Transform;
}

var Levels : Level[];

function Update () {
	if(gameObject.active == true)
	{
		for (var i : Level in Levels)
		{
			if(uID == i.ID)
			{
				uTextName = i.TextName;
				uLevelName = i.LevelName;
				uImage = i.LevelImage;
				uImage.gameObject.active = true;
			}
		}
	}
}

function StartLevel () {
	Application.LoadLevel(uLevelName);
}

function CycleFore () {
	uImage.gameObject.active = false;
	uID += 1;
	if(uID > Levels.length)
	{
		uID = 1;
	}
}

function CycleBack () {
	uImage.gameObject.active = false;
	uID -= 1;
	if(uID == 0)
	{
		uID = Levels.length;
	}
}