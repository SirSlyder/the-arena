using UnityEngine;
using System.Collections;

public class animTest : MonoBehaviour {

	public string animname;
	private Animation anim;


	void Awake () {
		anim = gameObject.GetComponent (typeof(Animation)) as Animation;
	}

	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown (KeyCode.Space)) {
			anim.Play (animname);
		}
	}
}
