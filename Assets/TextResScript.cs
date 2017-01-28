using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class TextResScript : MonoBehaviour {

	private Dropdown setting;
	private int qualitylevel;

	// Use this for initialization
	void Awake () {
		qualitylevel = QualitySettings.masterTextureLimit;
		setting = GetComponent<Dropdown> ();
		if (qualitylevel == 0) {
			setting.value = 0;
		} else if (qualitylevel == 1) {
			setting.value = 1;
		} else if (qualitylevel == 2) {
			setting.value = 2;
		} else if(qualitylevel == 3) {
			setting.value = 3;
		}
	}

	// Update is called once per frame
	void Update () {
		if (setting.value == 0) {
			QualitySettings.masterTextureLimit = 0;
		} else if (setting.value == 1) {
			QualitySettings.masterTextureLimit = 1;
		} else if (setting.value == 2) {
			QualitySettings.masterTextureLimit = 2;
		} else {
			QualitySettings.masterTextureLimit = 3;
		}
	}
}