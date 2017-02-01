using UnityEngine;
using UnityEngine.UI;
using System.Collections.Generic;
using System.Collections;
using System;
using System.Runtime.Serialization.Formatters.Binary;
using System.IO;

public class GameSave : MonoBehaviour {
	
	public static GameSave control;
	
	static public int Level;
	static public int Kills;
	static public int Deaths;
	static public int Perks;
	static public int Doors;
	static public int Rounds;
	static public int HighestRound;

	static public bool fps = false;

	static public int XP;

	static public int texRes;
	static public int AA;
	static public int vSync;

	public int Sensitivity;
	public bool inverted;
	public float Volume = 1;

	public Slider volbar;
	public Slider sensebar;
	public Toggle invert;
	public Toggle fpsoption;
	public Transform player;

	private Text scoreboard;
	private bool scored = false;

	private int currentWaves;
	private int currentKills;
	private int currentHeadshots;
	private int currentDoors;
	private int maxDoors;

	public Text fpstext;
	
	// Use this for initialization
	void Awake () {
		Load ();
		if(control == null)
		{
			DontDestroyOnLoad (gameObject);
			control = this;
		}
		else if (control != this)
		{
			Destroy(gameObject);
		}
		if (Application.loadedLevelName == "Menu") {
			GameObject sensebarg;
			sensebarg = GameObject.Find ("Sensitivity");
			invert = GameObject.Find ("InvertMouse").GetComponent<Toggle>();
			sensebar = sensebarg.GetComponent<Slider> ();
			GameObject volbarg;
			volbarg = GameObject.Find ("Volume");
			Cursor.visible = true;
			Cursor.lockState = CursorLockMode.None;
			volbar = volbarg.GetComponent<Slider> ();
			if (sensebar != null) {
				sensebar.value = Sensitivity;
			}
			if (volbar != null) {
				volbar.value = Volume;
			}
			if (invert != null) {
				invert.isOn = inverted;
			}
			if (fpsoption != null) {
				if (fps) {
					fpsoption.isOn = true;
				} else {
					fpsoption.isOn = false;
				}
			}
		}
		if (Application.loadedLevelName != "Menu") {
			scoreboard = GameObject.FindGameObjectWithTag ("Scoreboard").GetComponent<Text>();
			player = GameObject.FindGameObjectWithTag ("MainCamera").transform;
			if (player != null) {
				if (player.parent != null) {
					player.parent.SendMessage ("Sensitivity", Sensitivity, SendMessageOptions.DontRequireReceiver);
				}
				player.SendMessage ("Sensitivity", Sensitivity, SendMessageOptions.DontRequireReceiver);
				player.SendMessage ("Inverted", inverted, SendMessageOptions.DontRequireReceiver);
			}
		}
		AudioListener.volume = Volume;
	}

	void Update () {
		if (fps) {
			fpstext.enabled = true;
			fpstext.text = (Mathf.RoundToInt(1.0f / Time.smoothDeltaTime)).ToString();
		}
		if (Input.GetKeyDown (KeyCode.Q)) {
			if (Application.loadedLevelName == "Menu") {
				Save ();
				Application.Quit();
			}
		}
		if (Application.loadedLevelName != "Menu") {
			if (player == null) {
				player = GameObject.FindGameObjectWithTag ("MainCamera").transform;
				if (player.parent != null) {
					player.parent.SendMessage ("Sensitivity", Sensitivity, SendMessageOptions.DontRequireReceiver);
				}
				player.SendMessage ("Sensitivity", Sensitivity, SendMessageOptions.DontRequireReceiver);
				player.SendMessage ("Inverted", inverted, SendMessageOptions.DontRequireReceiver);
				AudioListener.volume = Volume;
			}
		}
		if (Input.GetKeyDown (KeyCode.Tab)) {
			scored = !scored;
			if (scoreboard != null) {
				scoreboard.enabled = scored;
				scoreboard.text = "Kills: " + currentKills + "\n" + "Headshots: " + currentHeadshots + "\n" + "Doors Opened: " + currentDoors + "/" + maxDoors;
			} else {
				scoreboard = GameObject.FindGameObjectWithTag ("Scoreboard").GetComponent<Text>();
			}
		}
	}
	
