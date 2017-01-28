using UnityEngine;
using System.Collections;

public class BloodSpurtScript : MonoBehaviour {

	public Transform child;

	// Use this for initialization
	void Awake () {
		child = transform.Find ("Flare").transform;
	}
	
	// Update is called once per frame
	void OnDestroy () {
		child.gameObject.active = true;
		child.parent = null;
	}
}
