using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class ResScript : MonoBehaviour {

	private Dropdown setting;
	private int qualitylevel;
	public Resolution[] res;

	void Awake(){
		res = Screen.resolutions;
		setting = GetComponent<Dropdown> ();
		foreach (Resolution i in res) {
			Debug.Log (i);
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
