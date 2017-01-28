using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class ScriptPanel : MonoBehaviour {

	public RectTransform canvas;
	public int move = 0;
	public float canvasy = 0;

	void Awake(){
		canvas = GetComponent (typeof(RectTransform)) as RectTransform;
	}

	void Update(){
		canvas.offsetMax = new Vector2 (0, 0);
		canvas.offsetMin = new Vector2 (0, 0);
		if (move == -1) {
			if (canvasy > -1) {
				canvasy -= 0.05f;
			}
			canvas.anchorMin = new Vector2 (0.25f, canvasy);
			canvas.anchorMax = new Vector2 (1, 1 + canvasy);
			if (canvasy < -1) {
				canvasy = -1;
			}
		} else if(move == 1){
			if (canvasy > 0) {
				canvasy -= 0.05f;
			}
			canvas.anchorMin = new Vector2 (0.25f, canvasy);
			canvas.anchorMax = new Vector2 (1, 1 + canvasy);
			if (canvasy < 0) {
				canvasy = 0;
			}
		}
	}

	// Use this for initialization
	public void Select (bool selected) {
		if (selected) {
			move = 1;
			canvasy = 1;
		} else {
			move = -1;
		}
	}
}
