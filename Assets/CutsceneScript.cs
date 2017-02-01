using UnityEngine;
using System.Collections;

public class CutsceneScript : MonoBehaviour {

	// Use this for initialization
	void Start () {
		GetComponent<Animation> ().Play ();
	}
}
