using UnityEngine;
using System.Collections;

public class AudioPlayAuto : MonoBehaviour {

	// Use this for initialization
	void Start () {
		GetComponent<AudioSource>().Play();
	}
}
