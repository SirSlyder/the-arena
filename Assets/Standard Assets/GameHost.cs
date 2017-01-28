using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class GameHost : MonoBehaviour {

	private int Round = 1;
	private bool coolingDown = false;
	private int zedcount = 3;
	private float roundTimer;
	private int coolDown;
	private GameObject[] spawner;
	private GameObject[] roundCounters;
	public GameObject[] players;
	public int[] roundCounts;

	// Use this for initialization
	void Awake () {
		Round = 1;
		zedcount = 3;
		coolingDown = true;
		spawner = GameObject.FindGameObjectsWithTag("Spawner");
	}

	public void FindPlayers(){
		players = GameObject.FindGameObjectsWithTag ("MainCamera");
		foreach (GameObject i in players) {
			i.SendMessage ("NewRound", Round);
		}
	}

	// Update is called once per frame
	void Update () {
		if(coolingDown == true)
		{
			roundTimer += Time.deltaTime;
			if(roundTimer >= 5)
			{
				coolDown = 0;
				roundTimer = 0;
			}
			if(coolDown == 0)
			{
				foreach(GameObject i in spawner)
				{
					i.SendMessage("NewRound", zedcount, SendMessageOptions.DontRequireReceiver);
				}
				coolingDown = false;
			}
		}
		if(zedcount == 0)
		{
			coolDown = 5;
			Round += 1;
			if (Round > 10) {
				zedcount = Mathf.RoundToInt (0.15f * Round * 24);
			} else {
				zedcount = roundCounts [Round - 1];
			}
			coolingDown = true;
			foreach (GameObject i in players) {
				i.SendMessage ("NewRound", Round);
			}
		}
	}

	public void ZedDown () {
		zedcount -= 1;
		if(zedcount == 1)
		{
			if(Round >= 4)
			{
				var zombies = GameObject.FindGameObjectsWithTag("Enemy");
				foreach(GameObject i in zombies)
				{
					i.SendMessage("Fast", SendMessageOptions.DontRequireReceiver);
				}
			}
		}
	}
}
