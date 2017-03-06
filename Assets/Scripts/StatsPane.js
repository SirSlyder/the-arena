#pragma strict

var controller : GameObject;

var kills : int;
var deaths : int;
var perks : int;
var doors : int;
var rounds : int;
var highround : int;

var texts : UI.Text;

function Awake () {
	controller = GameObject.Find("GameController");
	controller.SendMessage("Stats", gameObject, SendMessageOptions.DontRequireReceiver);
}

function Update () {
	texts.text = "Kills: " + kills + "\nDeaths: " + deaths + "\nPerks Injected: " + perks + "\nDoors Opened: " + doors + "\nRounds Survived: " + rounds + "\nHighest Round Survived: " + highround;
}

function Kills (i : int)
{
	kills = i;
}

function Deaths (i : int)
{
	deaths = i;
}

function Perks (i : int)
{
	perks = i;
}

function Doors (i : int)
{
	doors = i;
}

function Rounds (i : int)
{
	rounds = i;
}

function HRound (i : int)
{
	highround = i;
}