using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class protipScript : MonoBehaviour {

	public string[] tips;
	private float tiptime = 0f;

	// Update is called once per frame
	void Update () {
		tiptime += Time.deltaTime;
		if (tiptime > 4) {
			int tipchoose = Random.Range (0, tips.Length);
			GetComponent<Text> ().text = tips [tipchoose];
			tiptime = 0;
		}
	}
}
