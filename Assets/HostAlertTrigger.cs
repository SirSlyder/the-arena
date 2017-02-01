using UnityEngine;
using System.Collections;

public class HostAlertTrigger : MonoBehaviour {

	public Transform effector;
	public string effect;

	void OnTriggerEnter(Collider other){
		if (other.transform.tag == "Player") {
			effector.SendMessage (effect, SendMessageOptions.DontRequireReceiver);
			Destroy (gameObject);
		}
	}
}
