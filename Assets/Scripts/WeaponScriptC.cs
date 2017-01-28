using UnityEngine;
using UnityEngine.Networking;
using System.Collections;
using System.Collections.Generic;

public class WeaponScriptC : MonoBehaviour {

	[Header("Player Related Variables")]
	public int points = 500;
	private int health = 100;
	public int maxHealth = 100;
	private int stamina = 100;
	private bool sprinting = false;

	[Header ("Weapon Related Variables")]

	private int guns = 1;
	private int gunequipped = 1;

	public int gunOneID;
	public int gunOneAmmo;
	public int gunOneReserve;
	public int gunTwoID;
	public int gunTwoAmmo;
	public int gunTwoReserve;

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
		public int inaccuracy;
		public int inaccuracyReduce;
		public int RPM;
	}

	public List<Gun> gunList;
	
	// Update is called once per frame
	void Update () {
		if (gunequipped == 1) {
			accUp.localEulerAngles = new Vector3 (gunList [gunOneID].inaccuracy * -1 * inaccuracyMulti, 0, 0);
			accDown.localEulerAngles = new Vector3 (gunList [gunOneID].inaccuracy * inaccuracyMulti, 0, 0);
		}
	}
}
