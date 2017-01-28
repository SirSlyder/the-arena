using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class AntiAliasingMenu : MonoBehaviour {

	private Dropdown setting;

	// Use this for initialization
	void Awake () {
		setting = GetComponent<Dropdown> ();
		if (QualitySettings.antiAliasing == 0) {
			setting.value = 0;
		} else if (QualitySettings.antiAliasing == 2) {
			setting.value = 1;
		} else if (QualitySettings.antiAliasing == 4) {
			setting.value = 2;
		} else {
			setting.value = 3;
		}
	}
	
	// Update is called once per frame
	void Update () {
		if (setting.value == 0) {
			QualitySettings.antiAliasing = 0;
		} else if (setting.value == 1) {
			QualitySettings.antiAliasing = 2;
		} else if (setting.value == 2) {
			QualitySettings.antiAliasing = 4;
		} else {
			QualitySettings.antiAliasing = 8;
		}
	}
}
