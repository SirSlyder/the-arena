using UnityEngine;
using System.Collections;

public class DialoguePlayer : MonoBehaviour {

	public void PlayAudio(){
		GetComponent<AudioSource> ().Play ();
		Debug.Log ("Dialoguing");
	}
}
