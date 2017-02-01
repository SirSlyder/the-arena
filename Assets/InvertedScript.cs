using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class InvertedScript : MonoBehaviour {

	public GameObject controller;

	// Update is called once per frame

	void Awake () {
		controller = GameObject.Find ("GameController");
	}

	public void OnChanged(){
		controller.SendMessage ("Inverted", SendMessageOptions.DontRequireReceiver);
	}
}
