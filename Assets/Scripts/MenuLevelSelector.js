#pragma strict

import System.Collections.Generic;

var uID : int;
var LevelText : UI.Text;
var uTextName : String;
var uLevelName : String;
var uImage : Sprite;

public class Level {
	var id : int;
	var TextName : String;
	var LevelName : String;
	var image : Sprite;
}

var Levels : List.<Level>;

function Update () {
	if(uID == 0)
	{
		uID = Levels.Count;
	}
	LevelText.text = uTextName;
	if(gameObject.active == true)
	{
		for (var i : Level in Levels)
		{
			if(i.id == uID)
			{
				uLevelName = i.LevelName;
				uImage = i.image;
				uTextName = i.TextName;
				GetComponent.<UI.Image>().sprite = uImage;
			}
		}
	}
}

function ChangeLevel (increase : int)
{
	if(uID == Levels.Count && uID > 0)
	{
		uID = 1;
	}
	else
	{
		uID += increase;
	}
}

function StartLevel () {
	Application.LoadLevel(uLevelName);
}