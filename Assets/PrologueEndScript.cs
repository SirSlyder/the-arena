using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class PrologueEndScript : MonoBehaviour {

	public Image fade;
	private bool fading = false;
	private float faded = 0f;

	void Update(){
		if (fading) {
			faded += Time.deltaTime / 2;
			fade.color = new Vector4(0f, 0f, 0f, faded);
		}
		if (fade.color.a >= 1) {
			Application.LoadLevel (2);
		}
	}

	void EndPrologue(){
		fading = true;
	}
}
