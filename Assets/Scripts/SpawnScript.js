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
var tankPref : Transform;
var weak : boolean = false;
var tranquilized : boolean = false;
var adrenalised : boolean = false;
var stalk : boolean = false;

function Awake () {
	spawners = GameObject.FindGameObjectsWithTag("Spawner");
	spawntime = Random.Range(7.0, 12.0);
}

function Stalk () {
	stalk = true;
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
		if(tranquilized == false && adrenalised == false)
		{
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
		}
		else if(tranquilized == true)
		{
			clone.gameObject.SendMessage("Normal", SendMessageOptions.DontRequireReceiver);
		} else if(adrenalised == true)
		{
			clone.gameObject.SendMessage("Fast", SendMessageOptions.DontRequireReceiver);
		}
		if(tranquilized == false && adrenalised == false)
		{
			if(!weak){
				clone.gameObject.SendMessage("Health", round, SendMessageOptions.DontRequireReceiver);
			} else{
				clone.gameObject.SendMessage("HealthWeak", SendMessageOptions.DontRequireReceiver);
			}
		}
		else if(tranquilized == true){
			clone.gameObject.SendMessage("Health", round, SendMessageOptions.DontRequireReceiver);
			clone.gameObject.SendMessage("Modify", 1.5, SendMessageOptions.DontRequireReceiver);
		} else if(adrenalised == true){
			clone.gameObject.SendMessage("Health", round, SendMessageOptions.DontRequireReceiver);
			clone.gameObject.SendMessage("Modify", 0.75, SendMessageOptions.DontRequireReceiver);
		}
		if(stalk){
			clone.gameObject.SendMessage("Stalk", SendMessageOptions.DontRequireReceiver);
		}
		for (var i : GameObject in spawners)
		{
			i.SendMessage("UsedZombie", SendMessageOptions.DontRequireReceiver);
		}
	}
}

function Weak(){
	weak = true;
}

function Tranquilized(){
	tranquilized = true;
	adrenalised = false;
}

function Adrenalised(){
	tranquilized = false;
	adrenalised = true;
}

function SpawnTank(){
	if(activated){
		var clone = Instantiate(tankPref, gameObject.transform.position, gameObject.transform.rotation);
		clone.gameObject.active = true;
		if(sandbag != null)
		{
			clone.gameObject.SendMessage("Target", sandbag, SendMessageOptions.DontRequireReceiver);
			if(sandbag.tag == "InstaSpawn"){
				clone.GetComponent.<Animation>().Play("raise");
				GetComponent.<Animation>().Play("sandSpew");
			}
			clone.gameObject.SendMessage("TankSpeed", SendMessageOptions.DontRequireReceiver);
			clone.gameObject.SendMessage("Health", round * 10, SendMessageOptions.DontRequireReceiver);
		}
	}
	else{
		var size : int = Random.Range(0, spawners.Length);
		spawners[size].SendMessage("SpawnTank", SendMessageOptions.DontRequireReceiver);
	}
}

function Round (round2 : int){
	round = round2;
}

function NewRound (zedcount : int) {
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