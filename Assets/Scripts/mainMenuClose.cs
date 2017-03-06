using UnityEngine;
using System.Collections;

public class mainMenuClose : MonoBehaviour {

	public Transform menu;

	// Use this for initialization
	void Awake () {
		menu.gameObject.SetActive (false);
	}
}
