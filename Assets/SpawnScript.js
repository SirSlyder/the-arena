#pragma strict
import System.Collections.Generic;

var spawntimer : float;
var spawners : GameObject[];
var count : int;
var zombies : List.<Transform>;
var round : int;
var spawntime : float;
var activated : boolean;

function Awake () {
	spawners = GameObject.FindGameObjectsWithTag("Spawner");
	spawntime = Random.Range(7.0, 12.0);
}

function Update () {
	spawntimer += Time.deltaTime;
	if(spawntimer >= spawntime && count != 0 && activated == true)
	{
		spawntime = Random.Range(7, 12);
		spawntimer = 0;
		var zombietype : int = Random.Range(1, zombies.Count);
		var clone = Instantiate(zombies[zombietype - 1], gameObject.transform.position, gameObject.transform.rotation);
		clone.gameObject.active = true;
		if(round == 6)
		{
			var fastprobability : int = Random.Range(0, round);
			if(fastprobability < 3)
			{
				clone.gameObject.SendMessage("Fast", SendMessageOptions.DontRequireReceiver);
			} 
		}
		clone.gameObject.SendMessage("Health", round, SendMessageOptions.DontRequireReceiver);
		for (var i : GameObject in spawners)
		{
			i.SendMessage("UsedZombie", SendMessageOptions.DontRequireReceiver);
		}
	}
}

function NewRound (zedcount : int) {
	round += 1;
	spawntimer = -4;
	count = zedcount;
}

function Activate () {
	activated = true;
}

function UsedZombie () {
	count -= 1;
}