using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class SensitivityScript : MonoBehaviour {

	public GameObject controller;
	public Slider mainSlider;
	public Text senstext;
	public float oldValue;
	
	// Update is called once per frame

	void Awake () {
		senstext = GameObject.Find ("SensText").GetComponent<Text>();
		controller = GameObject.Find ("GameController");
	}

	void Update () {
		if (oldValue != mainSlider.value) {
			oldValue = mainSlider.value;
			controller.SendMessage ("Sensitive", mainSlider.value, SendMessageOptions.DontRequireReceiver);
			senstext.text = mainSlider.value + "";
		}
	}

	void SetValue (float volume){
		mainSlider.value = volume;
	}
}