	//void Update()
	//{
	//}

	void OnLevelFinishedLoading () {
		AudioListener.volume = Volume;
		player = null;
		if (Application.loadedLevelName != "Menu") {
			currentDoors = 0;
			currentHeadshots = 0;
			currentKills = 0;
			currentWaves = 0;
			maxDoors = 0;
			GameObject[] doors;
			doors = GameObject.FindGameObjectsWithTag ("Door");
			foreach (GameObject i in doors) {
				maxDoors += 1;
			}
		}
		fpstext = GameObject.FindGameObjectWithTag ("FPSCounter").GetComponent<Text>();
		if (fps) {
			fpstext.enabled = true;
		} else {
			fpstext.enabled = false;
		}
	}

	public void Save() {
		BinaryFormatter bf = new BinaryFormatter ();
		FileStream file = File.Create (Application.persistentDataPath + "/playerInfo.dat");
		
		PlayerData data = new PlayerData ();

		data.Sensitivity = Sensitivity;
		data.inverted = inverted;
		data.Level = Level;
		data.Kills = Kills;
		data.XP = XP;
		data.Deaths = Deaths;
		data.Doors = Doors;
		data.Perks = Perks;
		data.Rounds = Rounds;
		data.HighestRound = HighestRound;
		data.Volume = Volume;
		data.fps = fps;

		bf.Serialize (file, data);
		file.Close ();
	}
	
	public void Load() {
		if(File.Exists(Application.persistentDataPath + "/playerInfo.dat"))
		{
			BinaryFormatter bf = new BinaryFormatter();
			FileStream file = File.Open (Application.persistentDataPath + "/playerInfo.dat", FileMode.Open);
			PlayerData data = (PlayerData)bf.Deserialize(file);
			file.Close();

			Sensitivity = data.Sensitivity;
			inverted = data.inverted;
			Level = data.Level;
			Kills = data.Kills;
			XP = data.XP;
			Deaths = data.Deaths;
			Doors = data.Doors;
			Perks = data.Perks;
			Rounds = data.Rounds;
			HighestRound = data.HighestRound;
			Volume = data.Volume;
			fps = data.fps;
			sensebar.SendMessage ("SetValue", Sensitivity, SendMessageOptions.DontRequireReceiver);
			volbar.SendMessage ("SetValue", Volume, SendMessageOptions.DontRequireReceiver);
		}
	}

	public void Inverted() {
		inverted = !inverted;
	}

	public void Volumed(float vol)
	{
		Volume = vol;
		Save ();
		AudioListener.volume = Volume;
	}

	public void Sensitive(int sense) {
		Sensitivity = sense;
	}

	public void Headshot () {
		currentHeadshots += 1;
	}

	public void Kill () {
		currentKills += 1;
		Kills += 1;
	}

	public void Dead (int round) {
		Deaths += 1;
		Rounds += round;
		if(round > HighestRound){
			HighestRound = round;
		}
		Save ();
	}

	public void Door () {
		currentDoors += 1;
		Doors += 1;
	}

	public void Perk () {
		Perks += 1;
	}

	public void Stats (GameObject target) {
		target.SendMessage ("Kills", Kills, SendMessageOptions.DontRequireReceiver);
		target.SendMessage ("Deaths", Deaths, SendMessageOptions.DontRequireReceiver);
		target.SendMessage ("Perks", Perks, SendMessageOptions.DontRequireReceiver);
		target.SendMessage ("Doors", Doors, SendMessageOptions.DontRequireReceiver);
		target.SendMessage ("Rounds", Rounds, SendMessageOptions.DontRequireReceiver);
		target.SendMessage ("HRound", HighestRound, SendMessageOptions.DontRequireReceiver);
	}

	public void FPS () {
		fps = !fps;
		if (fps) {
			fpstext.enabled = true;
		} else {
			fpstext.enabled = false;
		}
	}
}
[Serializable]
class PlayerData
{
	public int XP;
	public int Level;
	public int Kills;
	public int Sensitivity;
	public float Volume;
	public bool inverted;
	public int Deaths;
	public int Perks;
	public int Doors;
	public int Rounds;
	public int HighestRound;
	public bool fps;
}