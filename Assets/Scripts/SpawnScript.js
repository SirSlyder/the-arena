#pragma strict
import System.Collections.Generic;

var spawntimer : float;
var spawners : GameObject[];
var count : int;
var zombies : List.<Transform>;
var round : int;
var spawntime : float;
var activated : boolean;
var zombieLimit : int;
var sandbag : Transform;

function Awake () {
	spawners = GameObject.FindGameObjectsWithTag("Spawner");
	spawntime = Random.Range(7.0, 12.0);
}

function Update () {
	spawntimer += Time.deltaTime;
	if(spawntimer >= spawntime && count != 0 && activated == true && zombieLimit != 20)
	{
		spawntime = Random.Range(7, 12);
		spawntimer = 0;
		var zombietype : int = Random.Range(1, zombies.Count + 1);
		var clone = Instantiate(zombies[zombietype - 1], gameObject.transform.position, gameObject.transform.rotation);
		clone.gameObject.active = true;
		if(sandbag != null)
		{
			clone.gameObject.SendMessage("Target", sandbag, SendMessageOptions.DontRequireReceiver);
			if(sandbag.tag == "InstaSpawn"){
				clone.GetComponent.<Animation>().Play("raise");
				GetComponent.<Animation>().Play("sandSpew");
			}
		}
		if(round >= 2)
		{
			var mehfastprobability : float = Random.Range(0, round);
			if(mehfastprobability > 1.25)
			{
				clone.gameObject.SendMessage("MehFast", SendMessageOptions.DontRequireReceiver);
			}
			else{
				clone.gameObject.SendMessage("Normal", SendMessageOptions.DontRequireReceiver);
			}
		}
		else if(round >= 6)
		{
			var fastprobability : int = Random.Range(0, round);
			if(fastprobability > 2)
			{
				clone.gameObject.SendMessage("Fast", SendMessageOptions.DontRequireReceiver);
			} 
			else{
				clone.gameObject.SendMessage("MehFast", SendMessageOptions.DontRequireReceiver);
			}
		}
		else
		{
			clone.gameObject.SendMessage("Normal", SendMessageOptions.DontRequireReceiver);
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
	zombieLimit += 1;
}

function ZombieDown () {
	zombieLimit -= 1;
}