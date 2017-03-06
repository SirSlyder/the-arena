using UnityEngine;
using UnityEngine.UI;
using System.Collections;
using System.Collections.Generic;

public class GameHost : MonoBehaviour {

	private int Round = 1;
	private bool coolingDown = false;
	public int zedcount = 3;
	private float roundTimer;
	private int coolDown;
	private GameObject[] spawner;
	private GameObject[] roundCounters;
	public GameObject[] players;
	public int[] roundCounts;
	public bool tank = false;
	public bool weakling = false;
	public GameSave control;
	public GameObject[] perks;
	public bool nuclear = false;
	public bool stalk = false;
	public Text roundText;
	public float colora = 0;

	// Use this for initialization
	void Awake () {
		perks = GameObject.FindGameObjectsWithTag ("PerkMachine");
		spawner = GameObject.FindGameObjectsWithTag("Spawner");
		players = GameObject.FindGameObjectsWithTag ("MainCamera");
		control = GameObject.Find ("GameController").GetComponent<GameSave> ();
		control.SendMessage ("Prep", SendMessageOptions.DontRequireReceiver);
		Round = 1;
		zedcount = 6;
		if (stalk) {
			zedcount *= 2;
		}
		coolingDown = true;
		coolDown = 5;
	}

	public void FindPlayers(){
		foreach (GameObject i in players) {
			i.SendMessage ("NewRound", Round);
		}
	}

	public void GivePerks(){
		foreach (GameObject i in players) {
			i.SendMessage ("PerkInsta", 2, SendMessageOptions.DontRequireReceiver);
			i.SendMessage ("PerkInsta", 3, SendMessageOptions.DontRequireReceiver);
			i.SendMessage ("PerkInsta", 4, SendMessageOptions.DontRequireReceiver);
		}
	}

	public void RevitaInfinite(){
		foreach (GameObject i in perks) {
			i.SendMessage ("Infinite", SendMessageOptions.DontRequireReceiver);
		}
	}

	public void PerkDisable(){
		foreach (GameObject i in perks) {
			i.SendMessage ("Disable", SendMessageOptions.DontRequireReceiver);
		}
	}

	public void Stalk(){
		stalk = true;
		foreach (GameObject i in spawner) {
			i.SendMessage ("Stalk", SendMessageOptions.DontRequireReceiver);
		}
	}

	public void Hemophilia(){
		foreach (GameObject i in players) {
			i.SendMessage ("Hemophilia", SendMessageOptions.DontRequireReceiver);
		}
	}

	public void Nuclear(){
		nuclear = true;
		foreach (GameObject i in players) {
			i.SendMessage ("Nuclear", SendMessageOptions.DontRequireReceiver);
		}
	}

	public void Nucleared(Transform trans){
		if (nuclear) {
			trans.SendMessage ("Nuclear", SendMessageOptions.DontRequireReceiver);
		}
	}

	public void LightsOut(){
		GameObject[] lights;
		lights = GameObject.FindGameObjectsWithTag ("Light");
		foreach (GameObject i in lights) {
			Destroy (i);
		}
		RenderSettings.ambientLight = Color.black;
	}

	public void Slug(){
		foreach (GameObject i in players) {
			i.SendMessage ("Slug", SendMessageOptions.DontRequireReceiver);
		}
	}

	public void Tranquilized(){
		foreach(GameObject i in spawner)
		{
			i.SendMessage ("Tranquilized", SendMessageOptions.DontRequireReceiver);
		}
	}

	public void Adrenalised(){
		foreach(GameObject i in spawner)
		{
			i.SendMessage ("Adrenalised", SendMessageOptions.DontRequireReceiver);
		}
	}

	// Update is called once per frame
	void Update () {
		if(coolingDown == true)
		{
			roundText.gameObject.SetActive (true);
			colora += Time.deltaTime;
			roundText.color = new Vector4(roundText.color.r, roundText.color.g, roundText.color.b, colora);
			roundTimer += Time.deltaTime;
			if(roundTimer >= 1)
			{
				coolDown -= 1;
				roundTimer = 0;
				colora = 0;
				roundText.text = ("Wave " + Round + " Beginning In " + coolDown);
			}
			if(coolDown == 0)
			{
				roundText.gameObject.SetActive (false);
				if (Round % 10 == 0 && Round != 0) {
					int size = Random.Range(0, spawner.Length - 1);
					spawner [size].SendMessage ("SpawnTank");
				}
				foreach(GameObject i in spawner)
				{
					i.SendMessage ("Round", Round, SendMessageOptions.DontRequireReceiver);
					i.SendMessage ("NewRound", zedcount, SendMessageOptions.DontRequireReceiver);
				}
				coolingDown = false;
			}
		}
		if(zedcount == 0)
		{
			coolDown = 5;
			colora = 0;
			Round += 1;
			if (Round > 10) {
				zedcount = Mathf.RoundToInt (0.15f * Round * 24);
			} else {
				zedcount = roundCounts [Round - 1];
			}
			if (stalk) {
				zedcount *= 2;
			}
			coolingDown = true;
			foreach (GameObject i in players) {
				//i.SendMessage ("NewRound", Round);
			}
		}
	}

	public void Loan(){
		foreach (GameObject i in players) {
			i.SendMessage ("Loan", SendMessageOptions.DontRequireReceiver);
		}
	}

	public void HideHUD(){
		foreach (GameObject i in players) {
			i.SendMessage ("HideHUD", SendMessageOptions.DontRequireReceiver);
		}
	}

	public void Weakling(){
		weakling = true;
		foreach (GameObject i in spawner) {
			i.SendMessage ("Weak", SendMessageOptions.DontRequireReceiver);
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
