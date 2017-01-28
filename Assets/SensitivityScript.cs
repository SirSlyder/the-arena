using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class SensitivityScript : MonoBehaviour {

	public GameObject controller;
	public Slider mainSlider;
	public Text senstext;
	
	// Update is called once per frame

	void Awake () {
		senstext = GameObject.Find ("SensText").GetComponent<Text>();
		controller = GameObject.Find ("GameController");
	}

	void Update () {
		controller.SendMessage ("Sensitive", mainSlider.value, SendMessageOptions.DontRequireReceiver);
		senstext.text = mainSlider.value + "";
	}

	void SetValue (float volume){
		mainSlider.value = volume;
	}
}
