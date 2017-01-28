using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class VolumeScript : MonoBehaviour {

	public GameObject controller;
	public Slider mainSlider;
	public Text voltext;

	// Update is called once per frame

	void Awake () {
		voltext = GameObject.Find ("VolText").GetComponent<Text>();
		controller = GameObject.Find ("GameController");
	}

	void Update () {
		controller.SendMessage ("Volumed", mainSlider.value, SendMessageOptions.DontRequireReceiver);
		voltext.text = Mathf.RoundToInt(mainSlider.value * 100) + "%";
	}

	void SetValue (float volume){
		mainSlider.value = volume;
	}
}
