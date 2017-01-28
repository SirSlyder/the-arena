using UnityEngine;
using System.Collections;

public class NetworkSpawnScript : MonoBehaviour {

	public Vector3 pos;

	// Use this for initialization
	void Awake () {
		transform.position = pos;
	}
}
