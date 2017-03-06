using UnityEngine;
using UnityEngine.Networking;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;

public class WeaponScriptC : MonoBehaviour {

	[System.Serializable]
	public class Gun{
		public string name;
		public int ammo;
		public int reserve;
		public float damage;
		public int pellets;
		public float inaccuracy;
		public float inaccuracyReduce;
		public int RPM;
		public int Range;
		public bool isScoped;
		public bool singleReload;
		public bool isAutomatic;
		public int bursts;
		public float burstwait;
		public AudioClip audio;
		public int reloadSet;
		public int fovZoom;
	}

	[System.Serializable]
	public class Melee{
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

	[System.Serializable]
	public class GunSound{
		public string Name;
		public List<AudioClip> clips;
	}

	[System.Serializable]
	public class PerkType {
		int ID;
		PerkEffects Effect;
		Texture2D icon;
	}


	[Header("Misc. Variables")]

	private bool paused = false;

	private GameObject spinnerhost;

	private GameSave controller;
	private GameHost host;

	[Header("UI Variables")]
	public Canvas Carrier;

	[Header("Grenades")]

	public Image slot1;
	public Image slot2;
	public Image slot2two;
	public Image slot31;
	public Image slot32;
	public Image slot33;
	public Image slot34;
	public Image slot41;
	public Image slot42;

	[Header("Ammo/Points/Health")]

	public Text ammoText;
	public Text healthText;
	public Text pointsText;

	[Header("Perks")]

	public Image perk1;
	public Image perk2;
	public Image perk3;
	public Image perk4;

	[Header("Accuracy")]

	public Transform accUp;
	public Transform accDown;
	public Transform accRight;
	public Transform accLeft;

	[Header("Misc")]

	public Text RoundText;

	public Text ammoReminder;

	[Header("Player Variables")]

	public Animation anim1;
	public Animation anim2;
	public Animation anim3;

	private string equipped;

	private AudioSource audiod;

	public int points = 500;
	private int health = 100;
	public int maxHealth = 100;
	private int stamina = 100;
	private bool sprinting = false;

	[Header("Perk Variables")]

	private GameObject[] perkMachines;
	public enum PerkEffects{Revive = 1, Health = 2, FireSpeed = 3, ReloadSpeed = 4};

	public PerkType[] perks;
	public List<int> perksList;

	[Header("Melee Variables")]

	public int ID;
	public float Damage;
	public float speedMulti;
	public enum MeleeType{OneHanded = 0, TwoHanded = 1};
	public MeleeType type;
	public float Distance;
	public List<Melee> meleeList;

	[Header("Gun Variables")]

	[Header("Raycasting")]
	public LayerMask layerMask;
	public GameObject blood;
	public GameObject spark;

	[Header("Reloads")]
	public List<GunSound> sounds;

	[Header("IDs")]
	public int gun1ID;
	public int gun1Ammo;
	public int gun1Reserve;
	public int gun2ID;
	public int gun2Ammo;
	public int gun2Reserve;

	public float inaccuracyMulti = 1;

	public List<Gun> gunList;

	private float timer = 0;

	private int guns = 1;
	private int gunequipped = 1;

	public Transform aimer;

	public bool fired = false;
	private bool canFire = true;

	void Awake(){
		controller = GameObject.Find("GameController").GetComponent<GameSave>();
		spinnerhost = GameObject.Find("Spinners");
		host = GameObject.Find("Host").GetComponent<GameHost>();
		perkMachines = GameObject.FindGameObjectsWithTag("PerkMachine"); 
		audiod = GetComponent<AudioSource> ();
	}

	void Start(){
		if (gun1ID != null) {
				anim1.Play ("Equip" + gunList [gun1ID].name);
			equipped = "gun";
			timer = (0 - 60.0f / gunList [gun1ID].RPM - anim1["Equip" + gunList [gun1ID].name].length);
		}
	}

