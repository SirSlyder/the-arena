using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class QualityPresetMenu : MonoBehaviour {

	private Dropdown setting;
	private int qualitylevel;

	// Use this for initialization
	void Awake () {
		qualitylevel = QualitySettings.GetQualityLevel ();
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
			QualitySettings.SetQualityLevel (0);
		} else if (setting.value == 1) {
			QualitySettings.SetQualityLevel (1);
		} else if (setting.value == 2) {
			QualitySettings.SetQualityLevel (2);
		} else {
			QualitySettings.SetQualityLevel (3);
		}
	}
}
