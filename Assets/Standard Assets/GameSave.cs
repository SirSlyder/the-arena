using UnityEngine;
using System.Collections;
using System;
using System.Runtime.Serialization.Formatters.Binary;
using System.IO;

public class GameSave : MonoBehaviour {
	
	public static GameSave control;
	
	static public int Level;
	static public int Kills;
	static public int XP;
	
	// Use this for initialization
	void Awake () {
		if(control == null)
		{
			DontDestroyOnLoad (gameObject);
			control = this;
		}
		else if (control != this)
		{
			Destroy(gameObject);
		}
		Load ();
	}
	
	//void Update()
	//{
	//}

	public void Save() {
		BinaryFormatter bf = new BinaryFormatter ();
		FileStream file = File.Create (Application.persistentDataPath + "/playerInfo.dat");
		
		PlayerData data = new PlayerData ();
		
		data.Level = Level;
		data.Kills = Kills;
		data.XP = XP;

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
			
			Level = data.Level;
			Kills = data.Kills;
			XP = data.XP;
		}
	}
}
[Serializable]
class PlayerData
{
	public int XP;
	public int Level;
	public int Kills;
}