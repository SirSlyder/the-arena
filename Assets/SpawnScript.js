#pragma strict

var spawntimer : float;
var spawners : GameObject[];
var count : int;
var zombie : Transform;
var round : int;
var spawntime : float;
private var activated : boolean;

function Awake () {
	spawners = GameObject.FindGameObjectsWithTag("Spawner");
}

function Update () {
	spawntime = Random.Range(7, 12);
	spawntimer += Time.deltaTime;
	if(spawntimer >= spawntime && count != 0)
	{
		spawntimer = 0;
		var clone = Instantiate(zombie, gameObject.transform.position, gameObject.transform.rotation);
		clone.gameObject.active = true;
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

function UsedZombie () {
	count -= 1;
}