	// Update is called once per frame
	void Update () {
		if (Input.GetButtonDown ("Pause")) {
			paused = !paused;
		}
		if (!paused) {
			pointsText.text = points.ToString ();
			if (gunequipped == 1) {
				ammoText.text = gun1Ammo.ToString () + "/" + gun1Reserve;
			} else {
				ammoText.text = gun2Ammo.ToString () + "/" + gun2Reserve;
			}
			if (transform.parent.GetComponent<CharacterController> ().velocity.magnitude > 1) {
				inaccuracyMulti += Time.deltaTime * 2;
			} else {
				inaccuracyMulti -= Time.deltaTime * 2;
			}
			if (inaccuracyMulti > 2f) {
				inaccuracyMulti = 2;
			} else if (inaccuracyMulti < 1) {
				inaccuracyMulti = 1;
			}
			if (gunequipped == 1) { 																				// rotates crosshair components to gun1 accuracy
				accUp.localEulerAngles = new Vector3 (gunList [gun1ID].inaccuracy * -1 * inaccuracyMulti, 0, 0); 
				accDown.localEulerAngles = new Vector3 (gunList [gun1ID].inaccuracy * inaccuracyMulti, 0, 0);
				accRight.localEulerAngles = new Vector3 (0, gunList [gun1ID].inaccuracy * inaccuracyMulti, 0);
				accLeft.localEulerAngles = new Vector3 (0, gunList [gun1ID].inaccuracy * -1 * inaccuracyMulti, 0);
			} else if (gunequipped == 2) { 																			// rotates crosshair components to gun2 accuracy
				accUp.localEulerAngles = new Vector3 (gunList [gun2ID].inaccuracy * -1 * inaccuracyMulti, 0, 0); 
				accDown.localEulerAngles = new Vector3 (gunList [gun2ID].inaccuracy * inaccuracyMulti, 0, 0);
				accRight.localEulerAngles = new Vector3 (0, gunList [gun2ID].inaccuracy * inaccuracyMulti, 0);
				accLeft.localEulerAngles = new Vector3 (0, gunList [gun2ID].inaccuracy * -1 * inaccuracyMulti, 0);
			}
			if (Input.GetButtonDown ("Reload") && canFire) {
				if (gunequipped == 1 && gun1Reserve > 0) {
					if (gun1Ammo + gun1Reserve >= gunList [gun1ID].ammo) {
						gun1Reserve -= (gunList[gun1ID].ammo - gun1Ammo);
						gun1Ammo = gunList [gun1ID].ammo;
					} else if (gun1Ammo + gun1Reserve < gunList [gun1ID].ammo) {
						gun1Ammo += gun1Reserve;
						gun1Reserve = 0;
					}
				} else if (gunequipped == 2 && gun2Reserve > 0) {
					if (gun2Ammo + gun2Reserve >= gunList [gun2ID].ammo) {
						gun2Reserve -= (gunList[gun2ID].ammo - gun2Ammo);
						gun2Ammo = gunList [gun2ID].ammo;
					} else if (gun2Ammo + gun2Reserve < gunList [gun2ID].ammo) {
						gun2Ammo += gun2Reserve;
						gun2Reserve = 0;
					}
				}
			}
			if (Input.GetButton ("Fire1")) {
				if (gun1Ammo > 0 && gunequipped == 1 && !fired) {
					StartCoroutine("Fire");
					fired = true; //sets fired to true after co-routine starts
					canFire = false; //sets canfire to false to ensure that the player cannot keep firing their weapon
				}
			}
			if(canFire && !Input.GetButton("Fire1")){
				fired = false;
			}
		}
	}

	public void HitPoints(){
		points += 10;
	}

	public void KillPoints(int kpoints){
		points += kpoints;
	}

