using UnityEngine;
using System.Collections;

public class WoodPlankScript : MonoBehaviour {

	void Fall () {
		GetComponent<Animation>().Play();
	}
}
