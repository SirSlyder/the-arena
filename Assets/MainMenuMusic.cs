using UnityEngine;
using System.Collections;

public class MainMenuMusic : MonoBehaviour {

	public AudioClip song;
	private AudioSource source;


	// Update is called once per frame
	void Update () {
		if (source == null) {
			source = GetComponent (typeof(AudioSource)) as AudioSource;
		}
		if (!source.isPlaying) {
			source.clip = song;
			source.Play ();
		}
	}
}
