using UnityEngine;
using System.Collections;

public class PrologueElevatorScript : MonoBehaviour {

	public Transform player;

	void EndPrologue(){
		GetComponent<Animation> ().Play ();
		player.SendMessage ("EndPrologue", SendMessageOptions.DontRequireReceiver);
	}
}