	IEnumerator Fire(){
		RaycastHit hit;
		Transform lasthit = aimer;
		int hits = 0;
		if (gunequipped == 1) {
			for(int b = 0; b < gunList[gun1ID].bursts; b++){
				if (gun1Ammo > 0) {
					audiod.clip = gunList [gun1ID].audio;
					audiod.Play ();
					anim1.Stop ();
					anim1.Play ("Fire" + gunList [gun1ID].name);
					gun1Ammo -= 1;
					inaccuracyMulti += 0.5f;
					if (lasthit != null) {
						lasthit.gameObject.layer = 15;
						lasthit = aimer;
					}
					for (int i = 0; i < gunList [gun1ID].pellets; i++) {
						aimer.localEulerAngles = new Vector3 (Random.Range (inaccuracyMulti * gunList [gun1ID].inaccuracy, -inaccuracyMulti * gunList [gun1ID].inaccuracy), Random.Range (inaccuracyMulti * gunList [gun1ID].inaccuracy, -inaccuracyMulti * gunList [gun1ID].inaccuracy), 0);
						if (gunList [gun1ID].pellets > 1) {
							hits = 2;
						}
						while (hits < 3) {
							if (lasthit != null) {
								lasthit.gameObject.layer = 15;
							}
							if (Physics.Raycast (lasthit.position, aimer.TransformDirection (Vector3.forward), out hit, gunList [gun1ID].Range, layerMask)) {
								if (hit.transform.tag == "Enemy") {
									lasthit = hit.transform;
									lasthit.gameObject.layer = 16;
									hit.transform.SendMessage ("Shot", gunList [gun1ID].damage, SendMessageOptions.DontRequireReceiver);
									GameObject Blood;
									Blood = (GameObject)Instantiate (blood, hit.point, blood.transform.rotation);
									Blood.gameObject.SetActive (true);
									Blood.gameObject.layer = 11;
									hits += 1;
								} else {
									GameObject Spark;
									Spark = (GameObject)Instantiate (spark, hit.point, spark.transform.rotation);
									Spark.gameObject.SetActive (true);
									Spark.gameObject.layer = 11;
									hits = 3;
								}
							}
						}
						if (lasthit != null) {
							lasthit.gameObject.layer = 15;
						}
					}
					yield return new WaitForSeconds (60.0f / gunList [gun1ID].RPM);
				} else {
					break;
				}
			}
			if (gunList [gun1ID].bursts > 1) {
				yield return new WaitForSeconds (gunList [gun1ID].burstwait);
			}
			if (gunList [gun1ID].isAutomatic) {
				fired = false;
				canFire = true;
			} else {
				canFire = true;
			}
		} else {
			for (int b = 0; b < gunList [gun2ID].bursts; b++) {
				if (gun2Ammo > 0) {
					anim1.Stop ();
					anim1.Play ("Fire" + gunList [gun2ID].name);
					gun2Ammo -= 1;
					inaccuracyMulti += 0.5f;
					for (int i = 0; i < gunList [gun2ID].pellets; i++) {
						aimer.localEulerAngles = new Vector3 (Random.Range (inaccuracyMulti * gunList [gun2ID].inaccuracy, -inaccuracyMulti * gunList [gun2ID].inaccuracy), Random.Range (inaccuracyMulti * gunList [gun2ID].inaccuracy, -inaccuracyMulti * gunList [gun2ID].inaccuracy), 0);
						if (gunList [gun2ID].pellets > 1) {
							hits = 2;
						}
						while (hits < 3) {
							if (lasthit != null) {
								lasthit.gameObject.layer = 15;
							}
							if (Physics.Raycast (lasthit.position, aimer.TransformDirection (Vector3.forward), out hit, gunList [gun2ID].Range, layerMask)) {
								if (hit.transform.tag == "Enemy") {
									hit.transform.SendMessage ("Shot", gunList [gun2ID].damage, SendMessageOptions.DontRequireReceiver);
									GameObject Blood;
									Blood = (GameObject)Instantiate (blood, hit.point, blood.transform.rotation);
									Blood.gameObject.SetActive (true);
									Blood.gameObject.layer = 11;
								} else {
									GameObject Spark;
									Spark = (GameObject)Instantiate (spark, hit.point, spark.transform.rotation);
									Spark.gameObject.SetActive (true);
									Spark.gameObject.layer = 11;
								}
							}
							yield return new WaitForSeconds (60.0f / gunList [gun2ID].RPM);

						}
					}
				} else {
					break;
				}
			}
			if (gunList [gun2ID].bursts > 1) {
				yield return new WaitForSeconds (gunList [gun2ID].burstwait);
			}
			if (gunList [gun2ID].isAutomatic) {
				fired = false;
				canFire = true;
			} else {
				canFire = true;
			}
		}
	}
}