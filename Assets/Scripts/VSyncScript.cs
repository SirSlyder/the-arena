using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class VSyncScript : MonoBehaviour {

	private Dropdown setting;
	private int qualitylevel;

	// Use this for initialization
	void Awake () {
		qualitylevel = QualitySettings.vSyncCount;
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
			QualitySettings.vSyncCount = 0;
		} else if (setting.value == 1) {
			QualitySettings.vSyncCount = 1;
		} else if (setting.value == 2) {
			QualitySettings.vSyncCount = 2;
		} else {
			QualitySettings.vSyncCount = 3;
		}
	}
}
