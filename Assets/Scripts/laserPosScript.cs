using UnityEngine;
using System.Collections;

public class laserPosScript : MonoBehaviour {

	public Transform end;
	public float col = 1;

	void Update(){
		col -= Time.deltaTime;
		transform.localScale = new Vector3 (col, col, 1);
		if (col <= 0) {
			Destroy (gameObject);
		}
	}

	void Point(Vector3 pos){
		end.position = pos;
	}
}
