using UnityEngine;
using System.Collections;

public class HostAlertScriptTrigger : MonoBehaviour {

	public Transform[] zombies;

	// Use this for initialization
	void OnTriggerEnter (Collider other) {
		if (other.transform.tag == "Player") {
			foreach (Transform i in zombies) {
				i.gameObject.SetActive (true);
				i.gameObject.SendMessage ("Fast", SendMessageOptions.DontRequireReceiver);
			}
			Destroy (gameObject);
		}
	}
}
