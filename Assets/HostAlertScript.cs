using UnityEngine;
using System.Collections;

public class HostAlertScript : MonoBehaviour {

	public Transform[] zombies;

	// Use this for initialization
	void Start () {
		foreach (Transform i in zombies) {
			i.gameObject.SetActive (true);
		}
	}
}
