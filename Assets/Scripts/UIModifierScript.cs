using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class UIModifierScript : MonoBehaviour {

	public Text desctext;
	public int modid;
	public GameSave controller;
	[TextArea]
	public string texted;

	void Awake(){
		controller = GameObject.Find ("GameController").GetComponent<GameSave> ();
	}

	void Update(){
		if (GetComponent<Toggle> ().isOn) {
			controller.modifiers [modid] = 1;
		} else {
			controller.modifiers [modid] = 0;
		}
	}

	void OnMouseOver(){
		desctext.text = texted;
	}

	void OnMouseExit(){
		desctext.text = "";
	}
}
