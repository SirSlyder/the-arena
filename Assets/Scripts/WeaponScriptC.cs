using UnityEngine;
using UnityEngine.Networking;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;

public class WeaponScriptC : MonoBehaviour {

	[Header("Misc. Variables")]

	private bool paused = false;

	private GameObject spinnerhost;

	private GameSave controller;
	private GameHost host;

	[Header("UI Variables")]
	public Canvas Carrier;

	public Image slot1;
	public Image slot2;
	public Image slot2two;
	public Image slot31;
	public Image slot32;
	public Image slot33;
	public Image slot34;
	public Image slot41;
	public Image slot42;

	public Text ammoText;
	public Text healthText;
	public Text pointsText;

	public Image perk1;
	public Image perk2;
	public Image perk3;
	public Image perk4;

	public Text RoundText;

	public Text ammoReminder;

	[Header("Player Related Variables")]

	private string equipped;

	private AudioSource audiod;

	public Animation anim1;
	public Animation anim2;
	public Animation anim3;

	public int points = 500;
	private int health = 100;
	public int maxHealth = 100;
	private int stamina = 100;
	private bool sprinting = false;

	[Header("Perk Related Variables")]

	private GameObject[] perkMachines;
	public enum PerkEffects{Revive = 1, Health = 2, FireSpeed = 3, ReloadSpeed = 4};

	public class PerkType {
		int ID;
		PerkEffects Effect;
		Texture2D icon;
	}

	public PerkType[] perks;
	public List<int> perksList;

	[Header ("Melee Related sVariables")]

	public int ID;
	public float Damage;
	public float speedMulti;
	public enum MeleeType{OneHanded = 0, TwoHanded = 1};
	public MeleeType type;
	public float Distance;


	[Header ("Weapon Related Variables")]

	private float timer = 0;

	private int guns = 1;
	private int gunequipped = 1;

	public int gun1ID;
	public int gun1Ammo;
	public int gun1Reserve;
	public int gun2ID;
	public int gun2Ammo;
	public int gun2Reserve;

	public float inaccuracyMulti = 1;

	public Transform accUp;
	public Transform accDown;
	public Transform accRight;
	public Transform accLeft;

	[System.Serializable]
	public class Gun{
		public string name;
		public int ammo;
		public int reserve;
		public float damage;
		public int pellets;
		public int inaccuracy;
		public int inaccuracyReduce;
		public int RPM;
		public int Range;
		public bool isScoped;
		public bool singleReload;
		public AudioClip audio;
		public string reloadSet;
		public int fovZoom;
	}

	public List<Gun> gunList;

	void Awake(){
		controller = GameObject.Find("GameController").GetComponent<GameSave>();
		spinnerhost = GameObject.Find("Spinners");
		host = GameObject.Find("Host").GetComponent<GameHost>();
		perkMachines = GameObject.FindGameObjectsWithTag("PerkMachine"); 
		audiod = GetComponent<AudioSource> ();
	}

	void Start(){
		if (gun1ID != null) {
			anim1.Play ("Equip" + gunList [gun1ID]);
			equipped = "gun";
			timer = (0 - 60.0f / gunList [gun1ID].RPM - anim1["Equip" + gunList [gun1ID]].length);
		}
	}

	// Update is called once per frame
	void Update () {
		if (gunequipped == 1) {
			accUp.localEulerAngles = new Vector3 (gunList [gun1ID].inaccuracy * -1 * inaccuracyMulti, 0, 0);
			accDown.localEulerAngles = new Vector3 (gunList [gun1ID].inaccuracy * inaccuracyMulti, 0, 0);
			accRight.localEulerAngles = new Vector3 (0, gunList [gun1ID].inaccuracy * inaccuracyMulti, 0);
			accLeft.localEulerAngles = new Vector3 (0, gunList [gun1ID].inaccuracy * -1 * inaccuracyMulti, 0);
		}
		else if (gunequipped == 2) {
			accUp.localEulerAngles = new Vector3 (gunList [gun2ID].inaccuracy * -1 * inaccuracyMulti, 0, 0);
			accDown.localEulerAngles = new Vector3 (gunList [gun2ID].inaccuracy * inaccuracyMulti, 0, 0);
			accRight.localEulerAngles = new Vector3 (0, gunList [gun2ID].inaccuracy * inaccuracyMulti, 0);
			accLeft.localEulerAngles = new Vector3 (0, gunList [gun2ID].inaccuracy * -1 * inaccuracyMulti, 0);
		}
	}
}
