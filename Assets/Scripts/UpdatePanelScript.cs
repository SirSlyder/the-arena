using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class UpdatePanelScript : MonoBehaviour {

	public int panel;
	public List<GameObject> panels;
	
	// Update is called once per frame
	public void Change (int change) {
		panel += change;
		if (panel < 0) {
			panel = panels.Count - 1;
		} else if (panel > panels.Count - 1) {
			panel = 0;
		}
		for(int i = 0; i < panels.Count; i++){
			panels[i].gameObject.active = false;
		}
		panels [panel].SetActive (true);
	}

	public void Set (int change)
	{
		panel = change;
		for(int i = 0; i < panels.Count; i++){
			panels[i].gameObject.active = false;
		}
		panels [panel].SetActive (true);
	}
}
