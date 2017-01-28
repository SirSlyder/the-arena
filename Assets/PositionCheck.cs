using UnityEngine;
using UnityEngine.Networking;
using System.Collections;

public class PositionCheck : NetworkBehaviour {

	// Update is called once per frame
	void Update () {
		if (!isLocalPlayer)
		{
			return;
		}
	}
}
