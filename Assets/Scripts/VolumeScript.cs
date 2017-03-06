using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class VolumeScript : MonoBehaviour {

	public GameObject controller;
	public Slider mainSlider;
	public Text voltext;
	public float oldValue;

	// Update is called once per frame

	void Awake () {
		voltext = GameObject.Find ("VolText").GetComponent<Text>();
		controller = GameObject.Find ("GameController");
	}

	void Update () {
		if (oldValue != mainSlider.value) {
			oldValue = mainSlider.value;
			controller.SendMessage ("Volumed", mainSlider.value, SendMessageOptions.DontRequireReceiver);
			voltext.text = Mathf.RoundToInt (mainSlider.value * 100) + "%";
		}
	}

	void SetValue (float volume){
		mainSlider.value = volume;
	}
}
